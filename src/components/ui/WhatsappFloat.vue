<script setup>
const whatsappGroupUrl = 'https://chat.whatsapp.com/KxbyepZHgKW4e8jLhlAtk4'
</script>

<template>
  <a :href="whatsappGroupUrl" target="_blank" rel="noreferrer" class="whatsapp-float group">
    <!-- icona -->
    <div class="whatsapp-icon">
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" fill="white" class="h-5 w-5">
        <path
          d="M16.002 2.667c-7.364 0-13.335 5.972-13.335 13.335 0 2.355.617 4.66 1.787 6.69l-1.9 6.933 7.11-1.865c1.95 1.064 4.156 1.624 6.338 1.624h.005c7.363 0 13.335-5.972 13.335-13.335 0-3.569-1.39-6.925-3.91-9.445-2.52-2.52-5.876-3.937-9.43-3.937zm0 24.384c-2.03 0-4.01-.545-5.745-1.575l-.41-.245-4.217 1.107 1.125-4.107-.267-.424c-1.117-1.771-1.707-3.823-1.707-5.93 0-6.29 5.117-11.406 11.41-11.406 3.044 0 5.906 1.186 8.061 3.341 2.155 2.155 3.341 5.017 3.341 8.06 0 6.29-5.117 11.407-11.406 11.407zm6.26-8.51c-.342-.171-2.02-.997-2.332-1.11-.312-.114-.54-.171-.768.171-.228.342-.882 1.11-1.082 1.339-.199.228-.398.257-.74.086-.342-.171-1.443-.532-2.748-1.695-1.016-.907-1.704-2.026-1.904-2.368-.199-.342-.021-.527.15-.698.154-.153.342-.398.513-.598.171-.199.228-.342.342-.57.114-.228.057-.428-.029-.599-.086-.171-.768-1.853-1.053-2.538-.278-.669-.561-.579-.768-.59-.199-.01-.428-.012-.656-.012-.228 0-.599.086-.912.428-.312.342-1.196 1.168-1.196 2.85 0 1.682 1.224 3.308 1.396 3.536.171.228 2.411 3.683 5.842 5.166.816.352 1.453.562 1.95.72.819.26 1.565.223 2.154.135.657-.098 2.02-.826 2.305-1.625.285-.798.285-1.482.199-1.625-.085-.143-.313-.228-.656-.399z"
        />
      </svg>
    </div>

    <!-- testo -->
    <span class="whatsapp-text"> Unisciti al gruppo </span>
  </a>
</template>

<style scoped>
.whatsapp-float {
  position: fixed;
  bottom: 24px;
  right: 24px;
  z-index: 2000;

  display: flex;
  align-items: center;

  border-radius: 999px;
  background: #25d366;
  color: white;

  padding: 1rem; /* prima era 0.75 */
  overflow: hidden;

  transition: all 0.3s ease;
  box-shadow: 0 12px 40px rgba(0, 0, 0, 0.35);
}

/* icona più grande */
.whatsapp-icon svg {
  width: 26px;
  height: 26px;
}

/* testo */
.whatsapp-text {
  max-width: 0;
  opacity: 0;
  white-space: nowrap;

  margin-left: 0;

  transition: all 0.3s ease;
  font-size: 1rem; /* leggermente più grande */
  font-weight: 500;
}

/* hover più largo */
.whatsapp-float:hover {
  padding: 1rem 1.5rem;
}

.whatsapp-float:hover .whatsapp-text {
  max-width: 220px;
  opacity: 1;
  margin-left: 0.7rem;
}
</style>
