<template>
  <div class="flex-container">
    <div
      :style="{
        'flex-direction': 'flex-start',
        display: 'flex',
        margin: '0px 20px 100px 20px',
      }"
    >
      <img height="200px" width="200px" src="@/assets/oppi.png" />
    </div>

    <div class="flex_row">
      <div class="background">
        <img
          height="600px"
          width="600px"
          class="group"
          src="@/assets/group.png"
        />
      </div>
      <div class="background_1">
        <div>
          <h3>Sign In</h3>
          <inputing
            class="inputing"
            :header="'EMAIL'"
            :content="uName"
            :place_holder="'Email'"
            @messageChange="uName = $event"
          />
          <inputing
            class="inputing"
            :header="'PASSWORD'"
            :content="password"
            :place_holder="'Password'"
            @messageChange="password = $event"
          />
          <button class="button" v-on:click="requestLogin">Login</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Inputing from "./input.vue";
import axios from "axios";
export default {
  name: "Login",
  data() {
    return {
      msg: "Oppi",
      uName: "",
      password: "",
      info: "",
      array: [
        { Name: "name", Job: "dop" },
        { Name: "name", Job: "dop" },
        { Name: "name", Job: "dop" },
        { Name: "name", Job: "dop" },
        { Name: "name", Job: "dop" },
        { Name: "name", Job: "dop" },
      ],
    };
  },
  components: {
    inputing: Inputing,
  },
  methods: {
    requestLogin() {
      axios
        .post("https://dev.oppi.live/api/admin/v1/auth/signin", {
          email: this.uName,
          password: this.password,
        })
        .then((response) => {
          this.$router.push("dashboard");
          localStorage.setItem("token", response.data.token);
        })
        .catch((error) => {});
    },
  },
  mounted() {
    // console.log(localStorage.getItem("token"));
    // this.requestLogin();
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
}
.group {
  object-fit: contain;
  margin-left: 100px;
}
.background_1 {
  flex-grow: 1;
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
.inputing {
  margin: 30px;
}
.button {
  background-color: green;
  width: 140px;
  height: 35px;
  border-radius: 6px;
}
</style>
