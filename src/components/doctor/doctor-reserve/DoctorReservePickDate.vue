<template>
<div class="doctor-times-calendar d-flex flex-column h-100 pt-2 pt-md-6">
    <div class="bg-yellow text-black fw-medium body-2 body-1-md p-4 rounded">
        نوبتها هر روز راس ساعت 10 برای همان روز در هفته بعد (در صورت عدم تعطیلی آن روز) باز میگردد. پنجشنبه‌ها و جمعه نوبت‌دهی فعال نیست.
    </div>

    <CalendarSlider
        class="mt-2 mt-md-8 border-0 p-4"
        @update:modelValue="(value) => $emit('update:dayAppointment', value)"
        :model-value="dayAppointment"
    >
        <CalendarSliderItem
            v-for="item of items"
            :key="item.value"
            :value="item.value"
            :disable="item.disable"
            class="bg-white rounded"
        >
            <template #top>
                <span class="caption-2 body-2-md">{{ getDayTitle(item.date) }}</span>
            </template>

            <template #date><span class="body-1-md body-2">{{ getDate(item.date) }}</span></template>
        </CalendarSliderItem>
    </CalendarSlider>

    <div class="mt-2 mt-md-5 pt-md-3 p-4 bg-white">
        <p class="body-2 body-1-md fw-medium">{{ getTimesTitle }}</p>
        <p v-if="allTimesDisable" class="text-danger body-1 text-center fw-medium">{{ $t("This day's appointments are full") }}</p>
        <div class="px-6">
            <div class="row">
                <div
                    class="doctor-times-calendar__time-container text-center gx-3 gy-4"
                    v-for="time of times"
                    :key="time"
                >
                    <div
                        @click="$emit('update:timeAppointment', time.time)"
                        :class="[
                            {'doctor-times-calendar__time-container__content-disable': time.disable},
                            {'doctor-times-calendar__time-container__content-selected' : timeAppointment === time.time},
                            'doctor-times-calendar__time-container__content py-1 body-2 body-1-md']"
                    >
                        {{ time.time }}
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
</template>

<script>
import CalendarSlider from "@/components/calendar-slider/CalendarSlider.vue";
import CalendarSliderItem from "@/components/calendar-slider/CalendarSliderItem.vue";
import {computed, ref} from "vue";
import DateTime from "@/utils/date-time";
import {useDoctorAppointment} from "@/controller/DoctorController";

export default {
    name: "DoctorReservePickDate",

    components: {CalendarSliderItem, CalendarSlider},

    props: {
        dayAppointment: {
            required: true
        },
        timeAppointment: {
            required: true
        },
    },

    setup(props) {
        const {items} = useDoctorAppointment()
        // todo => set selected day to controller or store
        const selectedTime = ref(undefined)

        const times = computed(() => {
            const [selectedDay] = items.filter(item => item.value === props.dayAppointment);
            return selectedDay.times
        });

        function getDayTitle(date) {
            const today = DateTime.today().gregorian().format('yyyy-MM-dd');
            const dateDay = DateTime.make().gregorian().parse('yyyy-MM-dd', date).format('yyyy-MM-dd')
            const tomorrow = DateTime.today().addDay(1).gregorian().format('yyyy-MM-dd')

            if (dateDay === today) {
                return 'امروز'
            } else if (dateDay === tomorrow) {
                return 'فردا'
            }

            return DateTime.make().gregorian().parse('yyyy-MM-dd', date).jalali().format('dddd')
        }

        const getTimesTitle = computed(() => {
            return DateTime.make().gregorian().parse('yyyy-MM-dd', props.dayAppointment).jalali().format('dddd dd MMMM')
        })

        function getDate(date) {
            return DateTime.make().gregorian().parse('yyyy-MM-dd', date).jalali().format('dd MMMM')
        }

        const allTimesDisable = computed(() => {
            const [selectedDay] = items.filter(item => item.value === props.dayAppointment);
            return selectedDay.times.every(time => time.disable)
        })

        return {
            selectedTime,
            items,
            times,
            getDayTitle,
            getTimesTitle,
            allTimesDisable,
            getDate
        }
    }
}
</script>
