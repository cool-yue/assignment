<template>
  <div
    class="c-dropdown-item"
    @click="handleClick"
  >
    <c-icon :type="item.icon" />
    <span>{{ item.title }}</span>
  </div>
</template>
<script>
import CIcon from "@compos/cIcon";
export default {
    name: "CDropdownItem",
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
}
.c-dropdown-item:hover {
    background-color: #efefef;
}
</style>