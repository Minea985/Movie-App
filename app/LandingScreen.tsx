import { useAlert } from "@/components/AlertContext";
import { Ionicons } from "@expo/vector-icons";
import { useRouter } from "expo-router";
import React from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function LandingScreen() {
  const router = useRouter();
  const { showAlert } = useAlert();

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.contentContainer}>
        {/* Icon / Brand */}
        <View style={styles.iconContainer}>
          <Ionicons name="tv-outline" size={60} color="#ff476f" />
          <View style={styles.iconBadge}>
            <Text style={styles.iconBadgeText}>CN</Text>
          </View>
        </View>

        <Text style={styles.title}>MY FIRST APP</Text>

        <Text style={styles.subtitle}>
          Enter your registered Phone Number to Sign Up
        </Text>

        {/* Main Sign Up Button */}
        <TouchableOpacity
          style={styles.signupButton}
          onPress={() => router.push("/SignupScreen")}
        >
          <Text style={styles.signupButtonText}>Sign Up</Text>
        </TouchableOpacity>

        {/* Login Link */}
        <Text style={styles.loginText}>
          I already have an account?{" "}
          <Text style={styles.loginLink} onPress={() => router.push("/LoginScreen")}>
            Login
          </Text>
        </Text>

        {/* Divider */}
        <View style={styles.dividerContainer}>
          <View style={styles.dividerLine} />
          <Text style={styles.dividerText}>Or Sign up with</Text>
          <View style={styles.dividerLine} />
        </View>

        {/* Social Icons */}
        <View style={styles.socialRow}>
          <TouchableOpacity
            style={styles.socialBtn}
            onPress={() => showAlert("Google", "Continue with Google (demo)")}
          >
            <Ionicons name="logo-google" size={24} color="#111" />
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.socialBtn}
            onPress={() => showAlert("Apple", "Continue with Apple (demo)")}
          >
            <Ionicons name="logo-apple" size={24} color="#111" />
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.socialBtn}
            onPress={() =>
              showAlert("Facebook", "Continue with Facebook (demo)")
            }
          >
            <Ionicons name="logo-facebook" size={24} color="#111" />
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    justifyContent: 'center',
  },
  contentContainer: {
    paddingHorizontal: 24,
    alignItems: 'center',
    width: '100%',
  },
  iconContainer: {
    marginBottom: 20,
    alignItems: 'center',
    justifyContent: 'center',
    width: 100,
    height: 80,
  },
  iconBadge: {
    position: 'absolute',
    backgroundColor: 'rgba(255, 71, 111, 0.1)',
    paddingHorizontal: 6,
    paddingVertical: 2,
    borderRadius: 4,
    bottom: 20,
  },
  iconBadgeText: {
    fontSize: 10,
    fontWeight: 'bold',
    color: '#ff476f',
  },
  title: {
    fontSize: 28,
    fontWeight: "800",
    color: "#111", 
    marginBottom: 10,
    letterSpacing: 1,
    textAlign: 'center',
  },
  subtitle: {
    fontSize: 16,
    color: "#666",
    textAlign: "center",
    marginBottom: 40,
    lineHeight: 24,
    maxWidth: '80%',
  },
  signupButton: {
    backgroundColor: "#ff476f", 
    borderRadius: 30, 
    paddingVertical: 18,
    width: '100%',
    alignItems: "center",
    marginBottom: 20,
    shadowColor: "#ff476f",
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.3,
    shadowRadius: 4.65,
    elevation: 8,
  },
  signupButtonText: {
    color: "#fff",
    fontSize: 18,
    fontWeight: "700",
  },
  loginText: {
    fontSize: 15,
    color: "#666",
    marginBottom: 40,
  },
  loginLink: {
    color: "#ff476f", 
    fontWeight: "700",
  },
  dividerContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 30,
    width: '100%',
  },
  dividerLine: {
    flex: 1,
    height: 1,
    backgroundColor: '#e5e7eb',
  },
  dividerText: {
    marginHorizontal: 16,
    color: '#8b8b8b',
    fontSize: 14,
  },
  socialRow: {
    flexDirection: "row",
    justifyContent: "center",
    gap: 20,
  },
  socialBtn: {
    width: 60,
    height: 60,
    borderRadius: 30,
    borderWidth: 1,
    borderColor: "#e5e7eb",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#fff",
  },
});
