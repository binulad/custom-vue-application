<template>
  <teleport to="body">
    <Transition name="fade" mode="out-in" appear>
      <!-- Backdrop Container -->
      <div class="backdrop-container" @click="$emit('closeModal')"></div>
      <!-- End: Backdrop Container -->
    </Transition>

    <Transition name="pop" appear>
      <!-- Modal Container -->
      <div
        class="modal"
        ref="modalContainer"
        tabindex="-1"
        @keydown.esc="$emit('closeModal')"
        @keydown="
          checkKeyEvent(
            $event,
            modalElement,
            firstFocusableElement,
            lastFocusableElement,
            focusableElements
          )
        "
      >
        <div class="modal-dialog">
          <div class="modal-header">
            <slot name="modalHeader">
              <h4>Modal Title</h4>
            </slot>
            <button
              type="button"
              class="close"
              v-FocusElement
              @click="$emit('closeModal')"
            >
              &#10006;
            </button>
          </div>
          <div class="modal-body">
            <slot name="modalBody"
              >Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eius
              facilis ipsa adipisci obcaecati molestiae provident inventore eos
              iusto quam! Sequi!</slot
            >
          </div>
          <slot name="modalFooter" v-if="isShowFooter">
            <div class="modal-footer">Modal Footer</div>
          </slot>
        </div>
      </div>
      <!-- End: Modal Container -->
    </Transition>
  </teleport>
</template>

<script lang='ts'>
import { defineComponent } from "vue";
import FocusTrap from "@/mixins/focus-trap";
import FocusElement from "@/directives/focus-element.vue";

export default defineComponent({
  name: "CommonModal",
  emits: ["closeModal"],
  props: {
    isShowFooter: {
      type: Boolean,
      default: true,
    },
  },
  mixins: [FocusTrap],
  directives: { FocusElement },
  data() {
    return {
      modalElement: HTMLElement as any,
    };
  },
  mounted() {
    this.modalElement = this.$refs["modalContainer"] as any;
  },
  methods: {},
});
</script>