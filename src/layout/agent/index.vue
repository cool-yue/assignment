<template>
<div class="agent">
    <div class="agent__header">
        <c-brick
            title="building"
            :number="8"
            rotate
        ></c-brick>
        <c-brick
            title="idle"
            :number="4"
        ></c-brick>
        <c-board :board-data="boardData"></c-board>
    </div>
    <div class="agent__toolbar">
        <c-tab :tab-data="tabData"></c-tab>
        <c-input type="search" class="agent__input"></c-input>
        <div class="agent__showmode">
            <c-icon type="th-card"></c-icon>
            <c-icon type="th-list" class="agent__icon--active"></c-icon>
        </div>
    </div>
    <div class="agent__content">
        <agent-item v-for="(item, i) in agents" :key="item.id" :item="item" @add-resource="handleAddResource"></agent-item>
    </div>
    <c-modal :show="showModal" :left="modalLeft" :top="modalTop" @close="hanldeCloseModal" @submit-resource="handleSubmitResource"/>
</div>
</template>
<script>
import CIcon from "@compos/cIcon";
import CTab from "@compos/cTab";
import CButton from "@compos/cButton";
import CBadge from "@compos/cBadge";
import CBoard from  "@compos/cBoard";
import CInput from "@compos/cInput";
import CModal from "@compos/cModal";
import CBrick from "@compos/cBrick";
import CHistory from "@compos/cHistory";
import CSidebar from "@compos/cSidebar";

import AgentItem from "./modules/agentItem.vue";

import {getAgents, modifyAgent} from "@api/agent.js";

export default {
    name:"agent",
    data() {
        return {
            currentId: null,
            modalLeft: 0,
            modalTop: 0,
            showModal: false,
            boardData: [
                {
                    title: "All",
                    number: 8
                },
                {
                   title: "Physical",
                   number: 4
                },
                {
                   title: "Virtual",
                   number: 4
                }
            ],
            tabData: [
                {
                name: "All"
                },
                {
                name: "Physical"
                },
                {
                name: "Virtual"
                }
            ],
            agents: []
        };
    },
    components: {
        CBoard,
        CBrick,
        CTab,
        CInput,
        CIcon,
        AgentItem,
        CModal
    },
    methods: {
        handleAddResource(position, id) {
             this.modalLeft = position.x;
             this.modalTop = position.y;
             this.showModal = !this.showModal;
             this.currentId = id;
        },
        hanldeCloseModal(value) {
            console.log("点击关闭",value);
            this.showModal = value;
        },
        handleSubmitResource(data) {
            modifyAgent(this.currentId, data).then(res => {
                console.log(res);
            }).catch(console.error);
        }
    },
    mounted() {
        getAgents().then(res => {
            this.agents = res.slice();
        }).catch(err => {
            console.log("err", err);
        });
        console.log(document);
    }
};
</script>
<style>
.agent {
    padding-top: 16px;
    height: 100%;
    display: flex;
    flex-direction: column;
}

.agent__header {
    display: flex;
    justify-content: space-between;
}
.agent__toolbar {
    margin-top: 16px;
    background-color: white;
    display: flex;
    line-height: 50px;

}
.agent__input {

}

.agent__icon--active {
    color: #00b4cf;
}

.agent__content {
    flex: 1;
    margin-top: 16px;
    height: 0;
    overflow: auto;
}
</style>