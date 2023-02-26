import { defineStore } from "pinia";

const useLogosStore = defineStore('logosStore', {
    state: () => ({
        logos: {
            babyCareLogos: [
                './logos/babyCare_1.png',
            ],
            dishCareLogos: [
                './logos/dishCare_1.png',
                './logos/dishCare_2.png',
                './logos/dishCare_3.png',
            ],
            femCareLogos: [
                './logos/femCare_1.png',
                './logos/femCare_2.jpg',
                './logos/femCare_3.jpg',
            ],
            hairCareLogos: [
                './logos/hairCare_1.png',
                './logos/hairCare_2.jpg',
                './logos/hairCare_3.png',
                './logos/hairCare_4.png',
            ],
            laundryCareLogos: [
                './logos/laundryCare_1.png',
                './logos/laundryCare_2.png',
                './logos/laundryCare_3.jpg',
            ],
        }
    })
})

export default useLogosStore