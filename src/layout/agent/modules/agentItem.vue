<template>
<div class="agent-item">
    <div class="agent-item__logo">
        <img :src="osImg" />
    </div>
    <div class="agent-item__info">
         <div class="agent-item__basic">
             <c-icon type="desktop"></c-icon>
             <span>{{item.name}}</span>
             <c-badge :type="item.status"></c-badge>
             <c-icon type="info"></c-icon>
             <span>{{item.ip}}</span>
             <c-icon type="folder"></c-icon>
             <span>{{item.location}}</span>
         </div>
         <div class="agent-item__source">
            <c-button type="plus" @click="handlePlus"></c-button>
            <agent-source v-for="(resource, i) in item.resources" :source="resource" :key="i" :index="i" @click="handleDelete"></agent-source>
            <c-button type="deny" v-if="item.status!=='idle'">Deny</c-button>
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
    name: "agentItem",
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
                this.$emit("refresh")
            }).catch(console.error);

        },
        handleDeleteData(index) {
            const copy = this.item.resources.slice();
            copy.splice(index, 1);
            const deleteObj = Object.assign({}, this.item, {resources:copy});
            return deleteObj;
        }
    },
    props: {
        item: {
            type: Object,
            default: () => {
                return {}
            }
        }
    },
    components: {
        CBadge,
        AgentSource,
        CButton,
        CIcon
    }
};
</script>
<style>
.agent-item {
    display: flex;
    background-color: white;
    margin-bottom: 16px;
}
.agent-item__basic {
    display: flex;
    justify-content: space-between;
},
.agent-item__info {
    flex: 1;
}
</style>