<template>
    <div class="c-tab">
        <div
            :class="['c-tab__item', currentIndex === i ? 'c-tab__item--active' : '']"
            v-for="(item, i) in tabData"
            :key="i"
            @click="handleClick(i)"
        >{{item.name}}</div>
    </div>
</template>
<script>
export default {
    data() {
        return {
            currentIndex: 0
        };
    },
    name: "cTab",
    props: {
        tabData: {
            type: Array,
            default: () => {
                return [];
            }
        }
    },
    methods: {
        handleClick(i) {
            this.currentIndex = i;
        }
    }
};
</script>
<style>
.c-tab {
    display: inline-block;
    border: 1px solid #ccc;
    height: 50px;
}
.c-tab__item {
    display: inline-block;
    border-right: 1px solid #ccc;
    padding: 0 1em;
    line-height: 50px;
    height: 50px;
    cursor: pointer;
}
.c-tab__item:last-child {
    border-right: 0;
}
.c-tab__item--active {
    border-bottom: 3px solid #00b4cf;
}
</style>