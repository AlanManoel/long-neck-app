import { Text, View, Image } from "react-native"
import { styles } from "./styles"
import Button from "../../components/button/button";



export default function Login() {
    return (
        <View style={styles.container}>
            <Image style={styles.lightTop} source={require("../../assets/images/eclipse.png")} />
            <Image style={styles.lightBottom} source={require("../../assets/images/eclipse.png")} />
            <Image source={require("../../assets/images/logo.png")} />
            <Text style={styles.h3}>LONG NECK</Text>
            <Text style={styles.body_small}>DOE  ·  ACUMULE  ·  GANHE</Text>

            <View style={styles.continerButtons}>
                <Button
                    title="Entrar"
                    variant="primary"
                    onPress={() => console.log("Clicou")}
                />
                <Button
                    title="Criar Conta"
                    variant="secondary"
                    onPress={() => console.log("Clicou")}
                />
            </View>

        </View>
    )
}