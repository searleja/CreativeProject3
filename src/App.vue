<template>
<div id="app">
  <div id="menu">
    <div id="brand">
      <router-link to="/">
        <img src="../images/couchboatLogo.png">
      </router-link>
    </div>
    <div id="side">
      <router-link to="/browse">
        <div class="menu-item browse">
          <p>Browse</p>
        </div>
      </router-link>
      <router-link to="/finalize">
        <div class="menu-item">
          <p>Finalize</p>
        </div>
      </router-link>
    </div>
  </div>
  <router-view />

  <div class="footer-container">
      <div class="footer">
      <hr>
      <hr>
        <a href="https://github.com/searleja/CreativeProject3">Link to this github repository</a>
      </div>
    </div>
</div>
</template>

<script>

export default {
  name: 'AppView',
  computed: {
  },
}
</script>

<style>
* {
  box-sizing: border-box;
}

body {
  margin: 50px 100px;

}

#menu {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-column-gap: 5px;
  grid-template-areas: "none brand side";
  margin-bottom: 50px;
}

#menu a {
  color: #B84901;
}

#brand {
  grid-area: brand;
  display: flex;
  justify-content: center;
}

#brand img {
  height: 200px;
}

#side {
  grid-area: side;
  display: flex;
  justify-content: flex-end;
}

#side img {
  width: 50px;
}

.menu-item {
  display: flex;
  flex-direction: column;
}

.menu-item p {
  margin: 0px;
}

.browse {
  margin-right: 50px;
}
</style>