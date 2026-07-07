import { Pressable, Text } from "react-native";

type ButtonProps = {
  title: string;
  onPress: () => void;
  variant?: "primary" | "secondary";
};

export default function Button({
  title,
  onPress,
  variant = "primary",
}: ButtonProps) {
  return (
    <Pressable
      onPress={onPress}
      className={`w-80 h-16 rounded-lg items-center justify-center ${
        variant === "primary"
          ? "bg-primary"
          : "border-2 border-primary bg-transparent"
      }`}
    >
      <Text
        className={`font-bold text-base ${
          variant === "primary"
            ? "text-bg-background"
            : "text-primary"
        }`}
      >
        {title}
      </Text>
    </Pressable>
  );
}