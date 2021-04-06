<template>
  <header class="header top-0 z-10 fixed h-20 w-auto justify-between mt-0">
    <nav class="navbar">
      <div class="navbar_menu">
        <router-link to="/">Home</router-link>
         <router-link to="/cerimonia">Cerimonia</router-link>
          <router-link to="/ricevimento">Ricevimento</router-link>
      </div>
        <router-view></router-view>
    </nav>
  </header>
</template>

<script>
export default {
};
</script>

