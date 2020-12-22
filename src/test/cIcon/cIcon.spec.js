import CIcon from "../../components/cIcon/index.vue";
import Vue from "vue";
const expect = chai.expect;

describe("CIcon", () => {
    it("give a type props to Icon , finally render as 'icon-type' class", () => {
        const vm = new (Vue.extend(CIcon))({
            propsData: {
                type: "desktop"
            }
        });

        vm.$mount();
        const iconEle = vm.$el;
        const domExist = iconEle !== null;
        const classList = iconEle.getAttribute("class");

        expect(domExist).to.be.true;
        expect(classList).to.include("icon-desktop");
    });
    it("no type no 'icon-type' class", () => {
        const vm = new (Vue.extend(CIcon))();

        vm.$mount();
        const iconEle = vm.$el;
        const classList = iconEle.getAttribute("class");

        expect(classList).to.not.include("icon-desktop");
    });
});