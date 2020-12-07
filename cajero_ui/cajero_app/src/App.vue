<template>
  <div id="app">
    <div class="header">
      <h1>BancoUN</h1>
      <nav>
        <button v-on:click="init" v-if="is_auth">Inicio</button>
        <button v-on:click="getBalance" v-if="is_auth">Saldo</button>
        <button v-if="is_auth">Transacción</button>
        <button v-if="is_auth">CerrarSesión</button>
      </nav>
    </div>
    
    <div class="main-component">
    </div>
    
    <div class="footer">
      <h2>MisiónTIC2022</h2>
    </div>
  </div>
</template>

<script>
export default {
  name: 'App',

  components:{},
  
  data:function() {
    return {
      is_auth:localStorage.getItem('isAuth') || false
    }
  },
  
  methods: {
  },

  beforeCreate:function() {
    localStorage.setItem('current_username','camilo24')
    localStorage.setItem('isAuth',true)
  }
}
</script>

<style>
  body {
    margin:0000;
  }
  
  .header {
    margin:0%;
    padding:0;
    width:100%;
    height:10vh;
    min-height:100px;
    background-color:#283747;
    color:#E5E7E9;
    display:flex;
    justify-content:space-between;
    align-items:center;
  }

  .header h1 {
    width:20%;
    text-align:center;
  }
  
  .header nav{
    height:100%;
    width:45%;
    display:flex;
    justify-content:space-around;
    align-items:center;
    font-size:20px;
  }

  .header nav button {
    color:#E5E7E9;
    background:#283747;
    border:1pxsolid#E5E7E9;
    border-radius:5px;
    padding:10px20px;
  }
  
  .headernavbutton:hover {
    color:#283747;
    background:#E5E7E9;
    border:1pxsolid#E5E7E9;
  }

  .main-component {
    height:75vh;
    margin:0%;
    padding:0%;
    background:#FDFEFE;
  }
  
  .footer {
    margin:0;
    padding:0;
    width:100%;
    height:10vh;
    min-height:100px;
    background-color:#283747;
    color:#E5E7E9;
  }

  .footer h2{
    width:100%;
    height:100%;
    display:flex;
    justify-content:center;
    align-items:center;
  }
</style>
