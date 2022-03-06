<template>
    <footer 
            class="bg-white text-center
            fixed inset-x-0 bottom-0 p-5"
        >
            <div class="flex justify-start">
                <input 
                    type="text" 
                    v-model="value"
                    @change="onChange"
                    class="w-80 h-10 px-5 bg-gray-200 focus:outline-none rounded-lg font-semilight"
                />
                <div class="mt-2 ml-2">
                    <span class="material-icons" @click="clickSend">send</span>
                </div>
            </div>
            
        </footer>
</template>

<script>
export default {
    name: 'InputMessage',
    model: {
        prop: "value",
        event: "input",
    },
    data() {
        return {
            value: this.value,
        };
    },
    methods: {
        onChange() { 
            this.$emit("input", this.value); 
        },
        clickSend() {
            this.$emit('click-send'); 
            this.value = '';
        },
    },
};
</script>