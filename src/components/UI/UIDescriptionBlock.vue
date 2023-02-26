<template>
    <div class="block">
        <div class="block__type"><b>Тип торговой точки: </b> {{ $route.params.marketType.toUpperCase() }}</div>
        <div class="block__status"><b>Статус:</b> {{ status}}</div>
        <div class="block__conditions"><b>Условия:</b> {{ conditions }}</div>
        <div class="block__description">{{ description }}</div>
    </div>
</template>

<script setup>

const props = defineProps({
    status: String,
    conditions: String,
    description: String,
})

</script>

<style lang="scss" scoped>

.block {
    font-size: 18px;
    width: 600px;
    line-height: 24px;
    color: rgb(1, 71, 67);
    &__type {
        width: 100%;
    }
    &__status {
        width: 100%;
    }
    &__conditions {
        margin: 2em 0 2em 0;
        width: 100%;
        line-height: 22px;

    }
    &__description {
        line-height: 22px;
        width: 100%;
    }

}

</style>