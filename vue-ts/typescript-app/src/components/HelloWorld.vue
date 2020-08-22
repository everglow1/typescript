<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <h2>{{ age }}</h2>
    <h2>{{ address }}</h2>
     <h2>{{ jobb }}</h2>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';

@Component
export default class HelloWorld extends Vue {
  @Prop() private msg!: string;
  @Prop({ default: 'Jone' }) private readonly name!: string;
  @Prop({ default: 10 }) private readonly age!: number;
  @Prop({ type: String }) private readonly address!: string;
  @Prop({ required: false, type: String, default: 'Developer' }) private readonly jobb!: string;
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
