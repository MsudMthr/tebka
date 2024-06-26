<template>
<VForm ref="form">
    <VModal
        v-model:show="doctorStore.showReserveModal"
        id="doctor-visit-modal"
        class="doctor-visit-modal"
        @hide="step = 1"
    >
        <template #title>
            <div class="fw-medium text-dark mb-1 mb-md-2">{{ $t('time to visit') }} {{ $t('doctor') }} {{ doctorStore.doctor.name }}</div>
            <div class="fw-medium text-gray">{{ modalSubTitle }}</div>
        </template>

        <template #body>
            <component
                :is="appointmentComponent"
                v-model:dayAppointment="dayAppointment"
                v-model:timeAppointment="timeAppointment"
                v-model:formData="formData"
            />
        </template>

        <template #footer>

            <div
                :class="[`justify-content-${ step === 3 ? 'between' : 'end'}`, 'd-flex flex-column flex-md-row align-items-center align-self-end align-self-auto w-100 mt-0 mt-md-6 pt-0']">
                <div v-if="step === 3" class="d-flex justify-content-md-start justify-content-between w-100 mb-2 mb-md-0">
                    <span class="body-1-md body-2 text-gray d-none d-md-block me-3">{{$t('The amount payable')}}</span>
                    <span class="body-1-md body-2 text-black d-block d-md-none me-3">{{$t('The amount payable')}}</span>
                    <div>
                        <span class="fw-medium subtitle-3-md body-1 me-1">{{ priceFormatter(doctorStore.doctor.price) }}</span>
                        <span class="body-2">{{$t('Toman')}}</span>
                    </div>
                </div>
                <button
                    type="button"
                    @click="submit"
                    class="btn btn-primary py-2 col-12 col-md-5 body-1-md"
                    :disabled="!dayAppointment || !timeAppointment || (step === 3 && !formData.accept)"
                >
                    {{ $t('Confirm and continue') }}
                </button>
            </div>
        </template>
    </VModal>
</VForm>
</template>

<script>
import VModal from "@/components/VModal.vue";
import {useDoctorStore} from "@/stores/DoctorStore";
import DoctorReservePickDate from "@/components/doctor/doctor-reserve/DoctorReservePickDate.vue";
import DoctorVisitorDetailsForm from "@/components/doctor/doctor-reserve/DoctorVisitorDetailsForm.vue";
import DoctorReserveRules from "@/components/doctor/doctor-reserve/DoctorReserveRules.vue";
import {computed, ref, watch} from "vue";
import DateTime from "@/utils/date-time";
import VForm from "@/components/form/VForm.vue";
import {useDoctorAppointment} from "@/controller/DoctorController";
import {priceFormatter} from "@/utils";

export default {
    name: "DoctorReserveModal",

    components: {VForm, DoctorReservePickDate, DoctorReserveRules, DoctorVisitorDetailsForm, VModal},

    emits: ['update:modelValue'],

    setup() {
        const doctorStore = useDoctorStore()
        const dayAppointment = ref(DateTime.today().gregorian().format('yyyy-MM-dd'))
        const timeAppointment = ref(undefined)
        const {formData} = useDoctorAppointment()

        const step = ref(3);
        const appointmentComponent = computed(() => {
            const components = {
                1: 'DoctorReservePickDate',
                2: 'DoctorVisitorDetailsForm',
                3: 'DoctorReserveRules',
            }

            return components[step.value]
        })

        const submitButtonType = ref('button')

        // eslint-disable-next-line vue/return-in-computed-property
        const modalSubTitle = computed(() => {
            switch (step.value) {
                case 1:
                    return doctorStore.doctor.first_expertise;
                case 2:
                case 3:
                    return DateTime.make().gregorian().parse('yyyy-MM-dd', dayAppointment.value).jalali().format('dddd dd MMMM') + ' - ' + timeAppointment.value
            }
        })

        watch(() => dayAppointment.value, () => {
            timeAppointment.value = undefined
        })
        const form = ref()

        function submit() {
            switch (step.value) {
                case 1:
                    step.value += 1;
                    break
                case 2:
                    const isValid = window.formValidate();
                    if (isValid) {
                        step.value += 1;
                    }
                    break
                case 3:
                    console.log('redirect to dargah')
                    break
            }
        }

        watch(() => step.value, (value) => {
            console.log(submitButtonType, value)
            if (value === 2) {
                setTimeout(() => {
                    submitButtonType.value = 'submit'
                }, 100)
            }
        })
        return {
            doctorStore,
            submit,

            appointmentComponent,
            form,
            submitButtonType,

            step,
            modalSubTitle,

            formData,
            dayAppointment,
            timeAppointment,
            priceFormatter

        }
    }

}
</script>
