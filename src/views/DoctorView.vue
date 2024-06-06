<template>
<VLayout>
    <div class="doctor-details container my-8 mt-md-4">
        <div class="row g-5">

            <div class="col-12 col-lg-8 px-0 p-md-3">
                <DoctorProfile :doctor="doctor"/>

                <div class="d-block d-lg-none sticky-top">
                    <DoctorSectionTabs/>
                </div>

                <div data-bs-offset="0" data-bs-smooth-scroll="true" data-bs-spy="scroll" data-bs-target="#tabs-list" tabindex="0">

                    <div id="appointment" class="d-block d-lg-none mt-md-4 mt-0">
                        <DoctorAppointment/>
                    </div>

                    <DoctorDescription id="description" :doctor="doctor"/>

                    <DoctorContactInfo id="contact" :doctor="doctor"/>

                    <DoctorComments id="comments" :doctor="doctor"/>

                    <DoctorRules id="rules" :doctor="doctor"/>
                </div>
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
import DoctorComments from "@/components/Doctor/DoctorComments.vue";
import DoctorRules from "@/components/Doctor/DoctorRules.vue";
import DoctorSectionTabs from "@/components/Doctor/DoctorSectionTabs.vue";

export default {
    components: {
        DoctorSectionTabs,
        DoctorRules, DoctorComments, DoctorContactInfo, DoctorDescription, DoctorProfile, VLayout, DoctorAppointment
    },

    setup() {
        const {doctor} = useDoctor();

        return {
            doctor
        };
    }
};
</script>
