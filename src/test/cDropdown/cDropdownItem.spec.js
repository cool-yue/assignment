import cDropdownItem from "../../components/cDropdown/modules/cDropdownItem.vue";
import Vue from "vue";
const expect = chai.expect;

describe("c-dropdown-item", () => {
    it("item props", () => {
        const constructor = Vue.extend(cDropdownItem);
        const vm = new constructor({
            propsData: {
                item: {
                    icon: "id-card",
                    title: "Profile"
                }
            }

        });
        vm.$mount();
        expect(vm.$el.textContent).to.include("Profile");
    });
});