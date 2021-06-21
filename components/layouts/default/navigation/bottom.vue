<template>
  <div>


    <footer class="p-4 bg-success">
      <div class="text-center fs-6">Released under the <a href="https://opensource.org/licenses/MIT" target='_blank' class='text-decoration-none text-light fw-bold'>MIT License</a></div>
      <div class="text-center fs-6">Copyright © 2021  <a href="https://github.com/imithu" target='_blank' class='text-decoration-none text-light fw-bold'>Mithu</a></div>
      <div class="text-center fs-6">Last Update: <img :src="$config.base.Last_Updated_Flag" alt="BD" style='width: 28px;'> {{$config.base.Last_Updated_DateTime}} </div>
    </footer>


  </div>
</template>