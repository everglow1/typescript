<template>
  <div class="a">
    <!-- <h1>{{ msg }}</h1> -->
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue, Mixins } from 'vue-property-decorator';
import ProjectMixin from '../mixins/ProjectMixin';

@Component
export default class Project extends Vue {
  private msg: string = "我是A"
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
