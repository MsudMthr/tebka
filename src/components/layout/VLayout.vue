<template>
    <slot name="header">
        <VHeader/>
    </slot>

    <main class="">
        <slot>Content</slot>
    </main>

    <slot name="footer">
        <VFooter />
    </slot>
</template>

<script>
    // Components
    import VHeader from '@/components/layout/VHeader.vue';
    import VFooter from '@/components/layout/VFooter.vue';
    import VSideMenu from '@/components/layout/side-menu/VSideMenu.vue';

    export default {
        components: {
            VHeader,
            VSideMenu,
            VFooter
        }
    }
</script>
