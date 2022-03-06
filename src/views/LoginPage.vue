<template>
    <div>
        <CardLogin
        @on-click="onClickLogin"
        v-model="username"
        />
    </div>
</template>

<script>
import CardLogin from '@/components/Card/CardLogin';
export default {
    name: 'LoginPage',
    components: {
        CardLogin,
    },
    data() {
        return {
            username: '',
        };
    },
    methods: {
        onClickLogin() {
            localStorage.setItem('token', this.username);
            this.$router.push({ name: 'ChatList' });
        },
    },
    mounted() {},
};
</script> 