<template>
    <RouterLink :to="`/${category}`">
        <div class="block">
            <div class="block__title">{{ title }}</div>
            <ul class="block__list">
                <li v-for="logo in logos" class="block__el"><img :src="logo" alt="" class="block__logo"></li>
            </ul>
        </div>
    </RouterLink>
</template>

<script setup>
const props = defineProps({
    category: String,
    title: String,
    logos: Array,
})

</script>

<style lang="scss" scoped>

.block {
    height: 145.2px;
    max-height: fit-content;
    padding: 20px 10px;
    min-width: 400px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 2em;
    border: 2px solid rgb(229, 229, 229);

    // border: 2px solid  #014743;
    border-radius: 16px;
    transition: .2s;
    &:hover {
        background-color: rgba(226, 226, 226, 0.696);
        transition: .2s;
    }
    &__title {
        color: #4b4b4b;
        text-align: center;
        font-size: 16px;
        font-family: 'Noto Sans', sans-serif;
        max-width: 300px;
        font-weight: 700;
        line-height: 15px;
    }
    &__list {
        display: flex;
        flex-wrap: wrap;
        gap: 2em;
        max-width: 550px;
    }
    &__el {

    }
    &__logo {
        border-radius: 10px;
        height: 40px;
        max-width: 118px;
        object-fit: contain;
    }
}
</style>