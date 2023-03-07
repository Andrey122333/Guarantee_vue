<template>
        <p class="modal-description">
       {{ application.description }}
      </p>
</template>

<script>
export default {
  props: {
    application: {
      type: Array,
      required: true,
    },
  },
};
</script>

<style scoped lang="scss">
.modal-description {
  float: left;
  font-size: 13px;
  margin: 5px 5vw;
  text-align: justify;
  width: 80vw;
  //max-height: 135px;
}
</style>