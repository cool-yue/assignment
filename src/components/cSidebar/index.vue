<template>
  <div class="c-sidebar">
    <div
      v-for="(item, i) in navList"
      :key="i"
      :class="['c-sidebar__item', activeIndex === i ?'c-sidebar__item--active':'']"
      @click="hanldeClick(item.title, i)"
    >
      <c-icon :type="item.icon" />
      <span class="c-sidebar__title">{{ item.title }}</span>
    </div>
  </div>
</template>
<script>
import CIcon from "@compos/cIcon";
export default {
    name: "CSidebar",
    components: {
        CIcon
    },
    props: {
        navList: {
            type: Array,
            default: () => {
                return [];
            }
        }
    },
    data() {
        return {
            activeIndex: 0
        };
    },
    methods: {
        hanldeClick(info, index) {
            this.activeIndex = index;
            this.$emit("click", info || index);
        }
    }
};
</script>
<style>
.c-sidebar__item {
    height: 45px;
    line-height: 45px;
    font-size: 14px;
    color: white;
    font-family: Avenir, Helvetica, Arial, sans-serif;
    cursor: pointer;
    padding-left:30px;
}
.c-sidebar__item:hover {
    color: #00b4cf;
}

.c-sidebar__item--active {
    color: #00b4cf;
    background-color: #435466;
}
.c-sidebar__title {
    margin-left: 16px;
}
</style>
