import { useAlert } from "@/components/AlertContext";
import { Ionicons } from "@expo/vector-icons";
import { useRouter } from "expo-router";
import React, { useState } from "react";
import {
    StyleSheet,
    Text,
    TextInput,
    TouchableOpacity,
    View,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function ResetPasswordScreen() {
    const router = useRouter();
    const { showAlert } = useAlert();
    const [email, setEmail] = useState("");

    function onNext() {
        if (!email) {
            showAlert("Missing Email", "Please enter your email address.");
            return;
        }
        showAlert("Success", "Password reset link sent (demo).");
        router.push("/NewPasswordScreen");
    }

    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.header}>
                <TouchableOpacity onPress={() => router.back()} style={styles.backButton}>
                    <Ionicons name="chevron-back" size={24} color="#111" />
                </TouchableOpacity>
                <View style={{ width: 40 }} />
            </View>

            <View style={styles.content}>
                <View style={styles.titleSection}>
                    <Text style={styles.title}>Reset Password</Text>
                    <Text style={styles.subtitle}>
                        Recover your account password
                    </Text>
                </View>

                <View style={styles.inputGroup}>
                    <Text style={styles.label}>Email Address</Text>
                    <TextInput
                        style={styles.input}
                        placeholder="minea@gmail.com"
                        placeholderTextColor="#9ca3af"
                        value={email}
                        onChangeText={setEmail}
                        keyboardType="email-address"
                        autoCapitalize="none"
                    />
                </View>

                <TouchableOpacity style={styles.nextButton} onPress={onNext}>
                    <Text style={styles.nextButtonText}>Next</Text>
                </TouchableOpacity>

            </View>
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
    content: {
        padding: 24,
    },
    titleSection: {
        marginTop: 20,
        marginBottom: 40,
    },
    title: {
        fontSize: 28,
        fontWeight: "700",
        color: "#111",
        marginBottom: 8,
    },
    subtitle: {
        fontSize: 16,
        color: "#666",
    },
    inputGroup: {
        marginBottom: 30,
    },
    label: {
        fontSize: 14,
        fontWeight: "600",
        color: "#111",
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
        borderColor: "transparent",
    },
    nextButton: {
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
    nextButtonText: {
        color: "#fff",
        fontSize: 18,
        fontWeight: "700",
    },
});
