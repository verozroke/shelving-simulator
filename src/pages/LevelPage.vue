<template>
    <div class="level">
        <div class="level__container">
            <div class="level__box">
                <RouterLink :to="{name: 'Home'}"><div class="level__logo"><img src="@img/assets/logo.png" alt=""></div></RouterLink>
                <div class="level__title">КАТЕГОРИЯ</div>
                <div class="level__subtitle">{{ data.title }}</div>
                <TsukueDesk :data="data" :imgs="store.imgs"/>
            </div>
        </div>
    </div>
</template>

<script setup>
import TsukueDesk from '../components/TsukueDesk.vue';
import { useDishCareStore } from '@stores/DishCareStore';
import { useFemCareStore } from '@stores/FemCareStore';
import { useHairCareStore } from '@stores/HairCareStore';
import { useBabyCareStore } from '@stores/BabyCareStore';
import { useLaundryCareStore } from '@stores/LaundryCareStore';
import { useRoute } from 'vue-router';


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

switch (route.params.marketType) {
    case "st":
        data = store.ST
        break
    case "lt":
        data = store.LT
        break
    case 'mt':
        data = store.MT
        break
    case 'oma':
        data = store.OMA
        break
    case 'x2':
        data = store.X2
        break
    case 'd2':
        data = store.D2
        break
    case 'b2':
        data = store.B2
        break
    case 'sm':
        data = store.SM
        break
}


</script>

<style lang="scss" scoped>

.level {
    padding: 2em 0 2em 0;
    &__container {
        display: flex;
        flex-direction: column;
        align-items: center;
    }
    &__box {
        width: 600px;
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
}

</style>