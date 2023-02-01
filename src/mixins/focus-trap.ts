const FocusTrap = {
  data() {
    return {
      firstFocusableElement: HTMLElement as any,
      lastFocusableElement: HTMLElement as any,
      // List of focusable elements
      focusableElements: 'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
    }
  },
  methods: {
    checkKeyEvent(
      event: any,
      modalElement: any,
      firstFocusableElement: any,
      lastFocusableElement: any,
      focusableElements: any
    ) {
      // Get the focusable elements from the Modal content
      const focusableContent = modalElement.querySelectorAll(focusableElements);

      // First Focusable element of Modal
      firstFocusableElement = focusableContent[0];

      // Last Focusable element of Modal
      lastFocusableElement = focusableContent[focusableContent.length - 1];

      // Get the Tab key event
      const isTabPressed = event.key === "Tab";

      // Check if Tab key pressed
      if (!isTabPressed) {
        return;
      }

      // Event called if Shift key pressed
      if (event.shiftKey) {
        // If last focusable element is disabled
        if (document.activeElement === firstFocusableElement && lastFocusableElement.disabled) {
          focusableContent[focusableContent.length - 2].focus();
          event.preventDefault();
        } else if (document.activeElement === firstFocusableElement) {
          lastFocusableElement.focus();
          event.preventDefault();
        }
      } else {
        if (document.activeElement === lastFocusableElement || (document.activeElement === focusableContent[focusableContent.length - 2] && lastFocusableElement.disabled)) {
          firstFocusableElement.focus();
          event.preventDefault();
        }
      }
    }
  }
}

export default FocusTrap;