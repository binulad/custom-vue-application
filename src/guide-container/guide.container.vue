<template>
  <div class="wrapper">
    <div class="split-container">
      <div class="left-view">
        <common-nav-list :navObject="basicList"></common-nav-list>
        <common-nav-list :navObject="essentialsList"></common-nav-list>
      </div>
      <div class="content-view">
        
        <!-- Tab Container -->
        <div class="tab-wrapper">
          <ul class="tab-list">
            <li class="tab-item" v-for="tab in tabList" :key="tab.tabIndex">
              <a href="#" class="tab-link" :class="{active: currentTabContainer == tab.container}" @click="onTabClick(tab)">{{tab.name}}</a>
            </li>
          </ul>
          <div class="tab-content">
            <keep-alive>
              <component :is="currentTabContainer" />
            </keep-alive>
          </div>
        </div>
        <!-- End: Tab Container -->

        <!-- Action Buttons -->
        <div>
          <button class="btn btn-gray" @click="onCancel()">Cancel</button>
        </div>
        <!-- End: Action Buttons -->
      </div>
    </div>
  </div>
</template>

<script lang='ts'>
import { defineComponent } from "vue";
import CommonNavList from "@/components/CommonNavList.vue";
import GuideConstants from "@/guide-container/constants/index";
import HomeContainer from "@/guide-container/Home.vue";
import ProfileContainer from "@/guide-container/Profile.vue";
import store from "@/store";

export default defineComponent({
  name: "guideContainer",
  components: { CommonNavList, HomeContainer, ProfileContainer },
  data() {
    return {
      basicList: GuideConstants.BASIC_LIST,
      essentialsList: GuideConstants.ESSENTIALS_LIST,
      checked: true,
      nameOfFruits: new Array<any>(),
      tabList: GuideConstants.TAB_LIST,
      currentTabContainer: GuideConstants.TAB_LIST[0].container,
      isUpdateHomeContent: false,
      cloneHomeContent: {}
    };
  },
  computed: {
    getHomeContents() {
      return store.getters.getHomeContentObj;
    },
    getCloneHomeContents() {
      return store.getters.getCloneHomeContentObj;
    },
  },
  methods: {
    updateHomeContent(isUpdated: any) {
      this.isUpdateHomeContent = isUpdated;
    },
    onCancel() {
      console.log("this.getHomeContents", this.getHomeContents);
      console.log("this.getCloneHomeContents", this.getCloneHomeContents);
      
      if(JSON.stringify(this.getHomeContents) != JSON.stringify(this.getCloneHomeContents)) {
        alert("Content updated");
      }
    },
    onTabClick(tab: any) {
      this.currentTabContainer = tab.container;
    }
  }
});
</script>