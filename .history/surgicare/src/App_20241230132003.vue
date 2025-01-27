<template>
  <div class="flex h-screen">
    <!-- Sidebar -->
    <nav class="w-64 bg-white border-r">
      <!-- Logo -->
      <div class="p-4 flex items-center">
        <div class="text-xl font-semibold text-gray-800 flex items-center">
          <svg class="w-6 h-6 mr-2" viewBox="0 0 24 24" fill="none" stroke="currentColor">
            <path d="M12 4v16m8-8H4" stroke-width="2" stroke-linecap="round"/>
          </svg>
          SurgiCare
        </div>
      </div>

      <!-- Navigation Items -->
      <div class="mt-6">
        <nav-item icon="home" text="Dashboard" :active="true" />
        <nav-item icon="credit-card" text="Transactions" />
        <nav-item icon="users" text="Accounts" />
        <nav-item icon="trending-up" text="Investments" />
        <nav-item icon="credit-card" text="Credit Cards" />
        <nav-item icon="dollar-sign" text="Loans" />
        <nav-item icon="settings" text="Services" />
        <nav-item icon="award" text="My Privileges" />
        <nav-item icon="settings" text="Setting" />
      </div>
    </nav>

    <!-- Main Content -->
    <div class="flex-1">
      <!-- Header -->
      <header class="bg-white h-16 border-b flex items-center justify-between px-6">
        <h1 class="text-xl font-semibold">Overview</h1>
        
        <div class="flex items-center space-x-4">
          <!-- Search -->
          <div class="relative">
            <input
              type="text"
              placeholder="Search for something"
              class="pl-10 pr-4 py-2 border rounded-lg w-64"
            />
            <svg
              class="w-5 h-5 absolute left-3 top-2.5 text-gray-400"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
              />
            </svg>
          </div>

          <!-- Settings Icon -->
          <button class="p-2 hover:bg-gray-100 rounded-full">
            <svg
              class="w-6 h-6 text-gray-600"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
              />
              <path
                d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
              />
            </svg>
          </button>

          <!-- Notification Icon -->
          <button class="p-2 hover:bg-gray-100 rounded-full">
            <svg
              class="w-6 h-6 text-gray-600"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
              />
            </svg>
          </button>

          <!-- Profile Picture -->
          <button class="w-8 h-8 rounded-full bg-gray-200"></button>
        </div>
      </header>

      <!-- Main Content Area -->
      <main class="p-6 bg-gradient-to-br from-teal-50 to-teal-100 h-[calc(100vh-4rem)]">
        <!-- Add your dashboard content here -->
      </main>
    </div>
  </div>
</template>

<script>
// NavItem component
const NavItem = {
  props: {
    icon: String,
    text: String,
    active: Boolean
  },
  template: `
    <a
      href="#"
      :class="[
        'flex items-center px-4 py-3 text-gray-600 hover:bg-gray-100',
        active ? 'bg-gray-100 text-teal-600' : ''
      ]"
    >
      <svg class="w-5 h-5 mr-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path
          v-if="icon === 'home'"
          d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="2"
        />
        <!-- Add other icon paths as needed -->
      </svg>
      {{ text }}
    </a>
  `
}

export default {
  name: 'DashboardLayout',
  components: {
    NavItem
  }
}
</script>