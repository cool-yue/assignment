import CHistory from "../../components/cHistory/index.vue";
import Vue from "vue";
const expect = chai.expect;

describe("CHistory", () => {
    const constructor = Vue.extend(CHistory);
    const vm = new constructor({
        propsData: {
            historyList: [
                {
                    title: "bjstdmngbgr02/Acceptance_test"
                },
                {
                    title: "bjstdmngbgr03/Acceptance_test"
                },
                {
                    title: "bjstdmngbgr04/Acceptance_test"
                }
            ]
        }
    });

    vm.$mount();
    const historyList = vm.$el.querySelectorAll(".c-history__item");
    expect(historyList.length).to.equal(3);
    expect(historyList[0].textContent).to.include("bjstdmngbgr02/Acceptance_test");
    expect(historyList[1].textContent).to.include("bjstdmngbgr03/Acceptance_test");
    expect(historyList[2].textContent).to.include("bjstdmngbgr04/Acceptance_test");
});