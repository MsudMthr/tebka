import {computed, ref, watch} from 'vue';
import {useLoading} from "@/composables/loading.composable";
import DoctorsService from "@/services/doctors.service";
import CommentsService from "@/services/comments.service";
import OfficeService from "@/services/office.service";
import RulesService from "@/services/rules.service";
import DateTime from "@/utils/date-time";
import {useDoctorStore} from "@/stores/DoctorStore";

export const useDoctor = () => {
    const doctor = ref({})
    const {endLoading, startLoading, isLoading} = useLoading();
    const doctorId = 194;
    const doctorUserName = 'DrHakak'

    function fetchDoctorDetails() {
        const params = {
            username: doctorUserName
        };

        return DoctorsService.show(params)
            .then(response => {
                return response.data.value.doctor;
            })
    }

    function fetchDoctorRules() {
        const params = {
            username: doctorUserName
        };

        return RulesService.list(params)
            .then(response => {
                return response.data.value.rules;
            })
    }

    function fetchOfficeDetails() {
        const params = {
            doctor_id: doctorId,
            username: doctorUserName
        };

        return OfficeService.show(params)
            .then(response => {
                return response.data.value.office;
            })
    }

    async function fetchDoctor() {
        startLoading();


        return Promise.all([
            fetchDoctorDetails(), fetchOfficeDetails(), fetchDoctorRules()
        ]).then(([doctorDetails, officeDetails, doctorRules]) => {
            doctor.value = {
                rules: {
                    ...doctorRules
                },
                ...doctorDetails,
                ...officeDetails,
                image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQj0MoQrYbawqdVlieVCav3xX7c44OMf43K2A&s',
                price: 15000000
            }

            return doctor;
        })
            .finally(() => {
                endLoading();
            })
    }

    return {
        doctor,

        isLoading,

        fetchDoctor
    }
}

export const useDoctorComments = () => {
    const {endLoading, startLoading, isLoading} = useLoading();
    const comments = ref([]);
    const doctorStore = useDoctorStore();
    const totalComments = computed(() => comments.value.length);

    const acceptRate = computed(() => {
        if (totalComments.value === 0) return 0;

        const totalRate = comments.value.reduce((rate, comment) => {
            return rate + comment.accept_rate;
        }, 0);

        return totalRate / totalComments.value;
    });

    const doctorRate = computed(() => {
        if (totalComments.value === 0) return 0;

        const totalRate = comments.value.reduce((rate, comment) => {
            return rate + comment.doctor_rate;
        }, 0);

        return totalRate / totalComments.value;
    });

    const secretaryRate = computed(() => {
        const totalRate = comments.value.reduce((rate, comment) => {
            return rate + comment.secretary_rate;
        }, 0);

        return totalRate / totalComments.value;
    });

    const totalRate = computed(() => {
        if (totalComments.value) {
            return (Number(acceptRate.value) + Number(doctorRate.value) + Number(secretaryRate.value)) / 3
        }
        return 5
    })

    watch(() => totalComments.value,() => {
        doctorStore.setDoctorRate(totalRate.value)
    })

    function fetchComments() {
        startLoading();

        const params = {
            doctor_id: '194'
        }
        return CommentsService.list(params)
            .then(response => {
                console.log(response)
                comments.value = response.data.value.comments;
                return comments
            })
            .finally(() => {
                endLoading();
            })
    }

    return {
        fetchComments,
        comments,

        acceptRate,
        secretaryRate,
        doctorRate,

        isLoading,
        totalComments,
    }
}

