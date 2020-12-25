<template>
  <button
    :class="['c-button', `c-button--${type}`]"
    @click="handleClick($event)"
  >
    <c-icon
      v-if="type==='deny' || type==='plus'"
      :type="type"
    />
    <span class="c-button__text"><slot /></span>
  </button>
</template>
<script>
import CIcon from "../cIcon";
export default {
    components: {
        CIcon
    },
    props: {
        type: {
            type: String,
            default: "default"
        },
        dark: {
            type: Boolean,
            default: false
        }
    },
    data() {
        return {};
    },
    methods: {
        handleClick(e) {
            const x = e.clientX;
            const y = e.clientY;
            this.$emit("click", e);
        }
    }
};
</script>
<style>
.c-button {
    height: 30px;
    font-size: 14px;
    color: white;
    line-height: 30px;
    outline: none;
    border: none;
    cursor: pointer;
    padding: 0 1em;
}

.c-button--default , .c-button--deny, .c-button--plus {
    background-color: #00b4cf;
}
.c-button--default:hover, .c-button--deny:hover, .c-button--plus:hover  {
    background-color: #01869a;
}

.c-button--cancel {
    background-color: #435466;
}

.c-button--cancel:hover {
    background-color: #2d4054;
}

</style>