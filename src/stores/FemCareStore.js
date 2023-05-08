import { defineStore } from "pinia";

export const useFemCareStore = defineStore('femCareStore', {
    state: () => ({
        ST: {
            title: 'Feminine Hygiene. Женская гигиена',
            status: 'Золотой Продавец',
            conditions: `Собери полку из PSKU, соблюдая стратегию категорий, логику выкладки товаров на полке по SBD стандартам`,
            description: `У тебя в наличии весь ассортимент товаров нашего портфеля из категорий Женская гигиена (Always, Naturella, Discreet). Необходимо из данного ассортимента отсортировать PSKU лист для указанного типа торговой точки.  
            \nВсе SKU представлены в одном фейсе, вы можете увеличивать фейсы двойным кликом мыши (наведи на SKU и 2 раза кликни левой кнопкой мыши).
            `
        },
        LT: {
            title: 'Feminine Hygiene. Женская гигиена',
            status: 'Золотой Продавец',
            conditions: `Собери полку из PSKU, соблюдая стратегию категорий, логику выкладки товаров на полке по SBD стандартам`,
            description: `У тебя в наличии весь ассортимент товаров нашего портфеля из категорий Женская гигиена (Always, Naturella, Discreet). Необходимо из данного ассортимента отсортировать PSKU лист для указанного типа торговой точки.  
            \nВсе SKU представлены в одном фейсе, вы можете увеличивать фейсы двойным кликом мыши (наведи на SKU и 2 раза кликни левой кнопкой мыши).
            `
        },
        D2: {
            title: 'Feminine Hygiene. Женская гигиена',
            status: 'Золотой Продавец',
            conditions: `Собери полку из PSKU, соблюдая стратегию категорий, логику выкладки товаров на полке по SBD стандартам`,
            description: `У тебя в наличии весь ассортимент товаров нашего портфеля из категорий Женская гигиена (Always, Naturella, Discreet). Необходимо из данного ассортимента отсортировать PSKU лист для указанного типа торговой точки.  
            \nВсе SKU представлены в одном фейсе, вы можете увеличивать фейсы двойным кликом мыши (наведи на SKU и 2 раза кликни левой кнопкой мыши).
            `
        },
        X2: {
            title: 'Feminine Hygiene. Женская гигиена',
            status: 'Золотой Продавец',
            conditions: `Собери полку из PSKU, соблюдая стратегию категорий, логику выкладки товаров на полке по SBD стандартам`,
            description: `У тебя в наличии весь ассортимент товаров нашего портфеля из категорий Женская гигиена (Always, Naturella, Discreet). Необходимо из данного ассортимента отсортировать PSKU лист для указанного типа торговой точки.  
            \nВсе SKU представлены в одном фейсе, вы можете увеличивать фейсы двойным кликом мыши (наведи на SKU и 2 раза кликни левой кнопкой мыши).
            `
        },
        OMA: {
            title: 'Feminine Hygiene. Женская гигиена',
            status: 'Золотой Продавец',
            conditions: `Собери полку из PSKU, соблюдая стратегию категорий, логику выкладки товаров на полке по SBD стандартам`,
            description: `У тебя в наличии весь ассортимент товаров нашего портфеля из категорий Женская гигиена (Always, Naturella, Discreet). Необходимо из данного ассортимента отсортировать PSKU лист для указанного типа торговой точки.  
            \nВсе SKU представлены в одном фейсе, вы можете увеличивать фейсы двойным кликом мыши (наведи на SKU и 2 раза кликни левой кнопкой мыши).
            `
        },
        imgs: [
            {id: 1, src: './categories/femCare/1.png', isWide: true},
            {id: 2, src: './categories/femCare/2.png', isWide: true},
            {id: 3, src: './categories/femCare/3.png', isWide: true},
            {id: 4, src: './categories/femCare/4.png', isWide: true},
            {id: 5, src: './categories/femCare/5.png', isWide: true},
            {id: 6, src: './categories/femCare/6.png', isWide: true},
            {id: 9, src: './categories/femCare/9.png', isWide: true},
            {id: 10, src: './categories/femCare/10.png', isWide: true},
            {id: 11, src: './categories/femCare/11.png', isWide: true},
            {id: 12, src: './categories/femCare/12.png', isWide: true},
            {id: 13, src: './categories/femCare/13.png', isWide: true},
            {id: 14, src: './categories/femCare/14.png', isWide: true},
            {id: 15, src: './categories/femCare/15.png', isWide: true},
            {id: 16, src: './categories/femCare/16.png', isWide: true},
            {id: 17, src: './categories/femCare/17.png', isWide: true},
            {id: 18, src: './categories/femCare/18.png', isWide: true},
            {id: 19, src: './categories/femCare/19.png', isWide: true},
            {id: 20, src: './categories/femCare/20.png', isWide: true},
            {id: 21, src: './categories/femCare/21.png', isWide: true},
            {id: 22, src: './categories/femCare/22.png', isWide: true},
            {id: 23, src: './categories/femCare/23.png', isWide: true},
            {id: 24, src: './categories/femCare/24.png', isWide: true},
            {id: 25, src: './categories/femCare/25.png', isWide: true},
            {id: 26, src: './categories/femCare/26.png', isWide: true},
            {id: 27, src: './categories/femCare/27.png', isWide: true},
            {id: 28, src: './categories/femCare/28.png', isWide: true},
            {id: 29, src: './categories/femCare/29.png', isWide: true},
            {id: 30, src: './categories/femCare/30.png', isWide: true},
            {id: 31, src: './categories/femCare/31.png', isWide: true},
            {id: 32, src: './categories/femCare/32.png', isWide: true},
            {id: 33, src: './categories/femCare/33.png', isWide: true},
            {id: 34, src: './categories/femCare/34.png', isWide: true},
            {id: 35, src: './categories/femCare/35.png', isWide: true},
            {id: 36, src: './categories/femCare/36.png', isWide: true},
            {id: 37, src: './categories/femCare/37.png', isWide: true},
            {id: 38, src: './categories/femCare/38.png', isWide: true},
            {id: 39, src: './categories/femCare/39.png', isWide: true},
            {id: 40, src: './categories/femCare/40.png', isWide: true},
            {id: 41, src: './categories/femCare/41.png', isWide: true},
            {id: 42, src: './categories/femCare/42.png', isWide: true},
            {id: 43, src: './categories/femCare/43.png', isWide: true},
            {id: 44, src: './categories/femCare/44.png', isWide: true},
            {id: 45, src: './categories/femCare/45.png', isWide: true},
            {id: 46, src: './categories/femCare/46.png', isWide: true},
            {id: 47, src: './categories/femCare/47.png', isWide: true},
            {id: 48, src: './categories/femCare/48.png', isWide: true},
            {id: 49, src: './categories/femCare/49.png', isWide: true},
            {id: 50, src: './categories/femCare/50.png', isWide: true},
            {id: 51, src: './categories/femCare/51.png', isWide: true},
            {id: 52, src: './categories/femCare/52.png', isWide: true},
            {id: 54, src: './categories/femCare/54.png', isWide: true},
            {id: 55, src: './categories/femCare/55.png', isWide: true},
            {id: 56, src: './categories/femCare/56.png', isWide: true},
            {id: 57, src: './categories/femCare/57.png', isWide: true},
            {id: 58, src: './categories/femCare/58.png', isWide: true},
            {id: 59, src: './categories/femCare/59.png', isWide: true},
            {id: 60, src: './categories/femCare/60.png', isWide: true},
            {id: 61, src: './categories/femCare/61.png', isWide: true},
            {id: 62, src: './categories/femCare/62.png', isWide: true},
            {id: 63, src: './categories/femCare/63.png', isWide: true},
            {id: 64, src: './categories/femCare/64.png', isWide: true},
            {id: 65, src: './categories/femCare/65.png', isWide: true},
            {id: 66, src: './categories/femCare/66.png', isWide: true},
            {id: 67, src: './categories/femCare/67.png', isWide: true},
            {id: 68, src: './categories/femCare/68.png', isWide: true},
            {id: 69, src: './categories/femCare/69.png', isWide: true},
            {id: 70, src: './categories/femCare/70.png', isWide: true},
            {id: 71, src: './categories/femCare/71.png', isWide: true},
            {id: 72, src: './categories/femCare/72.png', isWide: true},
            {id: 73, src: './categories/femCare/73.png', isWide: true},
            {id: 74, src: './categories/femCare/74.png', isWide: true},
            {id: 75, src: './categories/femCare/75.png', isWide: true},
            {id: 76, src: './categories/femCare/76.png', isWide: true},
            {id: 77, src: './categories/femCare/77.png', isWide: true},
            {id: 78, src: './categories/femCare/78.png', isWide: true},
            {id: 79, src: './categories/femCare/79.png', isWide: true},      
            {id: 80, src: './categories/femCare/80.png', isWide: true},            
            {id: 81, src: './categories/femCare/81.png', isWide: true},            
            {id: 82, src: './categories/femCare/82.png', isWide: true},            
            {id: 83, src: './categories/femCare/83.png', isWide: true},            
            {id: 84, src: './categories/femCare/84.png', isWide: true},            
            {id: 85, src: './categories/femCare/85.png', isWide: true},            
            {id: 86, src: './categories/femCare/86.png', isWide: true},            
            {id: 87, src: './categories/femCare/87.png', isWide: true},            
            {id: 88, src: './categories/femCare/88.png', isWide: true},            
        ]
    })
})  