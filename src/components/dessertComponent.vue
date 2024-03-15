<template>
    <div>
      <h2>Dessert Menu</h2>
      <ul class="list">
        <li v-for="item in desserts" :key="item.name">
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
        desserts: [] // Initialize starters as an empty array
      };
    },
    mounted() {
      this.loadDesserts(); // Load starters data when the component is mounted
    },
    methods: {
      async loadDesserts() {
        try {
          // Make a GET request to your API endpoint
          const response = await axios.get('https://restaurant-input-and-outputs-1.onrender.com/api/data?category=desserts');
  
          // Extract starters data from the response
          this.desserts = response.data.data;
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
</style>