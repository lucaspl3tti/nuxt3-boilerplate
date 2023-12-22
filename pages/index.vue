<template>
  <main class="nuxt3-starter nuxt3-starter--home">
    <hello-world :text="helloWorld" />
  </main>
</template>

<script>
export default {
  data() {
    return {
      helloWorld: 'Hallo Welt!',
    }
  },
}
</script>
