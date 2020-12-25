<template>
    <span :class="iconClass" @click="handleClick"></span>
</template>
<script>
export default {
    name: "cIcon",
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