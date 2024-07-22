<template>
  <div id="app">
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
      <a class="navbar-brand" href="#">Mi Proyecto</a>
      <div class="collapse navbar-collapse" id="navbarNav">
        <ul class="navbar-nav">
          <li class="nav-item">
            <router-link class="nav-link" to="/calculo">Cálculo de Calificaciones</router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link" to="/registro">Formulario de Registro</router-link>
          </li>
        </ul>
      </div>
    </nav>
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App',
  created() {
    console.log('Componente App.vue montado.')
  }
}
</script>

<style>

</style>

