<template>
    <div class="doctor-details__profile d-flex align-items-center bg-white rounded p-4">
        <img :alt="doctor.name" :src="doctor.image" class="doctor-details__profile-image">

        <div class="ms-4 d-flex flex-column flex-fill">
            <div class="d-flex justify-content-between mb-1 mb-lg-4">
                <h1 class="doctor-details__profile-name mb-0 me-4">{{ doctor.name }}</h1>
                <div class="align-self-start d-flex">
                    <p class="fs-3 me-1">{{doctor.rate}}</p>
                    <i class="bi-star-fill text-warning"></i>
                </div>
            </div>
            <h4 class="doctor-details__profile-expertise text-gray mb-0">{{ doctor.expertise }}</h4>
        </div>

    </div>
</template>

<script>
    import useDoctor from '@/controller/DoctorController';

    export default {
        name: "DoctorProfile",

        setup() {
            const { doctor } = useDoctor();

            return {
                doctor
            };
        }
    };
</script>