<template>
    <div class="c-board">
        <div class="c-board__item" v-for="(item, i) in boardData" :key="i">
            <div class="c-board__title">{{item.title}}</div>
            <div class="c-board__number">{{item.number}}</div>
        </div>
    </div>
</template>
<script>
export default {
    name: "cBoard",
    props: {
        boardData: {
            type: Array,
            default: () => {
                return [];
            }
        }
    }
};
</script>
<style>
.c-board {
    display: inline-block;
    padding: 1em;
    background-color: white;
}
.c-board__item {
    display: inline-block;
    padding: 0 1em;
}
.c-board__title {
    font-size: 12px;
    padding-bottom: 1.5em;
}
.c-board__number {
    font-size: 20px;
    font-weight: bold;
    text-align: center;
}
</style>