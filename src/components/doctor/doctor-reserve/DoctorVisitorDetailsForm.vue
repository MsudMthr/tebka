<template>
<div class="pt-6">
    <p class="body-1-md body-2 fw-medium mb-4">{{$t('Reference details')}}</p>

    <!-- Bind each VInput and handle updates with a single method -->
    <div class="mb-4">
        <VInput
            :modelValue="formData.national_code"
            :rules="[validator.required()]"
            @update:modelValue="value => updateFormData('national_code', value)"
            :placeholder="$t('national_code/passport')"
        />
    </div>
    <div class="mb-4">
        <VInput
            :modelValue="formData.full_name"
            :rules="[validator.required()]"
            @update:modelValue="value => updateFormData('full_name', value)"
            :placeholder="$t('first name and last name')"
        />
    </div>

    <div class="mb-4">
        <VInput
            :modelValue="formData.phone_number"
            :rules="[validator.required()]"
            @update:modelValue="value => updateFormData('phone_number', value)"
            :placeholder="$t('mobile')"
        />
    </div>
</div>
</template>

<script>
import VInput from "@/components/form/VInput.vue";
import validator from "@/utils/validator";

export default {
    name: "DoctorVisitorDetailsForm",
    computed: {
        validator() {
            return validator
        }
    },
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
