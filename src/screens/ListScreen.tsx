import React, { useState, useEffect } from "react";
import { FlatList, StyleSheet, Text, ScrollView } from "react-native";
import { View } from "react-native";
import CardComponent from "../components/Card.component";
import OfertaDataService from "../services/OfertaDataService";

const styles = StyleSheet.create({
  contentContainer: {
    paddingTop: 10,
    paddingBottom: 120,
  },
});
const ListScreen = ({ navigation, props }) => {
  const [listOffer, setListOffer] = useState({});

  useEffect(() => {
    OfertaDataService.getAll().then((data) => {
      setListOffer(data);
    });
  }, []);
  return (
    <View>
      <FlatList
        contentContainerStyle={styles.contentContainer}
        data={[listOffer]}
        renderItem={({ item }: { item: any }) => (
          <CardComponent
            companyInfo={item.company}
            title={item.Key}
            content={item.content}
            imageUrl="https://picsum.photos/700"
            navigation={navigation}
            logoUrl={item.logoUrl}
          ></CardComponent>
        )}
        showsVerticalScrollIndicator={false}
      />
    </View>
  );
};

export default ListScreen;
