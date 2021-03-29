<template>
  <div>
    <div class="border">
      <div class="flex_col">
        <h3>{{ name }}</h3>
        <h5>{{ value }}</h5>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "box",
  props: ["value", "name"],
  data() {
    return {};
  },
};
</script>

<style scoped src="@/assets/styles/_custom.css">
/* .border {
  width: 150px;
  height: 100px;
  display: flex;
  border-radius: 12px;
  border: 1px solid gray;
  padding: 10px;
  margin-right: 10px;
  box-shadow: 2px 2px #888888;
}
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
}
.flex_col {
  flex-direction: column;
}
.flex_row {
  display: flex;
  flex-direction: row;
} */
</style>
