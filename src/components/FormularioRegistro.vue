<template>
    <div class="container">
      <h2>Formulario de Registro</h2>
      <form @submit.prevent="validarFormulario">
        <div class="form-group">
          <label for="nombre">Nombre:</label>
          <input type="text" v-model="nombre" required />
        </div>
        <div class="form-group">
          <label for="correo">Correo:</label>
          <input type="email" v-model="correo" required />
        </div>
        <div class="form-group">
          <label for="password">Contraseña:</label>
          <input type="password" v-model="password" required />
        </div>
        <div class="form-group">
          <label for="repassword">Repetir Contraseña:</label>
          <input type="password" v-model="repassword" required />
        </div>
        <button type="submit" class="btn btn-primary">Enviar</button>
      </form>
      <div v-if="mensaje" class="alert alert-success">
        {{ mensaje }}
      </div>
      <div v-if="error" class="alert alert-danger">
        {{ error }}
      </div>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        nombre: '',
        correo: '',
        password: '',
        repassword: '',
        mensaje: '',
        error: ''
      }
    },
    methods: {
      validarFormulario() {
        if (this.password !== this.repassword) {
          this.error = 'Las contraseñas no coinciden'
          return
        }
        this.error = ''
        this.mensaje = 'El registro se ha realizado correctamente'
      }
    }
  }
  </script>
  
  <style scoped>
body {
  font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif;
  background-color: #f5f5f5;
  color: #333;
  margin: 0;
  padding: 0;
}

.container {
  max-width: 600px;
  margin: 50px auto;
  padding: 20px;
  background: #fff;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  border-radius: 8px;
}

h2 {
  font-size: 24px;
  margin-bottom: 20px;
  color: #333;
  text-align: center;
}

.form-group {
  margin-bottom: 20px;
}

.form-group label {
  display: block;
  margin-bottom: 5px;
  font-weight: bold;
}

.form-group input {
  width: 100%;
  padding: 10px;
  border: 1px solid #ddd;
  border-radius: 4px;
  box-sizing: border-box;
}

button {
  display: block;
  width: 100%;
  padding: 10px;
  background-color: #007bff;
  border: none;
  border-radius: 4px;
  color: #fff;
  font-size: 16px;
  cursor: pointer;
}

button:hover {
  background-color: #0056b3;
}

.alert {
  padding: 10px;
  margin-top: 20px;
  border-radius: 4px;
  text-align: center;
}

.alert-success {
  background-color: #d4edda;
  color: #155724;
  border: 1px solid #c3e6cb;
}

.alert-danger {
  background-color: #f8d7da;
  color: #721c24;
  border: 1px solid #f5c6cb;
}

.navbar {
  background-color: #007bff;
  padding: 10px;
}

.navbar a {
  color: #fff;
  text-decoration: none;
  font-size: 16px;
  margin-right: 15px;
}

.navbar a:hover {
  text-decoration: underline;
}

.navbar .navbar-brand {
  font-weight: bold;
  font-size: 20px;
  color: #fff;
}

.navbar .nav-link {
  color: #fff;
  margin-right: 10px;
}

.navbar .nav-link:hover {
  color: #ccc;
}

  </style>
  