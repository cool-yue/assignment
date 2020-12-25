<template>
    <span class="agent-source" v-if="source">
        {{source}}
        <c-icon type="trash" @click="handleClick" class="agent-source__delete"></c-icon>
    </span>
</template>
<script>
import CIcon from "@compos/cIcon";
export default {
    name: "agentSource",
    props: {
        source: {
            type: String,
            default: ""
        }
    },
    components: {
        CIcon
    },
    methods: {
        handleClick() {
            this.emit("click", this.source)
        }
    }
};
</script>
<style>
.agent-source {
    background-color: #e1e4e6;
    margin-right: 1em;
    padding: 0.2em;
}
.agent-source__delete {
    cursor: pointer;
}
</style>