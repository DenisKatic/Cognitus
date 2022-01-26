<template>
  <v-container grid-list-md style="margin-top:20px" justify-center fill-height align-center>
    <v-layout wrap>
      <v-flex xs12 style="margin-left:35px;margin-right:80px;margin-top:5px; margin-bottom:20px">
        <v-layout wrap>
          <v-flex xs12>
            <h2 style="color:white">Results</h2>
          </v-flex>
          <v-flex xs12>
            <hr style="color:white;">
          </v-flex>
          <v-flex xs12 style="margin-top:20px;background-color: rgba(255, 255, 255, 0.75); border-radius: 8px;">
            Within the COGNITUS project, the following results were achieved:
          </v-flex>
          <v-flex xs12 style="padding-top:20px">
            <h3 style="color:white">Publications:</h3>
          </v-flex>
          <v-flex xs12 style="margin-top:10px; background-color: rgba(255, 255, 255, 0.75); border-radius: 8px;">
            <ul >
              <li v-for="item in text_data.publications" :key="item">
                <span v-html="item" />
              </li>
            </ul>
          </v-flex>
          <v-flex xs12 style="padding-top:20px">
            <h3 style="color:white">Talks:</h3>
          </v-flex>
          <v-flex xs12 style="margin-top:10px; background-color: rgba(255, 255, 255, 0.75); border-radius: 8px;">
            <ul >
              <li v-for="item in text_data.talks" :key="item">
                <span v-html="item" />
              </li>
            </ul>
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
