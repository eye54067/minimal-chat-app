<template>
    <button @click="onClick(to)" >
        <slot></slot>
    </button>
</template>

<script>

export default {
    name: 'NavButton',
    props: {
    // name: {
    //   type: String,
    //   default: 'Button',
    // },
        to: {
            type: String,
            default: 'Home',
        },
        borderLeft: {
            type: Boolean,
            default: false,
        },
        borderRight: {
            type: Boolean,
            default: false,
        },
    },
    methods: {
        onClick(pageName) {
            this.$router.push({ name: pageName }).catch(() => {});
        },
    },
};
</script>
