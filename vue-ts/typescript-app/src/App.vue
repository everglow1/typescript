<template>
  <div id="app">
    <HelloWorld @reset-data="method2" :msg="msg"/>
    <component-a msg="I am A"></component-a>
    <div @click="clickMe">{{fullPrice}}</div>
    <div>{{name}}</div>
     <div>{{project.num}}</div>
     <div>{{num}}</div>
  </div>
</template>

<script lang="ts">
import { Component, Vue, Watch } from 'vue-property-decorator';
import HelloWorld from './components/HelloWorld.vue';
import ComponentA from './components/component-a.vue';

interface Project {
  num: number;
}

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
  private first: string = 'Job';
  private last: string = 'Hel';

  private firstPrice: number = 10;
  private lastPrice: number = 10;

  private name: string = 'You';

  private project: Project = { num: 1 };

  private num: number = 0;

  @Watch('name')
  private nameChanged(newVal: string) {
    setTimeout(() => {
      this.name = '监听到';
    }, 3000);
  }

  @Watch('project', {
    immediate: true,
    deep: true,
  })
  private projectChanged(newVal: string) {
    this.project.num = 10;
  }

  // computed
  get fullName(): string {
    return this.first + ' ' + this.last;
  }

  // getter setter
  get fullPrice(): number {
    return this.firstPrice + this.lastPrice;
  }

  set fullPrice(newVal: number) {
    this.firstPrice = newVal + 10;
    this.lastPrice = newVal + 10;
  }

  private clickMe() {
    this.fullPrice = 30;
    this.name = 'KKK';
  }

  public someMethods(n: number) {
    this.num = n;
  }

  public method2(n: number) {
    console.log('nnnnnn', n);
    this.num = n;
  }
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
div {
  font-size: 20px;
}
</style>
