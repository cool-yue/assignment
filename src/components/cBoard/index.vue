<template>
  <div class="c-board">
    <div
      v-for="(item, i) in boardData"
      :key="i"
      class="c-board__item"
    >
      <div class="c-board__title">
        {{ item.title }}
      </div>
      <div class="c-board__number">
        {{ item.number }}
      </div>
    </div>
  </div>
</template>
<script>
export default {
    name: "CBoard",
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
    display: flex;
}
.c-board__item {
    display: inline-block;
    padding: 0 1em;
    display: flex;
    flex-direction: column;
    justify-content: center;
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