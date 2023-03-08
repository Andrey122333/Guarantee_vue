<template>
  <div class="modal-dialog">
    <div class="modal-info">
      <button class="button-close"><i class="icon-close"   @click="$emit('close')"></i></button>
      <h2 v-if="application.type =='application'" class="modal-name">Название заявки</h2>
      <h2 v-if="application.type =='invitation_application'" class="modal-name">Приглашение</h2>
      <h3 v-if="application.type =='invitation_application'">{{ application.role_invited }}</h3>
      <UsersList :participants="application.who_invited" v-if="application.type =='invitation_application'"/>
      <InfoText :application="application"/>
      <Contribution style="width: 80vw;"> Взнос: {{ application.contribution }}Р</Contribution>
      <TagsList :tags="application.tags" />
      <Description :application="application"/>
    </div>
    <Users :participants="application.participants" />
  </div>
</template>

<script>
import InfoText from "@/components/Application/InfoText.vue";
import Contribution from "@/components/Application/Contribution.vue";
import TagsList from "@/components/Application/TagsList.vue";
import Description from "@/components/Application/Description.vue";
import Users from "@/components/Application/Users.vue";
import UsersList from "@/components/Application/UsersList.vue";

export default {
  name: "",
  components: {
    InfoText,
    Contribution,
    TagsList,
    Description,
    Users,
    UsersList
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