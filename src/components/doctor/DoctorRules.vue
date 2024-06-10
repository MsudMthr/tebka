<template>
<div class="doctor-details__rules card border-0 d-flex p-4 mt-4">
    <h3 class="doctor-details__rules-title fw-medium mb-4">
        {{ $t('Rules') }}
        {{ $t('Turn ratings') }}
        {{ $t('doctor') }}
        {{ doctor.name }}
    </h3>

    <div :class="[ `doctor-details__rules-content--text-${viewMore ? 'open' : 'close'}`]">
        <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Doloremque earum eius rem totam voluptatibus? Amet animi aperiam
            aspernatur assumenda dignissimos eaque esse est expedita fuga in maxime molestiae nam nesciunt possimus quas quia, sequi
            tempore.
            Consequuntur deserunt dolorum et fugit hic impedit laboriosam quos? Aut ipsum laboriosam nulla praesentium vero!
        </p>
        <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Doloremque earum eius rem totam voluptatibus? Amet animi aperiam
            aspernatur assumenda dignissimos eaque esse est expedita fuga in maxime molestiae nam nesciunt possimus quas quia, sequi
            tempore.
            Consequuntur deserunt dolorum et fugit hic impedit laboriosam quos? Aut ipsum laboriosam nulla praesentium vero!
        </p>

        <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Doloremque earum eius rem totam voluptatibus? Amet animi aperiam
            aspernatur assumenda dignissimos eaque esse est expedita fuga in maxime molestiae nam nesciunt possimus quas quia, sequi
            tempore.
            Consequuntur deserunt dolorum et fugit hic impedit laboriosam quos? Aut ipsum laboriosam nulla praesentium vero!
        </p>

        <ol>
            <li>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Asperiores, laboriosam.</li>
            <li>Ad commodi cupiditate dolore, eos libero quas quidem reiciendis. Molestiae?</li>
            <li>A blanditiis dolores doloribus ea enim ipsum labore perferendis repellat?</li>
            <li>Adipisci incidunt labore modi non perferendis quia quidem unde voluptas.</li>
            <li>Amet consequatur ducimus eos facilis ipsa maxime porro quaerat voluptate?</li>
        </ol>
    </div>

    <div v-if="!viewMore" class="doctor-details__rules-content--text-overlay card border-0"></div>



    <button
        class="doctor-details__rules-content-button d-flex align-items-center btn text-primary fs-3 fw-medium"
        type="button"
        @click="viewMore = !viewMore"
    >
        {{ viewMore ? $t('View less') : $t('View the rules') }}
        <span class="d-none d-md-block">
                <i v-if="!viewMore" class="bi-chevron-down ms-2"></i>
                <i v-else class="bi-chevron-up ms-2"></i>
            </span>
        <span class="d-block d-md-none">
                <i v-if="!viewMore" class="bi-chevron-right ms-2"></i>
                <i v-else class="bi-chevron-left ms-2"></i>
            </span>
    </button>

</div>
</template>

<script>
import {ref} from "vue";

export default {
    name: "DoctorRules",

    props: {
        doctor: {
            required: true
        }
    },

    setup() {
        const viewMore = ref(false);

        return {
            viewMore
        }
    }
}
</script>

<style scoped>

</style>
