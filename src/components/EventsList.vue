<template>
  <div class="item-event" :class="{'item-grey': index % 2}" v-for="event, index in events" :key="event.id" >
    <p class="text-event">{{event.text}}</p>
  </div>
</template>

<script>
export default {
    props: {
        events: {
            type: Array,
            required: true
        }
    }
};
</script>
<style scoped lang="scss">
.item-event {
    background: #839BC6;
    color: #fff;
    line-height: 30px;
}
.text-event {
    font-weight: bold;
    margin: 0px;
    font-size: 14px;
    padding: 0px 5vw;
}
.item-grey {
    background: #F2F2F2;
    color: #4072CB;
  }
</style>