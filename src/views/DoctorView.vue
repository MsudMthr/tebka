<template>
    <VLayout>
        <div class="doctor-details container mt-2 mt-md-4">
            <div class="row g-5">
                <div class="col-12 col-lg-8">
                    <DoctorProfile />
                    <div class="d-block d-lg-none mt-4">
                        <DoctorAppointment />
                    </div>
                </div>
                <div class="col-12 col-md-5 col-lg-4 d-none d-lg-block">
                    <DoctorAppointment />
                </div>
            </div>
        </div>
    </VLayout>
</template>

<script>

import DoctorAppointment from '@/components/Doctor/DoctorAppointment.vue';
import VLayout from '@/components/layout/VLayout.vue';
import DoctorProfile from '@/components/Doctor/DoctorProfile.vue';

export default {
    components: { DoctorProfile, VLayout, DoctorAppointment },
    setup() {
        return {

        }
    }
}
</script>
