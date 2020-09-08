<template>
  <v-container grid-list-md style="margin-top:20px" justify-center fill-height align-center>
    <v-layout wrap >
      <v-flex xs12 style="margin-left:60px;margin-right:80px;margin-top:5px; margin-bottom:20px" >
        <v-layout wrap>
          <v-flex xs12>
            <h2>Project Partners</h2>
          </v-flex>
          <v-flex xs12>
            <hr>
          </v-flex>
          <v-flex xs12 v-for="item in text_data" :key="item">
            <br>
            <v-layout wrap align-center>
              <v-flex xs12>
                <a :href=item.link>{{ item.name }}</a>
              </v-flex>
              <v-flex xs9>
                <span v-html="item.text" />
              </v-flex>
              <v-flex xs3 style="padding-left:60px" text-center text-xs-center>
                <img :src="getImgUrl(item.logo)" style="max-height:100px; max-width:200px">
              </v-flex>
            </v-layout>
          </v-flex>
        </v-layout>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
import axios from "axios";

export default {
  components: {
  },
  data() {
    return {
      text_data2: [
        {
          name: "Austrian Institute of Technology GmbH",
          link: "https://www.ait.ac.at/",
          text: "The AIT Austrian Institute of Technology is Austria’s largest research and technology organisation. Among the European research institutes, AIT is a specialist in the key infrastructure issues of the future. AIT’s Digital Insight Lab (DIL) provides data science consulting and solutions for making informed decisions based on large, heterogeneous, and real-time data under strict conditions of IT security and data protection. The DIL is a multidisciplinary group of experienced scientists and engineers with diverse backgrounds - from data analytics, applied mathematics and statistics, to information security, and the humanities.",
          logo: "ait_logo.jpg"
        }
      ],
      text_data: undefined
    }
  },
  mounted() {
    this.load_data();
  },
  methods: {
    async load_data(){
      try{
        let req_data = await axios.get("/data.json");
        if(req_data && req_data.data && req_data.data.partners)
          this.text_data = req_data.data.partners;
        
      }catch(e){
        console.error(e);
      }
    },
    getImgUrl(pic) {
      return require('../assets/'+pic)
    }
  }

};
</script>
