import React, { useEffect, useState } from "react";
import { FlatList, StyleSheet, Text, ScrollView } from "react-native";
import { View, Image, TouchableHighlight } from "react-native";
import { shadow } from "react-native-paper";
import Background from "../components/Background.component";
import Button from "../components/Button.component";
import { IOferta } from "../interface/IOferta.interface";
import OfertaDataService from "../services/OfertaDataService";

const DetailScreen = ({ navigation, route }) => {
  const [offer, setOffer] = useState<IOferta | undefined>(null);

  useEffect(() => {
    OfertaDataService.get(route.params.id).then((data) => {
      setOffer(data);
    });
  }, []);

  if (offer) {
    return (
      <View>
        {/*<Image source={route.params.imageUrl} style={styles.image}></Image>*/}
        <TouchableHighlight
          onPress={() =>
            navigation.navigate("Empresa", {
              id: offer.empresaId,
            })
          }
        >
          <Text style={styles.businessName}>{offer.empresa.nombre}</Text>
          {/*<Image source={offer.empresa.imagen?.url} style={styles.logo} />*/}
        </TouchableHighlight>

        <Text style={styles.offerName}>{offer.nombre}</Text>
        <Text style={styles.offerDescripcion}>{offer.descripcion}</Text>
        <Text style={styles.offerUbicacion}>Ubicacion: {offer.ubicacion}</Text>
        <Text style={styles.offerVacantes}>
          Número de vacantes: {offer.vacantes}
        </Text>
        <Text style={styles.offerSalarioMax}>
          Salario: {offer.salarioMax} EUR - {offer.salarioMin} EUR
        </Text>

        <Button
          onPress={() => navigation.navigate("Perfil")}
          mode={undefined}
          style={undefined}
        >
          Registrarse
        </Button>
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

  businessName: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 15,
    padding: 5,
    marginLeft: 15,
  },
  offerName: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#687773",
    marginBottom: 15,
    padding: 5,
    backgroundColor: "#61D5BA",
    borderRadius: 12,
    width: 180,
    marginLeft: 15,
  },
  offerDescripcion: {
    fontSize: 12,
    marginBottom: 15,
    backgroundColor: "#fff",
    borderRadius: 12,
    padding: 10,
    marginLeft: 15,
  },
  offerUbicacion: {
    fontSize: 12,
    marginBottom: 15,
    backgroundColor: "#61D5BA",
    borderRadius: 12,
    padding: 10,
    width: 180,
    marginLeft: 15,
  },
  offerVacantes: {
    fontSize: 12,
    marginBottom: 15,
    backgroundColor: "#61D5BA",
    borderRadius: 12,
    padding: 10,
    width: 160,
    marginLeft: 15,
  },
  offerSalarioMax: {
    fontSize: 12,
    marginBottom: 15,
    backgroundColor: "#61D5BA",
    borderRadius: 12,
    padding: 10,
    width: 210,
    marginLeft: 15,
  },
});

export default DetailScreen;
