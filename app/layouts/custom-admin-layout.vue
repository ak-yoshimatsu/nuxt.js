<template>
  <div>
    <header>
      <h1>Admin Layout Header</h1>
      <nav>
        <NuxtLink to="/">Home (Admin Layout)</NuxtLink>
      </nav>
    </header>
    <slot />
    <footer>
      <p>Default Layout Footer &copy; 2025</p>
    </footer>
  </div>
</template>
