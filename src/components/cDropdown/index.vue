<template>
    <div class="c-dropdown" v-if="items.length > 0">
         <div @click="showItem=!showItem" class="c-dropdown__link"><slot>下拉菜单</slot></div>
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
            default: 0
        }
    },
    components: {
        cDropdownItem
    },
    methods: {
        handleClick() {

        }
    }
};
</script>
<style>
.c-dropdown {
    padding: 0.5em 0;
    display: inline-block;
    position: relative;
}
.c-dropdown__main {
    position: absolute;
    padding: 0.5em 1em;
}
.c-dropdown__link {
    cursor: pointer;
}
</style>