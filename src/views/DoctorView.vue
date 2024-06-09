<template>
<VLayout>
    <div v-if="doctorStore.isLoading">loading</div>
    <!--    todo => should fix scrollpy-->
    <div
        v-else
        class="doctor-details container my-8 mt-md-4"
        data-bs-offset="0"
        data-bs-smooth-scroll="true"
        data-bs-spy="scroll"
        data-bs-target="#tabs-list"
        tabindex="0"
    >
        <div class="row g-5">

            <div class="col-12 col-lg-8 px-0 p-md-3">
                <DoctorProfile :doctor="doctorStore.doctor"/>

                <div class="d-block d-lg-none sticky-top">
                    <DoctorSectionTabs/>
                </div>

                <div>

                    <div id="appointment" class="d-block d-lg-none mt-md-4 mt-0 doctor-details-section">
                        <DoctorAppointment/>
                    </div>

                    <DoctorDescription id="description" :doctor="doctorStore.doctor" class="doctor-details-section"/>

                    <DoctorContactInfo id="contact" :doctor="doctorStore.doctor" class="doctor-details-section"/>

                    <DoctorComments id="comments" :doctor="doctorStore.doctor" class="doctor-details-section"/>

                    <DoctorRules id="rules" :doctor="doctorStore.doctor" class="doctor-details-section"/>
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
import DoctorContactInfo from "@/components/Doctor/DoctorContactInfo.vue";
import DoctorComments from "@/components/Doctor/DoctorComments.vue";
import DoctorRules from "@/components/Doctor/DoctorRules.vue";
import DoctorSectionTabs from "@/components/Doctor/DoctorSectionTabs.vue";

// store
import {useDoctor} from '@/stores/DoctorStore';


export default {
    components: {
        DoctorSectionTabs,
        DoctorRules,
        DoctorComments,
        DoctorContactInfo,
        DoctorDescription,
        DoctorProfile,
        VLayout,
        DoctorAppointment
    },

    setup() {
        const doctorStore = useDoctor();

        doctorStore.fetch()

        return {
            doctorStore,
        };
    }
};
</script>
