<template>
  <v-container grid-list-md style="margin-top:20px" justify-center fill-height align-center>
    <v-layout wrap>
      <v-flex xs12 style="margin-left:50px">
        <v-card
          flat
          height="38px"
          style="background: none;"
        >
          <v-menu top >
            <template v-slot:activator="{ on }">
              <v-btn
                color="primary"
                dark
                v-on="on"
                @click="open_home"
              >
                Home
              </v-btn>
            </template>
          </v-menu>
          <v-menu top :offset-y="offset">
            <template v-slot:activator="{ on }">
              <v-btn
                color="primary"
                dark
                v-on="on"
              >
                Topics
              </v-btn>
            </template>

            <v-list>
              <v-list-item
                v-for="(item, index) in topics"
                :key="index"
                @click="item.topic_func()"
              >
                <v-list-item-title>{{ item.title }}</v-list-item-title>
              </v-list-item>
            </v-list>
          </v-menu>
            <v-menu top >
            <template v-slot:activator="{ on }">
              <v-btn
                color="primary"
                dark
                v-on="on"
                @click="open_about"
              >
                About
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
    open_industry(){
      this.$router.push({name:"industry"});
    },
    open_data_collection(){
      this.$router.push({name:"data_collection"});
    },
    open_ai(){
      this.$router.push({name: "ai"});
    },
    open_maintenance(){
      this.$router.push({name:"maintenance"});
    },
    open_benefits(){
      this.$router.push({name:"benefits"});
    },
    open_about(){
      this.$router.push({name:"about"});
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
<style scoped>
</style>