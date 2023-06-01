<template>
    <footer class="footer">
      <div class="container">
        <span class="text-muted">&copy; phpjobs {{ currentYear }}. All rights reserved</span>
      </div>
    </footer>
  </template>
  
  <script>
  export default {
    data() {
      return {
        currentYear: new Date().getFullYear()
      };
    }
  };
  </script>
  
  <style>
  .footer {
    padding: 10px;
    background-color: black;
    text-align: center;
    color: white;
  }
  </style>
  