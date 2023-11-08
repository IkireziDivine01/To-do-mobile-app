import React, { useEffect } from 'react'
import Background from '../components/Background'
import Paragraph from '../components/Paragraph'
import Button from '../components/Button'
import { View } from 'react-native-web'
import { StyleSheet, Image, Text } from "react-native";
import { theme } from "../core/theme";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import DashboardLayout from '../components/DashboardLayout'

export default function Dashboard({ navigation }) {
  return (
    <DashboardLayout>
      <View style={styles.clockContainer}>
        <Image
          source={require("../assets/Group 162.png")}
          style={styles.image}
        />
      </View>
      <View style={styles.content}>
        <Text style={{ paddingBottom: 10, fontSize: 20, fontWeight: "600" }}>
          Tasks List
        </Text>
        <View style={styles.taskList}>
          <View style={styles.listContainer}>
            <Text>Daily List</Text>
            <Image
              source={require("../assets/plus circle.png")}
              style={styles.icon}
            />
          </View>
          <View style={styles.taskFlex}>
            <Image
              source={require("../assets/filled.png")}
              style={styles.sImage}
            />
            <Text>Learn programming by 12am</Text>
          </View>
          <View style={styles.taskFlex}>
            <Image
              source={require("../assets/unfilled.png")}
              style={styles.sImage}
            />
            <Text>Learn how to cook by 1pm</Text>
          </View>
        </View>
      </View>
    </DashboardLayout>
  );
}
const styles = StyleSheet.create({
  clockContainer: {
    width: "100%",
    height: "30%",
    marginTop: 210,
    justifyContent: "center",
    alignItems: "center",
  },
  content: {
    width: "100%",
  },
  image: {
    width: 100,
    height: 100,
    borderRadius: 50,
  },
  icon: {
    width: 20,
    height: 20,
  },
  taskList: {
    backgroundColor: "#FFFF",
    width: "100%",
    padding: 4,
  },
  sImage: {
    width: 20,
    height: 20,
    marginRight: 10,
  },
  listContainer: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    paddingHorizontal: 20,
    paddingVertical: 12,
    borderRadius: 10,
  },
  taskFlex: {
    display: "flex",
    flexDirection: "row",
    paddingHorizontal: 20,
    paddingVertical: 12,
  },
});

