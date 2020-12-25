<template>
    <div class="app-container">
        <h3>组件库</h3>
        <h3>ICON</h3>
        <div class="icon-container">
            <c-icon type="desktop" />
            <c-icon type="boat" />
            <c-icon type="deny" />
            <c-icon type="folder" />
            <c-icon type="info" />
            <c-icon type="plus" />
            <c-icon type="search" />
            <c-icon type="th-card" />
            <c-icon type="th-list" />
            <c-icon type="close" />
            <c-icon type="cog" />
            <c-icon type="sign-in" />
            <c-icon type="navicon" />
            <c-icon type="dashboard" />
            <c-icon type="sitemap" />
            <c-icon type="coffee" />
            <c-icon type="angle-up" />
            <c-icon type="angle-down" />
            <c-icon type="life-bouy" />
            <c-icon type="id-card" />
        </div>
        <h3>tabs</h3>
        <div class="tabs-container">
           <c-tab :tab-data="tabData"></c-tab>
        </div>
        <h3>buttons</h3>
        <div>
            <c-button>Add Resource</c-button>
            <c-button type="cancel">Cancel</c-button>
            <c-button type="deny">Deny</c-button>
            <c-button type="plus"></c-button>
        </div>
        <h3>badge</h3>
        <div>
            <c-badge type="building"></c-badge>
            <c-badge type="idle"></c-badge>
        </div>
        <h3>board</h3>
        <div>
            <c-board :board-data="boardData"></c-board>
        </div>
        <h3>search</h3>
        <div>
            <c-input type="search" v-model="aaa" />
        </div>
        <h3>avatar</h3>
        <div>
            <c-avatar :source="avatar"></c-avatar>
        </div>
        <h3>dropdown</h3>
        <div>
            <c-dropdown
               :items="items"
            >
               <div style="line-height:40px;">
                  <c-avatar :source="avatar"></c-avatar>
                   <c-icon type="angle-down"></c-icon>
               </div>

            </c-dropdown>
        </div>
        <div>
            <c-modal></c-modal>
        </div>
        <h3>block</h3>
        <div>
            <c-brick
                title="building"
                :number="8"
                rotate
            ></c-brick>
            <c-brick
                title="idle"
                :number="4"
            ></c-brick>
        </div>
        <div>
            <c-history :history-list="historyList"></c-history>
        </div>
        <h3>navbar</h3>
        <div>
            <c-sidebar :nav-list="navList"></c-sidebar>
        </div>
    </div>
</template>

<script>
import CIcon from "@compos/cIcon";
import CTab from "@compos/cTab";
import CButton from "@compos/cButton";
import CBadge from "@compos/cBadge";
import CBoard from  "@compos/cBoard";
import CInput from "@compos/cInput";
import CAvatar from "@compos/cAvatar";
import CDropdown from "@compos/cDropdown";
import CModal from "@compos/cModal";
import CBrick from "@compos/cBrick";
import CHistory from "@compos/cHistory";
import CSidebar from "@compos/cSidebar";

export default {
  data() {
    return {
      avatar: require("./assets/images/sponge.png"),
      aaa: "aaa",
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
      historyList:[
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
  },
  components: {
    CIcon,
    CTab,
    CButton,
    CBadge,
    CBoard,
    CInput,
    CAvatar,
    CDropdown,
    CModal,
    CBrick,
    CHistory,
    CSidebar
  },
  watch : {
    aaa(v) {
      console.log("aaa当前值",v);
    }
  }
};

</script>

<style>
.app-container {
  padding-left: 16px;
}
</style>