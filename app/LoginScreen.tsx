import { useAlert } from "@/components/AlertContext";
import { Ionicons } from "@expo/vector-icons";
import { useRouter } from "expo-router";
import React, { useState } from "react";
import {
    Pressable,
    ScrollView,
    StyleSheet,
    Text,
    TextInput,
    TouchableOpacity,
    View,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function LoginScreen() {
    const router = useRouter();
    const { showAlert } = useAlert();
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [showPassword, setShowPassword] = useState(false);

    function onLogin() {
        if (!email || !password) {
            showAlert("Missing fields", "Please fill all fields.");
            return;
        }
        showAlert("Success", "Logged in (demo).");
        router.replace("/(tabs)");
    }

    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.header}>
                <TouchableOpacity onPress={() => router.canGoBack() ? router.back() : router.replace("/SignupScreen")} style={styles.backButton}>
                    <Ionicons name="chevron-back" size={24} color="#111" />
                </TouchableOpacity>
                <Text style={styles.headerTitle}>Login</Text>
                <View style={{ width: 40 }} />
            </View>

            <ScrollView contentContainerStyle={styles.content}>
                <View style={styles.welcomeSection}>
                    <Text style={styles.welcomeTitle}>Hi, There</Text>
                    <Text style={styles.welcomeSubtitle}>
                        Welcome back! Please enter your details.
                    </Text>
                </View>

                <View style={styles.formSection}>
                    <View style={styles.inputGroup}>
                        <Text style={styles.label}>Email Address</Text>
                        <TextInput
                            style={styles.input}
                            placeholder="Enter your email"
                            placeholderTextColor="#9ca3af"
                            value={email}
                            onChangeText={setEmail}
                            keyboardType="email-address"
                            autoCapitalize="none"
                        />
                    </View>

                    <View style={styles.inputGroup}>
                        <Text style={styles.label}>Password</Text>
                        <View style={styles.passwordContainer}>
                            <TextInput
                                style={styles.passwordInput}
                                placeholder="Enter your password"
                                placeholderTextColor="#9ca3af"
                                secureTextEntry={!showPassword}
                                value={password}
                                onChangeText={setPassword}
                            />
                            <Pressable
                                onPress={() => setShowPassword(!showPassword)}
                                style={styles.eyeIcon}
                            >
                                <Ionicons
                                    name={showPassword ? "eye-off-outline" : "eye-outline"}
                                    size={20}
                                    color="#6b7280"
                                />
                            </Pressable>
                        </View>
                    </View>

                    <TouchableOpacity onPress={() => router.push("/ResetPasswordScreen")}>
                        <Text style={styles.forgotPassword}>Forgot Password?</Text>
                    </TouchableOpacity>

                    <TouchableOpacity style={styles.loginButton} onPress={onLogin}>
                        <Text style={styles.loginButtonText}>Login</Text>
                    </TouchableOpacity>
                </View>
            </ScrollView>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#fff",
    },
    header: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        paddingHorizontal: 20,
        paddingVertical: 10,
        marginTop: 10,
    },
    backButton: {
        padding: 8,
        backgroundColor: "#f3f4f6", 
        borderRadius: 12,
    },
    headerTitle: {
        fontSize: 18,
        fontWeight: "600",
        color: "#111",
    },
    content: {
        padding: 24,
    },
    welcomeSection: {
        marginTop: 20,
        marginBottom: 30,
        alignItems: "center",
    },
    welcomeTitle: {
        fontSize: 28,
        fontWeight: "700",
        color: "#111",
        marginBottom: 8,
    },
    welcomeSubtitle: {
        fontSize: 16,
        color: "#666",
        textAlign: "center",
        paddingHorizontal: 20,
        lineHeight: 22,
    },
    formSection: {
        marginBottom: 20,
    },
    inputGroup: {
        marginBottom: 20,
    },
    label: {
        fontSize: 14,
        fontWeight: "600",
        color: "#111", // Dark label
        marginBottom: 8,
        marginLeft: 4,
    },
    input: {
        backgroundColor: "#f2f2f2",
        borderRadius: 12,
        paddingHorizontal: 16,
        paddingVertical: 16,
        fontSize: 16,
        color: "#111",
        borderWidth: 1,
        borderColor: "transparent", // Clean look
    },
    passwordContainer: {
        flexDirection: "row",
        alignItems: "center",
        backgroundColor: "#f2f2f2",
        borderRadius: 12,
        borderWidth: 1,
        borderColor: "transparent",
    },
    passwordInput: {
        flex: 1,
        paddingHorizontal: 16,
        paddingVertical: 16,
        fontSize: 16,
        color: "#111",
    },
    eyeIcon: {
        padding: 10,
        paddingRight: 16,
    },
    forgotPassword: {
        alignSelf: "flex-end",
        color: "#ff476f",
        fontWeight: "600",
        marginBottom: 24,
        marginTop: -10,
    },
    loginButton: {
        backgroundColor: "#ff476f", 
        borderRadius: 30, 
        paddingVertical: 16,
        alignItems: "center",
        shadowColor: "#ff476f",
        shadowOffset: {
            width: 0,
            height: 4,
        },
        shadowOpacity: 0.3,
        shadowRadius: 4.65,
        elevation: 8,
    },
    loginButtonText: {
        color: "#fff",
        fontSize: 18,
        fontWeight: "700",
    },
});
