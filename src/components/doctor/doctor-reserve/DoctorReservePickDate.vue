<template>
<div class="doctor-times-calendar mt-6 pt-2">
    <div class="bg-yellow text-black fw-medium body-2 body-1-md p-4 rounded">
        نوبتها هر روز راس ساعت 10 برای همان روز در هفته بعد (در صورت عدم تعطیلی آن روز) باز میگردد. پنجشنبه‌ها و جمعه نوبت‌دهی فعال نیست.
    </div>

    <CalendarSlider class="mt-8 border-0 p-4" v-model="v">
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
        <div class="px-6">
            <div class="row">
                <div
                    @click="selectedTime = time.time"
                    class="doctor-times-calendar__time-container text-center gx-3 gy-4"
                    v-for="time of times"
                    :key="time"
                >
                    <div
                        :class="[{'doctor-times-calendar__time-container__content-selected' : selectedTime === time.time},'doctor-times-calendar__time-container__content py-1 body-2 body-1-md']">
                        {{ time.time }}
                    </div>
                </div>
            </div>
        </div>
    </div>

    <div>
        <button class="btn btn-primary"></button>
    </div>
</div>
</template>

<script>
import CalendarSlider from "@/components/calendar-slider/CalendarSlider.vue";
import CalendarSliderItem from "@/components/calendar-slider/CalendarSliderItem.vue";
import {computed, ref, watch} from "vue";
import DateTime from "@/utils/date-time";

export default {
    name: "DoctorReservePickDate",

    components: {CalendarSliderItem, CalendarSlider},

    setup() {
        // todo => set selected day to controller or store
        const v = ref(DateTime.today().gregorian().format('yyyy-MM-dd'))
        const selectedTime = ref(undefined)

        const items = [
            {
                date: '2024-06-10',
                value: '2024-06-10',
                times: [
                    {time: '11:00'},
                    {time: '11:30'},
                    {time: '12:00'},
                    {time: '12:30'},
                    {time: '13:00'},
                    {time: '13:30'},
                    {time: '14:00'},
                    {time: '14:30'},
                    {time: '15:00'},
                    {time: '15:30'},
                ]
            },
            {
                date: '2024-06-11',
                value: '2024-06-11',
                times: [
                    {time: '11:00'},
                    {time: '11:30'},
                    {time: '12:00'},
                    {time: '12:30'},
                    {time: '13:00'},
                    {time: '13:30'},
                    {time: '14:00'},
                    {time: '14:30'},
                    {time: '15:00'},
                    {time: '17:00'},
                    {time: '17:30'},
                    {time: '18:30'},
                ]
            },
            {
                date: '2024-06-12',
                value: '2024-06-12',
                times: [
                    {time: '11:00'},
                    {time: '11:30'},
                    {time: '12:00'},
                    {time: '12:30'},
                    {time: '15:00'},
                    {time: '15:30'},
                    {time: '16:00'},
                    {time: '16:30'},
                    {time: '17:00'},
                    {time: '17:30'},
                    {time: '18:30'},
                ]
            },
            {
                date: '2024-06-13',
                value: '2024-06-13',
                times: [
                    {time: '11:00'},
                    {time: '11:30'},
                    {time: '12:00'},
                    {time: '12:30'},
                    {time: '16:30'},
                    {time: '17:00'},
                    {time: '17:30'},
                    {time: '18:30'},
                ]
            },
            {
                date: '2024-06-14',
                value: '2024-06-14',
                times: [
                    {time: '11:00'},
                    {time: '11:30'},
                    {time: '12:00'},
                    {time: '12:30'},
                    {time: '13:00'},
                    {time: '13:30'},
                    {time: '14:00'},
                    {time: '14:30'},
                    {time: '15:00'},
                    {time: '16:30'},
                    {time: '17:00'},
                    {time: '17:30'},
                    {time: '18:30'},
                ]
            },
            {
                date: '2024-06-15',
                value: '2024-06-15',
                times: [
                    {time: '11:00'},
                    {time: '11:30'},
                    {time: '12:00'},
                    {time: '12:30'},
                    {time: '13:00'},
                    {time: '13:30'},
                    {time: '15:30'},
                    {time: '16:00'},
                    {time: '16:30'},
                    {time: '17:00'},
                    {time: '17:30'},
                    {time: '18:30'},
                ]
            },
            {
                date: '2024-06-16',
                value: '2024-06-16',
                times: [
                    {time: '11:00'},
                    {time: '11:30'},
                    {time: '12:00'},
                    {time: '12:30'},
                    {time: '13:00'},
                    {time: '13:30'},
                    {time: '15:30'},
                    {time: '16:00'},
                    {time: '16:30'},
                    {time: '17:00'},
                    {time: '17:30'},
                    {time: '18:30'},
                ]
            },
            {
                date: '2024-06-17',
                value: '2024-06-17',
                disable: true,
                times: [
                    {time: '11:00'},
                    {time: '11:30'},
                    {time: '12:00'},
                    {time: '12:30'},
                    {time: '13:00'},
                    {time: '13:30'},
                    {time: '15:30'},
                    {time: '16:00'},
                    {time: '16:30'},
                    {time: '17:00'},
                    {time: '17:30'},
                    {time: '18:30'},
                ]
            },

        ]

        const times = computed(() => {
            const [selectedDay] = items.filter(item => item.value === v.value);
            console.log(selectedDay)
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
            return DateTime.make().gregorian().parse('yyyy-MM-dd', v.value).jalali().format('dddd dd MMMM')
        })

        function getDate(date) {
            return DateTime.make().gregorian().parse('yyyy-MM-dd', date).jalali().format('dd MMMM')
        }

        watch(() => v.value , () => {
            selectedTime.value = undefined
        })

        return {
            v,
            selectedTime,
            items,
            times,
            getDayTitle,
            getTimesTitle,
            getDate
        }
    }
}
</script>
