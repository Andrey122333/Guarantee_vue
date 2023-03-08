<template>
              <button class="button">
              <slot></slot>
            </button>
</template>

<script>
export default {

}
</script>

<style scoped lang="scss">

  .button {
    float: left;
    height: 40px;
    background: #D9D9D9;
    font-size: 11px;
    font-weight: bold;
    color: #6B80A5;
    border: 0px;
    border-radius: 10px;
    width: 35vw;
    margin-left: 5%;
  }
</style>