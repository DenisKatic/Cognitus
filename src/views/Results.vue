<template>
  <v-container grid-list-md style="margin-top:20px" justify-center fill-height align-center>
    <v-layout wrap>
      <v-flex xs12 style="margin-left:60px;margin-right:80px;margin-top:5px; margin-bottom:20px">
        <v-layout wrap>
          <v-flex xs12>
            <h2>Results</h2>
          </v-flex>
          <v-flex xs12>
            <hr>
          </v-flex>
          <v-flex xs12 style="padding-top:20px">
            Within the COGNITUS project, the following results were achieved:
          </v-flex>
          <v-flex xs12 style="padding-top:20px">
            <h4>Publications:</h4>
          </v-flex>
          <v-flex xs12 v-for="item in text_data" :key="item" style="padding-top:10px">
            <span v-html="item" />
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
      text_data: [
        
      ]
    }
  },
   mounted() {
    this.load_data();
  },
  methods: {
    async load_data(){
      try{
        let req_data = await axios.get("/data.json");
        if(req_data && req_data.data && req_data.data.results)
          this.text_data = req_data.data.results;
        
      }catch(e){
        console.error(e);
      }
    },
  }

};
</script>
