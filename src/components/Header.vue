<template>
    <header class="header">
      <div class="logo-container">
        <span class="logo-icon"><i class="fas fa-globe"></i></span>
        <span class="logo-text">PHPJ<span class="logo-accent">o</span>bs</span>
      </div>
      <nav class="nav">
        <router-link to="/about" class="nav-link">About</router-link>
        <router-link to="/post-a-job" class="nav-link">Post a Job</router-link>
      </nav>
    </header>
  </template>
  
  <script>
  export default {
    name: 'Header',
  };
  </script>
  
  <style>
  .header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 10px;
    background-color: red;
    color: white;
  }
  
  .logo-container {
    display: flex;
    align-items: center;
  }
  
  .logo-icon {
    font-size: 24px;
    margin-right: 5px;
  }
  
  .logo-text {
    font-weight: bold;
    font-size: 20px;
  }
  
  .logo-accent {
    color: #fff;
  }
  
  .nav {
    display: flex;
  }
  
  .nav-link {
    margin-left: 10px;
    text-decoration: none;
    color: #fff;
  }
  
  @media (max-width: 768px) {
    .header {
      flex-direction: column;
    }
  
    .nav {
      margin-top: 10px;
    }
  }
  </style>
  