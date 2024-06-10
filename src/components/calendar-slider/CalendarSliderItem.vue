<template>
    <button
        :class="className"
        type="button"
        @click="update(value)"
    >
        <span class="body-2 d-block">
            <slot name="top"></slot>
        </span>

        <span class="body-1 fw-medium">
            <slot name="date"></slot>
        </span>
    </button>
</template>

<script>
import { computed, inject } from 'vue';

// Injection keys
import { PRICE_CALENDAR_SLIDER_INJECTION_KEY } from './CalendarSlider.vue';

export default {
    name: 'CalendarSliderItem',

    props: {
        value: {
            type: [String, Number],
            default: false
        },
        disable: {
            type: Boolean,
            default: false
        },
    },

    setup(props) {
        const { modelValue, update } = inject(PRICE_CALENDAR_SLIDER_INJECTION_KEY);

        const className = computed(() => {
            return {
                'calendar-slider-item': true,
                'active': modelValue.value === props.value,
                'disable': props.disable
            };
        });

        return {
            update,
            className
        };
    }
}
</script>
