import { useAlert } from "@/components/AlertContext";
import { Ionicons } from "@expo/vector-icons";
import { useRouter } from "expo-router";
import React, { useState } from "react";
import {
    Pressable,
    StyleSheet,
    Text,
    TextInput,
    TouchableOpacity,
    View,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function NewPasswordScreen() {
    const router = useRouter();
    const { showAlert } = useAlert();
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [showPassword, setShowPassword] = useState(false);
    const [showConfirm, setShowConfirm] = useState(false);

    function onReset() {
        if (!password || !confirmPassword) {
            showAlert("Missing fields", "Please fill all fields.");
            return;
        }
        if (password !== confirmPassword) {
            showAlert("Passwords differ", "Please make sure passwords match.");
            return;
        }
        showAlert("Success", "Password reset successfully.");
        router.push("/LoginScreen");
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
                    <Text style={styles.title}>Create New Password</Text>
                    <Text style={styles.subtitle}>
                        Enter your new password
                    </Text>
                </View>

                <View style={styles.inputGroup}>
                    <Text style={styles.label}>New Password</Text>
                    <View style={styles.passwordContainer}>
                        <TextInput
                            style={styles.passwordInput}
                            placeholder="................"
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

                <View style={styles.inputGroup}>
                    <Text style={styles.label}>Confirm Password</Text>
                    <View style={styles.passwordContainer}>
                        <TextInput
                            style={styles.passwordInput}
                            placeholder="................"
                            placeholderTextColor="#9ca3af"
                            secureTextEntry={!showConfirm}
                            value={confirmPassword}
                            onChangeText={setConfirmPassword}
                        />
                        <Pressable
                            onPress={() => setShowConfirm(!showConfirm)}
                            style={styles.eyeIcon}
                        >
                            <Ionicons
                                name={showConfirm ? "eye-off-outline" : "eye-outline"}
                                size={20}
                                color="#6b7280"
                            />
                        </Pressable>
                    </View>
                </View>

                <TouchableOpacity style={styles.resetButton} onPress={onReset}>
                    <Text style={styles.resetButtonText}>Reset</Text>
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
        alignItems: "center",
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
        marginBottom: 20,
    },
    label: {
        fontSize: 14,
        fontWeight: "600",
        color: "#111",
        marginBottom: 8,
        marginLeft: 4,
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
    resetButton: {
        backgroundColor: "#ff476f",
        borderRadius: 30,
        paddingVertical: 16,
        alignItems: "center",
        marginTop: 20,
        shadowColor: "#ff476f",
        shadowOffset: {
            width: 0,
            height: 4,
        },
        shadowOpacity: 0.3,
        shadowRadius: 4.65,
        elevation: 8,
    },
    resetButtonText: {
        color: "#fff",
        fontSize: 18,
        fontWeight: "700",
    },
});
