<template>
    <v-card>
        <v-card-title>
             Create new chat room
        </v-card-title>
        <div class="flex justify-center">
            <input 
                type="text" 
                v-model="value"
                @change="onChange"
                placeholder="Room name"
                class="w-5/6 h-10 px-5 bg-gray-200 focus:outline-none rounded-lg font-semilight"
            /> 
        </div> 
        <div class="flex justify-end mt-3 mr-6 mb-3 gap-1">
            <button
                @click="clickCancel"
                class="bg-white text-black font-semibold rounded-md 
                        px-4 py-1 shadow-md"
            >
                Cancel
            </button>
            <button
                @click="clickConfirm"
                class="bg-lightblue text-white font-semibold rounded-md 
                        px-4 py-1 shadow-md"
            >
                Confirm
            </button>
        </div>
    </v-card>
</template>

<script>
export default {
    name: 'CardCreateRoom',
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
        clickConfirm() {
            this.$emit('click-confirm');
            this.value = '';
        },
        clickCancel() {
            this.$emit('click-cancel');
        },
        onChange() { 
            this.$emit("input", this.value); 
        },
    },
};
</script>