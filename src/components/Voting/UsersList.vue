<template>
  <div class="modal-users-item">
    <div
      class="user-item"
      v-for="participant, index in participants"
      :key="participant.id"
    >
      <img class="user-photo" :src="participant.photo" />
      <div class="user-text">
        <span class="user-name">{{ participant.name }}</span>
        <span class="user-role">{{ participant.role }}</span>
        <input
          class="text-right"
          type="radio"
          name="voting"
          id="one"
          :value="index"
          @input="test"
        />
      </div>
    </div>
  </div>
</template>
<!-- //$emit('input', $event.target._value) -->
<script>
export default {
  props: {
    participants: {
      type: Array,
      required: true,
    },
  },
  data() {
    return {
    }
  },
  methods: {
    test(e) {
      this.$emit('update:modelValue', e.target.value)
      // console.log(e.target.value);
      // console.log(e.target._value);
    },
  }
};
</script>
<style scoped lang="scss">
.user-item {
  float: left;
  margin-bottom: 10px;
  width: 100%;
}
.user-photo {
  height: 50px;
  float: left;
}
.user-text {
  border-radius: 0px 10px 10px 0px;
  float: left;
  width: calc(100% - 50px);
  height: 50px;
  background: #6b80a5;
}
.user-name {
  color: #fff;
  font-weight: bold;
  float: left;
  font-size: 15px;
  margin-top: 3px;
  margin-left: 10px;
}
.user-role {
  color: #40cb4e;
  float: left;
  font-size: 14px;
  margin-top: 3px;
  margin-left: 10px;
  width: 80%;
}
.modal-users-item {
  float: left;
  margin: 5px 5vw;
  width: 80vw;
  text-align: left;
}
.text-right {
  float: right;
  margin: 0px 3%;
  font-weight: bold;
}
</style>