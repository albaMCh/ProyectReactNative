import React from "react";
import { FlatList, StyleSheet, Text, ScrollView } from "react-native";
import { View, Image, TouchableHighlight } from "react-native";
import Button from "../components/Button.component";

const DetailScreen = ({ navigation, route }) => {
  return (
    <View>
      <Image source={route.params.imageUrl} style={styles.image}></Image>
      <TouchableHighlight
        onPress={() =>
          navigation.navigate("Empresa", {
            title: route.params.title,
            content: route.params.content,
            imageUrl: route.params.imageUrl,
            logoUrl: route.params.logoUrl,
            companyInfo: route.params.companyInfo,
          })
        }
      >
        <Image source={route.params.logoUrl} style={styles.logo} />
      </TouchableHighlight>

      <Text>{route.params.title}</Text>
      <Text>{route.params.content}</Text>
      <Button onPress={() => navigation.navigate("Perfil")}>Registrarse</Button>
    </View>
  );
};

const styles = StyleSheet.create({
  image: {
    width: "100%",
    height: 110,
    marginBottom: 8,
  },
  logo: {
    width: 60,
    height: 60,
    marginBottom: 8,
  },
});

export default DetailScreen;
