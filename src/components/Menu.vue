<template>
  <v-container grid-list-md style="margin-top:-10px" justify-center fill-height align-center>
    <v-layout wrap>
      <v-flex xs12 style="margin-left:30px">
        <v-card
          flat
          height="38px"
          style="background: none;"
        >
          <v-menu top >
            <template v-slot:activator="{ on }">
              <v-btn
                color="#5c939a"
                dark
                v-on="on"
                @click="open_home"
              >
                Home
              </v-btn>
            </template>
          </v-menu>
          <v-menu top >
            <template v-slot:activator="{ on }">
              <v-btn
                color="#5c939a"
                dark
                v-on="on"
                @click="open_partners"
              >
                Partners
              </v-btn>
            </template>
          </v-menu>
          <v-menu top >
            <template v-slot:activator="{ on }">
              <v-btn
                color="#5c939a"
                dark
                v-on="on"
                @click="open_results"
              >
                Results
              </v-btn>
            </template>
          </v-menu>
          <v-menu top >
            <template v-slot:activator="{ on }">
              <v-btn
                color="#5c939a"
                dark
                v-on="on"
                @click="open_contact"
              >
                Contact
              </v-btn>
            </template>
          </v-menu>
        </v-card>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
//import axios from "axios";
export default {
  data() {
    return {
      help_question:false,
      interval_function:undefined,
      offset: true,
      topics:[
        {
          title: "Step 1: Industry",
          topic_func: this.open_industry
        },
        {
          title: "Step 2: Data collection",
          topic_func: this.open_data_collection
        },
        {
          title: "Step 3: AI",
          topic_func: this.open_ai
        },
        {
          title: "Step 4: Maintenance",
          topic_func: this.open_maintenance
        },
        {
          title: "Step 5: Benefits",
          topic_func: this.open_benefits
        }
      ]
    }
  },
  mounted() {
  },
  methods: {
    open_home(){
      this.$router.push({name: "home"});
    },
    open_partners(){
      this.$router.push({name: "partners"});
    },
    open_results(){
      this.$router.push({name: "results"});
    },
    open_contact(){
      this.$router.push({name: "contact"});
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
<style>
.v-btn{
  background-color:red;
}
</style>