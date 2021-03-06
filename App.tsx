import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, View } from "react-native";
import Constants from "expo-constants";
import faker from "faker";
import List from "./components/list";

faker.seed(26);

interface data {
  name: string;
  email: string;
  job_title: string;
  key: string;
  avatar: string;
}

export default function App() {
  const fake: string[] = new Array(40).fill("test");
  const data: data[] = fake.map(() => ({
    name: faker.name.findName(),
    job_title: faker.name.jobTitle(),
    email: faker.internet.email(),
    key: faker.random.alphaNumeric(10),
    avatar: faker.image.avatar(),
  }));

  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <Text
        style={{
          marginTop: 10,
          fontSize: 30,
          fontWeight: "bold",
          marginLeft: 20,
        }}
      >
        FlatList
      </Text>
      <List data={data} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: Constants.statusBarHeight,
  },
});
