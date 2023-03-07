<template>
  <div class="modal-dialog">
    <div class="modal-info">
      <button class="button-close">
        <i class="icon-close" @click="$emit('close')"></i>
      </button>
      <h2 class="modal-name">Приглашение</h2>
      <h3>Кандидат на исполнение</h3>

      <div class="modal-users-item">
        <div class="user-item">
          <img
            class="user-photo"
            src="https://www.amica.it/wp-content/uploads/2020/02/prima-gallery1.jpg?v=926743"
          />
          <div class="user-text">
            <span class="user-name">Никнейм участника</span>
            <span class="user-role">Отправил приглашение</span>
          </div>
        </div>
      </div>
      <InfoText />
      <Contribution />
      <TagsList />
      <Description />
    </div>
    <Users />
  </div>
</template>
  
  <script>
import InfoText from "@/components/Application/InfoText.vue";
import Contribution from "@/components/Application/Contribution.vue";
import TagsList from "@/components/Application/TagsList.vue";
import Description from "@/components/Application/Description.vue";
import Users from "@/components/Application/Users.vue";

export default {
  name: "",
  components: {
    InfoText,
    Contribution,
    TagsList,
    Description,
    Users,
  },
  props: {
    application: {
      type: Array,
      required: true,
    },
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
</style>