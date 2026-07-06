import { Text, View, Image } from "react-native";
import { styles } from "./styles"
import { useEffect } from "react";
import { useRouter } from "expo-router";

export default function Index() {
  const router = useRouter();

  useEffect(() => {
    const timer = setTimeout(() => {
      router.replace("/login/login");
    }, 5000)

    return () => clearTimeout(timer)
  }, []);


  return (
    <View style={styles.container}>

      <Image style={styles.lightTop} source={require("../assets/images/eclipse.png")} />
      <Image style={styles.lightBottom} source={require("../assets/images/eclipse.png")} />
      <Image source={require("../assets/images/logo.png")} />
      <Text style={styles.h3}>LONG NECK</Text>
      <Text style={styles.body_small}>DOE  ·  ACUMULE  ·  GANHE</Text>

    </View>
  );
}

// const router = useRouter();

//     useEffect(() => {
//       const timer = setTimeout(() => {
//         router.replace("/login");
//       }, 3000);

//       return () => clearTimeout(timer);
//     }, []);