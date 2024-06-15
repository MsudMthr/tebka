<template>
<div class="pt-6">
    <p class="body-1-md body-2 fw-medium mb-2">{{$t('Reference details')}}</p>

    <!-- Bind each VInput and handle updates with a single method -->
    <VInput
        :modelValue="formData.national_code"
        @update:modelValue="value => updateFormData('national_code', value)"
    />
    <VInput
        :modelValue="formData.full_name"
        @update:modelValue="value => updateFormData('full_name', value)"
    />
    <VInput
        :modelValue="formData.phone_number"
        @update:modelValue="value => updateFormData('phone_number', value)"
    />
</div>
</template>

<script>
import VInput from "@/components/form/VInput.vue";

export default {
    name: "DoctorVisitorDetailsForm",
    components: { VInput },

    props: {
        formData: {
            type: Object,
            required: true
        }
    },

    emits:['update:formData'],

    setup(props, {emit}) {
       function updateFormData(key, value) {
            emit('update:formData', { ...props.formData, [key]: value });
        }

        return {
           updateFormData
        }
    },

}
</script>

<style scoped>

</style>
