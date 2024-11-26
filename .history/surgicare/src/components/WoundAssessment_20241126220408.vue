<template>
  <div class="wound-assessment">
    <h1>Wound Assessment</h1>

    <!-- ส่วนอัปโหลดรูปหรือถ่ายรูป -->
    <div class="upload-section">
      <input 
        type="file" 
        @change="handleImageUpload" 
        accept="image/*" 
        capture="environment" 
        v-if="!showCamera"
      />
      
      <!-- กล้องถ่ายรูป -->
      <div v-if="showCamera" class="camera-container">
        <webcam 
          ref="webcam" 
          @photoTaken="handlePhotoTaken" 
          :autoStart="true" 
          :audio="false" 
          :constraints="{ video: { facingMode: 'environment' } }"
        />
        <button @click="takePhoto" class="capture-button">Capture Photo</button>
      </div>
      
      <div v-if="uploadedImage || capturedImage">
        <img :src="capturedImage || uploadedImage" alt="Uploaded Wound" class="uploaded-image" />
      </div>
    </div>

    <!-- ปุ่มวิเคราะห์ -->
    <button 
      v-if="uploadedImage || capturedImage" 
      @click="assessWound" 
      class="assess-button">
      Assess Wound
    </button>

    <!-- ส่วนแสดงผล -->
    <div v-if="assessmentResult" class="result-section">
      <h3>ผลการประเมิน</h3>
      <p><strong>ประเภทแผล:</strong> {{ assessmentResult.type }}</p>
      <p><strong>ระดับความรุนแรง:</strong> {{ assessmentResult.severity }}</p>
      <p><strong>คำแนะนำ:</strong> {{ assessmentResult.advice }}</p>
    </div>
  </div>
</template>

<script>
import Webcam from './Webcam.vue';

export default {
  components: {
    Webcam
  },
  data() {
    return {
      uploadedImage: null, // เก็บ Base64 ของรูปที่อัปโหลด
      capturedImage: null, // เก็บ Base64 ของรูปที่ถ่ายจากกล้อง
      assessmentResult: null, // เก็บผลการประเมิน
      showCamera: false, // ใช้สำหรับแสดง/ซ่อนกล้อง
    };
  },
  methods: {
    handleImageUpload(event) {
      const file = event.target.files[0];
      if (file) {
        const reader = new FileReader();
        reader.onload = (e) => {
          this.uploadedImage = e.target.result; // แปลงรูปเป็น Base64
        };
        reader.readAsDataURL(file);
      }
    },
    handlePhotoTaken(photoData) {
      this.capturedImage = photoData.image_data_url; // เก็บรูปที่ถ่ายจากกล้อง
    },
    takePhoto() {
      this.$refs.webcam.takePhoto(); // เรียกใช้ฟังก์ชันถ่ายรูปจาก Webcam component
    },
    assessWound() {
      // Mock ผลลัพธ์จาก AI
      this.assessmentResult = {
        type: "แผลใหม่",
        severity: "เล็กน้อย",
        advice: "ทำความสะอาดแผลและหลีกเลี่ยงการสัมผัสแผล",
      };
    },
  },
  watch: {
    uploadedImage() {
      this.showCamera = false; // ซ่อนกล้องเมื่อมีการอัปโหลดรูป
    },
    capturedImage() {
      this.showCamera = false; // ซ่อนกล้องเมื่อถ่ายรูปเสร็จ
    }
  }
};
</script>

<style scoped>
.wound-assessment {
  text-align: center;
  margin: 20px;
  font-family: Arial, sans-serif;
}

.upload-section {
  margin-bottom: 20px;
}

.uploaded-image {
  max-width: 300px;
  border: 1px solid #ddd;
  border-radius: 8px;
  margin-top: 10px;
}

.assess-button {
  padding: 10px 20px;
  font-size: 16px;
  background-color: #4caf50;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
}

.capture-button {
  padding: 10px 20px;
  font-size: 16px;
  background-color: #4caf50;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
}

.camera-container {
  position: relative;
  margin-bottom: 20px;
}

.result-section {
  margin-top: 20px;
  padding: 15px;
  border: 1px solid #ddd;
  border-radius: 8px;
  background-color: #f9f9f9;
  text-align: left;
}
</style>
