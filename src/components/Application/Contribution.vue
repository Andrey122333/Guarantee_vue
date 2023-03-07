<template>
          <div class="modal-contribution">
          <p class="modal-contribution-text"> <slot></slot></p>
        </div>
</template>
<!-- Поменять на внутри текст -->
<script>
export default {
};
</script>

<style scoped lang="scss">
.modal-contribution {
  float: left;
   width: 90vw;
  margin: 10px 5vw;
  background: #839bc6;
  height: 40px;
  border-radius: 20px;
}
.modal-contribution-text {
  font-size: 15px;
  margin: 12px;
  font-weight: bold;
  color: #fff;
}
</style>