import { ref } from 'vue';

const useDoctor = () => {
    const doctor = ref({
        name: 'علی اکبر سلطانیان',
        expertise: 'متخصص مغز و اعصاب و ستون فقرات',
        rate: '4.6',
        image:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQj0MoQrYbawqdVlieVCav3xX7c44OMf43K2A&s',
        phone: "۰۵۱ - ۳۸۴۴۵۶۷۸",
        mobile: '۰۹۰۲۵۵۵۵۵۶۷۸',
        address: 'مشهد، میدان بیمارستان امام رضا، ابتدای خیابان رازی، ساختمان پزشکان رازی (پارسیان)، طبقه 3، واحد ۳۰'
    })

    return {
        doctor
    }
}

export default useDoctor;
