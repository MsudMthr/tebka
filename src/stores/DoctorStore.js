import {defineStore} from "pinia";
import {ref} from "vue";
import {useLoading} from "@/composables/loading.composable";
import {useDoctor as DoctorController} from "@/controller/DoctorController";

export const useDoctor = defineStore('doctor-store', () => {
    const doctor = ref({});
    const {fetchDoctor} = DoctorController();
    const {endLoading, startLoading, isLoading} = useLoading();

    function fetch() {
        startLoading();
        return fetchDoctor()
            .then(response => {
                doctor.value = response
            })
            .finally(() => {
                endLoading()
            })
    }

    return {
        fetch,
        isLoading,
        doctor
    }
})


