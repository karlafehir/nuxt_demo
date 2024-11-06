<template>
  <div>
    <p>Layout with footer and header test</p>
    <Test />
    <SimpleComponent />
  </div>
</template>

<script>
import Test from '~/components/Test.vue'; 
import SimpleComponent from '../components/SimpleComponent.vue';

export default {
  name: 'IndexPage',
  components: {
    Test,
    SimpleComponent
  }
};
</script>
