<template>
  <div>
    <header>
      <h1>Default Layout Header</h1>
      <nav>
        <NuxtLink to="/">Home (Layout)</NuxtLink>
        <NuxtLink to="/products">Products (Layout)</NuxtLink>
        <NuxtLink to="/users">ユーザー</NuxtLink>
      </nav>
    </header>
    <main>
      <slot />
    </main>
    <footer>
      <p>Default Layout Footer &copy; 2025</p>
    </footer>
  </div>
</template>
