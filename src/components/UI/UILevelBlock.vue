<template>
    <RouterLink :to="`${$route.params.category}/${marketType}`">
        <div class="block">
            <div class="block__title"><b>Задание: №{{ levelNumber }}</b> — {{ marketType.toUpperCase() }}</div>
            <div class="block__text">{{ text }}</div>    
        </div>
    </RouterLink>
</template>

<script setup>
const props = defineProps({
    levelNumber: Number,
    marketType: String,
    text: String,
})
</script>

<style lang="scss" scoped>

.block {
    padding: 0 5px 0 10px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    width: 600px;
    border-radius: 10px;
    color: rgb(1, 71, 67);
    border: 1px solid rgb(229, 229, 229);
    height: 85px;
    font-size: 18px;
    font-family: 'Noto Sans', sans-serif;
    font-weight: 500;
    line-height: 1.4;
    transition: .3s;
    background-color: #fff;
    &:visited {
        color: rgb(1, 71, 67);
    }
    &:hover {
        transition: .3s;
        background-color: rgb(1, 71, 67);
        color: #fff;
    }
}

</style>