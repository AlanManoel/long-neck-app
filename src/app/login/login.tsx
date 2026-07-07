import { Image, Text, View } from "react-native";
import Button from "../../components/button/button";

export default function Login() {
    return (
        <View className="flex-1 items-center justify-center bg-background">
            <Image
                className="absolute w-[600px] h-[600px] -top-[300px] -right-[300px]"
                source={require("../../assets/images/eclipse.png")}
            />

            <Image
                className="absolute w-[600px] h-[600px] -bottom-[300px] -left-[300px]"
                source={require("../../assets/images/eclipse.png")}
            />

            <Image source={require("../../assets/images/logo.png")} />

            <Text className="text-primary text-3xl font-bold mt-4" style={{ fontSize: 40 }}>
                LONG NECK
            </Text>

            <Text className="text-primary-2 text-sm mt-1">
                DOE · ACUMULE · GANHE
            </Text>

            <View className="mt-10 gap-5">
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
    );
}