import React from 'react'
import { ImageBackground, StyleSheet, KeyboardAvoidingView, Image, View, Text } from 'react-native'
import { theme } from '../core/theme'

export default function DashboardLayout({ children }) {
  return (
    <ImageBackground
      source={require("../assets/background_dot.png")}
      resizeMode="repeat"
      style={styles.background}
    >
      <View style={styles.circleImage}>
        <Image
          source={require("../assets/dashboardCircle.png")}
          style={styles.image}
        />
        <View
          style={styles.welcome}
        >
          <Image
            source={require("../assets/Ellipse 479.png")}
            style={styles.profile}
          />
          <Text
            style={styles.welcomeText}
          >
            Welcome Mary!
          </Text>
        </View>
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
  circleImage: {
    position: "absolute",
    top: 0,
    width: "100%",
    alignItems: "center",
    justifyContent: "center",
  },
  welcome: {
    position: "absolute",
    top: 150,
  },
  welcomeText: {
    color: "#FFFF",
    fontWeight: "bold",
    textAlign: "center",
    fontSize: 20,
  },
  image: {
    width: "100%",
    height: 320,
  },
  profile: {
    width: 100,
    height: 100,
    borderRadius: 50,
  },
});
