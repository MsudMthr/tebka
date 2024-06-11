<template>
<div class="doctor-times-calendar mt-6 pt-2">
    <div class="bg-yellow text-black fw-medium caption-1 body-1-md p-4 rounded">
        نوبتها هر روز راس ساعت 10 برای همان روز در هفته بعد (در صورت عدم تعطیلی آن روز) باز میگردد. پنجشنبه‌ها و جمعه نوبت‌دهی فعال نیست.
    </div>

    <CalendarSlider class="mt-8 border-0" v-model="v">
        <CalendarSliderItem
            v-for="item of items"
            :key="item.value"
            :value="item.value"
            :disable="item.disable"
            class="bg-white rounded"
        >
            <template #top>
                <span>{{ getDayTitle(item.date) }}</span>
            </template>

            <template #date>{{ getDate(item.date) }}</template>
        </CalendarSliderItem>
    </CalendarSlider>

    <div>
        <p>{{ getTimesTitle() }}</p>
        <div class="row mx-auto g-3">
            <div class="doctor-times-calendar-time col-3 text-center py-1" v-for="time of times" :key="time">
                {{ time.time }}
            </div>
        </div>
    </div>
</div>
</template>

<script>
import CalendarSlider from "@/components/calendar-slider/CalendarSlider.vue";
import CalendarSliderItem from "@/components/calendar-slider/CalendarSliderItem.vue";
import {ref} from "vue";
import DateTime from "@/utils/date-time";

export default {
    name: "DoctorReservePickDate",

    components: {CalendarSliderItem, CalendarSlider},

    setup() {
        const v = ref(DateTime.today().gregorian().format('yyyy-MM-dd'))

        const items = [
            {
                date: '2024-06-10',
                value: 'test1'
            },
            {
                date: '2024-06-11',
                value: '2024-06-11'
            },
            {
                date: '2024-06-12',
                value: 'test2'
            },
            {
                date: '2024-06-13',
                value: 'test34156'
            },
            {
                date: '2024-06-14',
                value: 'test56465'
            },
            {
                date: '2024-06-15',
                value: 'tes89798'
            },
            {
                date: '2024-06-16',
                value: 'tes987'
            },
            {
                date: '2024-06-17',
                value: 'test14',
                disable: true
            },

        ]

        const times = [
            {time: '11:00'},
            {time: '12:00'},
            {time: '13:00'},
            {time: '14:00'},
            {time: '15:00'},
            {time: '16:00'},
            {time: '17:00'},
        ]

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

        function getTimesTitle() {
            return DateTime.make().gregorian().parse('yyyy-MM-dd', v).format('yyyy-MM-dd')
        }

        function getDate(date) {
            return DateTime.make().gregorian().parse('yyyy-MM-dd', date).jalali().format('dd MMMM')
        }

        return {
            v,
            items,
            times,
            getDayTitle,
            getTimesTitle,
            getDate
        }
    }
}
</script>
