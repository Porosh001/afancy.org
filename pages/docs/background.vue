<template>
  <div>

    <div class="h1 text-center text-primary" style='font-family: Fredericka the Great;'>Background</div>

    <div class="fs-4 text-primary">Background Color</div>
    <div class='my-2'>Afancy has mainly 6 classes for background color</div>
    <div class="row gy-3">
      <div class="col-4"><div class='box text-center pt-2 bg-primary'>.bg-primary</div></div>
      <div class="col-4"><div class='box text-center pt-2 bg-success'>.bg-success</div></div>
      <div class="col-4"><div class='box text-center pt-2 bg-danger'>.bg-danger</div></div>
      <div class="col-4"><div class='box text-center pt-2 text-black bg-warning'>.bg-warning</div></div>
      <div class="col-4"><div class='box text-center pt-2 text-black bg-light'>.bg-light</div></div>
      <div class="col-4"><div class='box text-center pt-2 bg-black'>.bg-black</div></div>
    </div>
    <hljs class='mt-3' lang='css'>
    /** background-color classes */
    .bg-primary
    .bg-success
    .bg-danger
    .bg-warning
    .bg-light
    .bg-black
    </hljs>

    <div class="fs-4 mt-5 text-primary">Background Hover Color</div>
    <div class='my-2'>move the mouse over the box</div>
    <div class="row gy-3">
      <div class="col-4"><div class='box text-center pt-2 border border-primary hover-bg-primary'>.bg-primary</div></div>
      <div class="col-4"><div class='box text-center pt-2 border border-success hover-bg-success'>.bg-success</div></div>
      <div class="col-4"><div class='box text-center pt-2 border border-danger  hover-bg-danger'>.bg-danger</div></div>
      <div class="col-4"><div class='box text-center pt-2 border border-warning hover-bg-warning'>.bg-warning</div></div>
      <div class="col-4"><div class='box text-center pt-2 border border-light   hover-bg-light hover-text-black'>.bg-light</div></div>
      <div class="col-4"><div class='box text-center pt-2 border                hover-bg-black' style='border: 3px solid #000 !important;' >.bg-black</div></div>
    </div>
    <hljs class='mt-3' lang='css'>
    /** background color classes in hover state */
    .hover-bg-primary
    .hover-bg-success
    .hover-bg-danger
    .hover-bg-warning
    .hover-bg-light
    .hover-bg-black
    </hljs>


  </div>
</template>



<script>
import hljs from '@/components/afancy/hljs.vue';
export default {
  layout: 'docs',
  components: {hljs},
  head() {
    return {
      title: 'Colors' + this.$config.base.APP_TITLE
    }
  }
}
</script>


<style scoped>
.box {
  /* width: 200px; */
  height: 45px;
}
</style>