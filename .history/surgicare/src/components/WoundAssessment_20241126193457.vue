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
      />
      <div v-if="uploadedImage">
        <img :src="uploadedImage" alt="Uploaded Wound" class="uploaded-image" />
      </div>
    </div>

    <!-- ปุ่มวิเคราะห์ -->
    <button 
      v-if="uploadedImage" 
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
export default {
  data() {
    return {
      uploadedImage: null, // เก็บ Base64 ของรูปที่อัปโหลด
      assessmentResult: null, // เก็บผลการประเมิน
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
    assessWound() {
      // Mock ผลลัพธ์จาก AI
      this.assessmentResult = {
        type: "แผลใหม่",
        severity: "เล็กน้อย",
        advice: "ทำความสะอาดแผลและหลีกเลี่ยงการสัมผัสแผล",
      };
    },
  },
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

.result-section {
  margin-top: 20px;
  padding: 15px;
  border: 1px solid #ddd;
  border-radius: 8px;
  background-color: #f9f9f9;
  text-align: left;
}
</style>
