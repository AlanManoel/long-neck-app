import { Text, View, Image } from "react-native";
import { styles } from "./styles"

export default function Index() {
  return (
    <View style={styles.container}>

      <View style={styles.lightTop}></View>
      <Image source={require("../assets/images/logo.png")} />

      <Text style={styles.h3}>LONG NECK</Text>

      <Text style={styles.body_small}>DOE  ·  ACUMULE  ·  GANHE</Text>
    </View>
  );
}
