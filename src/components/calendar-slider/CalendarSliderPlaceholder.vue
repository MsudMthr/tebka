<template>
    <div class="calendar-slider card">
        <button type="button" class="calendar-slider-arrow-start">
            <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
            >
                <path stroke="#727272" stroke-linecap="round" stroke-linejoin="round" d="m9 18 6-6-6-6"/>
            </svg>
        </button>

        <div class="calendar-slider-container placeholder-wave">
            <div
                v-for="index of 10"
                :key="index"
                class="calendar-slider-item d-flex flex-column align-items-center"
            >
                <div class="placeholder placeholder-sm mb-2" style="height: 1.25rem; width: 34px"></div>
                <div class="placeholder placeholder-sm" style="height: 1.25rem; width: 65px"></div>
            </div>
        </div>

        <button type="button" class="calendar-slider-arrow-end">
            <svg
                width="24"
                height="24"
                fill="none"
                viewBox="0 0 24 24"
            >
                <path stroke="#727272" stroke-linecap="round" stroke-linejoin="round" d="m15 18-6-6 6-6"/>
            </svg>
        </button>
    </div>
</template>

<script>
export default {
    name: 'CalendarSliderPlaceholder'
}
</script>
