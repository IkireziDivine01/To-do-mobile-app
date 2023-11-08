import React from "react";
import Background from "../components/Background";
import Logo from "../components/Logo";
import Header from "../components/Header";
import Button from "../components/Button";
import Paragraph from "../components/Paragraph";
import { StyleSheet, Image } from "react-native";

export default function StartScreen({ navigation }) {
  return (
    <Background>
      <Image
        source={require("../assets/undraw_mobile_ux_re_59hr.png")}
        style={styles.image}
      />
      <Header>Get things done with TODO</Header>
      <Paragraph>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed posuere
        gravida purus id eu condimentum est diam quam. Condimentum blandit diam.
      </Paragraph>
      <Button
        mode="contained"
        onPress={() => navigation.navigate("LoginScreen")}
      >
        Login
      </Button>
      <Button
        mode="outlined"
        onPress={() => navigation.navigate("RegisterScreen")}
      >
        Sign Up
      </Button>
      <Button mode= "outlined" onPress={() => navigation.navigate("Dashboard")}>Dashboard</Button>
    </Background>
  );
}

const styles = StyleSheet.create({
  image: {
    width: 220,
    height: 200,
    marginBottom: 8,
  },
});
