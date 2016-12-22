<template>
  <div id='wrapper'>
    <nav class="navbar navbar-default">
      <div class="container">
          <a class="navbar-brand" href="#">
              <i class="glyphicon glyphicon-time"></i>
              计划板
          </a>
          <ul class="nav navbar-nav">
            <li><router-link to="/home">首页</router-link></li>
            <li><router-link to="/time-entries">计划列表</router-link></li>
            <li><router-link to="/doctors">doctors</router-link></li>
            <li><router-link to="/todoList">todoList</router-link></li>
          </ul>
      </div>
    </nav>
    <div class="container">
        <div class="col-sm-3">
          <Sidebar></Sidebar>
        </div>
        <div class="col-sm-9">
          <router-view></router-view>
        </div>
    </div>
  </div>
</template>

<script>
import Sidebar from './components/Sidebar.vue'
export default {
  name: 'app',
  components: {
    Sidebar
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
