import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

export default () => {

    return (
        
        <View style={styles.pokedex_container}>
            {/* <View id="pokedex">
                <View id="pokedex-left">
                <View>
                <View id="circle1">
                    <View id="light-circle1"></View>
                </View>
                <View id="circle2" class="circleRed">
                    <View class="light-circle2" id="light-circle2Red"></View>
                </View>
                <View id="circle2" class="circleYellow">
                    <View class="light-circle2" id="light-circle2Yellow"></View>
                </View>
                <View id="circle2" class="circleGreen">
                    <View class="light-circle2" id="light-circle2Green"></View>
                </View>
                </View>
                <View id="screen-row">
                //<View id="screen-border">
                    <View id="top-screen-decoration">
                    <View id="circle3" style="margin-right: 20px"></View>
                    <View id="circle3" style="margin-left: 20px"></View>
                    </View>
                    <View id="screen">
                    <View id="picture-row">
                        
                    </View>
                    <View id="screen-row-info">
                        <View id="number-pokemon">001</View>
                        
                    </View>
                    </View>
                    <View id="bottom-screen-decoration">
                    
                    <View id="menu-button">
                        ////<svg width="22" height="16" viewBox="0 0 22 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <line y1="0.5" x2="22" y2="0.5" stroke="black"/>
                        <line y1="15.5" x2="22" y2="15.5" stroke="black"/>
                        <line y1="10.5" x2="22" y2="10.5" stroke="black"/>
                        <line y1="5.5" x2="22" y2="5.5" stroke="black"/>
                        </svg>

                    </View>
                    </View>
                </View>
                </View>
                <View id="name-row">
                <View id="name-container">
                    <View id="name-screen">
                        <Text> Ditto </Text>
                    </View>
                    <View id="arrows-container">
                    <View id="cross">
                    <View id="leftcross" onclick="clickLeftRight()">
                    <View id="leftT"></View>
                    </View>
                    <View id="topcross" onclick="clickUp()">
                    <View id="upT"></View>
                    </View>
                    <View id="rightcross" onclick="clickLeftRight()">
                    <View id="rightT"></View>
                    </View>
                    <View id="midcross">
                    <View id="midCircle"></View>
                    </View>
                    <View id="botcross" onclick="clickBottom()">
                    <View id="downT"></View>
                    </View>
                </View>
                    </View>
                </View>
                </View>
            </View>
        </View> */}
        </View>
        
    );

}

