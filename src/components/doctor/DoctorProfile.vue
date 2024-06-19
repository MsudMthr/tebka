<template>
<div class="doctor-details__profile card border-0 d-flex flex-row align-items-center p-4">
    <img :alt="doctor.firstname + doctor.lastname" :src="doctor.image" class="doctor-details__profile-image">
<!--    <img :alt="doctor.firstname + doctor.lastname" :src="doctor.profile_picture" class="doctor-details__profile-image">-->

    <div class="ms-4 d-flex flex-column flex-fill">
        <div class="d-flex justify-content-between mb-1 mb-lg-4">
            <h1 class="doctor-details__profile-name mb-0 me-4">{{ doctor.firstname }} {{ doctor.lastname }}</h1>
            <div class="align-self-start d-flex">
<!--                todo => add rate in api-->
                <p class="fs-3 me-1">{{ doctor.rate }}</p>
                <i class="bi-star-fill text-warning"></i>
            </div>
        </div>
        <h4 class="doctor-details__profile-expertise text-gray mb-0">{{ doctor.first_expertise }}</h4>
    </div>

</div>
</template>

<script>

export default {
    name: "DoctorProfile",

    props: {
        doctor: {
            required: true,
        }
    },
};
</script>
