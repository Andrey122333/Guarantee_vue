<template>
  <div class="modal-dialog">
    <div class="modal-info">
      <button class="button-close">
        <i class="icon-close" @click="$emit('close')"></i>
      </button>
      <h2 class="modal-name">Новый канидидат</h2>
      <span class="title-item">Описание:</span>
      <textarea class="create-description"></textarea>
    </div>
    <div class="modal-users">
        <p class="users-name">Участники ({{application.participants.length}}/100):</p>
      <div class="modal-users-item">
        <UsersList @input="(e)=>$emit('update:modelValue', e)" :participants="application.participants" />
      </div>
    </div>
    <!-- <GreyButton>Пригласить</GreyButton> -->
  </div>
</template>
  
  <script>
import GreyButton from "@/components/UI/GreyButton.vue";
import UsersList from "@/components/Voting/UsersList.vue";

export default {
  name: "",
  components: {
    GreyButton,
    UsersList,
  },
  props: {
    application: {
      type: Array,
      required: true,
    },
  },
  data() {
    return {
      checked: {}
    }
  },
};
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
.modal-dialog {
  background: #879ac5;
  position: fixed;
  height: calc(90vh - $create-height);
  width: 90vw;
  left: 5vw;
  top: 5vh;
  border-radius: 20px;
  overflow: auto;
}
.modal-info {
  float: left;
  background: #fff;
  border-radius: 20px 20px 0px 0px;
  width: 100%;
}
.button-close {
  height: 20px;
  width: 20px;
  position: fixed;
  right: 8vw;
  top: 7vh;
  padding: 16px;
  border-radius: 15px;
  border: 0px;
  background: #d9d9d9;
}
.icon-close {
  height: 20px;
  width: 20px;
  background: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAYAAACNiR0NAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAABmSURBVHgB1ZRBCoAwDAQXX5D/X9wf+ST10IMHCRONogOF0kwWSkukvxGqE1lh2dcsjkdPZMIKQ7FLROLghqxWDj07uxx63N/CIwiFTXoZq/HKVuOjWI3fhjQQpyYS95Hh0Dq+vskGHow2UkviuZ0AAAAASUVORK5CYII=);
  position: fixed;
  right: 8vw;
  top: 7vh;
  margin: 6px;
}
.title-item {
  float: left;
  font-weight: bold;
  line-height: 40px;
  margin: 0 10%;
}
.create-description {
  text-align: justify;
  width: 80%;
  margin: 10px 10%;
  min-height: 130px;
}
.users-name {
  color: #fff;
  float: left;
  margin: 5px 5vw;
  width: 80vw;
  text-align: left;
}
</style>