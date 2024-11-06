<template>
    <div>
        <div>{{ message }}</div>
        <button @click="showMessage">Show Message</button>
    </div>
</template>

<script>
import { myLogic } from './Test.js';

export default {
    name: 'Test',
    mixins: [myLogic]
};
</script>
  