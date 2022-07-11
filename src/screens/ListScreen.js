import React from "react";
import { FlatList, StyleSheet, Text, ScrollView } from "react-native";
import { View } from "react-native";
import CardComponent from "../components/Card.component";

const styles = StyleSheet.create({
  contentContainer: {
    paddingTop: 10,
    paddingBottom: 120,
  },
});
const ListScreen = ({ navigation }) => {
  return (
    <View>
      <FlatList
        contentContainerStyle={styles.contentContainer}
        data={[
          {
            Key: "Item 1",
            content:
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua",
          },
          {
            Key: "Item 2",
            content:
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua",
          },
          {
            Key: "Item 3",
            content:
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua",
          },
          {
            Key: "Item 4",
            content:
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua",
          },
          {
            Key: "Item 5",
            content:
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua",
          },
          {
            Key: "Item 6",
            content:
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua",
          },
          {
            Key: "Item 7",
            content:
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua",
          },
          {
            Key: "Item 8",
            content:
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua",
          },
          {
            Key: "Item 9",
            content:
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua",
          },
          {
            Key: "Item 10",
            content:
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua",
          },
        ]}
        renderItem={({ item }) => (
          <CardComponent
            title={item.Key}
            content={item.content}
            imageUrl="https://picsum.photos/700"
            navigation={navigation}
          ></CardComponent>
        )}
        showVerticalScrollIndicator={false}
      />
    </View>
  );
};

export default ListScreen;
