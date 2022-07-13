import React, { useState, useEffect } from "react";
import { FlatList, StyleSheet, Text, ScrollView } from "react-native";
import { View } from "react-native";
import CardComponent from "../components/Card.component";
import { IOferta } from "../interface/IOferta.interface";
import OfertaDataService from "../services/OfertaDataService";

const styles = StyleSheet.create({
  contentContainer: {
    paddingTop: 10,
    paddingBottom: 120,
  },
});
const ListScreen = ({ navigation, props }) => {
  const [listOffer, setListOffer] = useState([]);

  useEffect(() => {
    OfertaDataService.getAll().then((data) => {
      setListOffer(data);
    });
  }, []);

  if (listOffer.length > 0) {
    return (
      <View>
        <FlatList
          contentContainerStyle={styles.contentContainer}
          data={listOffer}
          renderItem={({ item }: { item: IOferta }) => (
            <CardComponent
              id={item.id}
              companyInfo={item.empresa}
              title={item.nombre}
              content={item.descripcion}
              navigation={navigation}
              logoUrl={item.empresa.imagen}
            ></CardComponent>
          )}
          showsVerticalScrollIndicator={false}
        />
      </View>
    );
  } else {
    return (
      <View>
        <Text>Cargando...</Text>
      </View>
    );
  }
};

export default ListScreen;
