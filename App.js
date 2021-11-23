import * as React from "react";
import {
  View,
  Text,
  StatusBar,
  Platform,
  SafeAreaView,
  StyleSheet,
} from "react-native";
import HomeScreen from "./screens/HomeScreen";

export default function App() {
  return (
    // <View style={styles.all}>
      <SafeAreaView style={styles.AndroidSafeArea}>
        <HomeScreen />
      </SafeAreaView>
    // </View>
  );
}

const styles = StyleSheet.create({
  AndroidSafeArea: {
    flex: 1,
    backgroundColor: "black",
    paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
  },
  all: {
    backgroundColor: "black"
  }
});
