<template>
  <div class="fixed-center text-center">
    fgsfgf
    <p>
      <img
        src="./assets/sad.svg"
        style="width:30vw;max-width:150px;"
      >
    </p>
    <p class="text-faded">Sorry, 页面找不到...<strong>(404)</strong></p>
    <q-btn
      color="secondary"
      style="width:200px;"
      @click="$router.push('/')"
    >返回登录页</q-btn>
  </div>
</template>

<script>
export default {
  name: 'Error404'
}
</script>
