<template>
  <div></div>
</template>

<script>
export default {
  mounted() {
    this.$store.commit('setUserAccessToken', this.$route.params.id);
  },
};
</script>

<style></style>
