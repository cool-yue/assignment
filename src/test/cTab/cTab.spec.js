import CTab from "../../components/cTab/index.vue";
import Vue from "vue";
const expect = chai.expect;

function arrangeCTabs() {
    const tabData = [
        {
            name: "a"
        },
        {
            name: "b"
        },
        {
            name: "c"
        }
    ];
    return new (Vue.extend(CTab))({
        propsData: {
            tabData
        }
    });
}

describe("cTab", () => {
    it("give a array, render the tabs for the array", () => {
        const vm = arrangeCTabs();

        vm.$mount();
        const tabItems = vm.$el.querySelectorAll(".c-tab__item");
        const length = tabItems.length;

        expect(length).to.equal(3);
        expect(tabItems[0].textContent).to.equal("a");
        expect(tabItems[1].textContent).to.equal("b");
        expect(tabItems[2].textContent).to.equal("c");
    });

    it("default highlight first one", () => {
        const vm = arrangeCTabs();

        vm.$mount();
        const tabItems = vm.$el.querySelectorAll(".c-tab__item");

        expect(tabItems[0].getAttribute("class")).to.include("c-tab__item--active");
    });

    it("click a no-active tab, highlight this tab", (done) => {
        const vm = arrangeCTabs();

        vm.$mount();
        const tabItems = vm.$el.querySelectorAll(".c-tab__item");
        tabItems[1].click();

        Vue.nextTick(() => {
            console.log("aaa");
            expect(tabItems[1].getAttribute("class")).to.include(".c-tab__item--active");
            expect(tabItems[0].getAttribute("class")).to.not.include(".c-tab__item--active");
            done();
        });

    });
});