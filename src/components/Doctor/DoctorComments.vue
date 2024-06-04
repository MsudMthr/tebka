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
            <div class="progress-bar" role="progressbar" :style="`width: ${getWidthByRate(doctor.rates.doctor)}`"
                 :aria-valuenow="doctor.rates.doctor" aria-valuemin="0" aria-valuemax="5"></div>
        </div>
        <p class="fs-2 col-3 text-end fw-medium">{{ doctor.rates.doctor }} <span class="text-gray fw-normal">{{ $t('From') }} 5</span></p>
    </div>

    <div class="row g-0 col-12 col-lg-8 justify-content-between align-items-center mb-4">
        <p class="fs-2 col-3">{{ $t('Secretary') }}</p>
        <div class="doctor-details__comments-progress progress col-6" style="height: 3px">
            <div class="progress-bar" role="progressbar" :style="`width: ${getWidthByRate(doctor.rates.secretary)}`"
                 :aria-valuenow="doctor.rates.doctor" aria-valuemin="0" aria-valuemax="5"></div>
        </div>
        <p class="fs-2 col-3 text-end fw-medium">{{ doctor.rates.secretary }} <span class="text-gray fw-normal">{{ $t('From') }} 5</span>
        </p>
    </div>

    <div class="row g-0 col-12 col-lg-8 justify-content-between align-items-center mb-4">
        <p class="fs-2 col-3">{{ $t('How to accept') }}</p>
        <div class="doctor-details__comments-progress progress col-6" style="height: 3px">
            <div class="progress-bar" role="progressbar" :style="`width: ${getWidthByRate(doctor.rates.reception)}`"
                 :aria-valuenow="doctor.rates.doctor" aria-valuemin="0" aria-valuemax="5"></div>
        </div>
        <p class="fs-2 col-3 text-end fw-medium">{{ doctor.rates.reception }} <span class="text-gray fw-normal">{{ $t('From') }} 5</span>
        </p>
    </div>


    <div v-for="(comment, index) of comments" :key="index">
        <div class="doctor-details__comments-divider"></div>

        <div class="d-flex justify-content-between align-items-center">
            <p>{{comment.name}}</p>
            <div class="align-self-start d-flex">
                <p class="fs-3 me-1">{{ comment.rate }}</p>
                <i class="bi-star-fill text-warning"></i>
            </div>
        </div>
        <div>
            {{comment.created_at}}
        </div>
        <div>
            {{comment.comment}}
        </div>
    </div>

</div>
</template>

<script>
import {defineComponent} from 'vue'
import useDoctor from "@/controller/DoctorController";

export default defineComponent({
    name: "DoctorComments",

    props: {
        doctor: {
            required: true
        }
    },

    setup(props) {

        const {comments, totalComments} = useDoctor()
        console.log(props)

        function getWidthByRate(rate, max_rate = 5, min_rate = 0) {
            let clamped_rate = Math.max(min_rate, Math.min(rate, max_rate));
            let percentage = (clamped_rate - min_rate) / (max_rate - min_rate) * 100;
            return `${percentage.toFixed(2)}%`;
        }

        return {
            totalComments,
            comments,

            getWidthByRate
        }
    }

})
</script>

<style scoped>

</style>
