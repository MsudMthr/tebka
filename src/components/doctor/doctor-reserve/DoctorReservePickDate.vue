<template>
<div class="doctor-times-calendar d-flex flex-column h-100 pt-2 pt-md-6">
    <div class="bg-yellow text-black fw-medium body-2 body-1-md p-4 rounded">
        نوبتها هر روز راس ساعت 10 برای همان روز در هفته بعد (در صورت عدم تعطیلی آن روز) باز میگردد. پنجشنبه‌ها و جمعه نوبت‌دهی فعال نیست.
    </div>

    <CalendarSlider class="mt-2 mt-md-8 border-0 p-4" v-model="v">
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
                        @click="selectedTime = time.time"
                        :class="[
                            {'doctor-times-calendar__time-container__content-disable': time.disable},
                            {'doctor-times-calendar__time-container__content-selected' : selectedTime === time.time},
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

        const times = computed(() => {
            const [selectedDay] = items.filter(item => item.value === v.value);
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

        const allTimesDisable = computed(() => {
            const [selectedDay] = items.filter(item => item.value === v.value);
            return selectedDay.times.every(time => time.disable)
        })

        watch(() => v.value, () => {
            selectedTime.value = undefined
        })

        return {
            v,
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
