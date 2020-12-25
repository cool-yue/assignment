<template>
  <div
    v-if="show"
    class="c-modal"
    :style="{left:`${left}px`,top:`${top}px`}"
  >
    <div class="c-modal-close">
      <c-icon
        type="close"
        style="cursor:pointer;"
        @click="handleClose"
      />
    </div>
    <div class="c-modal__tip">
      <span>Seperate Multiple Resource with commas</span>
    </div>
    <div class="c-modal__main">
      <input
        v-model="source"
        type="text"
        class="c-modal__input"
        placeholder="e.g. Chrome, Firefox"
      >
    </div>
    <div class="c-modal__buttons">
      <c-button @click="handleSubmit">
        Add Resource
      </c-button>
      <c-button
        type="cancel"
        @click="handleClose"
      >
        Cancel
      </c-button>
    </div>
  </div>
</template>
<script>
import CButton from "@compos/cButton";
import CIcon from "@compos/cIcon";
export default {
    components: {
        CButton,
        CIcon
    },
    props: {
        left: {
            type: Number,
            default: 100
        },
        top: {
            type: Number,
            default: 120
        },
        show: {
            type: Boolean,
            default: false
        },
        trigger: {
            type: String,
            default: ""
        }
    },
    data() {
        return {
            source: ""
        };
    },
    watch: {
        show(v) {
            if (v === false) {
                this.source = "";
            }
        }
    },
    mounted() {
        document.addEventListener("click", (event) => {
            if (!this.show) {
                return;
            }
            // console.log(event.target.getAttribute("class"));
            if (this.isTriggerButton(event.target.getAttribute("class"))) {
                return;
            }
            // console.log(event.target.querySelector(".c-modal"));
            // console.log("在modalnei么", this.isInModal(event.target));
            if (!this.isInModal(event.target)) {
                this.handleClose();
            }
        });
    },
    methods: {
        handleClose() {
            this.source = "";
            this.$emit("close", false);
        },
        handleSubmit() {
            this.$emit("submit", this.source.split(","));
        },
        isTriggerButton(clazz) {
            return clazz === "agent-item__plus c-button c-button--plus" || clazz === "icon-plus";
        },
        isInModal(dom) {
            while (dom) {
                if (
                    dom.nodeType === 1
                  && dom.getAttribute("class")
                  && dom.getAttribute("class").indexOf("c-modal") >= 0
                ) {
                    return true;
                }
                dom = dom.parentNode;
            }
            return false;
        }
    }
};
</script>
<style>
.c-modal {
    background-color: white;
    z-index:4;
    position: absolute;
    border: 1px solid #00b4cf;
    width: 570px;
    padding: 14px;
    box-shadow: 0 3px 5px rgba(0, 0, 0, 0.3);
}
.c-modal::before {
    content: "";
    position: absolute;
    border-bottom: 18px solid #00b4cf;
    border-right: 9px solid transparent;
    border-left: 9px solid transparent;
    border-top: 0;
    top: -18px;
    left: 24px;
}
.c-modal::after {
    content: "";
    position: absolute;
    border-bottom: 18px solid white;
    border-right: 9px solid transparent;
    border-left: 9px solid transparent;
    border-top: 0;
    top: -17px;
    left: 24px;
}

.c-modal-close {
    text-align: right;
    color: #00b4cf;
    font-size: 20px;
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
    color: #00b4cf;
}
</style>