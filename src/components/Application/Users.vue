<template>
      <div class="modal-users">
        <p class="users-name">Участники (12/100):</p>
      <div class="modal-users-item">
        <UsersList />
      </div>
    </div>
</template>

<script>
import UsersList from "@/components/Application/UsersList.vue";

export default {
  name: "",
  components: {
    UsersList,
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
.users-name {
  color: #fff;
  float: left;
  margin: 5px 5vw;
  width: 80vw;
  text-align: left;
}
</style>