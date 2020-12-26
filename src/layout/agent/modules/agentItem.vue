<template>
  <div class="agent-item">
    <div class="agent-item__logo">
      <img :src="osImg">
    </div>
    <div class="agent-item__info">
      <div class="agent-item__basic">
        <div class="agent-item__name">
          <c-icon type="desktop" />
          <span class="agent-item_name--highlight">{{ item.name }}</span>
        </div>
        <c-badge :type="item.status" />
        <div class="agent-item__ip">
          <c-icon type="info" />
          <span>{{ item.ip }}</span>
        </div>
        <div class="agent-item__location">
          <c-icon type="folder" />
          <span>{{ item.location }}</span>
        </div>
      </div>
      <div class="agent-item__source">
        <c-button
          type="plus"
          class="agent-item__plus"
          @click="handlePlus"
        />
        <div class="agent-item__resources">
          <agent-source
            v-for="(resource, i) in item.resources"
            :key="i"
            :source="resource"
            :index="i"
            @click="handleDelete"
          />
        </div>

        <c-button
          v-if="item.status!=='idle'"
          type="deny"
          class="agent-item__deny"
        >
          Deny
        </c-button>
      </div>
    </div>
  </div>
</template>
<script>
import CBadge from "@compos/cBadge";
import CButton from "@compos/cButton";
import CIcon from "@compos/cIcon";
import AgentSource from "./agentSource.vue";


import {getDomPosition} from "@utils/utils.position.js";
import {modifyAgent} from "@api/agent.js";

export default {
    name: "AgentItem",
    components: {
        CBadge,
        AgentSource,
        CButton,
        CIcon,
    },
    props: {
        item: {
            type: Object,
            default: () => {
                return {};
            }
        }
    },
    data() {
        return {
            windows: require("@assets/images/windows.png"),
            suse: require("@assets/images/suse.png"),
            centos: require("@assets/images/cent_os.png"),
            ubuntu: require("@assets/images/ubuntu.png"),
            debian: require("@assets/images/debin.png")
        };
    },
    computed: {
        osImg() {
            return this[this.item.os] || "";
        }
    },
    methods: {
        handlePlus(e) {
            const dom = e.target;
            const data = getDomPosition(dom);
            data.item = this.item;
            this.$emit("add-resource", data);
        },
        handleDelete(index) {
            modifyAgent(this.item.id, this.handleDeleteData(index)).then(res => {
                this.$emit("refresh");
            }).catch(console.error);

        },
        handleDeleteData(index) {
            const copy = this.item.resources.slice();
            copy.splice(index, 1);
            const deleteObj = Object.assign({}, this.item, {resources: copy});
            return deleteObj;
        }
    }
};
</script>
<style>
.agent-item {
    display: flex;
    background-color: white;
    margin-bottom: 16px;
    padding: 1em;
}
.agent-item__basic {
    display: flex;
    padding-top: 0.5em;
    justify-content: space-between;
    align-items: center;
}
.agent-item__logo {
    margin-right: 1em;
}
.agent-item__info {
    flex: 1;
    overflow-x: auto;
    overflow-y: hidden;
}
.agent-item__source {
  padding-top: 2em;
  display: flex;
  /* align-items: center; */
}
.agent-item__plus {
  height: 28px;
  font-size: 18px;
  padding-left: 8px;
  padding-right: 8px;
  margin-right: 1em;
  flex: 0;
}
.agent-item_name--highlight {
  color: #00b4cf;
  font-weight: bold;
}

.agent-item__resources{
  display: flex;
  white-space: nowrap;
  flex: 1;
  overflow-x: auto;
  overflow-y: hidden;
  margin-right: 1em;
}
.agent-item__deny {
  margin-left: auto;
  padding-left: 1em;
}
</style>