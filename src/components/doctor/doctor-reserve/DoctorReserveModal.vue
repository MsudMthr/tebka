<template>
<VForm>
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
            <div class="d-flex align-self-end justify-content-end w-100 mt-0 mt-md-6 pt-0">
                <button
                    type="button"
                    @click="submit"
                    class="btn btn-primary py-2 col-12 col-md-5 body-1-md"
                    :disabled="!dayAppointment || !timeAppointment"
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

        // eslint-disable-next-line vue/return-in-computed-property
        const modalSubTitle = computed(() => {
            switch (step.value) {
                case 1:
                    return doctorStore.doctor.expertise;
                case 2:
                case 3:
                    return DateTime.make().gregorian().parse('yyyy-MM-dd', dayAppointment.value).jalali().format('dddd dd MMMM') + ' - ' + timeAppointment.value
            }
        })

        watch(() => dayAppointment.value, () => {
            timeAppointment.value = undefined
        })

        function submit() {
            if (step.value === 2 && (!formData.value.full_name || !formData.value.national_code || !formData.value.phone_number)) return
            step.value += 1;
        }

        return {
            doctorStore,
            submit,

            appointmentComponent,

            step,
            modalSubTitle,

            formData,
            dayAppointment,
            timeAppointment

        }
    }

}
</script>
