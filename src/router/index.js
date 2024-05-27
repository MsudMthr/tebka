import { createRouter, createWebHistory } from 'vue-router';

import DoctorView from '@/views/DoctorView.vue';

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
        {
            path: '/',
            name: 'Doctor',
            component: DoctorView,
        },
    ]
});

export default router;
