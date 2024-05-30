<template>
    <div class="doctor-details__profile d-flex align-items-center bg-white rounded p-4">
        <img :alt="doctor.name" :src="doctor.image" class="doctor-details__profile-image">

        <div class="ms-5 d-flex flex-column gap-3 flex-fill">
            <div class="d-flex justify-content-between">
                <h1 class="doctor-details__profile-name mb-0">{{ doctor.name }}</h1>
                <div class="align-self-start d-flex gap-1">
                    <p class="fs-3">{{doctor.rate}}</p>
                    <i class="bi-star-fill text-warning"></i>
                </div>
            </div>
            <h4 class="fs-3 text-gray mb-0">{{ doctor.expertise }}</h4>
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