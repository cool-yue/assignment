<template>
  <div class="layout">
    <div class="layout__header">
      <img
        src="./assets/images/logo.svg"
        class="layout__logo"
      >
      <c-dropdown
        :items="items"
        class="layout-avatar"
      >
        <c-avatar :source="avatar" />
      </c-dropdown>
    </div>
    <div class="layout__main">
      <div class="layout__sidebar">
        <div class="layout__nav">
          <c-sidebar :nav-list="navList" />
        </div>
        <div class="layout__history">
          <c-history :history-list="historyList" />
        </div>
      </div>
      <div class="layout__content">
        <components :is="currentLayout" />
      </div>
    </div>
    <div class="layout__footer">
      copyright 2017 thoughtworks
    </div>
  </div>
</template>
<script>
import Agent from "./layout/agent";
import ComponentList from "./ComponentList.vue";
import CAvatar from "@compos/cAvatar";
import CDropdown from "@compos/cDropdown";
import CSidebar from "@compos/cSidebar";
import CHistory from "@compos/cHistory";
export default {
    components: {
        Agent,
        ComponentList,
        CDropdown,
        CAvatar,
        CHistory,
        CSidebar
    },
    data() {
        return {
            avatar: require("./assets/images/sponge.png"),
            currentLayout: Agent,
            items: [
                {
                    icon: "id-card",
                    title: "Profile"
                },
                {
                    icon: "sign-in",
                    title: "sign out"
                }
            ],
            historyList: [
                {
                    title: "bjstdmngbgr02/Acceptance_test"
                },
                {
                    title: "bjstdmngbgr03/Acceptance_test"
                },
                {
                    title: "bjstdmngbgr04/Acceptance_test"
                },
                {
                    title: "bjstdmngbgr02/Acceptance_test"
                },
                {
                    title: "bjstdmngbgr03/Acceptance_test"
                },
                {
                    title: "bjstdmngbgr04/Acceptance_test"
                },
                {
                    title: "bjstdmngbgr02/Acceptance_test"
                },
                {
                    title: "bjstdmngbgr03/Acceptance_test"
                },
                {
                    title: "bjstdmngbgr04/Acceptance_test"
                }
            ],
            navList: [
                {
                    icon: "dashboard",
                    title: "DASHBOARD"
                },
                {
                    icon: "sitemap",
                    title: "AGENT"
                },
                {
                    icon: "boat",
                    title: "MY CRUISE"
                },
                {
                    icon: "life-bouy",
                    title: "HELP"
                }
            ]
        };
    }
};
</script>
<style>
.layout {
    height: 100%;
    display: flex;
    flex-direction: column;
}
.layout__logo {
    height: 30px;
}
.layout__header {
    text-align:center;
    flex: 0 0 50px;
    height: 50px;
    line-height: 50px;
    background-color: white;
}
.layout__main {
    flex: 1;
    width:60%;
    margin: 0 auto;
    display: flex;
    overflow: auto;
    min-width: 1092px;
}
.layout__footer {
    flex: 0 0 30px;
    height: 30px;
    text-align: center;
    line-height: 30px;
    background-color: white;;
    box-shadow: 0 -1px 5px rgba(0, 0, 0, 0.3);
    position:relative;
    z-index:100;
}
.layout-avatar {
    float: right;
    margin-top: 5px;
    padding-right:150px;
}
.layout__sidebar {
    background-color:#2d4054;
    width: 250px;
    height: 100%;
    padding-top: 16px;
    display: flex;
    flex-direction: column;
}
.layout__history {
    margin-top: auto;
    max-height: 400px;
    overflow: hidden;
}

.layout__content {
    height: 100%;
    margin-left:16px;
    flex: 1;
    overflow: auto;
}
/* @media (max-width: 1820px) {
    .layout__main {
        width: 65%;
    }
}
@media (min-width: 1680px) {
    .layout__main {
        width: 75%;
    }
}
@media (min-width: 1600px) {
    
}
@media (min-width: 1600px) {
    
} */
</style>