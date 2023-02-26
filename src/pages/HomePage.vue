<template>
    <div class="home">
        <div class="home__container">
            <div class="home__hero"><img src="@img/assets/hero.jpg" alt=""></div>
            <div class="home__box">
                <div class="home__text">Здесь вы можете в онлайн режиме изучать и тренировать навыки правильной выкладки продукции на полках согласно SBD стандартам</div>
                <div class="home__title">ВЫБЕРИ КАТЕГОРИЮ</div>
            <div class="home__arrow"><img src="@img/icons/arrow.png" alt=""></div>
            <div class="home__categories">
                    <UICategoryBlock category="babyCare" title="Baby care. Детская гигиена" :logos="logosStore.logos.babyCareLogos"/>
                    <UICategoryBlock category="dishCare" title="Home care. Средства для мытья посуды и по уходу за домом" :logos="logosStore.logos.dishCareLogos"/>
                    <UICategoryBlock category="femCare" title="Feminine care. Женская гигиена" :logos="logosStore.logos.femCareLogos"/>
                    <UICategoryBlock category="hairCare" title="Hair car. Средства по уходу за волосами" :logos="logosStore.logos.hairCareLogos"/>
                    <UICategoryBlock category="laundryCare" title="Laundry. Средства для стирки" :logos="logosStore.logos.laundryCareLogos"/>
            </div>
            </div>
        </div>
    </div>
</template>

<script setup>
import TsukueDesk from '../components/TsukueDesk.vue';
import UIButton from '../components/UI/UIButton.vue';
import UICategoryBlock from '../components/UI/UICategoryBlock.vue';
import UIDescriptionBlock from '../components/UI/UIDescriptionBlock.vue';



// LOGOS

import useLogosStore from '@stores/logosStore'

const logosStore = useLogosStore()

// TSUKUE TEST

// import { useDishCareStore } from '../stores/DishCareStore';

// const dishCareStore = useDishCareStore()

</script>

<style lang="scss" scoped>

.home {
    overflow: hidden;
    padding: 1em 0;
    &__container {
        display: flex;
        flex-direction: column;
        align-items: center;
        filter: drop-shadow(5px 5px 5px rbga(0, 0, 0, 1))
    }
    &__hero {
        width: 1200px;
        margin: 0 0 2em 0;
        & img {
            width: 1200px;
            border-radius: 25px;
        }
    }
    &__box {
        display: flex;
        flex-direction: column;
        align-items: center;
    }
    &__title {
        font-size: 20px;
        font-family: 'Noto Sans', sans-serif;
        font-weight: 700;
        color: #014743;
        margin: 0 0 .5em 0;

    }
    &__arrow {
        height: 25px;
        width: 25px;
        & img {
            height: 25px;
            width: 25px;
        }
        margin: 0 0 1em 0;
    }
    &__categories {
        justify-content: center;
        width: 100%;
        display: flex;
        align-items: center;
        gap: 1em;
        flex-wrap: wrap;
    }
    &__text {
        font-size: 16px;
        width: 800px;
        text-align: center;
        font-family: 'Noto Sans', sans-serif;
        font-weight: 400;
        color: #014743;
        margin: 0 0 1em 0;
        line-height: 1.1;
    }
}

</style>