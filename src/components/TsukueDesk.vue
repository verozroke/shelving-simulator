<template>
    <div class="tsukue">
        <UIDescriptionBlock :status="data.status" :conditions="data.conditions" :description="data.description"/>
        <div class="flexing-sexing">
            <div>
                <div class="tsukue__desk">
                    <div class="tsukue__desk-box">
                        <ul class="tsukue__shelfs">
                            <li class="tsukue__shelf" v-for="_id in 5" :key="_id">
                                <ul :class="`tsukue__2-term-shelf-${_id}`">
                                    <li class="tsukue__cell" v-for="n in 15"></li>
                                </ul>
                            </li>
                        </ul>
                    </div>
                </div>
                <div class="tsukue__limit hidden">Превышен лимит товаров на полке! Первый товар на полке был перемещен обратно.</div>
            </div>
            <div class="bruh">
                <div class="tsukue__box">
                    <ul class="tsukue__items">
                        <li 
                            class="tsukue__item"
                            :class="{wide: item.isWide}" 
                            v-for="item in imgs" 
                            :key="item.id"
                            :id="item.id"
                            @dblclick="copy(item.id)"
                        >
                            <img :src="item.src" :alt="item.id">
                        </li>
                    </ul>
                </div>
                <div id="clearButton" @click="clearList()" class="tsukue__button">Очистить</div>
                <router-link :to="{name: 'Category'}" class="tsukue__button"> {{ '<<< Назад к выбору' }} </router-link>
            </div>
        </div>
    </div> 
</template>

<script setup>
import { onMounted } from 'vue'
import   clearList   from '@helpers/clearList'
import UIDescriptionBlock from './UI/UIDescriptionBlock.vue';


const props = defineProps({
    data: Object,
    imgs: Array,
})



function copy(ID) {
    const parentListNode = document.querySelector(".tsukue__items");
    const child = document.getElementById(`${ID}`)
    const child2 = child.cloneNode(true)
    parentListNode.appendChild(child2)
}


onMounted(() => {   // works when component is load (mounted)
    dragula([
        document.querySelector(".tsukue__items"),
        document.querySelector(".tsukue__2-term-shelf-1"),
        document.querySelector(".tsukue__2-term-shelf-2"),
        document.querySelector(".tsukue__2-term-shelf-3"),
        document.querySelector(".tsukue__2-term-shelf-4"),
        document.querySelector(".tsukue__2-term-shelf-5"), // declaring classes that will be dragged
    ]).on('drop', function(el) {
        const parentNode = el.parentNode;
        const parentListNode = document.querySelector(".tsukue__items");

        parentNode.querySelectorAll('.tsukue__cell').forEach((element) => {
            parentNode.removeChild(element);
        })

        // parentNode.childElementCount >= 16 &&
        if(parentNode !== document.querySelector(".tsukue__items")) {
            let count = 0;
            const elementCount = parentNode.childElementCount
            const wideCount = Math.floor((parentNode.querySelectorAll('.tsukue__item.wide').length) / 2)
            count = elementCount + wideCount
            if(count >= 17) {
                while(count > 17) {
                    const childNode = parentNode.querySelector('.tsukue__item')
                    if(!childNode) {
                        break;
                    } 
                    // console.log(childNode)                                     // draggable elements behaivour after drop
                    parentListNode.appendChild(childNode)
                    count--;
                }
                const limit = document.querySelector(".tsukue__limit")
                limit.classList.remove('hidden')
                
                setTimeout(() => {
                    limit.classList.add('hidden')
                }, 3000)
            }
        }
        
    });
})

</script>

<style lang="scss" scoped>

.tsukue {
    display: flex;
    flex-direction: column;
    justify-content: center;                 
    align-items: center;
    // width: 600px;
    gap: 2em;    
    font-family: 'Arimo', sans-serif;
    &__desk {
        height: 603px;
        width: 600px;
        background-image: url('@img/assets/tsukue.png');
        background-size: cover;
        background-repeat: no-repeat;
        margin: 0 auto; 
    }
    &__item {
        width: 36px;
        height: 73.4px;
        opacity: 1;
        &.wide {
            max-width: 64px;
            height: 100px;
            min-width: 55px;

            & > img {
                min-width: 55px;
                max-width: 64px;
                height: 100px;
                object-fit: cover;
            }
        }
        & > img {
            width: 100%;
            height: 73.4px;
            object-fit: contain;
        }

    }
    &__box {
        width: 600px;
        margin: 0 auto;

    }
    &__items {
        display: flex;
        align-items: flex-end;
        justify-content: center;
        gap: 4px;
        width: 100%;
        margin: 0 auto;
        flex-wrap: wrap;
    }
    &__button {
        background-color: #fff;
        color: #014743;
        font-weight: 700;
        padding: 1em 2em;
        margin: 0em 0 1em 0;
        border-radius: .3em;
        border: 3px solid #014743;
        transition: .4s;
        &:hover {
            background-color: #014743;
            color: #fff;
            transition: .4s;
        }   
    }
}

.tsukue {
    &__desk {
        padding: 10px 0 0 0;
        &-box {
            // background-color: red;
            // opacity: .3;
            width: 600px;
            height: 700px;
        }

    }
    &__shelfs {
        display: flex;
        flex-direction: column;
        height: 700px;
    }
    &__shelf {
        margin-bottom: 15px;
        width: 600px;
        max-width: 600px;
        // background-color: aqua;
        overflow: hidden;
        height: 100px;
        & > ul {
            width: 600px;
            max-width: 600px;
            // background-color: aqua;
            height: 100px;
            display: flex;
            align-items: flex-end;
            // overflow-wrap: break-word;
            // gap: 4px;
            // overflow: hidden;
        }
    }
    &__cell {
        height: 73.4px;
        // background-color: blueviolet;
        width: 37.6px;
    }
}

#complete {
    background-color: #014743;
    color: #fff;
    &:hover {
        background-color: #003335;
    }
}

.gu-mirror {
	position: fixed !important;
	margin: 0 !important;
	z-index: 9999 !important;
	opacity: 1;
	-ms-filter: "progid:DXImageTransform.Microsoft.Alpha(Opacity=100)";
	filter: alpha(opacity=100); 
    background-color: none;
    text-decoration: none;
    list-style: none;

}
.gu-hide {
	display: none !important;
}
.gu-unselectable {
	-webkit-user-select: none !important;
	-moz-user-select: none !important;
	-ms-user-select: none !important;
	user-select: none !important;
}
.tsukue__shelfs .gu-transit {
	opacity: 0;
	-ms-filter: "progid:DXImageTransform.Microsoft.Alpha(Opacity=0)";
	filter: alpha(opacity=0);
}

.gu-transit {
    opacity: .3;
	-ms-filter: "progid:DXImageTransform.Microsoft.Alpha(Opacity=30)";
	filter: alpha(opacity=30);
}


.tsukue__limit {
    opacity: 1;
    color: #ea2b2b;
    font-size: 20px;
    margin: 0 auto;
    text-align: center;
    transition: .4s;
    width: 500px;
}
.hidden {
    opacity: 0;
    display: none;
    transition: .4s;
    &Message{
        display: none;
    }
}

#messageSend {
    display: none;
}

.bruh {
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    // justify-content: space-between;
    gap: 2em;
}

.flexing-sexing {
    display: flex;
}



</style>