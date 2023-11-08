import React from 'react'
import { ImageBackground, StyleSheet, KeyboardAvoidingView, Image, View } from 'react-native'
import { theme } from '../core/theme'

export default function Background({ children }) {
  return (
    <ImageBackground
      source={require("../assets/background_dot.png")}
      resizeMode="repeat"
      style={styles.background}
    >
      <View style={styles.circleImage}>
        <Image source={require("../assets/shape.png")} style={styles.image} />
      </View>
      <KeyboardAvoidingView style={styles.container} behavior="padding">
        {children}
      </KeyboardAvoidingView>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
    width: "100%",
    backgroundColor: theme.colors.bg,
  },
  container: {
    flex: 1,
    marginTop: 145,
    padding: 20,
    width: "100%",
    maxWidth: 340,
    alignSelf: "center",
    alignItems: "center",
    justifyContent: "center",
  },
  image: {
    width: 190,
    height: 170,
  },
  circleImage: {
    position: "absolute",
    top: -50,
    left: -70,
    zIndex: 1,
  }
});
