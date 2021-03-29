<template>
  <div class="header">
    <h8>{{ header }}</h8>
    <input
      height="50"
      class="inputing"
      :value="content"
      :placeholder="place_holder"
      @input="changeMessage"
    />
  </div>
</template>

<script>
export default {
  props: ["place_holder", "content", "header"],
  name: "input",
  data() {
    return {
      msg: "Oppi",
    };
  },
  methods: {
    changeMessage(event) {
      this.message = event.target.value;
      this.$emit("messageChange", this.message);
    },
  },
};
</script>

<style scoped>
.header {
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
}

.inputing {
  width: 400px;
  border-radius: 5px;
}
</style>
