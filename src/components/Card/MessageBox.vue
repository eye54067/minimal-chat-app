<template>
    <div class="w-full p-5" :class="{[`flex justify-end`]: usernameId === username }">
        <div class="flex flex-col ">
            <h3 class="font-semibold" :class="{[`flex justify-end`]: usernameId === username }">{{ username }}</h3>
            <p class="bg-white rounded-md p-2 w-fit"  :class="{[`flex justify-end`]: usernameId === username }">{{ message }}</p>
        </div>
    </div>
</template>

<script>
import { auth } from "@/utils";

export default {
    name: "MessageBox",
    props: ['username', 'message'],
    data() {
        return {
            usernameId: auth.getUsername()
        };
    },
};
</script>