<template>
  <v-container grid-list-md style="margin-top:20px" justify-center fill-height align-center>
    <v-layout wrap >
      <v-flex xs12 style="margin-left:35px;margin-right:80px;margin-top:5px; margin-bottom:20px">
        <v-layout wrap>
          <v-flex xs12>
            <h2 style="color:white;">Project Lead / Contact</h2>
          </v-flex>
          <v-flex xs12>
            <hr style="color:white;">
          </v-flex>
          <v-flex xs12 style="margin-top:20px;background-color: rgba(255, 255, 255, 0.75); border-radius: 8px;">
            <span v-html="contact_data" />
          </v-flex>
          <v-flex xs12 style="margin-top:20px;background-color: rgba(255, 255, 255, 0.75); border-radius: 8px;">
            <span v-html="contact_name" />
          </v-flex>
        </v-layout>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
//import axios from "axios";
export default {
  components: {
  },
  data() {
    return {
      help_question:false,
      interval_function:undefined,
      contact_data: "Austrian Institute of Technology GmbH <br/>Center for Digital Safety and Security <br/>Giefinggasse 4 <br/>1210 Vienna <br/>Austria <br/>",
      contact_name: "<a href='https://bernhardhaslhofer.info/'>Dr. Bernhard Haslhofer</a>"
    }
  },
  mounted() {
  },
  methods: {
    open_ranking(){
    },
    help_interval(){
      this.help_question = !this.help_question;
    },
    /*
    async lets_go() {      
      try {
      } catch (e) {
        console.error(e);
      }
      finally{
      }
    }*/
  }

};
</script>
