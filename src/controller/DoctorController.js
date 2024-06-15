import {computed, reactive, ref} from 'vue';

export const useDoctor = () => {
    const doctor = ref({
        name: 'علی اکبر سلطانیان',
        expertise: 'متخصص مغز و اعصاب و ستون فقرات',
        rate: '4.6',
        image:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQj0MoQrYbawqdVlieVCav3xX7c44OMf43K2A&s',
        phone: "۰۵۱ - ۳۸۴۴۵۶۷۸",
        mobile: '۰۹۰۲۵۵۵۵۵۶۷۸',
        address: 'مشهد، میدان بیمارستان امام رضا، ابتدای خیابان رازی، ساختمان پزشکان رازی (پارسیان)، طبقه 3، واحد ۳۰',
        rates:{
            doctor: 4.3,
            secretary: 4,
            reception: 4
        }
    })

    async function fetchDoctor() {
        return Promise.resolve(doctor.value);
    }

    return {
        doctor,

        fetchDoctor
    }
}

export const useDoctorComments = () => {
    const comments = ref([
        {
            name: 'محمودی',
            created_at: '4-06-2024',
            rate: '3',
            comment: 'دانش و تشخیص بیماری آقای دکتر بسیار درجه یک هست. و همچنین اخلاق حرفه ای ایشان باعث دلگرمی و آرامش بیمار می شود.'
        },
        {
            name: 'test',
            created_at: '4-06-2024',
            rate: '3',
            comment: 'دانش و تشخیص بیماری آقای دکتر بسیار درجه یک هست. و همچنین اخلاق حرفه ای ایشان باعث دلگرمی و آرامش بیمار می شود.'
        },
        {
            name: 'مطهری نیا',
            created_at: '04-08-2020',
            rate: '4',
            comment: 'دانش و تشخیص بیماری آقای دکتر بسیار درجه یک هست. و همچنین اخلاق حرفه ای ایشان باعث دلگرمی و آرامش بیمار می شود.'
        },
        {
            name: 'محمودی',
            created_at: '08-07-2005',
            rate: '1',
            comment: 'دانش و تشخیص بیماری آقای دکتر بسیار درجه یک هست. و همچنین اخلاق حرفه ای ایشان باعث دلگرمی و آرامش بیمار می شود.'
        },
        {
            name: 'test',
            created_at: '4-06-2024',
            rate: '3',
            comment: 'دانش و تشخیص بیماری آقای دکتر بسیار درجه یک هست. و همچنین اخلاق حرفه ای ایشان باعث دلگرمی و آرامش بیمار می شود.'
        },
        {
            name: 'مطهری نیا',
            created_at: '04-08-2020',
            rate: '4',
            comment: 'دانش و تشخیص بیماری آقای دکتر بسیار درجه یک هست. و همچنین اخلاق حرفه ای ایشان باعث دلگرمی و آرامش بیمار می شود.'
        },
        {
            name: 'محمودی',
            created_at: '08-07-2005',
            rate: '1',
            comment: 'دانش و تشخیص بیماری آقای دکتر بسیار درجه یک هست. و همچنین اخلاق حرفه ای ایشان باعث دلگرمی و آرامش بیمار می شود.'
        },
    ])

    const totalComments = computed(() => comments.value.length)

    function fetchComments() {
        return Promise.resolve(comments.value);
    }

    return {
        fetchComments,
        comments,
        totalComments,
    }
}

export const useDoctorAppointment = () => {
    const items = [
        {
            date: '2024-06-10',
            value: '2024-06-10',
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

    const formData = ref({
        national_code: undefined,
        full_name: undefined,
        phone_number: undefined
    })

    return {
        items,
        formData
    }
}


