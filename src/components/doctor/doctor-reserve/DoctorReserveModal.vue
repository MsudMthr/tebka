<template>
<VModal id="doctor-visit-modal" class="doctor-visit-modal" v-model:show="doctorStore.showReserveModal">
  <template #title>
    <div class="fw-medium text-dark mb-1 mb-md-2">{{$t('time to visit')}} {{$t('doctor')}} {{doctorStore.doctor.name}}</div>
    <div class="fw-medium text-gray">{{doctorStore.doctor.expertise}}</div>
  </template>

    <template #body>
        <DoctorReservePickDate />
    </template>

    <template #footer>
        <div class="d-flex align-self-end justify-content-end w-100 mt-0 mt-md-6 pt-0">
            <button class="btn btn-primary py-2 col-12 col-md-5 body-1-md">{{$t('Confirm and continue')}}</button>
        </div>
    </template>
</VModal>
</template>

<script>
import VModal from "@/components/VModal.vue";
import {useDoctorStore} from "@/stores/DoctorStore";
import DoctorReservePickDate from "@/components/doctor/doctor-reserve/DoctorReservePickDate.vue";

export default {
    name: "DoctorReserveModal",

    components: {DoctorReservePickDate, VModal},

    emits: ['update:modelValue'],

    setup() {

      const doctorStore = useDoctorStore()
      console.log(doctorStore)
      return {
        doctorStore
      }
    }

}
</script>
