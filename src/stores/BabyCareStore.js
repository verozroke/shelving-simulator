import { defineStore } from "pinia";

export const useBabyCareStore = defineStore('babyCareStore', {
    state: () => ({
        D2: {
            title: 'Baby care. Детская гигиена',
            status: 'Золотой Продавец',
            conditions: `Собери полку из PSKU, соблюдая стратегию категорий, логику выкладки товаров на полке по SBD стандартам`,
            description: `У тебя в наличии весь ассортимент товаров нашего портфеля из категорий Детская гигиена (Pampers). Необходимо отсортировать PSKU лист для данного типа торговой точки.  
            Все SKU представлены в одном фейсе, вы можете увеличивать фейсы двойным кликом мыши (наведи на SKU и 2 раза кликни левой кнопкой мыши).`
        
        },
        LT: {
            title: 'Baby care. Детская гигиена',
            status: 'Золотой Продавец',
            conditions: `Собери полку из PSKU, соблюдая стратегию категорий, логику выкладки товаров на полке по SBD стандартам`,
            description: `У тебя в наличии весь ассортимент товаров нашего портфеля из категорий Детская гигиена (Pampers). Необходимо отсортировать PSKU лист для данного типа торговой точки.  
            Все SKU представлены в одном фейсе, вы можете увеличивать фейсы двойным кликом мыши (наведи на SKU и 2 раза кликни левой кнопкой мыши).`

        },
        OMA: {
            title: 'Baby care. Детская гигиена',
            status: 'Золотой Продавец',
            conditions: `Собери полку из PSKU, соблюдая стратегию категорий, логику выкладки товаров на полке по SBD стандартам`,
            description: `У тебя в наличии весь ассортимент товаров нашего портфеля из категорий Детская гигиена (Pampers). Необходимо отсортировать PSKU лист для данного типа торговой точки.  
            Все SKU представлены в одном фейсе, вы можете увеличивать фейсы двойным кликом мыши (наведи на SKU и 2 раза кликни левой кнопкой мыши).`

        },
        SM: {
            title: 'Baby care. Детская гигиена',
            status: 'Золотой Продавец',
            conditions: `Собери полку из PSKU, соблюдая стратегию категорий, логику выкладки товаров на полке по SBD стандартам`,
            description: `У тебя в наличии весь ассортимент товаров нашего портфеля из категорий Детская гигиена (Pampers). Необходимо отсортировать PSKU лист для данного типа торговой точки.  
            Все SKU представлены в одном фейсе, вы можете увеличивать фейсы двойным кликом мыши (наведи на SKU и 2 раза кликни левой кнопкой мыши).`
        },
        imgs: [
            {id: 1, src: './categories/babyCare/1.png', isWide: true},
            {id: 2, src: './categories/babyCare/2.png', isWide: true},
            {id: 3, src: './categories/babyCare/3.png', isWide: true},
            {id: 4, src: './categories/babyCare/4.png', isWide: true},
            {id: 5, src: './categories/babyCare/5.png', isWide: true},
            {id: 6, src: './categories/babyCare/6.png', isWide: true},
            {id: 7, src: './categories/babyCare/7.png', isWide: true},
            {id: 8, src: './categories/babyCare/8.png', isWide: true},
            {id: 9, src: './categories/babyCare/9.png', isWide: true},
            {id: 10, src: './categories/babyCare/10.png', isWide: true},
            {id: 11, src: './categories/babyCare/11.png', isWide: true},
            {id: 12, src: './categories/babyCare/12.png', isWide: true},
            {id: 13, src: './categories/babyCare/13.png', isWide: true},
            {id: 14, src: './categories/babyCare/14.png', isWide: true},
            {id: 15, src: './categories/babyCare/15.png', isWide: true},
            {id: 16, src: './categories/babyCare/16.png', isWide: true},
            {id: 17, src: './categories/babyCare/17.png', isWide: true},
            {id: 18, src: './categories/babyCare/18.png', isWide: true},
            {id: 19, src: './categories/babyCare/19.png', isWide: true},
            {id: 20, src: './categories/babyCare/20.png', isWide: true},
            {id: 21, src: './categories/babyCare/21.png', isWide: true},
            {id: 22, src: './categories/babyCare/22.png', isWide: true},
            {id: 23, src: './categories/babyCare/23.png', isWide: true},
            {id: 24, src: './categories/babyCare/24.png', isWide: true},
            {id: 25, src: './categories/babyCare/25.png', isWide: true},
            {id: 26, src: './categories/babyCare/26.png', isWide: true},
            {id: 27, src: './categories/babyCare/27.png', isWide: true},
            {id: 28, src: './categories/babyCare/28.png', isWide: true},
            {id: 29, src: './categories/babyCare/29.png', isWide: true},
            {id: 30, src: './categories/babyCare/30.png', isWide: true},
            {id: 31, src: './categories/babyCare/31.png', isWide: true},
            {id: 32, src: './categories/babyCare/32.png', isWide: true},
            {id: 33, src: './categories/babyCare/33.png', isWide: true},
            {id: 34, src: './categories/babyCare/34.png', isWide: true},
            {id: 35, src: './categories/babyCare/35.png', isWide: true},
            {id: 36, src: './categories/babyCare/36.png', isWide: true},
            {id: 37, src: './categories/babyCare/37.png', isWide: true},
            {id: 38, src: './categories/babyCare/38.png', isWide: true},
            {id: 39, src: './categories/babyCare/39.png', isWide: true},
            {id: 40, src: './categories/babyCare/40.png', isWide: true},
            {id: 41, src: './categories/babyCare/41.png', isWide: true},
            {id: 42, src: './categories/babyCare/42.png', isWide: true},
            {id: 43, src: './categories/babyCare/43.png', isWide: true},
            {id: 44, src: './categories/babyCare/44.png', isWide: true},
            {id: 45, src: './categories/babyCare/45.png', isWide: true},
            {id: 46, src: './categories/babyCare/46.png', isWide: true},
            {id: 47, src: './categories/babyCare/47.png', isWide: true},
            {id: 48, src: './categories/babyCare/48.png', isWide: true},
            {id: 49, src: './categories/babyCare/49.png', isWide: true},
            {id: 50, src: './categories/babyCare/50.png', isWide: true},
            {id: 51, src: './categories/babyCare/51.png', isWide: true},
            {id: 52, src: './categories/babyCare/52.png', isWide: true},
            {id: 53, src: './categories/babyCare/53.png', isWide: true},
            {id: 54, src: './categories/babyCare/54.png', isWide: true},
            {id: 55, src: './categories/babyCare/55.png', isWide: true},
            {id: 56, src: './categories/babyCare/56.png', isWide: true},
            {id: 57, src: './categories/babyCare/57.png', isWide: true},
            {id: 58, src: './categories/babyCare/58.png', isWide: true},
            {id: 59, src: './categories/babyCare/59.png', isWide: true},
            {id: 60, src: './categories/babyCare/60.png', isWide: true},
            {id: 61, src: './categories/babyCare/61.png', isWide: true},
            {id: 62, src: './categories/babyCare/62.png', isWide: true},
            {id: 63, src: './categories/babyCare/63.png', isWide: true},
            {id: 64, src: './categories/babyCare/64.png', isWide: true},
            {id: 65, src: './categories/babyCare/65.png', isWide: true},
            {id: 66, src: './categories/babyCare/66.png', isWide: true},
            {id: 67, src: './categories/babyCare/67.png', isWide: true},
            {id: 68, src: './categories/babyCare/68.png', isWide: true},
            {id: 69, src: './categories/babyCare/69.png', isWide: true},
            {id: 70, src: './categories/babyCare/70.png', isWide: true},
            {id: 71, src: './categories/babyCare/71.png', isWide: true},
            {id: 72, src: './categories/babyCare/72.png', isWide: true},
            {id: 73, src: './categories/babyCare/73.png', isWide: true},
            {id: 74, src: './categories/babyCare/74.png', isWide: true},
            {id: 75, src: './categories/babyCare/75.png', isWide: true},
            {id: 76, src: './categories/babyCare/76.png', isWide: true},
            {id: 77, src: './categories/babyCare/77.png', isWide: true},
            {id: 78, src: './categories/babyCare/78.png', isWide: true},
            {id: 79, src: './categories/babyCare/79.png', isWide: true},

        ]
    })
})  