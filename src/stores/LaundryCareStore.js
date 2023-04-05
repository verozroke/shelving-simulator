import { defineStore } from "pinia";

export const useLaundryCareStore = defineStore('laundryCareStore', {
    state: () => ({
        ST: {
            title: 'Laundry. Средства для стирки',
            status: 'Золотой Продавец',
            conditions: `Собери полку из PSKU, соблюдая стратегию категорий, логику выкладки товаров на полке по SBD стандартам`,
            description: `У тебя в наличии весь ассортимент товаров нашего портфеля из категорий Средства для стирки (Ariel, Tide, Myth) и ассортимент из PSKU листа из категорий Ополаскиватели (Lenor). Необходимо отсортировать PSKU лист для данного типа торговой точки.  
            Все SKU представлены в одном фейсе, вы можете увеличивать фейсы двойным кликом мыши (наведи на SKU и 2 раза кликни левой кнопкой мыши).`,
        },
        LT: {
            title: 'Laundry. Средства для стирки',
            status: 'Золотой Продавец',
            conditions: `Собери полку из PSKU, соблюдая стратегию категорий, логику выкладки товаров на полке по SBD стандартам`,
            description: `У тебя в наличии весь ассортимент товаров нашего портфеля из категорий Средства для стирки (Ariel, Tide, Myth) и ассортимент из PSKU листа из категорий Ополаскиватели (Lenor). Необходимо отсортировать PSKU лист для данного типа торговой точки.  
            Все SKU представлены в одном фейсе, вы можете увеличивать фейсы двойным кликом мыши (наведи на SKU и 2 раза кликни левой кнопкой мыши).`,
        },
        OMA: {
            title: 'Laundry. Средства для стирки',
            status: 'Золотой Продавец',
            conditions: `Собери полку из PSKU, соблюдая стратегию категорий, логику выкладки товаров на полке по SBD стандартам`,
            description: `У тебя в наличии весь ассортимент товаров нашего портфеля из категорий Средства для стирки (Ariel, Tide, Myth) и ассортимент из PSKU листа из категорий Ополаскиватели (Lenor). Необходимо отсортировать PSKU лист для данного типа торговой точки.  
            Все SKU представлены в одном фейсе, вы можете увеличивать фейсы двойным кликом мыши (наведи на SKU и 2 раза кликни левой кнопкой мыши).`,
        },
        X2: {
            title: 'Laundry. Средства для стирки',
            status: 'Золотой Продавец',
            conditions: `Собери полку из PSKU, соблюдая стратегию категорий, логику выкладки товаров на полке по SBD стандартам`,
            description: `У тебя в наличии весь ассортимент товаров нашего портфеля из категорий Средства для стирки (Ariel, Tide, Myth) и ассортимент из PSKU листа из категорий Ополаскиватели (Lenor). Необходимо отсортировать PSKU лист для данного типа торговой точки.  
            Все SKU представлены в одном фейсе, вы можете увеличивать фейсы двойным кликом мыши (наведи на SKU и 2 раза кликни левой кнопкой мыши).`,
        },
        imgs: [
            {id: 1, src: './categories/laundryCare/1.png', isWide: true},
            {id: 2, src: './categories/laundryCare/2.png', isWide: true},
            {id: 3, src: './categories/laundryCare/3.png', isWide: true},
            {id: 4, src: './categories/laundryCare/4.png', isWide: true},
            {id: 5, src: './categories/laundryCare/5.png', isWide: true},
            {id: 6, src: './categories/laundryCare/6.png', isWide: true},
            {id: 7, src: './categories/laundryCare/7.png', isWide: true},
            {id: 8, src: './categories/laundryCare/8.png', isWide: true},
            {id: 9, src: './categories/laundryCare/9.png', isWide: true},
            {id: 10, src: './categories/laundryCare/10.png', isWide: true},
            {id: 11, src: './categories/laundryCare/11.png', isWide: true},
            {id: 12, src: './categories/laundryCare/12.png', isWide: true},
            {id: 13, src: './categories/laundryCare/13.png', isWide: true},
            {id: 14, src: './categories/laundryCare/14.png', isWide: true},
            {id: 15, src: './categories/laundryCare/15.png', isWide: true},
            {id: 16, src: './categories/laundryCare/16.png', isWide: true},
            {id: 17, src: './categories/laundryCare/17.png', isWide: true},
            {id: 18, src: './categories/laundryCare/18.png', isWide: true},
            {id: 19, src: './categories/laundryCare/19.png', isWide: true},
            {id: 20, src: './categories/laundryCare/20.png', isWide: true},
            {id: 21, src: './categories/laundryCare/21.png', isWide: true},
            {id: 22, src: './categories/laundryCare/22.png', isWide: true},
            {id: 23, src: './categories/laundryCare/23.png', isWide: true},
            {id: 24, src: './categories/laundryCare/24.png', isWide: true},
            {id: 25, src: './categories/laundryCare/25.png', isWide: true},
            {id: 26, src: './categories/laundryCare/26.png', isWide: true},
            {id: 27, src: './categories/laundryCare/27.png', isWide: true},
            {id: 28, src: './categories/laundryCare/28.png', isWide: true},
            {id: 29, src: './categories/laundryCare/29.png', isWide: true},
            {id: 30, src: './categories/laundryCare/30.png', isWide: true},
            {id: 31, src: './categories/laundryCare/31.png', isWide: true},
            {id: 32, src: './categories/laundryCare/32.png', isWide: true},
            {id: 33, src: './categories/laundryCare/33.png', isWide: true},
            {id: 34, src: './categories/laundryCare/34.png', isWide: true},
            {id: 35, src: './categories/laundryCare/35.png', isWide: true},
            {id: 36, src: './categories/laundryCare/36.png', isWide: true},
            {id: 37, src: './categories/laundryCare/37.png', isWide: true},
            {id: 38, src: './categories/laundryCare/38.png', isWide: true},
            {id: 39, src: './categories/laundryCare/39.png', isWide: true},
            {id: 40, src: './categories/laundryCare/40.png', isWide: true},
            {id: 41, src: './categories/laundryCare/41.png', isWide: true},
            {id: 42, src: './categories/laundryCare/42.png', isWide: true},
            {id: 43, src: './categories/laundryCare/43.png', isWide: true},
            {id: 44, src: './categories/laundryCare/44.png', isWide: true},
            {id: 45, src: './categories/laundryCare/45.png', isWide: true},
            {id: 46, src: './categories/laundryCare/46.png', isWide: true},
            {id: 47, src: './categories/laundryCare/47.png', isWide: true},
            {id: 48, src: './categories/laundryCare/48.png', isWide: true},
            {id: 49, src: './categories/laundryCare/49.png', isWide: true},
            {id: 50, src: './categories/laundryCare/50.png', isWide: true},
            {id: 51, src: './categories/laundryCare/51.png', isWide: true},
            {id: 52, src: './categories/laundryCare/52.png', isWide: true},
            {id: 53, src: './categories/laundryCare/53.png', isWide: true},
            {id: 54, src: './categories/laundryCare/54.png', isWide: true},
            {id: 55, src: './categories/laundryCare/55.png', isWide: true},
            {id: 56, src: './categories/laundryCare/56.png', isWide: true},
            {id: 57, src: './categories/laundryCare/57.png', isWide: true},
            {id: 58, src: './categories/laundryCare/58.png', isWide: true},
            {id: 59, src: './categories/laundryCare/59.png', isWide: true},
            {id: 60, src: './categories/laundryCare/60.png', isWide: true},
            {id: 61, src: './categories/laundryCare/61.png', isWide: true},
            {id: 62, src: './categories/laundryCare/62.png', isWide: true},
            {id: 63, src: './categories/laundryCare/63.png', isWide: true},
            {id: 64, src: './categories/laundryCare/64.png', isWide: true},
            {id: 65, src: './categories/laundryCare/65.png', isWide: true},
            {id: 66, src: './categories/laundryCare/66.png', isWide: true},
            {id: 67, src: './categories/laundryCare/67.png', isWide: true},
            {id: 68, src: './categories/laundryCare/68.png', isWide: true},
            {id: 69, src: './categories/laundryCare/69.png', isWide: true},
            {id: 70, src: './categories/laundryCare/70.png', isWide: true},
            {id: 71, src: './categories/laundryCare/71.png', isWide: true},
            {id: 72, src: './categories/laundryCare/72.png', isWide: true},
            {id: 73, src: './categories/laundryCare/73.png', isWide: true},
            {id: 74, src: './categories/laundryCare/74.png', isWide: true},
            {id: 75, src: './categories/laundryCare/75.png', isWide: true},
            {id: 76, src: './categories/laundryCare/76.png', isWide: true},
            {id: 77, src: './categories/laundryCare/77.png', isWide: true},
            {id: 78, src: './categories/laundryCare/78.png', isWide: true},
            {id: 79, src: './categories/laundryCare/79.png', isWide: true},
            {id: 80, src: './categories/laundryCare/80.png', isWide: true},
            {id: 81, src: './categories/laundryCare/81.png', isWide: true},
            {id: 82, src: './categories/laundryCare/82.png', isWide: true},
            {id: 83, src: './categories/laundryCare/83.png', isWide: true},
            {id: 84, src: './categories/laundryCare/84.png', isWide: true},
            {id: 85, src: './categories/laundryCare/85.png', isWide: true},
            {id: 86, src: './categories/laundryCare/86.png', isWide: true},
            {id: 87, src: './categories/laundryCare/87.png', isWide: true},
            {id: 88, src: './categories/laundryCare/88.png', isWide: true},
            {id: 89, src: './categories/laundryCare/89.png', isWide: true},
            {id: 90, src: './categories/laundryCare/90.png', isWide: true},
            {id: 91, src: './categories/laundryCare/91.png', isWide: true},
            {id: 92, src: './categories/laundryCare/92.png', isWide: true},
            {id: 93, src: './categories/laundryCare/93.png', isWide: true},
            {id: 94, src: './categories/laundryCare/94.png', isWide: true},
            {id: 95, src: './categories/laundryCare/95.png', isWide: true},
            {id: 96, src: './categories/laundryCare/96.png', isWide: true},
            {id: 97, src: './categories/laundryCare/97.png', isWide: true},
            {id: 98, src: './categories/laundryCare/98.png', isWide: true},
            {id: 99, src: './categories/laundryCare/99.png', isWide: true},
            {id: 100, src: './categories/laundryCare/100.png', isWide: true},
            {id: 101, src: './categories/laundryCare/101.png', isWide: true},
            {id: 102, src: './categories/laundryCare/102.png', isWide: true},
            {id: 103, src: './categories/laundryCare/103.png', isWide: true},
            {id: 104, src: './categories/laundryCare/104.png', isWide: true},
            {id: 105, src: './categories/laundryCare/105.png', isWide: true},
            {id: 106, src: './categories/laundryCare/106.png', isWide: true},
            {id: 107, src: './categories/laundryCare/107.png', isWide: true},
            {id: 108, src: './categories/laundryCare/108.png', isWide: true},
            {id: 109, src: './categories/laundryCare/109.png', isWide: true},
            {id: 110, src: './categories/laundryCare/110.png', isWide: true},
            {id: 111, src: './categories/laundryCare/111.png', isWide: true},
            {id: 112, src: './categories/laundryCare/112.png', isWide: true},
            {id: 113, src: './categories/laundryCare/113.png', isWide: true},
            {id: 114, src: './categories/laundryCare/114.png', isWide: true},
            {id: 115, src: './categories/laundryCare/115.png', isWide: true},
            {id: 116, src: './categories/laundryCare/116.png', isWide: true},
            {id: 117, src: './categories/laundryCare/117.png', isWide: true},
            {id: 118, src: './categories/laundryCare/118.png', isWide: true},
            {id: 119, src: './categories/laundryCare/119.png', isWide: true},
            {id: 120, src: './categories/laundryCare/120.png', isWide: true},
            {id: 121, src: './categories/laundryCare/121.png', isWide: true},
            {id: 122, src: './categories/laundryCare/122.png', isWide: true},
            {id: 123, src: './categories/laundryCare/123.png', isWide: true},
            {id: 124, src: './categories/laundryCare/124.png', isWide: true},
        ]
    })
})  