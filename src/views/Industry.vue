<template>
  <v-container grid-list-md style="margin-top:20px" justify-center fill-height align-center>
    <v-layout wrap>
      <v-flex xs12 text-center text-xs-center style="margin-bottom:40px">
          <h1>Industry</h1>
      </v-flex>
      <v-flex xs12 style="margin-left:50px; margin-right:50px;" align-self-center justify-center>
        <v-layout wrap>
          <v-flex xs6>
            <span v-html="text_data.part_1" />
          </v-flex>
          <v-flex xs6>
            <img src="../assets/img-placeholder.png" style="width:650px; margin-left: auto; margin-right: auto; display: block;" />
          </v-flex>
        </v-layout>
      </v-flex>
      <v-flex xs12 style="margin-left:50px; margin-right:50px; margin-top:20px">
        <v-layout wrap>
          <v-flex xs6>
            <img src="../assets/img-placeholder.png" style="width:650px; margin-left: auto; margin-right: auto; display: block;" />
          </v-flex>
          <v-flex xs6>
            <span v-html="text_data.part_2" /> 
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
      text_data:{
        part_1: "Placeholder for the first part ...",
        part_2: "Placeholder for the second part ..."
      },
    }
  },
  mounted() {
    this.load_data();
  },
  methods: {
    async load_data(){
      try{
        let req_data = await axios.get("/data.json");
        if(req_data && req_data.data && req_data.data.industry)
          this.text_data = req_data.data.industry;
        
      }catch(e){
        console.error(e);
      }
    },
  }

};
</script>
<style>
</style>