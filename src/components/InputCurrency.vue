<script setup>
  import {
    ref,
    useSlots,
    useAttrs
  } from 'vue'
  
  defineProps({
    value: String
  })
  
  const emit = defineEmits(['onInput'])
  
  function onInput($event) {
    const actualValue = $event.target.value
    const newStr = actualValue
      .replace(/,/g, '')
      .split('')
      .reverse()
      .join('')
      .replace(/\d{3}(?=\d)/g, function() {
        return arguments[0] + ','
      })
    const formatValue = newStr.split('')
      .reverse()
      .join('')
    emit('update:value', formatValue)
  }
</script>

<template>
  <div>
    <input type="text" :value="value" @input="onInput" />
  </div>
</template>

<style scoped>
  a {
    color: #42b983;
  }
  
  .modal {
    position: fixed;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    background-color: rgba(0, 0, 0, .5);
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }
  
  .modal div {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    background-color: white;
    width: 300px;
    height: 300px;
    padding: 5px;
  }
</style>
