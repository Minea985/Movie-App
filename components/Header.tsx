import { Ionicons } from "@expo/vector-icons";
import { useNavigation, useRouter } from "expo-router";
import React from "react";
import {
  Pressable,
  StyleSheet,
  Text,
  View
} from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";

type Props = {
  title: string;
  subtitle?: string;
  onLeft?: () => void;
  onRight?: () => void;
};

export default function Header({ title, subtitle, onLeft, onRight }: Props) {
  const insets = useSafeAreaInsets();
  const router = useRouter();
  const navigation = useNavigation();

  return (
    <View style={[styles.container, { paddingTop: insets.top }]}>
      <View style={styles.header}>
        <Pressable
          onPress={onLeft ?? (() => {
            if (navigation.canGoBack()) {
              router.back();
            } else {
              router.replace("/");
            }
          })}
          style={({ pressed }) => [
            styles.headerSide,
            pressed && styles.pressed,
          ]}
        >
          <Ionicons name="chevron-back" size={24} color="#111" />
        </Pressable>

        <View style={styles.headerCenter}>
          <Text style={styles.headerTitle}>{title}</Text>
          {subtitle ? (
            <Text style={styles.headerSubtitle}>{subtitle}</Text>
          ) : null}
        </View>

        <View style={styles.headerSide} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#fff",
    borderBottomWidth: 1,
    borderBottomColor: "#f0f0f0",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.05,
    shadowRadius: 3.84,
    elevation: 3,
    zIndex: 10,
  },
  header: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: 12,
    paddingVertical: 12,
  },
  headerSide: {
    width: 40,
    height: 40,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 20,
  },
  pressed: {
    backgroundColor: "#f5f5f5",
  },
  headerCenter: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  headerTitle: {
    fontSize: 18,
    fontWeight: "700",
    color: "#111",
    letterSpacing: 0.5,
  },
  headerSubtitle: {
    fontSize: 12,
    color: "#888",
    marginTop: 2,
  },
});
