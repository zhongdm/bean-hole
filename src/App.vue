<script setup>
  import { ref } from 'vue'
  let innerValue = ref('')
</script>

<template>
<input-currency v-model:value="innerValue"></input-currency>
</template>