export const useDoctorAppointment = () => {
    const {endLoading, startLoading, isLoading} = useLoading();
    const items = [
        {
            date: DateTime.today().gregorian().format('yyyy-MM-dd'),
            value: DateTime.today().gregorian().format('yyyy-MM-dd'),
            times: [
                {
                    disable: false,
                    time: '11:00'
                },
                {
                    disable: false,
                    time: '11:30'
                },
                {
                    disable: false,
                    time: '12:00'
                },
                {
                    disable: false,
                    time: '12:30'
                },
                {
                    disable: false,
                    time: '13:00'
                },
                {
                    disable: false,
                    time: '13:30'
                },
                {
                    disable: false,
                    time: '14:00'
                },
                {
                    disable: false,
                    time: '14:30'
                },
                {
                    disable: false,
                    time: '15:00'
                },
                {
                    disable: false,
                    time: '15:30'
                },
            ]
        },
        {
            date: '2024-06-11',
            value: '2024-06-11',
            times: [
                {
                    disable: false,
                    time: '11:00'
                },
                {
                    disable: false,
                    time: '11:30'
                },
                {
                    disable: false,
                    time: '12:00'
                },
                {
                    disable: false,
                    time: '12:30'
                },
                {
                    disable: false,
                    time: '13:00'
                },
                {
                    disable: false,
                    time: '13:30'
                },
                {
                    disable: false,
                    time: '14:00'
                },
                {
                    disable: false,
                    time: '14:30'
                },
                {
                    disable: false,
                    time: '15:00'
                },
                {
                    disable: false,
                    time: '17:00'
                },
                {
                    disable: false,
                    time: '17:30'
                },
                {
                    disable: false,
                    time: '18:30'
                },
            ]
        },
        {
            date: '2024-06-12',
            value: '2024-06-12',
            times: [
                {
                    disable: false,
                    time: '11:00'
                },
                {
                    disable: false,
                    time: '11:30'
                },
                {
                    disable: false,
                    time: '12:00'
                },
                {
                    disable: false,
                    time: '12:30'
                },
                {
                    disable: false,
                    time: '15:00'
                },
                {
                    disable: false,
                    time: '15:30'
                },
                {
                    disable: false,
                    time: '16:00'
                },
                {
                    disable: false,
                    time: '16:30'
                },
                {
                    disable: false,
                    time: '17:00'
                },
                {
                    disable: false,
                    time: '17:30'
                },
                {
                    disable: false,
                    time: '18:30'
                },
            ]
        },
        {
            date: '2024-06-13',
            value: '2024-06-13',
            times: [
                {
                    disable: false,
                    time: '11:00'
                },
                {
                    disable: false,
                    time: '11:30'
                },
                {
                    disable: false,
                    time: '12:00'
                },
                {
                    disable: false,
                    time: '12:30'
                },
                {
                    disable: false,
                    time: '16:30'
                },
                {
                    disable: false,
                    time: '17:00'
                },
                {
                    disable: false,
                    time: '17:30'
                },
                {
                    disable: false,
                    time: '18:30'
                },
            ]
        },
        {
            date: '2024-06-14',
            value: '2024-06-14',
            times: [
                {
                    disable: false,
                    time: '11:00'
                },
                {
                    disable: false,
                    time: '11:30'
                },
                {
                    disable: false,
                    time: '12:00'
                },
                {
                    disable: false,
                    time: '12:30'
                },
                {
                    disable: false,
                    time: '13:00'
                },
                {
                    disable: false,
                    time: '13:30'
                },
                {
                    disable: false,
                    time: '14:00'
                },
                {
                    disable: false,
                    time: '14:30'
                },
                {
                    disable: false,
                    time: '15:00'
                },
                {
                    disable: false,
                    time: '16:30'
                },
                {
                    disable: false,
                    time: '17:00'
                },
                {
                    disable: false,
                    time: '17:30'
                },
                {
                    disable: false,
                    time: '18:30'
                },
            ]
        },
        {
            date: '2024-06-15',
            value: '2024-06-15',
            times: [
                {
                    disable: false,
                    time: '11:00'
                },
                {
                    disable: false,
                    time: '11:30'
                },
                {
                    disable: false,
                    time: '12:00'
                },
                {
                    disable: false,
                    time: '12:30'
                },
                {
                    disable: false,
                    time: '13:00'
                },
                {
                    disable: false,
                    time: '13:30'
                },
                {
                    disable: false,
                    time: '15:30'
                },
                {
                    disable: false,
                    time: '16:00'
                },
                {
                    disable: false,
                    time: '16:30'
                },
                {
                    disable: false,
                    time: '17:00'
                },
                {
                    disable: false,
                    time: '17:30'
                },
                {
                    disable: false,
                    time: '18:30'
                },
            ]
        },
        {
            date: '2024-06-16',
            value: '2024-06-16',
            times: [
                {
                    disable: true,
                    time: '11:00'
                },
                {
                    disable: true,
                    time: '11:30'
                },
                {
                    disable: true,
                    time: '12:00'
                },
                {
                    disable: true,
                    time: '12:30'
                },
                {
                    disable: true,
                    time: '13:00'
                },
                {
                    disable: true,
                    time: '13:30'
                },
                {
                    disable: true,
                    time: '15:30'
                },
                {
                    disable: true,
                    time: '16:00'
                },
                {
                    disable: true,
                    time: '16:30'
                },
                {
                    disable: true,
                    time: '17:00'
                },
                {
                    disable: true,
                    time: '17:30'
                },
                {
                    disable: true,
                    time: '18:30'
                },
            ]
        },
        {
            date: '2024-06-17',
            value: '2024-06-17',
            disable: true,
            times: [
                {
                    disable: false,
                    time: '11:00'
                },
                {
                    disable: false,
                    time: '11:30'
                },
                {
                    disable: false,
                    time: '12:00'
                },
                {
                    disable: false,
                    time: '12:30'
                },
                {
                    disable: false,
                    time: '13:00'
                },
                {
                    disable: false,
                    time: '13:30'
                },
                {
                    disable: false,
                    time: '15:30'
                },
                {
                    disable: false,
                    time: '16:00'
                },
                {
                    disable: false,
                    time: '16:30'
                },
                {
                    disable: false,
                    time: '17:00'
                },
                {
                    disable: false,
                    time: '17:30'
                },
                {
                    disable: false,
                    time: '18:30'
                },
            ]
        },

    ]

    function fetchAppointments() {
        return null;

    }

    const formData = ref({
        national_code: undefined,
        full_name: undefined,
        phone_number: undefined,
        accept: false,
    })

    return {
        items,
        fetchAppointments,
        isLoading,
        formData
    }
}


