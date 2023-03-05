<template>
  <div class="items-container">
    <div class="item" v-for="application in applications" :key="application.id">
      <p class="title-item text-item">{{application.name}}</p>
      <p class="text-item">
        {{application.description}}
      </p>
    </div>
  </div>
</template>

<script>
export default {
    props: {
      applications: {
            type: Array,
            required: true
        }
    }
};
</script>

<style scoped lang="scss">

$create-height: 70px;
$input-height: 70px;

.items-container {
  margin-top: 20px;
  padding: 20px 0px;
  width: 100%;
  background: #f2f2f2;
  //margin-bottom: $create-height+$input-height;
}
.item {
  background: #d9d9d9;
  width: 85vw;
  padding: 5px 10px;
  text-align: left;
  margin: 10px auto;
  border-radius: 10px;
}
.title-item {
  font-weight: bold;
}
.text-item {
  font-size: 13px;
  color: #4072cb;
}
</style>