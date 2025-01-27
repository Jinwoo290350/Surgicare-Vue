<template>
  <div class="wound-assessment">
    <h1 class="title">Wound Assessment</h1>

    <!-- Camera and Upload Input Section -->
    <div class="upload-section">
      <!-- Camera Section -->
      <div class="camera-input">
        <video ref="video" class="camera-preview" autoplay></video>
        <button @click="takePhoto" class="capture-button">📸 Take Photo</button>
      </div>

      <p class="or-text">OR</p>

      <!-- Upload File Section -->
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
        <img :src="uploadedImage" alt="Uploaded or Captured Wound" class="uploaded-image" />
      </div>
    </div>

    <!-- Analyze Button -->
    <button 
      v-if="uploadedImage" 
      @click="assessWound" 
      class="assess-button">
      🩺 Assess Wound
    </button>

    <!-- Display Assessment Result -->
    <div v-if="assessmentResult" class="result-section">
      <h3 class="result-title">Assessment Result</h3>
      <p class="result-detail"><strong>Type:</strong> {{ assessmentResult.type }}</p>
      <p class="result-detail"><strong>Severity:</strong> {{ assessmentResult.severity }}</p>
      <p class="result-detail"><strong>Advice:</strong> {{ assessmentResult.advice }}</p>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      uploadedImage: null, // Store Base64 of uploaded/captured image
      assessmentResult: null, // Store assessment result
    };
  },
  methods: {
    handleImageUpload(event) {
      const file = event.target.files[0];
      if (file) {
        const reader = new FileReader();
        reader.onload = (e) => {
          this.uploadedImage = e.target.result; // Convert image to Base64
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
      this.uploadedImage = canvas.toDataURL("image/png"); // Convert photo to Base64
    },
    assessWound() {
      // Mock result from AI
      this.assessmentResult = {
        type: "Fresh Wound",
        severity: "Mild",
        advice: "Clean the wound and avoid touching it.",
      };
    },
  },
  mounted() {
    this.startCamera(); // Start camera on component mount
  },
};
</script>

<style scoped>
/* General Styling */
.wound-assessment {
  text-align: center;
  margin: 30px auto;
  padding: 30px;
  max-width: 700px;
  background: linear-gradient(145deg, #e0f7fa, #f1f8e9);
  border-radius: 15px;
  box-shadow: 0 8px 20px rgba(0, 0, 0, 0.2);
  font-family: "Poppins", sans-serif;
}

/* Title Styling */
.title {
  font-size: 32px;
  color: #2c3e50;
  font-weight: 600;
  margin-bottom: 20px;
}

/* Camera Section */
.camera-input {
  margin-bottom: 20px;
}

.camera-preview {
  width: 100%;
  max-width: 400px;
  border: 2px dashed #90caf9;
  border-radius: 15px;
  display: block;
  margin: auto;
}

.capture-button {
  margin-top: 15px;
  padding: 12px 25px;
  font-size: 18px;
  background: #42a5f5;
  color: #fff;
  border: none;
  border-radius: 25px;
  cursor: pointer;
  transition: background 0.3s ease;
}

.capture-button:hover {
  background: #1e88e5;
}

/* OR Text */
.or-text {
  font-size: 18px;
  color: #546e7a;
  margin: 15px 0;
  font-weight: bold;
}

/* Upload File */
.file-upload-container {
  margin-bottom: 20px;
}

.file-label {
  display: inline-block;
  padding: 12px 25px;
  background: #66bb6a;
  color: #fff;
  font-size: 18px;
  border-radius: 25px;
  cursor: pointer;
  transition: background 0.3s ease;
}

.file-label:hover {
  background: #43a047;
}

.file-input {
  display: none;
}

/* Image Preview */
.image-preview-container {
  margin: 20px auto;
}

.uploaded-image {
  width: 100%;
  max-width: 400px;
  border: 2px solid #cfd8dc;
  border-radius: 15px;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
}

/* Assess Button */
.assess-button {
  padding: 12px 30px;
  font-size: 18px;
  background: #ff7043;
  color: #fff;
  border: none;
  border-radius: 25px;
  cursor: pointer;
  transition: background 0.3s ease;
}

.assess-button:hover {
  background: #f4511e;
}

/* Result Section */
.result-section {
  margin-top: 25px;
  padding: 20px;
  border: 2px solid #eceff1;
  border-radius: 10px;
  background: #fff;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
}

.result-title {
  font-size: 22px;
  color: #2c3e50;
  margin-bottom: 10px;
  font-weight: bold;
}

.result-detail {
  font-size: 18px;
  color: #455a64;
  margin: 5px 0;
}
</style>
