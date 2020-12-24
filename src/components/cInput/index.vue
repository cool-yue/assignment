<template>
    <div class="c-input">
        <c-icon type="search" v-if="type==='search'"></c-icon>
        <input @input="handleInput($event)" type="text" :value="value" class="c-input__input"/>
    </div>
</template>
<script>
import CIcon from "../cIcon";
export default {
    components: {
        CIcon
    },
    props: {
        value: {
            type: String,
            default: ""
        },
        type: {
            type: String,
            default: ""
        }
    },
    methods: {
        handleInput(e) {
            console.log("input事件触发");
            console.log(e.target.value);
            this.$emit("input", e.target.value)
        }
    }
};
</script>
<style>
.c-input {
    font-size: 20px;
    background-color: #F3F3F3;
    height: 30px;
    line-height: 30px;
}
.c-input__input {
    background-color: #F3F3F3;
    height: 30px;
    box-sizing: border-box;
    vertical-align:2px;
    font-size: 20px;
}
</style>