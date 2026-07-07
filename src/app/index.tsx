import { Text, View, Image } from "react-native";
import { useEffect } from "react";
import { useRouter } from "expo-router";

export default function Index() {
  const router = useRouter();

  useEffect(() => {
    const timer = setTimeout(() => {
      router.replace("/login/login");
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <View className="flex-1 items-center justify-center bg-background">
      <Image
        className="absolute w-[600px] h-[600px] -top-[300px] -right-[300px]"
        source={require("../assets/images/eclipse.png")}
      />

      <Image
        className="absolute w-[600px] h-[600px] -bottom-[300px] -left-[300px]"
        source={require("../assets/images/eclipse.png")}
      />

      <Image source={require("../assets/images/logo.png")} />

      <Text
        className="text-primary font-bold mt-4"
        style={{ fontSize: 40 }}
      >
        LONG NECK
      </Text>

      <Text
        className="text-primary-2 mt-1 text-sm"
      >
        DOE · ACUMULE · GANHE
      </Text>
    </View>
  );
}