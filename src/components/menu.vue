<template>
  <div class="flex-container">
    <div :style="{ textAlign: 'left' }">
      {{ header }}
    </div>
    <div
      class="background"
      :style="{
        backgroundColor: 'transparent',
        display: 'flex',
        justifyContent: 'flex-start',
      }"
    >
      <sideBarMenu
        :menu="menu"
        :style="{
          flex: 1,
          height: '100%',
          display: 'flex',
        }"
      />
    </div>
  </div>
</template>

<script>
import { SidebarMenu } from "vue-sidebar-menu";
import { eventBus } from "../main";

export default {
  name: "polll-list",
  components: {
    sideBarMenu: SidebarMenu,
  },
  data() {
    return {
      header: "OPPI",
      menu: [
        {
          href: "/dashboard",
          title: "POLL",
          icon: "fa fa-user",
        },
        {
          href: "/dashboard",
          title: "USER",
          icon: "fa fa-chart-area",
        },
      ],
    };
  },
  created() {
    eventBus.$on("emitedEvent", (change) => {
      this.header = change;
    });
  },
};
</script>

<style scoped>
.flex-container {
  margin: 10px;
  width: 200px;
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
