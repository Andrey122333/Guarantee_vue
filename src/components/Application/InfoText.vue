<template>
          <div class="modal-info-text">
          <span class="modal-info-left">создана: {{ application.date }}</span>
          <span class="modal-info-right">{{ application.city }}</span>
        </div>
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
.modal-info-text {
  width: 100%;
  float: left;
}
.modal-info-left {
  float: left;
  margin-left: 10vw;
  font-size: 14px;
}
.modal-info-right {
  float: right;
  margin-right: 10vw;
  font-size: 14px;
}
</style>