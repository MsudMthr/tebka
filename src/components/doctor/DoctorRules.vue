<template>
<div class="doctor-details__rules card border-0 d-flex p-4 mt-4">
    <h3 class="doctor-details__rules-title fw-medium mb-4">
        {{ $t('Rules') }}
        {{ $t('Turn ratings') }}
        {{ doctor.firstname }} {{ doctor.lastname }}
    </h3>

    <div :class="[ `doctor-details__rules-content--text-${viewMore ? 'open' : 'close'}`]">
        <p v-for="rule of doctor.rules" v-html="rule.rule" class="mt-2 body-2 body-1-md" :key="rule.id"></p>
    </div>

    <div v-if="!viewMore" class="doctor-details__rules-content--text-overlay card border-0"></div>



    <button
        class="doctor-details__rules-content-button d-flex align-items-center btn text-primary fs-3 fw-medium"
        type="button"
        @click="viewMore = !viewMore"
    >
        {{ viewMore ? $t('View less') : $t('View the rules') }}
        <span class="d-none d-md-block">
                <i v-if="!viewMore" class="bi-chevron-down ms-2"></i>
                <i v-else class="bi-chevron-up ms-2"></i>
            </span>
        <span class="d-block d-md-none">
                <i v-if="!viewMore" class="bi-chevron-right ms-2"></i>
                <i v-else class="bi-chevron-left ms-2"></i>
            </span>
    </button>

</div>
</template>

<script>
import {ref} from "vue";

export default {
    name: "DoctorRules",

    props: {
        doctor: {
            required: true
        }
    },

    setup() {
        const viewMore = ref(false);

        return {
            viewMore
        }
    }
}
</script>

<style scoped>

</style>
