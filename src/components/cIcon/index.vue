<template>
  <span
    :class="iconClass"
    @click="handleClick"
  />
</template>
<script>
export default {
    name: "CIcon",
    props: {
        type: {
            type: String,
            default: ""
        }
    },
    computed: {
        iconClass() {
            return (
                this.type
                ? "icon-" + this.type
                : ""
            );
        }
    },
    methods: {
        handleClick() {
            this.$emit("click");
        }
    }
};
</script>
<style></style>