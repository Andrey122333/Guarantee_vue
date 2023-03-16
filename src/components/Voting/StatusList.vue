<template>
    <div>
      <div class="status-item">
        <span class="title-item">Изменить статус:</span>
      <textarea class="create-description"></textarea>
      </div>
      <div class="status-item">
        <span class="title-item">Не менять:</span>
      <textarea class="create-description"></textarea>
      </div>

    </div>
  </template>
  <!-- //$emit('input', $event.target._value) -->
  <script>
  export default {
    data() {
      return {
        ittest: {}
      }
    },
    methods: {
      test(e) {
        console.log(e.target._value);
      },
    }
  };
  </script>
  <style scoped lang="scss">
  .status-item {
    float: left;
    margin-bottom: 10px;
    width: 100%;
  }
  .title-item {
  float: left;
  font-weight: bold;
  line-height: 40px;
}
.create-description {
  text-align: justify;
  width: 100%;
  min-height: 70px;
}
  </style>