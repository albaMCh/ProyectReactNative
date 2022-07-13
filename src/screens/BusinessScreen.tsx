import React, { useEffect, useState } from "react";
import { FlatList, StyleSheet, Text, ScrollView } from "react-native";
import { View, Image } from "react-native";
import Button from "../components/Button.component";
import { IEmpresa } from "../interface/IEmpresa.interface";
import EmpresaDataService from "../services/EmpresaDataService";

const BusinessScreen = ({ navigation, route }) => {
  const [business, setBusiness] = useState<IEmpresa | undefined>(null);

  useEffect(() => {
    EmpresaDataService.get(route.params.id).then((data) => {
      setBusiness(data);
    });
  }, []);

  if (business) {
    return (
      <View>
        {/*<Image source={business.imagen?.url} style={styles.logo}></Image>*/}
        <Text>{business.nombre}</Text>
        <Text>{business.descripcion}</Text>
        <Text>{business.ubicacion}</Text>
      </View>
    );
  }

  return (
    <View>
      <Text>Cargando..</Text>
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

export default BusinessScreen;
