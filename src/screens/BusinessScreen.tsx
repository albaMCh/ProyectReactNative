import React, { useEffect, useState } from "react";
import { FlatList, StyleSheet, Text, ScrollView } from "react-native";
import { View, Image, Linking } from "react-native";
import { Badge } from "react-native-paper";
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

        <Text style={styles.businessNombre}>{business.nombre}</Text>
        <Text style={styles.businessDescripcion}>{business.descripcion}</Text>
        <Text style={styles.businessUbicacion}>
          Ubicación: {business.ubicacion}
        </Text>

        <Text
          style={styles.businessUrl}
          onPress={() => Linking.openURL(business.url)}
        >
          {business.url}
        </Text>
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
  businessNombre: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 15,
    padding: 5,
  },
  businessDescripcion: {
    fontSize: 12,
    marginBottom: 15,
    backgroundColor: "#fff",
    borderRadius: 12,
    padding: 10,
  },
  businessUbicacion: {
    fontSize: 12,
    marginBottom: 15,
    backgroundColor: "#61D5BA",
    borderRadius: 12,
    padding: 10,
    width: 180,
  },
  businessUrl: {
    fontSize: 12,
    marginBottom: 15,
    backgroundColor: "#61D5BA",
    borderRadius: 12,
    padding: 10,
    width: 180,
  },
});

export default BusinessScreen;
