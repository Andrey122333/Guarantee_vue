<template>
        <div class="footer-div">
            <button class="button">
              <slot></slot>
            </button>
    </div>
</template>

<script>
export default {
  name: "",
};
</script>

<style scoped lang="scss">
.footer-div {
    width: 100%;
    position: fixed;
    bottom: 0px;
  }

  .button {
    height: 70px;
    width: 100%;
    background: #29426d;
    font-size: 18px;
    font-weight: bold;
    color: #fff;
    border: 0px;
  }
</style>