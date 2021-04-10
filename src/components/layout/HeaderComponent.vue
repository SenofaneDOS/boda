<template>
  <header class="header top-0 z-10 fixed flex justify-end h-20 w-full mt-0">
    <nav class="navbar h-full w-4/12">
      <ul class="navbar_menu h-full flex items-center justify-around">
       <li class="text-first hover:text-gray-500" v-for="(link, index) in links" :key="index"> <router-link :to="link.path"><span>{{link.name}}</span></router-link></li>
      </ul>
    </nav>
  </header>
</template>

<script>
export default {
  data(){
    return{
      links:[
        {name: 'Home', path: '/'},
        {name: 'Cerimonia', path: '/cerimonia'},
        {name: 'Ricevimento', path: '/ricevimento'}
      ]
    }
  }
};
</script>

