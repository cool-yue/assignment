<template>
    <div class="c-dropdown-item" @click="handleClick">
        <c-icon :type="item.icon"></c-icon>
        <span>{{item.title}}</span>
    </div>
</template>
<script>
import CIcon from "@compos/cIcon";
export default {
    name: "cDropdownItem",
    components: {
        CIcon
     },
    props: {
        item: {
            type: Object,
            default: () => {
                return {};
            }
        }
    },
    methods: {
        handleClick() {
            return this.$emit("click", this.item.title);
        }
    }
};
</script>
<style>
.c-dropdown-item {
    cursor: pointer;
    padding: 0.5em 0;
}
.c-dropdown-item:hover {
    background-color: #efefef;
}
</style>