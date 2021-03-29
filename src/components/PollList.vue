<template>
  <div class="flex-container">
    <div class="flex_col">
      <div class="flex_row" :style="{ marginBottom: '10px' }">
        <Box :name="'Ten1'" :value="'100.000'" />
        <Box :name="'Ten2'" :value="'100.000'" />
        <Box :name="'Ten3'" :value="'100.000'" />
        <Box :name="'Ten4'" :value="'100.000'" />
      </div>
      <div class="background_1">
        <table>
          <tr>
            <th :style="{ minWidth: '10%', textAlign: 'left' }">Name</th>
            <th :style="{ minWidth: '33%', textAlign: 'left' }">Description</th>
            <th>Status</th>
            <th>Action</th>
          </tr>
          <tr v-for="item in pollList" v-bind:key="item.id">
            <td
              :style="{
                maxWidth: '10%',
                textAlign: 'left',
              }"
            >
              {{ item.emailSubscriptionMessage }}
            </td>
            <td :style="{ minWidth: '33%', textAlign: 'left' }">
              {{ item.description }}
            </td>
            <td :style="{ width: '10%' }">{{ item.status }}</td>
            <td :style="{ width: '12%' }">
              <button class="button" v-on:click="changeEvent">Action</button>
            </td>
          </tr>
        </table>
      </div>
      <div :style="{ margin: '10px' }">
        <v-pagination
          v-model="currentPage"
          :page-count="total"
          @change="onChange"
        ></v-pagination>
      </div>
    </div>
  </div>
</template>

<script>
import { eventBus } from "../main";
import axios from "axios";
import Box from "./box.vue";
import vPagination from "vue-plain-pagination";

export default {
  name: "polll-list",
  components: {
    Box,
    vPagination,
  },
  data() {
    return {
      currentPage: 1,
      total: 0,
      pollList: [],
      header: [
        { title: "Name", width: "10%" },
        { title: "Description", width: "10%" },
        { title: "Status", width: "10%" },
        { title: "Action", width: "10%" },
      ],
    };
  },
  methods: {
    onChange() {
      this.didGetPollList();
    },
    changeEvent() {
      eventBus.$emit("emitedEvent", "OPPO");
    },
    didGetPollList() {
      let token = localStorage.getItem("token");
      axios
        .get(
          `https://dev.oppi.live/api/admin/v1/polls?offset=${
            (this.currentPage - 1) * 10
          }&limit=10&direction=desc&search=`,
          {
            headers: {
              "Content-Type": "application/json",
              Authorization: "Bearer " + token,
            },
          }
        )
        .then((response) => {
          console.log(response);
          this.pollList = response.data.list;
          this.total = parseInt(response.data.totalCount / 10);
        })
        .catch((error) => {});
    },
  },
  mounted() {
    // this.didGetPollList();
  },
  created() {
    this.didGetPollList();
  },
};
</script>

<style scoped>
.flex-container {
  display: flex;
  flex-direction: column;
  align-content: center;
  margin: 10px;
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
  border-radius: 12px;
  border: 1px solid gray;
  padding: 10px;
  box-shadow: 2px 2px #888888;
}
.flex_col {
  flex-direction: column;
}
.flex_row {
  display: flex;
  flex-direction: row;
}
</style>
