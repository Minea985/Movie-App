import { Colors } from "@/constants/Colors";
import { Ionicons } from "@expo/vector-icons";
import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { HeaderTitle } from "@/components/HeaderTitle";

export default function WatchlistScreen() {
  return (
    <SafeAreaView style={styles.container}>
      <HeaderTitle title="Watchlist" />
      
      <View style={styles.content}>
        <View style={styles.placeholder}>
          <Ionicons name="bookmark-outline" size={80} color={Colors.gray} />
          <Text style={styles.placeholderText}>Your watchlist is empty</Text>
          <Text style={styles.placeholderSub}>Movies you save will appear here</Text>
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.background,
  },
  content: {
    flex: 1,
    paddingHorizontal: 20,
  },
  placeholder: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    paddingBottom: 100,
  },
  placeholderText: {
    color: Colors.text,
    fontSize: 18,
    marginTop: 20,
    fontWeight: "700",
  },
  placeholderSub: {
    color: Colors.textSecondary,
    fontSize: 14,
    marginTop: 8,
    textAlign: "center",
  },
});
