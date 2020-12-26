import CBoard from "../../components/cBoard/index.vue";
import Vue from "vue";
const expect = chai.expect;

describe("cBoard", () => {
    it("board-data", () => {
        const constructor = Vue.extend(CBoard);
        const vm = new constructor({
            propsData: {
                boardData: [
                    {
                        title: "a",
                        number: 1
                    },
                    {
                        title: "b",
                        number: 2
                    },
                    {
                        title: "c",
                        number: 3
                    }
                ]
            }
        });

        vm.$mount();
        const boardItems = vm.$el.querySelectorAll(".c-board__item");

        expect(boardItems.length).to.equal(3);
        expect(boardItems[0].textContent).to.include("1");
        expect(boardItems[0].textContent).to.include("a");
        expect(boardItems[1].textContent).to.include("2");
        expect(boardItems[1].textContent).to.include("b");
        expect(boardItems[2].textContent).to.include("3");
        expect(boardItems[2].textContent).to.include("c");
    });
});