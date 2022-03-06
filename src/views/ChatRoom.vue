<template>
    <div class="bg-gray-200 flex flex-col h-screen justify-between">
        <NavBar 
            class="fixed inset-x-0 top-0 p-4"
        >
            <NavButton 
                class="mr-5 mt-1"
                to='ChatList'
            >
                <span class="material-icons">arrow_back</span>
            </NavButton>
            <v-toolbar-title>{{ $route.query.name }}</v-toolbar-title>
        </NavBar>
        <div>

        </div>
        <div class="w-full mb-10">
            <MessageBox
                v-for="message in messageShow" :key="message.id"
                :username="message.username" 
                :message="message.message"/>
                
            />
        </div>
        <InputMessage
            v-model="message"
            @click-send="onClickSend"
        />
    </div>
</template>

<script>
import NavBar from '@/components/NavBar/NavBar';
import NavButton from '@/components/Button/NavButton';
import InputMessage from '@/components/Card/InputMessage';
import MessageBox from '@/components/Card/MessageBox';
import { auth } from "@/utils";

export default {
    name: 'ChatRoom',
    components: {
        NavBar,
        NavButton,
        InputMessage,
        MessageBox,
    },
    
    data() {
        return {
            message: '',
            chatMessageList: [],
            username: auth.getUsername(),
        };
    },
    methods: {
        onClickSend() {
            this.chatMessageList.push(
                {
                id: this.chatMessageList.length + 1,
                roomId: this.$route.query.id,
                username: this.username,
                message: this.message
                }
            );
            this.message = "";
            localStorage.setItem("chat-message-list", JSON.stringify(this.chatMessageList ));
        },
    },
    computed: {
        messageShow() {
            return this.chatMessageList.filter((message) => String(message.roomId) === String(this.$route.query.id));
        },
    },
    mounted() {
        this.chatMessageList = JSON.parse(localStorage.getItem("chat-message-list")) || [];
    },
};
</script>