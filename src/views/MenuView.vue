<template>
  <div class="menu_page">
    <div class="menu">
        <br>
        <div>
            <h1>The Eatery</h1>
        </div>
        <br>
        <starterComponent/>
        <br>
        <br>
        <mainComponent/>
        <br>
        <br>
        <dessertComponent/>
        <br>
        <br>
        <contactComponent/>
        <br>
        <br>
    </div>
  </div>  
  
</template>


<script>

import starterComponent from "../components/starterComponent";
import mainComponent from "../components/mainComponent";
import dessertComponent from "../components/dessertComponent";
import contactComponent from "../components/contactComponent";

export default {
  components: {
    starterComponent,
    mainComponent,
    dessertComponent,
    contactComponent
  }
};
</script>

<style>
.menu{
  max-width: 700px; 
  list-style: none; 
  background-color: #D0BDD9;
  
}

.menu_page{
  margin-left: 400px;
}


</style>