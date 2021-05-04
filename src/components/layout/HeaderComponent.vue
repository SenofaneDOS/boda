<template>
  <header :class="`header border-t-15 border-r-15 border-l-15 h-32 w-full fixed top-0 z-10 flex justify-center mt-0 border-first ${expandend}`">
    <nav class="navbar h-full w-full bg-second shadow-2xl">
      <ul class="navbar_menu h-full flex items-center justify-around">
       <li class="text-white hover:text-gray-500"><router-link to="/"><span class="text-6xl">Maria & Stefano</span></router-link></li>
      </ul>
    </nav>
  </header>
</template>
<script>
export default {
  data(){
    return{
      expandend: 'not_expanded'
    }
  },
mounted() {
  document.addEventListener('scroll', this.handleScroll)
},
	methods:{
  handleScroll: function() {
    if(window.scrollY === 0){
      this.expandend = 'expanded h-0'
    } else {
      this.expandend = 'not_expanded'
    }
}
  }

}
</script>

