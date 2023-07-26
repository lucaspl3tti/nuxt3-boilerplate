<template>
  <div>
    <v-btn>Hello world</v-btn>
  </div>
</template>

<script>
export default {
  props: {
    text: {
      type: String,
      default: '',
    },
  },
}
</script>
