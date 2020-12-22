<template>
    <div class="c-tab">
        <div
            class="c-tab__item"
            v-for="(item, i) in tabData"
            :key="i"
        >{{item.name}}</div>
    </div>
</template>
<script>
export default {
    name: "cTab",
    props: {
        tabData: {
            type: Array,
            default: () => {
                return [];
            }
        }
    }
};
</script>
<style>
.c-tab {
    display: flex;
}
</style>