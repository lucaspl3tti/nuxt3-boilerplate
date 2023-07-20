<template>
  <main class="nuxt3-starter nuxt3-starter--home">
    <HelloWorld :text="helloWorld" />
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
