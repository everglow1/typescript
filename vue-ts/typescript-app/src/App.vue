<template>
  <div id="app">
    <HelloWorld :msg="msg"/>
    <component-a msg="I am A"></component-a>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import HelloWorld from './components/HelloWorld.vue';
import ComponentA from './components/component-a.vue';

@Component({
  components: {
    HelloWorld,
    ComponentA,
  },
})

export default class App extends Vue {
  private msg: string = 'Welcome to my app';
  private list: object[] = [
    {
      name: 'You',
      age: '10',
    },
    {
      name: 'Job',
      age: '11',
    },
  ];
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
