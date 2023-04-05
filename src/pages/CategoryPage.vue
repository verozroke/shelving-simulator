<template>
    <div class="category">
        <div class="category__container">
            <div class="category__box">
                <RouterLink :to="{name: 'Home'}"><div class="category__logo"><img src="@img/assets/logo.png" alt=""></div></RouterLink>
                <div class="category__title">КАТЕГОРИЯ</div>
                <div class="category__subtitle">{{ store.OMA.title }}</div>
                <div class="category__block">
                    <div class="category__shop"><img src="@img/assets/shop.png" alt=""></div>
                    <div class="category__choice">
                        <div class="category__text">ВЫБЕРИ ТОРГОВУЮ ТОЧКУ</div>
                        <div class="category__arrow"><img src="@img/icons/arrow.png" alt=""></div>
                    </div>
                </div>
                <div class="category__list" :class="{'wide': $route.params.category === 'femCare'}">
                    <template v-if="$route.params.category === 'laundryCare' || $route.params.category === 'hairCare'">
                        <UILevelBlock marketType="st" :level-number="1" text="Small traditional store/Малый магазин шаговой доступности" />
                        <UILevelBlock marketType="lt" :level-number="2" text="Large traditional store/Большой магазин шаговой доступности" />
                        <UILevelBlock marketType="oma" :level-number="3" text="Open market/Открытый рынок" />
                        <UILevelBlock marketType="x2" :level-number="4" text="Small home improvement/Хозяйственный магазин" />
                    </template>
                    <template v-else-if="$route.params.category === 'dishCare'"> 
                        <UILevelBlock marketType="st" :level-number="1" text="Small traditional store/Малый магазин шаговой доступности" />
                        <UILevelBlock marketType="mt" :level-number="2" text="Medium traditional store/Средний магазин шаговой доступности" />
                        <UILevelBlock marketType="oma" :level-number="3" text="Open market/Открытый рынок" />
                        <UILevelBlock marketType="x2" :level-number="4" text="Small home improvement/Хозяйственный магазин" />
                    </template>
                    <template v-else-if="$route.params.category === 'babyCare'">
                        <UILevelBlock marketType="d2" :level-number="1" text="Pharmacy Small/Малая аптека " />
                        <UILevelBlock marketType="lt" :level-number="2" text="Large traditional store/Большой магазин шаговой доступности" />
                        <UILevelBlock marketType="oma" :level-number="3" text="Open market/Открытый рынок" />
                        <UILevelBlock marketType="sm" :level-number="4" text="Small Minimarket/Малый минимаркет" />
                    </template>
                    <template v-else-if="$route.params.category === 'femCare'">
                        <UILevelBlock marketType="st" :level-number="1" text="Small traditional store/Малый магазин шаговой доступности" />
                        <UILevelBlock marketType="lt" :level-number="2" text="Large traditional store/Большой магазин шаговой доступности" />
                        <UILevelBlock marketType="d2" :level-number="3" text="Pharmacy Small/Малая аптека " />
                        <UILevelBlock marketType="x2" :level-number="4" text="Small home improvement/Хозяйственный магазин" />
                        <UILevelBlock marketType="oma" :level-number="5" text="Open market/Открытый рынок" />
                    </template>
                </div>
            </div>
        </div>
    </div>
    <div>
        <!-- {{ $route.params.category }} -->
        
        
        <!-- <RouterLink :to="`${$route.params.category}/st`">ST</RouterLink>
        <RouterLink :to="`${$route.params.category}/mt`">MT</RouterLink>
        <RouterLink :to="`${$route.params.category}/oma`">OMA</RouterLink>
        <RouterLink :to="`${$route.params.category}/x2`">X2</RouterLink> -->
    </div>
</template>

<script setup>
import UILevelBlock from '../components/UI/UILevelBlock.vue';
import { useRoute } from 'vue-router';
import { useDishCareStore } from '@stores/DishCareStore';
import { useFemCareStore } from '@stores/FemCareStore';
import { useHairCareStore } from '@stores/HairCareStore';
import { useBabyCareStore } from '@stores/BabyCareStore';
import { useLaundryCareStore } from '@stores/LaundryCareStore';

const route = useRoute()
let store = null
let data = null
switch (route.params.category) {
    case "dishCare":
        store = useDishCareStore()
        break;
    case "babyCare":
        store = useBabyCareStore()
        break;
    case "femCare":
        store = useFemCareStore()
        break;
    case "hairCare":
        store = useHairCareStore()
        break;
    case "laundryCare":
        store = useLaundryCareStore()
        break;
}

</script>

<style lang="scss" scoped>

.category {
    padding: 2em 0 0 0;
    &__container {
        display: flex;
        flex-direction: column;
        align-items: center;
    }
    &__box {
        width: 700px;
        display: flex;
        flex-direction: column;
        align-items: center;
        position: relative;
    }
    &__title {
        font-family: 'Noto Sans', sans-serif;
        font-weight: 700;
        color: #014743;
        font-size: 18px;
        line-height: 1.4;
    }
    &__subtitle {
        font-family: 'Noto Sans', sans-serif;
        font-weight: 700;
        color: #014743;
        font-size: 18px;
        line-height: 1.4;
        width: 380px;
        text-align: center;
        margin-bottom: 2em;
    }
    &__logo {
        position: absolute;
        left: 0;
        top: 0;
        width: 80px;
        & img {
            width: 80px;
        }
    }
    &__block {
        display: flex;
        justify-content: space-between;
        width: 370px;
        height: 112px;   
    }
    &__shop {
        height: 112px;
        width: 111px;
        & img {
            height: 112px;
            width: 111px;
        }
    }
    &__choice {
        display: flex;
        flex-direction: column;
        align-items: center;
        height: 180px;
        justify-content: center;
        gap: 1em;
    }
    &__arrow {
        height: 50px;
        width: 50px;
        & img {
            width: 50px;
            height: 50px;
        }
    }
    &__text {
        font-size: 18px;
        font-family: 'Noto Sans', sans-serif;
        font-weight: 700;
        color: #014743;
    }
    &__list {
        margin: 3em;
        height: 400px;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        &.wide {
            height: 500px;
        }
    }
}

</style>