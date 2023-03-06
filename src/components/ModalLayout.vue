<template>
<div class="modal-layout"></div>
</template>

<script>
export default {

}
</script>

<style scoped lang="scss">
$create-height: 70px;

.modal-layout {
  width: 100%;
  height: calc(100% - $create-height);
  background: #000000;
  position: fixed;
  top: 0px;
  opacity: 70%;
}
</style>