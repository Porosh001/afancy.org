<template>
  <div>

    <div class="h1 text-center text-primary" style='font-family: Fredericka the Great;'>Placeholder</div>


    <hljs class='mt-5' lang='css'>
    /** placeholder text color */
    .fnc-placeholder-text-primary
    .fnc-placeholder-text-success
    .fnc-placeholder-text-danger
    .fnc-placeholder-text-warning
    .fnc-placeholder-text-light
    .fnc-placeholder-text-black

    /** placeholder text hover color */
    .fnc-hover-placeholder-text-primary
    .fnc-hover-placeholder-text-success
    .fnc-hover-placeholder-text-danger
    .fnc-hover-placeholder-text-warning
    .fnc-hover-placeholder-text-light
    .fnc-hover-placeholder-text-black
    </hljs>


    <h2 class="text-primary mt-3">Example</h2>
    <div class="row gy-3">
      <div class="col-md-3"><input type="text" class="form-control bg-transparent border-primary text-primary fnc-placeholder-text-primary fnc-hover-placeholder-text-success" placeholder="fnc-placeholder-text-primary" ></div>
      <div class="col-md-3"><input type="text" class="form-control bg-transparent border-success text-success fnc-placeholder-text-success fnc-hover-placeholder-text-primary" placeholder="fnc-placeholder-text-success" ></div>
      <div class="col-md-3"><input type="text" class="form-control bg-transparent border-danger text-danger fnc-placeholder-text-danger" placeholder="fnc-placeholder-text-danger" ></div>
      <div class="col-md-3"><input type="text" class="form-control bg-transparent border-warning text-warning fnc-placeholder-text-warning" placeholder="fnc-placeholder-text-warning" ></div>
      <div class="col-md-3"><input type="text" class="form-control bg-transparent border-light text-light fnc-placeholder-text-light" placeholder="fnc-placeholder-text-light" ></div>
      <div class="col-md-3"><input type="text" class="form-control bg-transparent border-light text-light fnc-placeholder-text-black" placeholder="fnc-placeholder-text-black" ></div>
    </div>


  </div>
</template>




<script>
import hljs from '@/components/afancy/hljs.vue';
export default {
  layout: 'docs',
  components: {hljs},
  head() {
    return {
      title: 'Placeholder' + this.$config.base.APP_TITLE
    }
  }
}
</script>
