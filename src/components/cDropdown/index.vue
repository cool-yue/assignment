<template>
  <div
    v-if="items.length > 0"
    class="c-dropdown"
  >
    <div
      class="c-dropdown__link"
      @click="showItem=!showItem"
    >
      <div class="c-dropdown__logo">
        <slot>下拉菜单</slot>
      </div>
      <c-icon
        type="angle-down"
        :style="{visibility:(showItem?'visible':'hidden')}"
      />
    </div>
    <div
      v-show="showItem"
      class="c-dropdown__main"
      :style="{width:`${width}px`,left:`${left}px`}"
    >
      <c-dropdown-item
        v-for="(item, i) in items"
        :key="i"
        :item="item"
      />
    </div>
  </div>
</template>
<script>
import cDropdownItem from "./modules/cDropdownItem.vue";
import cIcon from "@compos/cIcon";
export default {
    name: "CDropdown",
    components: {
        cDropdownItem,
        cIcon
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
    data() {
        return {
            showItem: false
        };
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