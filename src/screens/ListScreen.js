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
            logoUrl: require("../assets/logo.jpg"),
            company: {
              id: 1,
              name: "Proxya",
              descripcion:
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
              ubicacion: "Sevilla",
            },
          },
          {
            Key: "Item 2",
            content:
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua",
            logoUrl: require("../assets/logo.jpg"),
            company: {
              id: 2,
              name: "Empresa 2",
              descripcion:
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
              ubicacion: "Sevilla",
            },
          },
          {
            Key: "Item 3",
            content:
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua",
            logoUrl: require("../assets/logo.jpg"),
            company: {
              id: 3,
              name: "Empresa 3",
              descripcion:
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
              ubicacion: "Sevilla",
            },
          },
          {
            Key: "Item 4",
            content:
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua",
            logoUrl: require("../assets/logo.jpg"),
            company: {
              id: 4,
              name: "Empresa 4",
              descripcion:
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
              ubicacion: "Sevilla",
            },
          },
          {
            Key: "Item 5",
            content:
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua",
            logoUrl: require("../assets/logo.jpg"),
            company: {
              id: 5,
              name: "Empresa 5",
              descripcion:
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
              ubicacion: "Sevilla",
            },
          },
          {
            Key: "Item 6",
            content:
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua",
            logoUrl: require("../assets/logo.jpg"),
            company: {
              id: 6,
              name: "Empresa 6",
              descripcion:
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
              ubicacion: "Sevilla",
            },
          },
        ]}
        renderItem={({ item }) => (
          <CardComponent
            companyInfo={item.company}
            title={item.Key}
            content={item.content}
            imageUrl="https://picsum.photos/700"
            navigation={navigation}
            logoUrl={item.logoUrl}
          ></CardComponent>
        )}
        showVerticalScrollIndicator={false}
      />
    </View>
  );
};

export default ListScreen;
