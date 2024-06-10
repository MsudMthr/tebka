<template>
    <div class="calendar-slider card">
        <button
            type="button"
            class="calendar-slider-arrow-start"
            aria-label="Go Prev"
            @click="scrollRight"
        >
            <i class="bi bi-chevron-left"></i>

<!--            <svg-->
<!--                width="24"-->
<!--                height="24"-->
<!--                viewBox="0 0 24 24"-->
<!--            >-->
<!--                <path stroke="#727272" stroke-linecap="round" stroke-linejoin="round" d="m9 18 6-6-6-6"/>-->
<!--            </svg>-->
        </button>

        <div
            class="calendar-slider-container"
            ref="sliderContainer"
            v-slider
        >
            <slot></slot>
        </div>

        <button
            type="button"
            class="calendar-slider-arrow-end"
            aria-label="Go Next"
            @click="scrollLeft"
        >
            <i class="bi bi-chevron-right"></i>

<!--            <svg-->
<!--                width="24"-->
<!--                height="24"-->
<!--                fill="none"-->
<!--                viewBox="0 0 24 24"-->
<!--            >-->
<!--                <path stroke="#727272" stroke-linecap="round" stroke-linejoin="round" d="m15 18-6-6 6-6"/>-->
<!--            </svg>-->
        </button>
    </div>
</template>

<script>
// Vue
import { ref, provide, toRef } from 'vue';

// Directives
import { slider } from '@/directives/slider.directive';

export const PRICE_CALENDAR_SLIDER_INJECTION_KEY = 'PriceCalendarSliderProvider';

export default {
    name: 'CalendarSlider',

    directives: {
        slider
    },

    props: ['modelValue'],

    emits: ['update:modelValue'],

    setup(props, context) {
        const sliderContainer = ref(null);

        function scrollRight() {
            sliderContainer.value.scrollLeft += sliderContainer.value.clientWidth;
        }

        function scrollLeft() {
            sliderContainer.value.scrollLeft -= sliderContainer.value.clientWidth;
        }

        const modelValue = toRef(props, 'modelValue');
        provide(PRICE_CALENDAR_SLIDER_INJECTION_KEY, {
            modelValue,
            update(value) {
                context.emit('update:modelValue', value);
            }
        });

        return {
            sliderContainer,

            scrollRight,
            scrollLeft
        }
    }
}
</script>
