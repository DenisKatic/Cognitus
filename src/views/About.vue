<template>
  <v-container grid-list-md text-center text-xs-center style="margin-top:20px" justify-center fill-height align-center>
    <v-layout wrap>
      <v-flex xs12>
          <h1>About</h1>
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
      interval_function:undefined
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
