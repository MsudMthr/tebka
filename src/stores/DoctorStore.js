import {defineStore} from "pinia";
import {ref} from "vue";
import {useLoading} from "@/composables/loading.composable";
import {useDoctor as DoctorController, useDoctorAppointment} from "@/controller/DoctorController";

export const useDoctorStore = defineStore('doctor-store', () => {
    const doctor = ref({});
    const {fetchDoctor} = DoctorController();
    const {endLoading, startLoading, isLoading} = useLoading();

    const showReserveModal = ref(false);
    function showReserveModalHandler() {
        showReserveModal.value = true;
    }

    function fetch() {
        startLoading();
        return fetchDoctor()
            .then(response => {
                console.log(response.value)
                doctor.value = {
                    ...response.value,
                }
            })
            .finally(() => {
                endLoading()
            })
    }

    return {
        fetch,
        isLoading,
        showReserveModal,
        showReserveModalHandler,
        doctor
    }
})


