import {computed, ref} from 'vue';

const useDoctor = () => {
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

    return {
        doctor,

        comments,
        totalComments
    }
}

export default useDoctor;
