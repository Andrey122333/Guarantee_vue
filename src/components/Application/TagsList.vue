<template>
          <div class="tags">
          <div class="tag" v-for="tag, index in tags" :key="index" >{{ tag }}</div>
        </div>
</template>

<script>
export default {
  props: {
    tags: {
      type: Array,
      required: true,
    },
  },
}
</script>

<style scoped lang="scss">
.tags {
  float: left;
  width: 80vw;
  max-height: 66px;
  margin: 0px 5vw;
}
.tag {
  float: left;
  margin: 4px;
  padding: 5px 10px;
  background: #d9d9d9;
  border-radius: 10px;
  font-size: 13px;
}
</style>