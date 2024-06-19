<template>
<div class="doctor-details__description card border-0 d-flex p-4 mt-4">
    <h1 class="doctor-details__description-title mb-0">{{ $t('Introduction') }} {{ doctor.firstname }} {{ doctor.lastname }}</h1>

    <div class="doctor-details__description-content d-flex flex-column mt-5">
        <div :class="[ `doctor-details__description-content--text-${viewMore ? 'open' : 'close'}`]" v-html="doctor.about">

        </div>

        <div v-if="!viewMore" class="doctor-details__description-content--text-overlay card border-0"></div>

        <button
            class="doctor-details__description-content-button d-flex align-items-center btn text-primary fs-3 fw-medium"
            type="button"
            @click="viewMore = !viewMore"
        >
            {{ viewMore ? $t('View less') : $t('View more') }}
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
</div>
</template>


<script>
import {ref} from "vue";

export default {
    name: "DoctorDescription",

    props: {
        doctor: {
            required: true,
        }
    },

    setup() {
        const viewMore = ref(false);

        return {
            viewMore
        }
    }
};
</script>
