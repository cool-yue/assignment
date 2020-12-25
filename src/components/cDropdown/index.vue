<template>
    <div class="c-dropdown" v-if="items.length > 0">
         <div @click="showItem=!showItem" class="c-dropdown__link">
            <div class="c-dropdown__logo"><slot>下拉菜单</slot></div>
            <c-icon type="angle-down" :style="{visibility:(showItem?'visible':'hidden')}"></c-icon>
         </div>
         <div class="c-dropdown__main" v-show="showItem" :style="{width:`${width}px`,left:`${left}px`}">
            <c-dropdown-item
                v-for="(item, i) in items"
                :key="i"
                :item="item"
            ></c-dropdown-item>
         </div>
    </div>
</template>
<script>
import cDropdownItem from "./modules/cDropdownItem.vue"
import cIcon from "@compos/cIcon";
export default {
    name: "cDropdown",
    data() {
        return {
            showItem: false
        };
    },
    props: {
        items: {
            type: Array,
            default: () => []
        },
        width: {
            type: Number,
            default: 150
        },
        left: {
            type: Number,
            default: -90
        }
    },
    components: {
        cDropdownItem,
        cIcon
    },
    methods: {
        handleClick() {

        }
    }
};
</script>
<style>
.c-dropdown {
    display: inline-block;
    position: relative;
}
.c-dropdown__main {
    position: absolute;
    background-color:white;
    line-height: 40px;
    z-index: 3;
}
.c-dropdown__link {
    cursor: pointer;
    line-height:40px;
}
.c-dropdown__logo {
    vertical-align: middle;
    display: inline-block;
}
</style>