const styles = StyleSheet.create({
    
      
      red: {
        //backgroundColor: "#ff0000"
      },
      yellow: {
        //backgroundColor: "#fecb65"
      },
      green: {
        //backgroundColor: "#32cb65"
      },
      blue: {
        //backgroundColor: "#3298cb"
      },
      light_blue: {
        //backgroundColor: "#85bdfe"
      },
      light_red: {
        //backgroundColor: "#fe98cb"
      },
      light_yellow: {
        //backgroundColor: "#fefecb"
      },
      light_green: {
        //backgroundColor: "#98fe00"
      },
      
    //   body: {
    ////     height: "100vh",
    ////     width: "100vw",
    ////     display: "flex",
    //     flexDirection: "column",
    //////     justifyContent: "flex-start",
    ////     alignItems: "center",
    //////     //backgroundColor: "var(--secondary-bg-color)"
    //   },
      logo: {
        //alignSelf: "flex-start",
        //width: "100%",
        //height: "20%",
        //display: "flex",
        ////justifyContent: "center",
        //alignItems: "center"
      },
      search_container: {
        //width: "100%",
        //height: "80px",
        //alignSelf: "center",
        //alignSelf: "center",
        //display: "flex",
        ////justifyContent: "center",
        //alignItems: "center"
      },
      ball_container: {
        //width: "60px",
        //height: "60px",
        //border: "2px solid black",
        //borderRadius: "50%",
        //position: "relative",
        //animation: "shake 1.5s ease-in infinite",
        //animationPlayState: "paused"
      },
      ball_container_hover: {
        //cursor: "pointer",
        //animationPlayState: "running"
      },
      upper_half_ball: {
        //position: "absolute",
        //width: "100%",
        //height: "42%",
        ////backgroundColor: "var(--main-bg-color)"
      },
      bottom_half_ball: {
        //position: "absolute",
        bottom: "0",
        //width: "100%",
        //height: "42%",
        ////backgroundColor: "var(--secondary-bg-color)"
      },
      center_ball: {
        //backgroundColor: "white",
        //width: "20%",
        //height: "20%",
        //border: "2px solid black",
        //borderRadius: "50%",
        //position: "absolute",
        top: "50%",
        left: "50%",
        ////transform: "translate(-50%, -50%)"
      },
      center_line: {
        //background: "black",
        //height: "100%",
        //width: "100%"
      },
      input: {
        textAlign: "center",
        //height: "40px",
        //borderRadius: "4px",
        marginRight: "10px"
      },
      pokedex_container: {
        //display: "flex",
        ////justifyContent: "center"
      },
      pokedex: {
        //height: "342px",
        //width: "calc(228px * 2)",
        //display: "flex",
        //borderRadius: "10px"
      },
    ////   @media only screen and (max-width: 600px): {
    ////     __expression__: "only screen and (max-width: 600px)",
    //     pokedex: {
    ////       width: "90%"
    //     }
    //   },
      left_panel: {
        ////backgroundColor: "var(--main-bg-color)",
        //boxSizing: "border-box",
        //height: "100%",
        //width: "50%",
        //display: "grid",
        ////gridTemplateRows: "23% 50% 27%",
        //border: "solid black 3px",
        //borderTopLeftRadius: "10px",
        //borderBottomLeftRadius: "10px",
        //borderTopRightRadius: "7px"
      },
      lights_container: {
        //position: "relative",
        //display: "flex",
        ////justifyContent: "flex-start",
        //alignItems: "center"
      },
      left_svg: {
        //position: "absolute",
        //zIndex: "+5"
      },
      big_light_boarder: {
        //display: "flex",
        ////justifyContent: "center",
        //alignItems: "center",
        marginLeft: "5px",
        //height: "60px",
        //width: "60px",
        //border: "solid black",
        //borderRadius: "50%",
        //backgroundColor: "white"
      },
      big_light: {
        //height: "50px",
        //width: "50px",
        //borderRadius: "50%",
        //border: "solid black"
      },
      big_dot: {
        //height: "15px",
        //width: "15px",
        //position: "relative",
        top: "7px",
        left: "10px",
        //borderRadius: "50%"
      },
      small_lights_container: {
        marginLeft: "15px",
        marginTop: "10px",
        //width: "70px",
        //height: "100%",
        //display: "flex",
        //alignSelf: "flex-start",
        ////justifyContent: "space-around"
      },
      small_light: {
        //border: "solid black",
        //width: "16px",
        //height: "16px",
        //borderRadius: "50%"
      },
      dot: {
        //height: "5px",
        //width: "5px",
        //position: "relative",
        top: "3px",
        left: "3px",
        //borderRadius: "50%"
      },
      screen_container: {
        //display: "flex",
        ////justifyContent: "center",
        //alignItems: "center"
      },
      screen: {
        //width: "150px",
        //height: "150px",
        //border: "solid black",
        //borderRadius: "0 0 0 17%",
        //display: "grid",
        //gridTemplateRows: "10% 72% 18%",
        //backgroundColor: "white"
      },
      top_screen_lights: {
        //width: "50%",
        marginTop: "2px",
        //display: "flex",
        //alignSelf: "center",
        ////justifyContent: "center",
        //alignItems: "center"
      },
      mini_light: {
        //border: "solid black 1px",
        //width: "5px",
        //height: "5px",
        //borderRadius: "50%",
        marginRight: "7px"
      },
      main_screen: {
        //height: "100%",
        //width: "80%",
        //alignSelf: "center",
        ////backgroundColor: "var(--main-screen-bg-color)",
        //border: "solid black 2px",
        //borderRadius: "5%",
        //backgroundImage: "url(https://assets.pokemon.com/assets/cms2/img/pokedex/full/001.png)",
        //backgroundPosition: "center",
        //backgroundRepeat: "no-repeat",
        //backgroundSize: "contain"
      },
      bottom_screen_lights: {
        //display: "flex",
        marginTop: "5px",
        //width: "75%",
        //alignSelf: "center",
        ////justifyContent: "space-between",
        //alignItems: "center"
      },
      bottom_screen_lights__small_light: {
        //border: "solid black 2px",
        //width: "12px",
        //height: "12px"
      },
      bottom_screen_lights__dot: {
        //height: "4px",
        //width: "4px",
        top: "2.5px",
        left: "2px"
      },
      line: {
        //width: "18px",
        //height: "2px",
        //backgroundColor: "black",
        marginTop: "2px"
      },
      buttons_container: {
        //display: "grid",
        //gridTemplateRows: "40% 60%"
      },
      big_button: {
        //width: "25px",
        //height: "25px",
        //borderRadius: "50%",
        //border: "solid 2px black",
        ////backgroundColor: "var(--main-buttons-color)",
        marginLeft: "7px"
      },
      long_button: {
        //width: "35px",
        //height: "2px",
        //borderRadius: "50px",
        //border: "2px solid black"
      },
      green_screen: {
        //width: "80px",
        //height: "30px",
        //borderRadius: "5px",
        //border: "solid black 2px",
        //backgroundColor: "#3ab47d",
        //display: "flex",
        ////justifyContent: "center",
        //alignItems: "center"
      },
    //   name_screen: {
    //     //width: "100%",
    //     fontFamily: "'Press flex-start 2P', cursive",
    //     textAlign: "center",
    ////     fontSize: "8.5px",
    //   },
      circle: {
        //width: "4px",
        //height: "4px",
        //borderRadius: "50%",
        //border: "1px solid black"
      },
      upper_buttons_container: {
        //display: "flex",
        //alignItems: "top",
        ////justifyContent: "flex-start"
      },
      long_buttons_container: {
        //display: "flex",
        //width: "100px",
        ////justifyContent: "space-around",
        marginLeft: "7px"
      },
      nav_buttons_container: {
        //display: "grid",
        //gridTemplateColumns: "27% 35% 38%"
      },
      dots_container: {
        //height: "100%",
        //width: "50%",
        //display: "flex",
        //alignSelf: "center",
        ////justifyContent: "space-between",
        //fontSize: "x-large"
      },
      right_nav_container: {
        //position: "relative",
        top: "-30px",
        //display: "flex",
        flexDirection: "column",
        ////justifyContent: "center",
        //alignItems: "center"
      },
      nav_button: {
        //height: "52px",
        //width: "52px",
        //display: "flex",
        ////justifyContent: "center",
        //alignItems: "center"
      },
      nav_button_vertical: {
        //position: "absolute",
        //transform: "rotate(90deg)",
        ////backgroundColor: "var(--main-buttons-color)",
        //borderRadius: "5px",
        //height: "12px",
        //width: "52px",
        //border: "2px solid black"
      },
      nav_button_horizontal: {
        //position: "absolute",
        ////backgroundColor: "var(--main-buttons-color)",
        //borderRadius: "5px",
        //height: "12px",
        //width: "52px",
        //border: "2px solid black"
      },
      nav_center_circle: {
        //height: "5px",
        //width: "5px",
        //borderRadius: "50%",
        //border: "solid black 2px",
        //zIndex: "+2"
      },
      border_top: {
        ////borderTop: "3.5px solid var(--main-buttons-color)",
        //position: "absolute",
        top: "-3px",
        left: "20px",
        right: "19.5px"
      },
      border_bottom: {
        ////borderTop: "3.5px solid var(--main-buttons-color)",
        //position: "absolute",
        top: "11px",
        left: "20px",
        right: "19.5px"
      },
      bottom_right_nav_container: {
        //display: "flex",
        ////justifyContent: "center",
        //alignItems: "center",
        textAlign: "center"
      },
      bottom_right_nav_container__dots_container: {
        //alignItems: "center",
        ////justifyContent: "center"
      },
      bottom_right_nav_container__small_light: {
        //border: "solid black 2px",
        //width: "7px",
        //height: "7px",
        marginRight: "3px",
        marginTop: "10px"
      },
      bottom_right_nav_container__dot: {
        //height: "2.5px",
        //width: "2.5px",
        top: "1.5px",
        left: "1.5px"
      },
      right_panel: {
        ////backgroundColor: "var(--main-bg-color)",
        //boxSizing: "border-box",
        //position: "relative",
        //height: "100%",
        //width: "50%",
        //display: "grid",
        //gridTemplateRows: "24% repeat(4, 19%)",
        //borderBottom: "solid black 3px",
        //borderBottomRightRadius: "10px"
      },
      right_panel__before: {
        //content: "''",
        //position: "absolute",
        left: "-3px",
        bottom: "0",
        //width: "100%",
        //height: "265px",
        //borderRight: "solid black 3px",
        //borderBottomRightRadius: "7px"
      },
      top_screen_container: {
        //display: "flex",
        ////justifyContent: "center",
        //alignItems: "center"
      },
      right_panel_screen: {
        fontFamily: "'Press flex-start 2P', cursive",
        //width: "146px",
        //height: "64px",
        //backgroundColor: "var(--secondary-screen-bg-color)",
        //border: "solid black 2px",
        //borderRadius: "4px",
        //fontSize: "xx-small",
        paddingLeft: "8px",
        paddingRight: "2px",
        //display: "flex",
        //alignItems: "center",
        ////justifyContent: "center",
        textAlign: "left",
        //lineHeight: "2"
      },
      square_buttons_container: {
        //display: "flex",
        ////justifyContent: "center",
        //alignItems: "center"
      },
      blue_squares_container: {
        //width: "146px",
        //height: "60px",
        //display: "grid",
        //gridTemplateColumns: "repeat(5, 1fr)",
        //gridTemplateRows: "repeat(2, 1fr)"
      },
      blue_square: {
        //borderRadius: "2px",
        //border: "black 1.5px solid",
        //backgroundColor: "var(--square-buttons-color)",
        boxShadow: "inset -2px -2px #3298cb"
      },
      center_buttons_container: {
        //display: "flex",
        ////justifyContent: "space-around"
      },
      center_left_container: {
        //display: "grid"
      },
      small_reds_container: {
        //display: "flex",
        //alignItems: "center",
        ////justifyContent: "flex-start"
      },
      small_reds_container__small_light: {
        //border: "solid black 2px",
        //width: "7px",
        //height: "7px",
        marginRight: "10px",
        marginTop: "10px"
      },
      small_reds_container__dot: {
        //height: "2.5px",
        //width: "2.5px",
        top: "1px",
        left: "1px"
      },
      white_squares_container: {
        //display: "flex",
        //alignItems: "center",
        ////justifyContent: "center"
      },
      white_square: {
        //width: "25px",
        //height: "25px",
        //borderRadius: "5px",
        //border: "black 2px solid",
        //backgroundColor: "#ffffff",
        boxShadow: "inset -2px -2px gray"
      },
      center_right_container: {
        //display: "grid"
      },
      thin_buttons_container: {
        //display: "flex",
        ////justifyContent: "space-between"
      },
      thin_button: {
        //width: "35px",
        //height: "2px",
        //border: "2px solid black",
        ////backgroundColor: "var(--main-buttons-color)",
        marginLeft: "10px"
      },
      yellow_button: {
        //alignSelf: "end",
        //width: "25px",
        //height: "25px",
        //borderRadius: "50%",
        //border: "solid 2px black",
        marginLeft: "7px"
      },
      yellow_button__big_dot: {
        //height: "7px",
        //width: "7px",
        //position: "relative",
        top: "3px",
        left: "5px",
        //borderRadius: "50%"
      },
      bottom_screens_container: {
        //display: "flex",
        ////justifyContent: "space-around",
        //alignItems: "center"
      },
      bottom_screens_container__right_panel_screen: {
        //width: "64px",
        //height: "25px"
      },
      mention: {
        marginTop: "10px",
        //width: "150px",
        //display: "grid",
        textAlign: "center",
        //fontSize: "x-large"
      },
      links: {
        //display: "flex",
        ////justifyContent: "space-between"
      },
      link_logo: {
        //width: "25px",
        //height: "25px",
        //backgroundPosition: "center",
        //backgroundRepeat: "no-repeat",
        //backgroundSize: "contain"
      },
    
});