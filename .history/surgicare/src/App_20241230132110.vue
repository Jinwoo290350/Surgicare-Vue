<template>
  <div class="min-h-screen bg-gradient-to-b from-emerald-200 to-emerald-300">
    <!-- Main Content -->
    <div class="flex flex-col items-center pt-16 px-6">
      <!-- Logo and Cross -->
      <div class="mb-8">
        <svg class="w-16 h-16 text-white" viewBox="0 0 24 24" fill="currentColor">
          <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm1-13h-2v4H7v2h4v4h2v-4h4v-2h-4V7z"/>
        </svg>
      </div>

      <!-- Brand Name -->
      <h1 class="text-white text-2xl font-light mb-12">SurgiCare</h1>

      <!-- Overview Text -->
      <h2 class="text-white text-6xl font-bold mb-16">OVERVIEW</h2>

      <!-- Search Container -->
      <div class="w-full max-w-md mb-16">
        <div class="relative">
          <input
            type="text"
            placeholder="Search for something"
            class="w-full px-6 py-3 rounded-lg bg-black bg-opacity-20 text-white placeholder-white placeholder-opacity-70 focus:outline-none focus:ring-2 focus:ring-white"
          />
        </div>
      </div>

      <!-- Large Search Icon -->
      <div class="mb-16">
        <svg class="w-32 h-32 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor">
          <path
            d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </svg>
      </div>

      <!-- Bottom Navigation Dots -->
      <div class="flex space-x-2 mb-8">
        <div class="w-8 h-2 bg-black bg-opacity-20 rounded-full"></div>
        <div class="w-12 h-2 bg-black bg-opacity-20 rounded-full"></div>
        <div class="w-6 h-2 bg-black bg-opacity-20 rounded-full"></div>
      </div>
    </div>

    <!-- Link Button -->
    <div class="fixed bottom-8 right-8">
      <button class="px-6 py-2 bg-black bg-opacity-20 text-white rounded-full hover:bg-opacity-30 transition-all">
        LINK
      </button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'MinimalistDashboard'
}
</script>