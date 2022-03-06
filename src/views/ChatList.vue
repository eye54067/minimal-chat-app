<template>
    <div>
        <NavBar>
            <v-toolbar-title>Chat List</v-toolbar-title>
            <v-spacer></v-spacer>
            <button class="mr-3" @click="clickLogout">
                <span class="material-icons">logout</span>
            </button>
            <button @click="clickDialog">
                <span class="material-icons">add</span>
            </button>
        </NavBar>

        <v-dialog
            v-model="dialog"
            max-width="500px"
        >
            <CardCreateRoom
                @click-cancel="onClikCancel"
                @click-confirm="onClickConfirm"
                v-model="roomName"
            />
        </v-dialog>
        <div v-for="room in roomList" :key="room.id" v-show="onClickConfirm">
            <CardChatList
                @click-chat="clickEnterChat(room.id)"
                :value="room.name"
            />
        </div>
    </div>
</template>

<script>
import NavBar from '@/components/NavBar/NavBar';
import CardCreateRoom from '@/components/Card/CardCreateRoom';
import CardChatList from '@/components/Card/CardChatList';

export default {
    name: 'ChatList',
    components: {
        NavBar,
        CardCreateRoom,
        CardChatList,
        
    },
    data() {
        return {
            dialog: false,
            roomName: '',
            roomList: [],
            messageList: [],
        };
    },
    methods: {
        clickLogout() {
            localStorage.removeItem('token');
            this.$router.push({ name: 'LoginPage' });
        },
        clickDialog() {
            this.dialog = true;
        },
        onClikCancel() {
            this.dialog = false;
        },
        onClickConfirm() {
            this.roomList.push(
                {
                    id: this.roomList.length + 1,
                    name: this.roomName,
                },
            );
            localStorage.setItem("data-room-list", JSON.stringify(this.roomList));
            this.dialog = false;
        },
        clickEnterChat(id) {
            let room = this.roomList.filter((roomData) => roomData.id === id)[0];
            this.$router.push(
                {
                    name: "ChatRoom",
                    query: { 
                        id: room.id, 
                        name: room.name  
                    }
                }
            );
        },
    },
    computed: {
        //
    },
    mounted() {
        this.roomList = JSON.parse(localStorage.getItem("data-room-list")) || [];
    },
};
</script>