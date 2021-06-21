<template>
  <div>

    <div class="h1 text-center text-primary" style='font-family: Fredericka the Great;'>Cursor</div>

    <div class='my-2'>Move the mouse over these boxes</div>
    <div class="btn-group mb-2">
      <button  class="btn border-primary text-light cursor-none">none</button>
      <button  class="btn border-success text-light cursor-auto">auto</button>
      <button  class="btn border-danger text-light  cursor-default" >default</button>
    </div>
    <br>
    <div class="btn-group mb-2">
      <button  class="btn border-primary text-light cursor-text">text</button>
      <button  class="btn border-success text-light cursor-pointer">pointer</button>
    </div>
    <br>
    <div class="btn-group mb-2">
      <button  class="btn border-primary text-light cursor-wait">wait</button>
      <button  class="btn border-success text-light cursor-progress">progress</button>
    </div>
    <br>
    <div class="btn-group mb-2">
      <button  class="btn border-primary text-light cursor-move">move</button>
      <button  class="btn border-success text-light cursor-copy">copy</button>
      <button  class="btn border-danger text-light  cursor-col-resize" >col-resize</button>
    </div>
    <br>
    <div class="btn-group mb-2">
      <button  class="btn border-primary text-light cursor-zoom-in">zoom-in</button>
      <button  class="btn border-success text-light cursor-zoom-out">zoom-out</button>
    </div>
    <br>
    <div class="btn-group mb-2">
      <button  class="btn border-primary text-light cursor-help">help</button>
      <button  class="btn border-success text-light cursor-not-allowed">not-allowed</button>
    </div>

    <ntfc ref='ntfc' />

    <hljs lang='css'>
    /** css classes */
    .cursor-none
    .cursor-auto
    .cursor-default
     ================
    .cursor-text
    .cursor-pointer
     ================
    .cursor-wait
    .cursor-progress
     ================
    .cursor-move
    .cursor-copy
    .cursor-col-resize
     ================
    .cursor-zoom-in
    .cursor-zoom-out
     ================
    .cursor-help
    .cursor-not-allowed
    </hljs>


  </div>
</template>



<script>
export default {
  head() {
    return {
      title: 'Cursor' + this.$config.base.APP_TITLE
    }
  }
}
</script>