<template>
  <span
    v-if="source"
    class="agent-source"
  >
    {{ source }}
    <c-icon
      type="trash"
      class="agent-source__delete"
      @click="handleClick"
    />
  </span>
</template>
<script>
import CIcon from "@compos/cIcon";
export default {
    name: "AgentSource",
    components: {
        CIcon
    },
    props: {
        source: {
            type: String,
            default: ""
        },
        index: {
            type: Number,
            default: -1
        }
    },
    methods: {
        handleClick() {
            this.$emit("click", this.index);
        }
    }
};
</script>
<style>
.agent-source {
    background-color: #e1e4e6;
    margin-right: 1em;
    padding: 0.3em;
}
.agent-source__delete {
    cursor: pointer;
}
</style>