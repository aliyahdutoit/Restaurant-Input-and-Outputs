<template>
    <div>
      <h2>Main Menu</h2>
      <ul class="list">
        <li v-for="item in mains" :key="item.name">
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
        mains: [] // Initialize starters as an empty array
      };
    },
    mounted() {
      this.loadMains(); // Load starters data when the component is mounted
    },
    methods: {
      async loadMains() {
        try {
          // Make a GET request to your API endpoint
          const response = await axios.get('https://restaurant-input-and-outputs-1.onrender.com/api/data?category=mains');
  
          // Extract starters data from the response
          this.mains = response.data.data;
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