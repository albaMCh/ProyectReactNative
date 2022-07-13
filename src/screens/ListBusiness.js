import React from "react";
import { FlatList, StyleSheet, Text, ScrollView } from "react-native";
import { View } from "react-native";
import CardComponent from "../components/Card.component";
import EmpresaDataService from "../services/EmpresaDataService";

const styles = StyleSheet.create({
  contentContainer: {
    paddingTop: 10,
    paddingBottom: 120,
  },
});
const ListBusiness = ({ navigation, props }) => {
  const [listBusiness, setListBusiness] = useState({});

  useEffect(() => {
    EmpresaDataService.getAll().then((data) => {
      setListBusiness(data);
    });
  }, []);
  return (
    <View>
      <FlatList
        contentContainerStyle={styles.contentContainer}
        data={[listBusiness]}
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

export default ListBusiness;
