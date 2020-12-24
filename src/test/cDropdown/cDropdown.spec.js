import cDropdown from "../../components/cDropdown";
import Vue from "vue";
import {triggerClick} from "../testUtils.js";
const expect = chai.expect;

describe("c-dropdown", () => {
    it("dropdown render", () => {
        const constructor = Vue.extend(cDropdown);
        const vm = new constructor({
            propsData: {
                items: [
                    {
                        icon: "id-card",
                        title: "Profile"
                    },
                    {
                        icon: "sign-in",
                        title: "sign out"
                    }
                ]
            }
        });
        vm.$mount();
        const dropdownItems = vm.$el.querySelectorAll(".c-dropdown-item");
        expect(dropdownItems.length).to.equal(2);
    });
});