<template>
  <footer>
 sd
  </footer>
</template>

<script>
export default {
  props: {
    content: {
      type: Object,
      required: true,
    },
  },
  data() {
    return {
      expanded: "not_expanded h-0",
      currentYear: new Date().getFullYear(),
    };
  },
  methods: {
    expandIn() {
      this.expanded = "expandend h-28";
    },
    expandOut() {
      this.expanded = "not_expanded h-0";
    },
  },
};
</script>


