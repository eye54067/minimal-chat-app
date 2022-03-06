<template>
    <v-card 
    class="w-screen h-12 ml-1 mr-2 mb-1"
    @click="clikChat"
    >
        <h1 class="mt-2 ml-5"
        >
            {{ value }}
        </h1>
    </v-card>
</template>
<script>
export default {
    name: 'CardChatList',
    props: ['value'],

    methods: {
        clikChat() {
            this.$emit('click-chat');
        },
    },
};
</script>