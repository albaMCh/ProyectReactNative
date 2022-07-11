import * as React from "react";
import { useState } from "react";
import { Button, Card, Title, Paragraph, IconButton } from "react-native-paper";
import { Image, StyleSheet, View, ImageBackground, Text } from "react-native";

const UserComponent = (props) => {
  const [like, setLike] = useState("heart-outline");
  const handleLike = () => {
    if (like == "heart-outline") {
      setLike("like");
    } else {
      setLike("heart-outline");
    }
  };
  return (
    <Card>
      <ImageBackground
        style={{
          height: 150,
          alignItems: "center",
        }}
        source={{ uri: "https://picsum.photos/700" }}
      >
        <Image
          source={require("../assets/logo.jpg")}
          style={{
            width: 60,
            height: 60,
            borderRadius: 60 / 2,
            marginTop: 20,
            borderColor: "white",
            borderWidth: 2,
          }}
        />
        <Text style={{ color: "white", fontSize: 20 }}>Alba Molera</Text>
      </ImageBackground>
    </Card>
  );
};

export default UserComponent;
