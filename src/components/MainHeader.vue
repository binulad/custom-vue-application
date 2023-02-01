<template>
  <!-- Main Header -->
  <header class="main-header">
    <!-- Logo -->
    <div class="brand-logo">
      <a href="/" class="brand-logo__link">
        <img src="@/assets/logo.png" alt="Logo Image" class="brand-logo__img" />
        <span class="brand-logo__text">Vue.js</span>
      </a>
    </div>
    <!-- End: Logo -->

    <!-- Nav Content -->
    <div class="nav-content">
      <!-- Search -->
      <button
        type="button"
        title="Search Content"
        class="search-btn"
        @click="isShowModal = true"
      >
        Search
      </button>

      <!-- Search Modal -->
      <common-modal
        v-if="isShowModal"
        :isShowFooter="false"
        @closeModal="isShowModal = false"
      >
        <template #modalHeader>
          <span>Template Title</span>
        </template>
        <template #modalBody>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse,
            porro.
          </p>
          <a href="#">Link</a>
          <a href="#">Link</a>
          <button disabled>Button</button>
        </template>
      </common-modal>
      <!-- End: Search Modal -->

      <!-- End: Search -->
    </div>
    <!-- End: Nav Content -->
    <nav class="header-nav">
      <ul class="header-nav__list">
        <!-- Header Navigation -->
        <li
          class="header-nav__item"
          v-for="(menuItem, index) in menuList"
          :key="index"
          :class="{ dropdown: menuItem.children }"
          @mouseover="mouseEvent(menuItem, index)"
          @mouseout="this.activeIndex = null"
          ref="items"
        >
          <router-link
            class="header-nav__link"
            :class="{ 'dropdown-btn': menuItem.children, 'active' : activeParentMenuIndex == index }"
            :to="menuItem.children ? '' : menuItem.link"
            @click="onClickMenu($event, menuItem, index)"
          >
            <span>{{ menuItem.name }}</span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              aria-hidden="true"
              focusable="false"
              viewBox="0 0 24 24"
              class="dropdown-icon"
              v-if="menuItem.children"
            >
              <path
                d="M12,16c-0.3,0-0.5-0.1-0.7-0.3l-6-6c-0.4-0.4-0.4-1,0-1.4s1-0.4,1.4,0l5.3,5.3l5.3-5.3c0.4-0.4,1-0.4,1.4,0s0.4,1,0,1.4l-6,6C12.5,15.9,12.3,16,12,16z"
              ></path>
            </svg>
          </router-link>
          <template v-if="menuItem.children">
            <ul class="dropdown-list" v-show="activeIndex == index">
              <li
                v-for="(submenu, index) in menuItem.children"
                :key="index"
                class="dropdown-item"
              >
                <router-link
                  class="dropdown-link"
                  :to="submenu.link"
                  @click="activeParentMenuIndex = activeIndex"
                >
                  {{ submenu.name }}
                </router-link>
              </li>
            </ul>
          </template>
        </li>
        <!-- End: Header Navigation -->
      </ul>
      <ul class="header-nav__list">
        <li class="header-nav__item theme-toggle">
          <button
            type="button"
            class="header-nav__link theme-toggle__btn"
            @click="toggleTheme()"
          >
            <!-- Switch -->
            <span class="theme-toggle__switch"></span>
          </button>
        </li>
      </ul>
    </nav>
  </header>
  <!-- End: Main Header -->
</template>

<script lang='ts'>
import { defineComponent } from "vue";
import CommonModal from "@/components/CommonModal.vue";
import Constants from "@/constants/index";

export default defineComponent({
  name: "MainHeader",
  components: {
    CommonModal,
  },
  data() {
    return {
      isShowModal: false,
      isShowDropdown: false,
      menuList: Constants.HEADER_MENU,
      activeIndex: null,
      activeParentMenuIndex: null
    };
  },
  mounted() {
    console.log(this.$refs.items);
  },
  methods: {
    mouseEvent(menuItem: any, index: any) {
      if (menuItem.children) {
        this.activeIndex = index;
      }
    },
    toggleTheme() {
      const body = document.body;
      body.classList.toggle("dark-theme");

      if (body.classList.contains("dark-theme")) {
        localStorage.setItem("theme", "dark");

        document.documentElement.style.setProperty("--current-theme", "dark");
      } else {
        localStorage.setItem("theme", "light");
        document.documentElement.style.setProperty("--current-theme", "light");
      }
    },
    onClickMenu(event: any, menuItem: any, parentIndex: any) {
      if(menuItem.children) {
        event.preventDefault();
      } else {
        this.activeParentMenuIndex = parentIndex;
      }
    }
  },
});
</script>