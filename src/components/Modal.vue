<template>
  <div class="black-bg">
    <div class="white-bg modal">
      <div class="title">
        <div @click="$emit('close')" class="f-button">
          <font-awesome-icon
            :icon="['fas', 'xmark']"
            style="width: 30px; height: 30px"
          />
        </div>
        <h4>새 게시물 만들기</h4>
      </div>
      <div class="content">
        <font-awesome-icon
          class="f-icon"
          :icon="['far', 'image']"
          v-if="isImage == false"
        />
        <div class="preview" v-if="isImage == true">
          <img alt="preview" :src="imgPreview" />
        </div>
        <input
          ref="images"
          class="imageInput"
          @input="previewFile"
          type="file"
          id="fileinput"
        />
        <br />
        <textarea
          ref="input"
          class="textInput"
          maxlength="50"
          placeholder="Write your message."
        />
        <br />
        <button @click="submit()">업로드</button>
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

      this.$parent.modalOff();
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

.title {
  display: flex;
  position: relative;
  align-items: center;
  justify-content: center;
}

.title .f-button {
  float: left;
  left: 5px;
  top: 5px;
  position: absolute;
  width: 30px;
  height: 30px;
  cursor: pointer;
}

.f-button:hover {
  opacity: 0.5;
}
.content {
  position: relative;
  width: 100%;
  height: 80%;
  border: 1px solid transparent;
  border-top: 1px solid black;
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

.preview {
  width: 400px;
  height: 400px;
  margin: auto;
  overflow: hidden;
}

.preview img {
  object-fit: cover;
}

button {
  border: transparent;
  cursor: pointer;
  width: 100px;
  height: 40px;
  font-size: 16px;
  border-radius: 5px;
}

.imageInput {
  height: 50px;
}

.textInput {
  width: 85%;
  height: 25%;
  border-radius: 5px;
  font-size: 15px;
  background: rgb(247, 247, 247);
  border: transparent;
  resize: none;
  font-family: inherit;
}
</style>
