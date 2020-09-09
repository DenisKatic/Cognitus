<template>
  <v-container grid-list-md style="margin-top:20px" justify-center fill-height align-center>
    <v-layout wrap>
      <v-flex xs12>
        <v-layout wrap >
          <!--v-flex xs11 style="margin-left:60px;">
            Project description:
          </v-flex-->
          <v-flex xs12 style="margin-left:60px;margin-right:80px;margin-top:5px; margin-bottom:20px">
            <span v-html="text_data.project_description" />
          </v-flex>
        </v-layout>
      </v-flex>
      <!--v-flex xs12>
        <v-layout wrap>
          <v-flex xs12 md5>
            <v-layout wrap>
              <v-flex xs12>
                <v-card
                  ref="card_2"
                  class="info_cards"
                  style="margin-top:100px;"
                  @click="open_data_collection"
                >
                  <v-card-text style="text-align: left;" >
                    <h2>Step 2: Data collection</h2>
                    <div class="text--primary" style="height:55px; margin-top:5px">
                      <span v-html="text_data.data_collection" />
                    </div>
                  </v-card-text>
                  <v-card-actions>
                    <v-btn
                      text
                      color="deep-purple accent-4"
                      @click="open_data_collection"
                    >
                      More
                    </v-btn>
                  </v-card-actions>
                </v-card>
              </v-flex>
              <v-flex xs12>
                <v-card
                  ref="card_4"
                  class="info_cards"
                  style="margin-top:20px;"
                  @click="open_maintenance"
                >
                  <v-card-text style="text-align: left;">
                    <h2>Step 4: Maintenance</h2>
                    <div class="text--primary" style="height:55px; margin-top:5px">
                      <span v-html="text_data.maintenance" />
                    </div>
                  </v-card-text>
                  <v-card-actions>
                    <v-btn
                      text
                      color="deep-purple accent-4"
                      @click="open_maintenance"
                    >
                      More
                    </v-btn>
                  </v-card-actions>
                </v-card>
              </v-flex>
            </v-layout>
          </v-flex>
          <v-flex md2 xs0>
            <div style="width:260px; overflow:hidden; margin-left:35px">
              <img src="../assets/gearwheel-cognitus_2.svg" style="height:550px; margin-left: -40px;" class="rotating" />
            </div>
          </v-flex>
          <v-flex xs12 md5>
            <v-layout wrap >
              <v-flex xs12>
                <v-card
                  ref="card_1"
                  class="info_cards"
                  width="660px"
                  height="160px"
                  style="margin-top:10px;"
                  @click="open_industry"
                >
                  <v-card-text style="text-align: left;">
                    <h2>Step 1: Industry</h2>
                    <div class="text--primary" style="height:55px; margin-top:5px">
                      <span v-html="text_data.industry" />
                    </div>
                  </v-card-text>
                  <v-card-actions>
                    <v-btn
                      text
                      color="deep-purple accent-4"
                      @click="open_industry"
                    >
                      More
                    </v-btn>
                  </v-card-actions>
                </v-card>
              </v-flex>
              <v-flex xs12>
                <v-card
                  ref="card_3"
                  class="info_cards"
                  width="660px"
                  height="160px"
                  style="margin-top:20px;"
                  @click="open_ai"
                >
                  <v-card-text style="text-align: left;">
                    <h2>Step 3: Artificial Intelligence</h2>
                    <div class="text--primary" style="height:55px; margin-top:5px">
                      <span v-html="text_data.ai" />
                    </div>
                  </v-card-text>
                  <v-card-actions>
                    <v-btn
                      text
                      color="deep-purple accent-4"
                      @click="open_ai"
                    >
                      More
                    </v-btn>
                  </v-card-actions>
                </v-card>
              </v-flex>
              <v-flex xs12>
                <v-card
                  ref="card_5"
                  class="info_cards"
                  width="660px"
                  height="160px"
                  style="margin-top:20px;"
                  @click="open_benefits"
                >
                  <v-card-text style="text-align: left;">
                    <h2>Step 5: Benefits</h2>
                    <div class="text--primary" style="height:55px; margin-top:5px">
                      <span v-html="text_data.benefits" />
                    </div>
                  </v-card-text>
                  <v-card-actions>
                    <v-btn
                      text
                      color="deep-purple accent-4"
                      @click="open_benefits"
                    >
                      More
                    </v-btn>
                  </v-card-actions>
                </v-card>
              </v-flex> 
            </v-layout>
          </v-flex>
        </v-layout>
      </v-flex-->
    </v-layout>
  </v-container>
</template>

<script>
import axios from "axios";

export default {
  name: 'Home',
  data() {
    return {
      index: 0,
      text_data: {
        industry: "Industry text.....",
        data_collection: "Data collection text......",
        ai: "Artificial Intelligence text.....",
        maintenance: "Maintenance text.....",
        benefits: "Benefits text .......",
        project_description: "Placeholder for project description text ....",
        home:undefined
      }
    }
  },
  mounted() {
    this.load_data();
    //this.start_interval();
  },
  methods: {
    async load_data(){
      try{
        let req_data = await axios.get("/data.json");
        if(req_data && req_data.data && req_data.data.home)
          this.text_data = req_data.data.home;
        
      }catch(e){
        console.error(e);
      }
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
    start_interval(){
      setTimeout(this.display_blocks.bind(this), 1000);
    },
    display_blocks(){
      this.$refs.card_1.$refs.link.style.display = "block"
      this.$refs.card_2.$refs.link.style.display = "block"
      this.$refs.card_3.$refs.link.style.display = "block"
      this.$refs.card_4.$refs.link.style.display = "block"
      this.$refs.card_5.$refs.link.style.display = "block"
    },
  }
};
</script>

<style scoped>
@keyframes rotating
    {
    from
        {
        transform: rotate(180deg);
        -o-transform: rotate(180deg);
        -ms-transform: rotate(180deg);
        -moz-transform: rotate(180deg);
        -webkit-transform: rotate(180deg);
        transform-origin: -10px;
        }
    to
        {
        transform: rotate(360deg);
        -o-transform: rotate(360deg);
        -ms-transform: rotate(360deg);
        -moz-transform: rotate(360deg);
        -webkit-transform: rotate(360deg);
        transform-origin: -10px;
        }
    }
@-webkit-keyframes rotating
    {
    from
        {
        transform: rotate(180deg);
        -webkit-transform: rotate(180deg);
        }
    to
        {
        transform: rotate(360deg);
        -webkit-transform: rotate(360deg);
        }
    }
.rotating
    {
    -webkit-animation: rotating 1s linear;
    -moz-animation: rotating 1s linear;
    -ms-animation: rotating 1s linear;
    -o-animation: rotating 1s linear;
    animation: rotating 1s linear;
    }
.info_cards {
    display: none;
    width: 660px;
    height: 160px;
    margin-left: 60px;
  }

@media (max-width: 768px) {
  .rotating {
    display: None;
  }
  .info_cards {
    display: block;
    width: auto;
    height: 200px;
    margin-left: 60px;
    margin-right: 60px;
  }
}

</style>

