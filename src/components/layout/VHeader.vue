<template>
    <header class="header d-flex align-items-center justify-content-center bg-dark text-white px-2">
        Header
    </header>
</template>

<script>
    import { useRouter } from 'vue-router';

    // Services
    import AuthenticationService from '@/services/authentication.service';

    export default {
        name: 'VHeader',

        setup() {
            const router = useRouter();

            function logout() {
                AuthenticationService.logout();
                router.push({ name: 'Login' });
            }

            return {
                logout
            };
        }
    }
</script>
