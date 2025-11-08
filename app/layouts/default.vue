<template>
    <div class="font-jost">
      <AppHeader />
      <div>
        <slot />
      </div>
      <AppFooter />
    </div>
</template>

<script setup lang="ts">
import AppHeader from "~/components/widgets/app-header/AppHeader.vue";
import AppFooter from "~/components/widgets/app-footer/AppFooter.vue";
</script>
