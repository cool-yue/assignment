<template>
  <ul
    v-if="historyList.length > 0"
    class="c-history"
  >
    <h3 class="c-history__title">
      History
    </h3>
    <li
      v-for="(item, i) in historyList"
      :key="i"
      class="c-history__item"
    >
      {{ item.title }}
    </li>
  </ul>
</template>
<script>
export default {
    name: "CHistory",
    props: {
        historyList: {
            type: Array,
            default: () => {
                return [];
            }
        }
    }
};
</script>
<style>
.c-history {
    list-style: disc;
    list-style-position: inside;
    padding: 0.5em;
}
.c-history__title {
    font-size: 24px;
    color: #ccc;
}
.c-history__item {
    font-size: 12px;
    color: #999;
    padding: 0.2em 0;
    cursor: pointer;
    white-space:nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
}

.c-history__item:hover {
    color: #00b4cf;
}
</style>