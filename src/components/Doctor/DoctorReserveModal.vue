<template>
<VModal id="doctor-visit-modal" :show="modelValue" @hide="$emit('update:modelValue', false)">
    test
</VModal>
</template>

<script>
import VModal from "@/components/VModal.vue";

export default {
    name: "DoctorReserveModal",

    components: {VModal},

    emits: ['update:modelValue'],

    props: {
        modelValue: {
            default: false,
            required: true
        }
    },

    setup() {


    }

}
</script>
