<template>
  <div class="flex-container">
    <div
      :style="{
        justifyContent: 'space-between',
        display: 'flex',
        margin: '10px',
      }"
    >
      <img height="30px" width="100px" src="@/assets/oppi.png" />
      <div class="flex_row">
        <h6 :style="{ marginRight: '10px' }">Admin</h6>
        <img height="30px" width="30px" src="@/assets/user.png" />
      </div>
    </div>
    <div class="flex_row">
      <div class="background" :style="{ backgroundColor: 'transparent' }">
        <sideBarMenu />
      </div>
      <div class="background_1">
        <pollList />
      </div>
    </div>
  </div>
</template>

<script>
import PollList from "./PollList.vue";
import Menu from "./menu.vue";

export default {
  name: "polll-list",
  components: {
    sideBarMenu: Menu,
    pollList: PollList,
  },
  data() {
    return {};
  },
};
</script>

<style scoped>
.flex-container {
  display: flex;
  flex-direction: column;
  align-content: center;
  margin: 0;
  padding: 0;
  height: 80vh;
}
.background {
  flex-grow: 1;
  display: flex;
  align-content: center;
  align-items: center;
  justify-content: center;
  justify-items: center;
}
.group {
  object-fit: contain;
  margin-left: 100px;
}
.background_1 {
  flex-grow: 9;
  display: flex;
  align-content: center;
  align-items: center;
  justify-content: center;
  justify-items: center;
}
.flex_col {
  flex-direction: column;
}
.flex_row {
  display: flex;
  flex-direction: row;
}
</style>
