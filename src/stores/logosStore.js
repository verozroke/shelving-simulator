import { defineStore } from "pinia";

const useLogosStore = defineStore('logosStore', {
    state: () => ({
        logos: {
            babyCareLogos: [
                './public/logos/babyCare_1.png',
            ],
            dishCareLogos: [
                './public/logos/dishCare_1.png',
                './public/logos/dishCare_2.png',
                './public/logos/dishCare_3.png',
            ],
            femCareLogos: [
                './public/logos/femCare_1.png',
                './public/logos/femCare_2.jpg',
                './public/logos/femCare_3.jpg',
            ],
            hairCareLogos: [
                './public/logos/hairCare_1.png',
                './public/logos/hairCare_2.jpg',
                './public/logos/hairCare_3.png',
                './public/logos/hairCare_4.png',
            ],
            laundryCareLogos: [
                './public/logos/laundryCare_1.png',
                './public/logos/laundryCare_2.png',
                './public/logos/laundryCare_3.jpg',
            ],
        }
    })
})

export default useLogosStore