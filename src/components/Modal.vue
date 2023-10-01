<template>
  <div class="black-bg">
    <div class="white-bg">
      <h4>새 게시물 만들기</h4>
      <div class="content">
        <font-awesome-icon
          class="f-icon"
          :icon="['far', 'image']"
          v-if="isImage == false"
        />
        <div class="preview" v-if="isImage == true">
          <img alt="preview" :src="imgPreview" />
        </div>
        <input ref="images" @input="previewFile" type="file" id="fileinput" />
        <!-- <button @click="imageUpload()">이미지업로드</button> -->
        <br />
        <input ref="input" />
        <button @click="submit()">업로드</button>
        <p>업로드 기능은 현재 구현 중에 있습니다.</p>
      </div>
      <div @click="$emit('close')" class="f-button">
        <font-awesome-icon
          :icon="['fas', 'xmark']"
          style="width: 50px; height: 50px"
        />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "ModalComponent",
  props: {
    msg: String,
  },
  data() {
    return {
      isImage: false,
      imgPreview: null,
    };
  },
  methods: {
    submit() {
      this.$parent.pushNewFeed(
        this.$refs.input.value,
        this.$refs.images.files[0]
      );
    },

    previewFile(event) {
      var file = event.target.files[0];

      const fileData = (data) => {
        this.imgPreview = data;
        this.isImage = true;
      };

      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.addEventListener(
        "load",
        function () {
          fileData(reader.result);
        },
        false
      );
    },

    // imageUpload() {
    //

    //   if (this.$refs.images.files.length == 0) {
    //     return;
    //   }

    //   this.$parent.imageUpload(this.$refs.images.files[0]);
    // },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
body {
  margin: 0;
}
div {
  box-sizing: border-box;
}

.black-bg {
  z-index: 5;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
  position: fixed;
  top: 0;
  padding: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
}
.white-bg {
  position: relative;
  width: 712px;
  height: 712px;
  background: white;
  border-radius: 8px;
}

.white-bg h4 {
  margin: 9px;
}
.content {
  position: relative;
  width: 100%;
  height: 80%;
  border: 1px solid black;
  align-items: center;
  justify-content: center;
}

.content .f-icon {
  display: block;
  width: 100px;
  height: 100px;
  margin: 30% auto 20px;
}

.content h4 {
  flex-direction: column;
}

.f-button {
  margin: 20px auto;
  width: 50px;
  height: 50px;
  cursor: pointer;
}

.f-button:hover {
  opacity: 0.5;
}

.preview {
  width: 500px;
  height: 500px;
  margin: auto;
  overflow: hidden;
}

.preview img {
  object-fit: cover;
}
</style>
