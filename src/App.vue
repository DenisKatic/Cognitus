<template>
  <v-app style="background-color: white;">
    <v-content class="background_image">
      <v-layout wrap>
        <v-flex xs12 text-center text-xs-center justify-center fill-height align-center style="height:100px">
          <div class="header_div">
            <span class="header_span">
              Welcome to Cognitus
            </span>
          </div>
        </v-flex>
        <v-flex xs12 >
          <Menu />
        </v-flex>
        <v-flex xs12 style="background:white; padding-bottom:20px">
          <router-view style="min-height:800px;" />
        </v-flex>
        <v-flex xs12 style="margin-top:20px">
        </v-flex>
        <v-flex xs12>
          <v-layout wrap text-center text-xs-center justify-center fill-height align-center>
            <v-flex xs1>
            </v-flex>
            <v-flex xs2>
              <img src="./assets/swarovski.png" height="50px" />
            </v-flex>
            <v-flex xs2>
              <img src="./assets/spar-logo.jpg" height="50px" />
            </v-flex>
            <v-flex xs2>
              <img src="./assets/lm-logo-small-2.png" height="50px" />
            </v-flex>
            <v-flex xs2>
              <img src="./assets/fraunhofer.png" height="50px" />
            </v-flex>
            <v-flex xs2>
              <img src="./assets/ait_logo.jpg" height="50px" />
            </v-flex>
            <v-flex xs1>
            </v-flex>
          </v-layout>
        </v-flex>
      </v-layout>
    </v-content>
  </v-app>
</template>

<script>
//import Home from './views/Home';
import Menu from './components/Menu';

export default {
  name: 'App',

  components: {
    Menu
  },

  data: () => ({
    //
  }),
};
</script>

<style>
.background_image {
  background: url("./assets/AI-background.jpg");
}
.background_image_2 {
  /*background: url("./assets/AI-background.jpg") no-repeat left top, linear-gradient(black, white);*/
  background-color: white;
  background-position: 0 0;
  background-repeat: no-repeat;

  /* Fallback */
  background-image: url('./assets/AI-background.jpg');

  /* CSS gradients */
  background-image: url('./assets/AI-background.jpg'), 
                    -moz-linear-gradient(top, black 0%, black 100%);
  background-image: url('../images/sidebar_angle.png'), 
                    -webkit-gradient(linear, left top, left bottom, color-stop(0%, black), color-stop(100%, black));
  background-image: url('./assets/AI-background.jpg'), 
                    linear-gradient(to bottom, black, black);

  /* IE */
  filter: progid:DXImageTransform.Microsoft.gradient(startColorstr='#ADB2B6', endColorstr='#ABAEB3', GradientType=0);
}
.header_span {
  font-size:40px; 
  color:white;
}
.header_div {
  margin-top:60px;
}
span {
  font-size: 18px;
}

@media (max-width: 768px) {
  span {
    font-size: 10px;
  }
}
</style>
