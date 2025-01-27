<template>
  <div class="wound-assessment">
    <!-- Header Section -->
    <header>
      <h1 class="title">🩺 Smart Wound Assessment</h1>
      <p class="subtitle">Capture, Upload, and Assess Your Wound with AI</p>
    </header>

    <!-- Upload & Camera Input Section -->
    <div class="upload-section">
      <!-- Camera Section -->
      <div class="camera-input">
        <video ref="video" class="camera-preview" autoplay></video>
        <button @click="takePhoto" class="capture-button">
          📸 Take Photo
        </button>
      </div>

      <p class="or-text">OR</p>

      <!-- File Upload -->
      <div class="file-upload-container">
        <label class="file-label">
          <input 
            type="file" 
            @change="handleImageUpload" 
            accept="image/*" 
            class="file-input"
          />
          📂 Upload Image
        </label>
      </div>

      <!-- Uploaded Image Preview -->
      <div v-if="uploadedImage" class="image-preview-container">
        <img 
          :src="uploadedImage" 
          alt="Uploaded or Captured Wound" 
          class="uploaded-image" 
        />
      </div>
    </div>

    <!-- Analyze Button -->
    <button 
      v-if="uploadedImage && !isLoading" 
      @click="assessWound" 
      class="assess-button"
    >
      🚀 Assess Wound
    </button>

    <!-- Loading Animation -->
    <div v-if="isLoading" class="loading-container">
      <div class="spinner"></div>
      <p>Analyzing... Please wait!</p>
    </div>

    <!-- Progress Bar -->
    <div v-if="isLoading" class="progress-bar">
      <div class="progress" :style="{ width: progress + '%' }"></div>
    </div>

    <!-- Results Section -->
    <div v-if="assessmentResult && !isLoading" class="result-section">
      <h3 class="result-title">📊 Assessment Result</h3>
      <p class="result-detail">
        <strong>Type:</strong> {{ assessmentResult.type }}
      </p>
      <p class="result-detail">
        <strong>Severity:</strong> {{ assessmentResult.severity }}
      </p>
      <p class="result-detail">
        <strong>Advice:</strong> {{ assessmentResult.advice }}
      </p>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      uploadedImage: null, // Image URL or Base64
      assessmentResult: null, // AI result
      isLoading: false, // For loading state
      progress: 0, // For progress bar
    };
  },
  methods: {
    handleImageUpload(event) {
      const file = event.target.files[0];
      if (file) {
        const reader = new FileReader();
        reader.onload = (e) => {
          this.uploadedImage = e.target.result; // Convert to Base64
        };
        reader.readAsDataURL(file);
      }
    },
    async startCamera() {
      try {
        const stream = await navigator.mediaDevices.getUserMedia({ video: true });
        this.$refs.video.srcObject = stream;
      } catch (error) {
        console.error("Error accessing camera:", error);
      }
    },
    takePhoto() {
      const canvas = document.createElement("canvas");
      const video = this.$refs.video;
      canvas.width = video.videoWidth;
      canvas.height = video.videoHeight;
      const ctx = canvas.getContext("2d");
      ctx.drawImage(video, 0, 0, canvas.width, canvas.height);
      this.uploadedImage = canvas.toDataURL("image/png");
    },
    assessWound() {
      this.isLoading = true;
      this.progress = 0;

      // Mock AI call with progress simulation
      const interval = setInterval(() => {
        if (this.progress < 100) {
          this.progress += 10;
        } else {
          clearInterval(interval);
          this.isLoading = false;

          // Mock AI Response
          this.assessmentResult = {
            type: "Infected Wound",
            severity: "Severe",
            advice: "Immediate medical attention is recommended.",
          };
        }
      }, 300); // Progress every 300ms
    },
  },
  mounted() {
    this.startCamera();
  },
};
</script>

<style scoped>
/* General Styles */
.wound-assessment {
  text-align: center;
  margin: 30px auto;
  padding: 20px;
  max-width: 800px;
  background: linear-gradient(145deg, #f0f8ff, #e8f5e9);
  border-radius: 20px;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.2);
  font-family: "Poppins", sans-serif;
}

.title {
  font-size: 36px;
  font-weight: 700;
  color: #2c3e50;
}

.subtitle {
  font-size: 18px;
  color: #7a8c99;
  margin-bottom: 25px;
}

/* Upload & Camera Styles */
.camera-input {
  margin: 20px 0;
}

.camera-preview {
  width: 100%;
  max-width: 400px;
  border-radius: 15px;
  border: 2px dashed #90caf9;
}

.capture-button,
.assess-button {
  padding: 12px 30px;
  font-size: 18px;
  background: #42a5f5;
  color: #fff;
  border: none;
  border-radius: 25px;
  margin-top: 15px;
  cursor: pointer;
  transition: background 0.3s ease;
}

.capture-button:hover,
.assess-button:hover {
  background: #1e88e5;
}

.file-upload-container {
  margin: 20px 0;
}

.file-label {
  display: inline-block;
  padding: 12px 30px;
  background: #66bb6a;
  color: #fff;
  border-radius: 25px;
  cursor: pointer;
  transition: background 0.3s;
}

.file-label:hover {
  background: #43a047;
}

.uploaded-image {
  width: 100%;
  max-width: 400px;
  border-radius: 15px;
  margin-top: 20px;
}

/* Loading Spinner */
.loading-container {
  margin-top: 20px;
  color: #1e88e5;
  font-size: 18px;
}

.spinner {
  width: 40px;
  height: 40px;
  border: 4px solid #90caf9;
  border-top: 4px solid #42a5f5;
  border-radius: 50%;
  animation: spin 1s linear infinite;
  display: inline-block;
}

@keyframes spin {
  to {
    transform: rotate(360deg);
  }
}

/* Progress Bar */
.progress-bar {
  width: 100%;
  background: #e0e0e0;
  border-radius: 10px;
  margin-top: 10px;
  overflow: hidden;
}

.progress {
  height: 10px;
  background: #42a5f5;
  transition: width 0.3s ease;
}

/* Results Section */
.result-section {
  background: #ffffff;
  margin: 20px 0;
  padding: 20px;
  border-radius: 10px;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
}

.result-title {
  font-size: 22px;
  color: #2c3e50;
  margin-bottom: 10px;
}

.result-detail {
  font-size: 18px;
  color: #455a64;
  margin: 5px 0;
}
</style>
