<template>
   <button :class="['c-button', `c-button--${type}`]" @click="handleClick">
       <c-icon v-if="type==='deny'" type="deny"></c-icon>
       <span class="c-button__text"><slot></slot><span>
   </button>
</template>
<script>
import CIcon from "../cIcon";
export default {
    data() {
        return {};
    },
    props: {
        type: {
            type: String,
            default: "default"
        }
    },
    methods: {
        handleClick() {
            this.$emit("click");
        }
    },
    components: {
        CIcon
    }
};
</script>
<style>
.c-button {
    height: 30px;
    font-size: 14px;
    color: white;
}

.c-button--default {
    background-color: #00b4cf;
}
.c-button--default.dark {
    background-color: #01869a;
}

.c-button--cancel {
    background-color: #435466;
}

.c-button--cancel.dark {
    background-color: #2d4054;
}

</style>