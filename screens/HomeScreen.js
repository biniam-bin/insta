import React from "react";
import { View, Text, SafeAreaView, StyleSheet, ScrollView } from "react-native";
import BottomTabs from "../components/home/BottomTabs";
import Header from "../components/home/Header";
import Post from "../components/home/Post";
import Stories from "../components/home/Stories";
import { POSTS } from "../data/post";
import { botomTabIcons } from '../components/home/BottomTabs';

export default function HomeScreen() {
  return (
    <SafeAreaView style={styles.container}>
      <Header />
      <Stories />
      <ScrollView>
          {
              POSTS.map((post, index) => {
                  return(
                      <Post key={index} post={post}/>
                  )
              })
          }
      </ScrollView>
      <BottomTabs icons={botomTabIcons}/>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "black",
    flex: 1,
  },
});
