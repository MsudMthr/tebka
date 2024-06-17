<template>
<div class="form-check">
    <input
        v-model="value"
        :value="inputValue"
        :id="id"
        type="checkbox"
        class="form-check-input"
    >

    <label class="form-check-label" :for="id">
        <slot></slot>
    </label>
</div>
</template>

<script>
import { computed } from 'vue';

// Utils
import { getUniqueId } from '@/utils';

export default {
    name: 'VCheckbox',

    props: {
        modelValue: {
            default: false
        },
        inputValue: {
            default: true
        },
        id: {
            type: String,
            default: () => getUniqueId()
        }
    },

    emits: ['update:modelValue'],

    setup(props, context) {
        const value = computed({
            get() {
                return props.modelValue;
            },
            set(value) {
                context.emit('update:modelValue', value);
            }
        });

        return {
            value
        };
    }
}
</script>
