<template>
  <div />
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

