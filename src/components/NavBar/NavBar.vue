<template>
    <div>
        <v-app-bar 
        app 
        color="light-blue darken-1" 
        dark
        >
            <slot></slot>
        </v-app-bar>
    </div>
</template>

<script>

export default {
    name: 'NavBar',
};
</script>