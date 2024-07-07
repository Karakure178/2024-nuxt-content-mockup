<script setup></script>

<template>
  <header class="header-5">
    <div class="header-inner">
      <CommonHeaderLogo />
      <nav class="header-nav">
        <ul class="header-nav-list">
          <a href="#"><li class="header-nav-item select">About</li></a>
          <a href="#"><li class="header-nav-item">Works</li></a>
          <a href="#"><li class="header-nav-item">Contact</li></a>
        </ul>
        <div class="header-ham">
          <div class="menu2" />
          <div class="menu2" />
          <div class="menu2" />
        </div>
      </nav>
    </div>
  </header>
</template>

<style lang="scss" scoped>
// ===========================================
// header 全体設定
// ===========================================
.header-5 {
  width: 100%;
}

.header-inner {
  display: flex;
  align-items: center;
  max-width: 1024px;
  height: 60px;
  padding: 0 0.8em;
  margin: 0 auto;
  font-size: 1.2em;
}

.header-nav-list {
  display: inline-block;
}

.header-nav-item {
  float: left;
  padding: 12px;
  font-size: 14px;
  font-weight: bold;
  color: #ccc;
  text-align: center;
  list-style: none;
}

.header-nav-item a {
  text-decoration: none;
}

.header-ham {
  display: none;
}

.menu2 {
  width: 20px;
  height: 3px;
  margin: 4px 0;
  margin-right: 0;
  background-color: #333;
}

.select {
  color: #444;
}

.header-nav-item:hover {
  background: #eee;
}

.logo img {
  width: 70px;
}

@media screen and (max-width: 480px) {
  .header-nav-list {
    display: none;
  }

  .header-nav {
    margin: 0 0 0 auto;
  }

  .header-ham {
    display: block;
  }
}
</style>
