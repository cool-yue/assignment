<template>
  <div class="agent">
    <div class="agent__header">
      <c-brick
        title="building"
        :number="8"
        rotate
      />
      <c-brick
        title="idle"
        :number="4"
      />
      <c-board :board-data="boardData" />
    </div>
    <div class="agent__toolbar">
      <c-tab :tab-data="tabData" />
      <c-input
        type="search"
        class="agent__input"
      />
      <div class="agent__showmode">
        <c-icon 
          type="th-card"
          :class="!columnMode?'agent__icon--active':''"
          @click="columnMode=false"
        />
        <c-icon
          type="th-list"
          :class="columnMode?'agent__icon--active':''"
          @click="columnMode=true"
        />
      </div>
    </div>
    <div class="agent__content">
      <agent-item
        v-for="(item, i) in agents"
        :key="i"
        :item="item"
        @add-resource="handleAddResource"
        @refresh="handleRefresh"
      />
      <c-modal
        :show="showModal"
        :left="modalLeft"
        :top="modalTop"
        trigger="icon-plus"
        @close="hanldeCloseModal"
        @submit="handleSubmitResource"
      />
    </div>
  </div>
</template>
<script>
import CIcon from "@compos/cIcon";
import CTab from "@compos/cTab";
import CButton from "@compos/cButton";
import CBadge from "@compos/cBadge";
import CBoard from "@compos/cBoard";
import CInput from "@compos/cInput";
import CModal from "@compos/cModal";
import CBrick from "@compos/cBrick";
import CHistory from "@compos/cHistory";
import CSidebar from "@compos/cSidebar";

import AgentItem from "./modules/agentItem.vue";

import {getAgents, modifyAgent} from "@api/agent.js";

export default {
    name: "Agent",
    components: {
        CBoard,
        CBrick,
        CTab,
        CInput,
        CIcon,
        AgentItem,
        CModal
    },
    data() {
        return {
            columnMode: true,
            currentItem: null,
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
    mounted() {
        this.getAgentsAndrender();
        console.log(document);
    },
    methods: {
        handleAddResource(data) {
            this.modalLeft = data.x;
            this.modalTop = data.y;
            this.currentItem = Object.assign({}, data.item);
            this.showModal = !this.showModal;
        },
        hanldeCloseModal(value) {
            this.showModal = value;
        },
        handleSubmitResource(data) {
            modifyAgent(this.getId(), this.handlePutRequestData(data)).then(res => {
                console.log(res);
                this.showModal = false;
                this.getAgentsAndrender();
            }).catch(console.error);
        },
        handleRefresh() {
            this.getAgentsAndrender();
        },
        getAgentsAndrender() {
            getAgents().then(res => {
                this.agents = res.slice();
            }).catch(err => {
                console.log("err", err);
            });
        },
        handlePutRequestData(data) {
            const putData = Object.assign({}, this.currentItem);
            putData.resources = putData.resources.concat(data).slice();
            return putData;
        },
        getId() {
            return this.currentItem.id;
        }
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
    align-items: center;
    line-height: 50px;

}
.agent__input {
    margin-left: 2em;
    color: #ccc;
    width: 160px;
}

.agent__icon--active {
    color: #00b4cf;
}

.agent__content {
    flex: 1;
    margin-top: 16px;
    height: 0;
    overflow: auto;
    position: relative;
}
.agent__showmode {
    font-size: 20px;
    padding-right: 16px;
    margin-left: auto;
}
</style>