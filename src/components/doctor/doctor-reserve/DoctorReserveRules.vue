<template>
    <div class="doctor-visit-modal__rules p-4 bg-white ">
        <p class="body-2 body-1-md fw-medium mb-4">
            {{$t('Rules')}} {{$t('Turn ratings')}}
        </p>
        <p class="doctor-visit-modal__rules-client-message body-2 body-1-md">
            {{$t('Dear client, the announced time is only the time of your presence in the office, and due to other visits, your visit may be delayed')}}
        </p>
        <ol style="list-style: disc">

            <li v-for="rule of doctorStore.doctor.rules" :key="rule.id" class="body-2 body-1-md mt-4">{{rule.rule}}</li>
        </ol>
    </div>

    <div class="doctor-visit-modal__points p-4 bg-white mt-4">
        <p class="body-2 body-1-md fw-medium">
            {{$t('important points')}}
        </p>
        <ol style="list-style: disc">
            <li class="body-2 body-1-md mt-4">{{$t('Please do not use vpn when paying')}}</li>
            <li class="body-2 body-1-md mt-4">{{$t('After paying in the bank, do not close the page and do not disconnect your internet until the moment you return to the site, so that your payment does not face problems')}}</li>
        </ol>
    </div>

    <div class="doctor-visit-modal__points p-4 bg-white mt-4">
        <VCheckbox @update:modelValue="update" :model-value="formData.accept">
            <span class="body-2 body-1-md" v-html="$t('I read and accept all the {text} of the site', {text: `<span class='text-primary'>${$t('Terms and Conditions')}</span>`})" />
        </VCheckbox>
    </div>
</template>

<script>
import {defineComponent} from 'vue'
import VCheckbox from "@/components/form/VCheckBox.vue";
import {useDoctorStore} from "@/stores/DoctorStore";

export default defineComponent({
    name: "DoctorReserveRules",

    components: {VCheckbox},

    props: {
        formData: {
            type: Object,
            required: true
        }
    },
    emits:['update:formData'],

    setup(props, {emit}) {
        const doctorStore = useDoctorStore()

        function update(value){
            emit('update:formData', { ...props.formData, accept: value });

        }
        return {
            update,
            doctorStore
        }
    }
})
</script>
