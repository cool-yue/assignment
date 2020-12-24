<template>
    <div class="c-modal">
        <div class="c-modal-close">
            <c-icon type="close" style="curor:pointer;"></c-icon>
        </div>
        <div class="c-modal__tip">
            <span>Seperate Multiple Resource with commas</span>
        </div>
        <div class="c-modal__main">
            <input type="text"  class="c-modal__input" v-model="source" placeholder="input value"/>
        </div>
        <div class="c-modal__buttons">
             <c-button>Add Resource</c-button>
             <c-button type="cancel">Cancel</c-button>
        </div>
    </div>
</template>
<script>
import CButton from "@compos/cButton";
import CIcon from "@compos/cIcon";
export default {
    data() {
        return {
            source: ""
        };
    },
    components: {
        CButton,
        CIcon
    }
};
</script>
<style>
.c-modal {
    border: 1px solid #00b4cf;
    width: 570px;
    padding: 14px;
    box-shadow: 0 3px 5px rgba(0, 0, 0, 0.3);
}

.c-modal-close {
    text-align: right;
    color: #00b4cf;
}
.c-modal__main {
    padding: 1em 0;
}
.c-modal__input {
    height: 30px;
    width: 100%;
    border: 1px solid #ccc;
    border-radius: 3px;
    text-indent: 20px;
}
</style>