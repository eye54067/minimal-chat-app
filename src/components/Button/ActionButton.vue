<template>
    <button 
        :type=type 
        @click="onClick"
        class="font-semibold rounded-md px-4 py-1 shadow-md text-white"
    >
        {{ name }}
    </button>
</template>

<script>

export default {
    name: 'ActionButton',
    props: {
        name: {
            type: String,
            default: 'Button',
        },
        type: {
            type: String,
            default: 'Button',
        },
    },
    methods: {
        onClick() {
            this.$emit('onClick');
        },
    },
};
</script>
