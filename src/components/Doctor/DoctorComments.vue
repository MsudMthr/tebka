<template>
<div class="doctor-details__comments mt-4 card border-0 p-4">
    <p class="doctor-details__comments-title mb-4 fw-medium">
        {{ $t('Comments') }}
    </p>

    <div class="d-flex align-items-center justify-content-between mb-4">
        <p class="d-block d-md-none fs-2" v-html="$t('{count} people have shared their experience', {count: totalComments})"></p>
        <p class="d-none d-md-block fs-3"
           v-html="$t('{count} people have shared their experience of visiting Dr. {name}', {count: totalComments, name: doctor.name})"></p>
        <button class="doctor-details__comments-add-comment btn btn-outline-primary fw-bold">{{ $t('Register a comment') }}</button>
    </div>

    <div class="row g-0 col-12 col-lg-8 justify-content-between align-items-center mb-4">
        <p class="fs-2 col-3">{{ $t('Doctor') }}</p>
        <div class="doctor-details__comments-progress progress col-6" style="height: 3px">
            <div :aria-valuenow="doctor.rates?.doctor" :style="`width: ${getWidthByRate(doctor.rates?.doctor)}`" aria-valuemax="5"
                 aria-valuemin="0" class="progress-bar" role="progressbar"></div>
        </div>
        <p class="fs-2 col-3 text-end fw-medium">{{ doctor.rates?.doctor }} <span class="text-gray fw-normal">{{ $t('From') }} 5</span></p>
    </div>

    <div class="row g-0 col-12 col-lg-8 justify-content-between align-items-center mb-4">
        <p class="fs-2 col-3">{{ $t('Secretary') }}</p>
        <div class="doctor-details__comments-progress progress col-6" style="height: 3px">
            <div :aria-valuenow="doctor.rates?.doctor" :style="`width: ${getWidthByRate(doctor.rates?.secretary)}`" aria-valuemax="5"
                 aria-valuemin="0" class="progress-bar" role="progressbar"></div>
        </div>
        <p class="fs-2 col-3 text-end fw-medium">{{ doctor.rates?.secretary }} <span class="text-gray fw-normal">{{ $t('From') }} 5</span>
        </p>
    </div>

    <div class="row g-0 col-12 col-lg-8 justify-content-between align-items-center mb-4">
        <p class="fs-2 col-3">{{ $t('How to accept') }}</p>
        <div class="doctor-details__comments-progress progress col-6" style="height: 3px">
            <div :aria-valuenow="doctor.rates?.doctor" :style="`width: ${getWidthByRate(doctor.rates?.reception)}`" aria-valuemax="5"
                 aria-valuemin="0" class="progress-bar" role="progressbar"></div>
        </div>
        <p class="fs-2 col-3 text-end fw-medium">{{ doctor.rates?.reception }} <span class="text-gray fw-normal">{{ $t('From') }} 5</span>
        </p>
    </div>


    <div v-for="(comment, index) of showComments" :key="index">
        <div class="doctor-details__comments-divider"></div>

        <div class="d-flex justify-content-between align-items-center">
            <p class="doctor-details__comments-author">{{ comment.name }}</p>
            <div class="doctor-details__comments-rate align-self-start d-flex align-items-center">
                <p class="me-1">{{ comment.rate }}</p>
                <i class="bi-star-fill text-warning"></i>
            </div>
        </div>
        <div class="doctor-details__comments-date pt-1 ">
            {{ getCommentDate(comment.created_at) }}
        </div>
        <div class="doctor-details__comments-content mt-2">
            {{ comment.comment }}
        </div>

    </div>


    <button
        class="doctor-details__description-content-button d-flex align-items-center btn text-primary fs-3 fw-medium"
        type="button"
        @click="viewMore = !viewMore"
    >
        {{ viewMore ? $t('View less') : $t('View all comments') }}
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
import {computed, defineComponent, ref} from 'vue'
import {useDoctorComments} from "@/controller/DoctorController";
import DateTime from "@/utils/date-time";

export default defineComponent({
    name: "DoctorComments",

    props: {
        doctor: {
            required: true
        }
    },

    setup() {

        const {comments, totalComments} = useDoctorComments()

        const viewMore = ref(false)

        function getWidthByRate(rate, max_rate = 5, min_rate = 0) {
            let clamped_rate = Math.max(min_rate, Math.min(rate, max_rate));
            let percentage = (clamped_rate - min_rate) / (max_rate - min_rate) * 100;
            return `${percentage.toFixed(2)}%`;
        }

        const showComments = computed(() => {
            const temp = JSON.parse(JSON.stringify(comments.value));
            if (viewMore.value) {
                return temp
            } else {
                return temp.splice(0, 4)
            }
        })


        function getCommentDate(date) {
            return DateTime.make().gregorian().parse('dd-MM-yyyy', date).jalali().format('dd MMMM yyyy');
        }

        return {
            totalComments,
            comments,
            viewMore,
            showComments,

            getWidthByRate,
            getCommentDate
        }
    }

})
</script>
