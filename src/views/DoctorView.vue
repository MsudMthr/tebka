<template>
<VLayout>
    <div class="doctor-details container my-8 mt-md-4">
        <div class="row g-5">

            <div class="col-12 col-lg-8">
                <DoctorProfile :doctor="doctor"/>

                <div class="d-block d-lg-none mt-4">
                    <DoctorAppointment/>
                </div>

                <DoctorDescription :doctor="doctor"/>

                <DoctorContactInfo :doctor="doctor"/>
            </div>

            <div class="col-12 col-md-5 col-lg-4 d-none d-lg-block">
                <DoctorAppointment/>
            </div>
        </div>
    </div>
</VLayout>
</template>

<script>
// Components
import DoctorAppointment from '@/components/Doctor/DoctorAppointment.vue';
import VLayout from '@/components/layout/VLayout.vue';
import DoctorProfile from '@/components/Doctor/DoctorProfile.vue';
import DoctorDescription from '@/components/Doctor/DoctorDescription.vue';

// Controller
import useDoctor from '@/controller/DoctorController';
import DoctorContactInfo from "@/components/Doctor/DoctorContactInfo.vue";

export default {
    components: {DoctorContactInfo, DoctorDescription, DoctorProfile, VLayout, DoctorAppointment},

    setup() {
        const {doctor} = useDoctor();

        return {
            doctor
        };
    }
};
</script>
