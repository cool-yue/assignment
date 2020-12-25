<template>
    <div class="c-brick" :style="{backgroundColor:bgColor}">
        <div class="c-brick__icon">
            <c-icon :type="iconType" :class="rotate?'c-brick__rotate':''"></c-icon>
        </div>
        <div class="c-brick__content">
            <div class="c-brick__title">{{title}}</div>
            <div class="c-brick__number">{{number}}</div>
        </div>
    </div>
</template>
<script>
import CIcon from "@compos/cIcon";
export default {
    components: {
        CIcon
    },
    props: {
        title: String,
        number: Number,
        rotate: Boolean
    },
    computed: {
        iconType() {
            if (this.title==="building") {
                return "cog";
            } else {
                return "coffee";
            }
        },
        bgColor() {
            if (this.title==="building") {
                return "#ff9a2a";
            } else {
                return "#7fbc39";
            }
        }
    }
};
</script>
<style>
.c-brick {
    position: relative;
    height: 144px;
    width:300px;
}
.c-brick__icon {
    position: absolute;
    z-index: 1;
    font-size: 144px;
    opacity: 0.2;
    color: white;
    left:0;
    top:0;
    bottom:0;
    right:0;
    text-align: center;
    overflow: hidden;
    line-height: 144px;
}
.c-brick__content {
    position: absolute;
    left:0;
    top:0;
    bottom:0;
    right:0;
    z-index: 2;
}
@keyframes roll {
     0% {
         transform: rotate(7deg);
     }
     100% {
         transform :rotate(360deg);
     }
}
.c-brick__rotate {
    height:144px;
    width: 144px;
    display: inline-block;
    transform-origin: center center;
    animation: roll 2s linear infinite;
}

.c-brick__title {
    font-size: 18px;
    font-weight: bold;
    color: white;
}

.c-brick__number {
    text-align: right;
    font-size: 48px;
    color: white;
}


</style>