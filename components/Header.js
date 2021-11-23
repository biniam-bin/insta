import React from "react";
import { View, Text, Image, StyleSheet, TouchableOpacity } from "react-native";

export default function Header() {
  return (
    <View style={styles.container}>
      <TouchableOpacity>
        <Image source={require("../assets/logo.png")} style={styles.logo} />
      </TouchableOpacity>

      <View style={styles.iconsContainer}>
        <TouchableOpacity>
          <Image
            style={styles.icon}
            source={{
              uri: "https://img.icons8.com/fluency-systems-regular/60/ffffff/plus-2-math.png",
            }}
          />
        </TouchableOpacity>
        <TouchableOpacity>
          <Image
            style={styles.icon}
            source={{
              uri: "https://img.icons8.com/fluency-systems-regular/60/ffffff/like--v1.png",
            }}
          />
        </TouchableOpacity>
        <TouchableOpacity>
            <View style={styles.unreadBadge}>
                <Text style={styles.unreadBadgeText}>12</Text>
            </View>
          <Image
            style={styles.icon}
            source={{
              uri: "https://img.icons8.com/fluency-systems-regular/60/ffffff/facebook-messenger.png",
            }}
          />
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  logo: {
    width: 100,
    height: 50,
    resizeMode: "contain",
  },
  container: {
    justifyContent: "space-between",
    alignItems: "center",
    flexDirection: "row",
    marginLeft: 20,
  },
  iconsContainer: {
    flexDirection: "row",
  },
  icon: {
    width: 30,
    height: 30,
    marginRight: 10,
    resizeMode: "contain",
  },
  unreadBadge: {
      backgroundColor: "#FF3250",
      position: "absolute",
      left: 12,
      bottom: 18,
      width: 25,
      height: 20,
      borderRadius: 25,
      alignItems: "center",
      zIndex: 10,
      justifyContent: "center"
    },
    unreadBadgeText: {
    //   fontSize: 15,
      fontWeight: '900',
      color: "white"

  }
});
