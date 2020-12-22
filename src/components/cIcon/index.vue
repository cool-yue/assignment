<template>
    <span :class="iconClass"></span>
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
    }
};
</script>
<style></style>