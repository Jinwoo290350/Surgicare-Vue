<template>
  <div class="wound-assessment">
    <h1>Wound Assessment</h1>

    <!-- Camera and Upload Input Section -->
    <div class="upload-section">
      <div class="camera-input">
        <video ref="video" class="camera-preview" autoplay></video>
        <button @click="takePhoto" class="capture-button">Take Photo</button>
      </div>

      <p class="or-text">or</p>

      <input 
        type="file" 
        @change="handleImageUpload" 
        accept="image/*" 
        class="file-upload"
      />
      
      <div v-if="uploadedImage" class="image-preview-container">
        <img :src="uploadedImage" alt="Uploaded or Captured Wound" class="uploaded-image" />
      </div>
    </div>

    <!-- Analyze Button -->
    <button 
      v-if="uploadedImage" 
      @click="assessWound" 
      class="assess-button">
      Assess Wound
    </button>

    <!-- Display Assessment Result -->
    <div v-if="assessmentResult" class="result-section">
      <h3>Assessment Result</h3>
      <p><strong>Type:</strong> {{ assessmentResult.type }}</p>
      <p><strong>Severity:</strong> {{ assessmentResult.severity }}</p>
      <p><strong>Advice:</strong> {{ assessmentResult.advice }}</p>
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
/* Overall styling */
.wound-assessment {
  text-align: center;
  margin: 20px auto;
  padding: 20px;
  max-width: 600px;
  background: linear-gradient(135deg, #d9fdd3, #a3d9f9);
  border-radius: 10px;
  font-family: Arial, sans-serif;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.2);
}

/* Camera input section */
.camera-input {
  position: relative;
  margin-bottom: 20px;
}

.camera-preview {
  width: 100%;
  max-width: 300px;
  border: 1px solid #ddd;
  border-radius: 10px;
  margin: auto;
  display: block;
}

.capture-button,
.assess-button {
  padding: 12px 30px;
  font-size: 18px;
  background: linear-gradient(145deg, #66bb6a, #42a5f5);
  color: #fff;
  border: 2px solid transparent;
  border-radius: 50px;
  margin-top: 15px;
  cursor: pointer;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.2);
  transition: transform 0.3s ease, box-shadow 0.3s ease, background 0.3s ease;
}

/* Hover Effect */
.capture-button:hover,
.assess-button:hover {
  background: linear-gradient(145deg, #42a5f5, #66bb6a);
  box-shadow: 0 6px 20px rgba(0, 0, 0, 0.3);
  transform: translateY(-4px);
}

/* Focus Effect */
.capture-button:focus,
.assess-button:focus {
  outline: none;
  box-shadow: 0 0 0 4px rgba(66, 165, 245, 0.5);
}

/* Active (pressed) Effect */
.capture-button:active,
.assess-button:active {
  transform: translateY(2px);
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
}

/* File upload styling */
.or-text {
  font-size: 18px;
  color: #333;
  margin: 15px 0;
}

.file-upload {
  margin-top: 10px;
  display: block;
  margin: auto;
}

/* Image preview */
.image-preview-container {
  margin-top: 20px;
}

.uploaded-image {
  max-width: 100%;
  max-height: 300px;
  border: 2px solid #ccc;
  border-radius: 10px;
}

/* Result section */
.result-section {
  margin-top: 20px;
  padding: 20px;
  border: 1px solid #ddd;
  border-radius: 10px;
  background-color: #f9f9f9;
  text-align: left;
  font-size: 16px;
  color: #333;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
}
</style>
