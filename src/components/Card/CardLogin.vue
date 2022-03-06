<template>
    <v-card
        class="mx-auto mt-52"
        max-width="300"
    >
        <v-card-title 
            class="font-semibold text-2xl ml-2"
        >
            Login
        </v-card-title>
        <div class="flex justify-center">
            <input 
                type="text" 
                v-model="value"
                @change="onChange"
                placeholder="Username"
                class="w-5/6 h-10 px-5 bg-gray-200 focus:outline-none 
                rounded-lg font-semilight"
            />
        </div>
        <div class="flex justify-end mt-3 mr-6 mb-3" 
        >
            <button 
                type=text 
                @click="onClick"
                class="font-semibold rounded-md px-4 py-1 shadow-md 
                bg-lightblue text-white"
                    >
                Login
            </button>
        </div>
    </v-card>
</template>

<script>

export default {
    name: 'CardLogin',
    components: {
    },
    model: {
        prop: "value",
        event: "input",
    },
    // props: {
    //     value: {
    //         type: String,
    //         default: ''
    //     },
    // },
    data() {
        return {
            value: this.value,
        };
    },
    methods: {
        onClick() {
            this.$emit("on-click");
            this.value = "";
        },
        onChange() {
            this.$emit("input", this.value);
        },
    },
};
</script>