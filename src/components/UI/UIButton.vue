<template>
    <template v-if="link !== ''">
        <RouterLink class="button" :to="{name: link}">
            <slot/>
        </RouterLink>
    </template>
    <template v-else>
        <div class="button">
            <slot/>
        </div>
    </template>
</template>

<script setup>

const props = defineProps({
    link: String
})

</script>

<style lang="scss" scoped>

.button {
        background-color: #fff;
        color: #014743;
        font-weight: 700;
        padding: 1em 2em;
        margin: 0 0 1em 0;
        border-radius: .3em;
        border: 3px solid #014743;
        transition: .4s;
        &:hover {
            background-color: #014743;
            color: #fff;
            transition: .4s;
        }   
    }
</style>