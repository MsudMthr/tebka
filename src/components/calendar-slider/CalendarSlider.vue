<template>
    <div class="calendar-slider card">
        <button
            type="button"
            class="calendar-slider-arrow-start d-none d-md-block"
            aria-label="Go Prev"
            @click="scrollRight"
        >
            <i class="bi bi-chevron-left"></i>
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
            class="calendar-slider-arrow-end d-none d-md-block"
            aria-label="Go Next"
            @click="scrollLeft"
        >
            <i class="bi bi-chevron-right"></i>
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
