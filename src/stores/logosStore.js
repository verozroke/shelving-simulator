import { defineStore } from "pinia";

const useLogosStore = defineStore('logosStore', {
    state: () => ({
        logos: {
            babyCareLogos: [
                '/src/img/logos/babyCare_1.png',
            ],
            dishCareLogos: [
                '/src/img/logos/dishCare_1.png',
                '/src/img/logos/dishCare_2.png',
                '/src/img/logos/dishCare_3.png',
            ],
            femCareLogos: [
                '/src/img/logos/femCare_1.png',
                '/src/img/logos/femCare_2.jpg',
                '/src/img/logos/femCare_3.jpg',
            ],
            hairCareLogos: [
                '/src/img/logos/hairCare_1.png',
                '/src/img/logos/hairCare_2.jpg',
                '/src/img/logos/hairCare_3.png',
                '/src/img/logos/hairCare_4.png',
            ],
            laundryCareLogos: [
                '/src/img/logos/laundryCare_1.png',
                '/src/img/logos/laundryCare_2.png',
                '/src/img/logos/laundryCare_3.jpg',
            ],
        }
    })
})

export default useLogosStore