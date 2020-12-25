import CSidebar from "../../components/cSidebar/index.vue";
import Vue from "vue";
import {triggerClick, getClass} from "../testUtils.js";
const expect = chai.expect;

function createVm(options) {
    const constructor = Vue.extend(options);
    const vm = new constructor({
        propsData: {
            navList: [
                {
                    icon: "aa",
                    title: "aaa"
                },
                {
                    icon: "bb",
                    title: "bbb"
                },
                {
                    icon: "cc",
                    title: "ccc"
                },
                {
                    icon: "dd",
                    title: "ddd"
                },
            ]
        }
    });
    return vm;
}

describe("CSidebar", () => {
    it("props navList render", () => {
       const vm = createVm(CSidebar);

        vm.$mount();
        const navList = vm.$el.querySelectorAll(".c-sidebar__item");

        expect(navList.length).to.equal(4);
        expect(navList[0].textContent).to.include("aaa");
        expect(navList[1].textContent).to.include("bbb");
        expect(navList[2].textContent).to.include("ccc");
        expect(navList[3].textContent).to.include("ddd");
    });
    it ("click and highlight", (done) => {
        const vm = createVm(CSidebar);

        vm.$mount();
        const navList = vm.$el.querySelectorAll(".c-sidebar__item");

        expect(getClass(navList[0])).to.include("c-sidebar__item--active");
        expect(getClass(navList[1])).to.not.include("c-sidebar__item--active");
        expect(getClass(navList[2])).to.not.include("c-sidebar__item--active");
        expect(getClass(navList[3])).to.not.include("c-sidebar__item--active");
        triggerClick(navList[3]);
        Vue.nextTick(() => {
            expect(getClass(navList[3])).to.include("c-sidebar__item--active");
            expect(getClass(navList[2])).to.not.include("c-sidebar__item--active");
            expect(getClass(navList[1])).to.not.include("c-sidebar__item--active");
            expect(getClass(navList[0])).to.not.include("c-sidebar__item--active");
            done();
        });
    });
    it ("emit click", () => {
        const vm = createVm(CSidebar);
        const callback = sinon.fake();
        vm.$mount();
        vm.$on("click", callback);
        const navList = vm.$el.querySelectorAll(".c-sidebar__item");

        triggerClick(navList[1]);

        expect(callback.calledOnce).to.equal(true);
        expect(callback.calledWith("bbb")).to.equal(true);
    });
});