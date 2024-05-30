import { ref } from 'vue';

const useDoctor = () => {
    const doctor = ref({
        name: 'علی اکبر سلطانیان',
        expertise: 'متخصص مغز و اعصاب و ستون فقرات',
        rate: '4.6',
        image:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQj0MoQrYbawqdVlieVCav3xX7c44OMf43K2A&s'
    })

    return {
        doctor
    }
}

export default useDoctor;