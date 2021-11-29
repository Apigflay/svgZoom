<template>
  <div class="home">
    <!-- home -->
    <!-- <img alt="Vue logo" src="../assets/logo.png"> -->
    <!-- <HelloWorld msg="Welcome to Your Vue.js App"/> -->
    <img id="image" src="http://yasser.top:801/bg3.gif"  />
    <!-- <img id="example1" src="http://yasser.top:801/6.gif" rel:animated_src="http://yasser.top:801/6.gif" rel:auto_play="0" width="467" height="375"  /> -->
    <button @click="goImg2">play</button>
  </div>
</template>

<script>
// @ is an alias to /src
// import HelloWorld from '@/components/HelloWorld.vue'

export default {
  name: 'Home',
  data() {
    return {
      img:null,
    }
  },
  components: {
    // HelloWorld
  },
  created() {
    console.log(this.$route)
  },
  mounted(){
    this.initImageView()
    // this.goImg()

  },
  methods:{
    initImageView(){
      const image = document.querySelector('#image');
      var options= {
        snapView:false,
        hasZoomButtons:false

      }
      const viewer = new ImageViewer(image, options); // check options section for supported options
    },
    goImg(){
      var sup1 = new SuperGif({ gif: document.getElementById('example1') } );
      this.img=sup1;
      console.log(sup1)
				sup1.load();
    },
    goImg2(){
      this.img.play()
    }
  }
}
</script>
