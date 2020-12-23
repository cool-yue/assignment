import CButton from "../../components/cButton/index.vue";
import Vue from "vue";
import {triggerClick, getClass} from "../testUtils.js";
const expect = chai.expect;

describe("cButton", () => {
    it("type", () => {
        const constructor = Vue.extend(CButton);
        const vm = new constructor({
            propsData: {
                type: "success"
            }
        });

        vm.$mount();
        const button = vm.$el;
        const buttonClass = getClass(button);

        expect(buttonClass).to.include("c-button--success");
    });
    it("default", () => {
        const constructor = Vue.extend(CButton);
        const vm = new constructor({});

        vm.$mount();
        const button = vm.$el;
        const buttonClass = button.getAttribute("class");

        expect(buttonClass).to.include("c-button--default");
    });
    it("click", () => {
        const constructor = Vue.extend(CButton);
        const vm = new constructor();
        const cb = sinon.fake();

        vm.$on("click", cb);
        vm.$mount();
        const button = vm.$el;
        triggerClick(button);

        expect(cb.calledOnce).to.equal(true);
    });
});