import React, { useEffect, useState } from "react";
import { FlatList, StyleSheet, Text, ScrollView } from "react-native";
import { View, Image, TouchableHighlight } from "react-native";
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
          <div>
            <Text>{offer.empresa.nombre}</Text>
            {/*<Image source={offer.empresa.imagen?.url} style={styles.logo} />*/}
          </div>
        </TouchableHighlight>

        <Text>{offer.nombre}</Text>
        <Text>{offer.descripcion}</Text>
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
});

export default DetailScreen;
