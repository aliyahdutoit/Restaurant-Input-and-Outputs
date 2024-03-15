<template>
    <div class="starter_style">
      <h2>Starter Menu</h2>
      <ul class="list">
        <li v-for="item in starters" :key="item.name">
          <h3>{{ item.name }}</h3>  <p>Price: {{ item.price }}</p>
          <p>{{ item.description }}</p>
          
        </li>
      </ul>
    </div>
  </template>
  
  <script>
  import axios from 'axios';
  
  export default {
    data() {
      return {
        starters: [] // Initialize starters as an empty array
      };
    },
    mounted() {
      this.loadStarters(); // Load starters data when the component is mounted
    },
    methods: {
      async loadStarters() {
        try {
          // Make a GET request to your API endpoint
          const response = await axios.get('https://restaurant-input-and-outputs-1.onrender.com/api/data?category=starters');
  
          // Extract starters data from the response
          this.starters = response.data.data;
        } catch (error) {
          console.error('Error loading starters:', error);
        }
      }
    }
  };
  </script>

<style>
.list{
  list-style: none;
}
.starter_style{
  align-self: start;
  margin-left: 2px;
}
</style>