
<script>
import Card from './card.vue';
export default {
    components: { Card }
}
</script>

<template>
    <div class="panelFav">
       <Card></Card> 
    </div>
</template>

<style lang="css" scoped>
    .panelFav{
        width: 45vw;
        height: 55vh;        
        background-color: white;
        margin-top: 4vh;
        
    }
</style>