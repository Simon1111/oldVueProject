<template>
    <div>
        <vueCropper
            ref="cropper"
            :img="option.img"
            :outputSize="option.size"
            :outputType="option.outputType"
            :info="true"
            :full="option.full"
            :canMove="option.canMove"
            :canMoveBox="option.canMoveBox"
            :fixedBox="option.fixedBox"
            :original="option.original"
            :autoCrop="option.autoCrop"
            :autoCropWidth="option.autoCropWidth"
            :autoCropHeight="option.autoCropHeight"
            :centerBox="option.centerBox"
            :high="option.high"
            :infoTrue="option.infoTrue"
            @realTime="realTime"
            @imgLoad="imgLoad"
            @cropMoving="cropMoving"
            :enlarge="option.enlarge"
            :mode="option.mode"
        />

        <div class="test-button">
            <label for="uploads" class="btn v-btn theme--light"><span class="v-btn__content">Изображение</span></label>
            <input type="file" id="uploads" style="position:absolute; clip:rect(0 0 0 0);" accept="image/png, image/jpeg, image/gif, image/jpg" @change="uploadImg($event, 1)">
            <v-btn @click="clearCrop" class="btn btn-small"><v-icon>delete</v-icon></v-btn>
            <v-btn @click="refreshCrop" class="btn">Сбросить</v-btn>
            <v-btn @click="rotateLeft" class="btn btn-small"><v-icon>rotate_left</v-icon></v-btn>
            <v-btn @click="rotateRight" class="btn btn-small"><v-icon>rotate_right</v-icon></v-btn>
            <v-btn @click="changeScale(1)" class="btn btn-small">+</v-btn>
            <v-btn @click="changeScale(-1)" class="btn btn-small">-</v-btn>
            <!-- <v-btn @click="finish('base64')" class="btn">preview(base64)</v-btn>
            <v-btn @click="finish('blob')" class="btn">preview(blob)</v-btn> -->
            <!-- <a @click="down('base64')" class="btn">download(base64)</a>
            <a @click="down('blob')" class="btn">download(blob)</a> -->
            <!-- <a :href="downImg" download="demo.png" ref="downloadDom"></a> -->
        </div>

        <v-layout row wrap>
            <v-flex xs12 sm12 md6 lg6 xl6>
                <v-card-text>
                <section class="pre-item">
                    <p>Прямоугольное</p>
                    <div class="show-preview" :style="{'width': previews.w + 'px', 'height': previews.h + 'px',  'overflow': 'hidden',
                        'margin': '5px'}">
                        <div :style="previews.div">
                            <img :src="previews.url" :style="previews.img">
                        </div>
                    </div>
                </section>
                </v-card-text>
            </v-flex>

            <v-flex xs12 sm12 md6 lg6 xl6>
                <v-card-text>
                    <section class="pre-item">
                        <p>Квадрат</p>
                        <div :style="previewStyle1"> 
                            <div :style="previews.div">
                                <img :src="previews.url" :style="previews.img">
                            </div>
                        </div>
                    </section>
                </v-card-text>
            </v-flex>
        </v-layout>
    </div>
</template>

<script>
import { VueCropper }  from 'vue-cropper'

export default {
    name: 'VCropper',
    components: {
        VueCropper
    },
    data(){
        return {
            model: false,
            modelSrc: "",
            crap: false,
            previews: {},
            option: {
                img: "",
                size: 1,
                full: false,
                outputType: "png",
                canMove: true,
                fixedBox: false,
                original: false,
                canMoveBox: true,
                autoCrop: true,
                autoCropWidth: 200,
                autoCropHeight: 150,
                centerBox: false,
                high: true,
                cropData: {},
                        enlarge: 1,
                        mode: 'contain'
            },
            downImg: "#",
            previewStyle1: {}
        }
    },
    methods: {
        clearCrop() {
            // clear
            this.$refs.cropper.clearCrop();
        },
        refreshCrop() {
            // clear
            this.$refs.cropper.refresh();
        },
        changeScale(num) {
            num = num || 1;
            this.$refs.cropper.changeScale(num);
        },
        rotateLeft() {
            this.$refs.cropper.rotateLeft();
        },
        rotateRight() {
            this.$refs.cropper.rotateRight();
        },
        realTime(data) {
            var previews = data;
            var h = 0.5;
            var w = 0.2;
            this.previewStyle1 = {
                width: previews.w + "px",
                height: previews.h + "px",
                overflow: "hidden",
                margin: "0",
                zoom: h
            };
            this.previews = data;
        },
        finish(type) {
            if (type === "blob") {
                this.$refs.cropper.getCropBlob(data => {
                var img = window.URL.createObjectURL(data);
                this.model = true;
                this.modelSrc = img;
                });
            } else {
                this.$refs.cropper.getCropData(data => {
                this.model = true;
                this.modelSrc = data;
                });
            }
        },
        finish2(type) {
            this.$refs.cropper2.getCropData(data => {
                this.model = true;
                this.modelSrc = data;
            });
        },
        finish3(type) {
            this.$refs.cropper3.getCropData(data => {
                this.model = true;
                this.modelSrc = data;
            });
        },
        down(type) {
            if (type === "blob") {
                this.$refs.cropper.getCropBlob(data => {
                this.downImg = window.URL.createObjectURL(data);
                if (window.navigator.msSaveBlob) {
                    var blobObject = new Blob([data]);
                    window.navigator.msSaveBlob(blobObject, "demo.png");
                } else {
                    this.$nextTick(() => {
                    this.$refs.downloadDom.click();
                    });
                }
                });
            } else {
                this.$refs.cropper.getCropData(data => {
                this.downImg = data;
                if (window.navigator.msSaveBlob) {
                    var blobObject = new Blob([data]);
                    window.navigator.msSaveBlob(blobObject, "demo.png");
                } else {
                    this.$nextTick(() => {
                    this.$refs.downloadDom.click();
                    });
                }
                });
            }
        },
        uploadImg(e, num) {
            var file = e.target.files[0];
            if (!/\.(gif|jpg|jpeg|png|bmp|GIF|JPG|PNG)$/.test(e.target.value)) {
                alert("0-0");
                return false;
            }
            var reader = new FileReader();
            reader.onload = e => {
                let data;
                if (typeof e.target.result === "object") {
                    data = window.URL.createObjectURL(new Blob([e.target.result]));
                } else {
                    data = e.target.result;
                }
                if (num === 1) {
                    this.option.img = data;
                } else if (num === 2) {
                    this.example2.img = data;
                }
            };
            reader.readAsArrayBuffer(file);
        },
        imgLoad(msg) {
            console.log(msg);
        },
        cropMoving(data) {
            this.option.cropData = data;
        }
    } 
}
</script>

<style>
.vue-cropper{
    background-repeat: initial;
    height: 400px !important;
}
</style>
