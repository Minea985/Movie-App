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

export default function SignupScreen() {
    const router = useRouter();
    const { showAlert } = useAlert();
    const [fullName, setFullName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [showPassword, setShowPassword] = useState(false);
    const [agreeTerms, setAgreeTerms] = useState(false);

    function onSignUp() {
        if (!fullName || !email || !password) {
            showAlert("Missing fields", "Please fill all fields.");
            return;
        }
        if (!agreeTerms) {
            showAlert("Terms Required", "Please agree to the Terms and Services.");
            return;
        }
        router.push("/VerifyAccountScreen");
    }

    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.header}>
                <TouchableOpacity onPress={() => router.canGoBack() ? router.back() : router.replace("/LoginScreen")} style={styles.backButton}>
                    <Ionicons name="chevron-back" size={24} color="#111" />
                </TouchableOpacity>
                <Text style={styles.headerTitle}>Sign Up</Text>
                <View style={{ width: 40 }} />
            </View>

            <ScrollView contentContainerStyle={styles.content}>
                <View style={styles.welcomeSection}>
                    <Text style={styles.welcomeTitle}>Let’s get started</Text>
                    <Text style={styles.welcomeSubtitle}>
                        The latest movies and series are here
                    </Text>
                </View>

                <View style={styles.formSection}>
                    <View style={styles.inputGroup}>
                        <Text style={styles.label}>Full Name</Text>
                        <TextInput
                            style={styles.input}
                            placeholder="Minea"
                            placeholderTextColor="#9ca3af"
                            value={fullName}
                            onChangeText={setFullName}
                        />
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

                    <View style={styles.inputGroup}>
                        <Text style={styles.label}>Password</Text>
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

                    <View style={styles.termsRow}>
                        <TouchableOpacity
                            onPress={() => setAgreeTerms(!agreeTerms)}
                            style={[
                                styles.checkbox,
                                agreeTerms && styles.checkboxChecked
                            ]}
                        >
                            {agreeTerms && (
                                <Ionicons name="checkmark" size={16} color="#fff" />
                            )}
                        </TouchableOpacity>
                        <Text style={styles.termsText}>
                            I agree to the <Text style={styles.linkText}>Terms and Services</Text> and <Text style={styles.linkText}>Privacy Policy</Text>
                        </Text>
                    </View>

                    <TouchableOpacity style={styles.signupButton} onPress={onSignUp}>
                        <Text style={styles.signupButtonText}>Sign Up</Text>
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
    termsRow: {
        flexDirection: "row",
        alignItems: "flex-start", 
        marginBottom: 30,
        marginTop: 10,
    },
    checkbox: {
        width: 24,
        height: 24,
        borderRadius: 6,
        borderWidth: 2,
        borderColor: "#9ca3af",
        marginRight: 12,
        backgroundColor: 'transparent',
        alignItems: 'center',
        justifyContent: 'center',
    },
    checkboxChecked: {
        backgroundColor: '#ff476f',
        borderColor: '#ff476f',
    },
    termsText: {
        flex: 1,
        fontSize: 14,
        color: "#666",
        lineHeight: 20,
    },
    linkText: {
        color: "#ff476f",
        fontWeight: "600",
    },
    signupButton: {
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
    signupButtonText: {
        color: "#fff",
        fontSize: 18,
        fontWeight: "700",
    },
});
