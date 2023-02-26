<script setup>
</script>

<template>
    <div class="wrapper">
        <RouterView/>
    </div>
    <!-- BUTTONS -->
        <!-- <UIButton link="Categories">
            with link
        </UIButton> -->
        <!-- <UIButton>
            without link -->
        <!-- </UIButton> -->

<!-- TSUKUE -->
<!-- 
        <TsukueDesk :data="dishCareStore.ST" :imgs="dishCareStore.imgs" /> -->

<!-- LOGOS -->

        <!-- <UICategoryBlock category="babyCare" title="Baby care. Детская гигиена" :logos="logosStore.logos.babyCareLogos"/>
        <UICategoryBlock category="dishCare" title="Home care. Средства для мытья посуды и по уходу за домом" :logos="logosStore.logos.dishCareLogos"/>
        <UICategoryBlock category="femCare" title="Feminine care. Женская гигиена" :logos="logosStore.logos.femCareLogos"/>
        <UICategoryBlock category="hairCare" title="Hair car. Средства по уходу за волосами" :logos="logosStore.logos.hairCareLogos"/>
        <UICategoryBlock category="laundryCare" title="Laundry. Средства для стирки" :logos="logosStore.logos.laundryCareLogos"/> -->
</template>

<style lang="scss">
@import '@styles/clearStyles.scss';
@import '@styles/fontStyles.scss';


.wrapper {
    display: flex;
    flex-direction: column;
    overflow: hidden;
    min-height: 100%;
    background-color: #fff;
}

[class*="__container"] {
    max-width: 1260px;
    margin: 0 auto;
    font-family: 'Hind', sans-serif;
    font-size: 16px;
    color: #000;
    font-weight: 400;
    font-style: normal;   
}


</style>
