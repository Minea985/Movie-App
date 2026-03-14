import { useAlert } from "@/components/AlertContext";
import { Ionicons } from "@expo/vector-icons";
import { useRouter } from "expo-router";
import React, { useRef, useState } from "react";
import {
    StyleSheet,
    Text,
    TextInput,
    TouchableOpacity,
    View,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function VerifyAccountScreen() {
    const router = useRouter();
    const { showAlert } = useAlert();
    const [code, setCode] = useState(["", "", "", ""]);

    const inputRefs = useRef<Array<TextInput | null>>([]);

    const handleCodeChange = (text: string, index: number) => {
        const newCode = [...code];
        newCode[index] = text;
        setCode(newCode);

        if (text && index < 3) {
            inputRefs.current[index + 1]?.focus();
        }
        if (!text && index > 0) {
        }
    };

    const handleKeyPress = (e: any, index: number) => {
        if (e.nativeEvent.key === "Backspace" && !code[index] && index > 0) {
            inputRefs.current[index - 1]?.focus();
        }
    };

    function onContinue() {
        const fullCode = code.join("");
        if (fullCode.length < 4) {
            showAlert("Invalid Code", "Please enter the 4-digit code.");
            return;
        }
        showAlert("Success", "Account verified (demo).");
        router.push("/LandingScreen");
    }

    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.header}>
                <TouchableOpacity
                    onPress={() => router.back()}
                    style={styles.backButton}
                >
                    <Ionicons name="chevron-back" size={24} color="#111" />
                </TouchableOpacity>
                <Text style={styles.headerTitle}>Verifying Your Account</Text>
                <View style={{ width: 40 }} />
            </View>

            <View style={styles.content}>
                <View style={styles.titleSection}>
                    <Text style={styles.title}>Verifying Your Account</Text>
                    <Text style={styles.subtitle}>
                        We have just sent you 4 digit code via your email{" "}
                        <Text style={styles.emailHighlight}>minea@gmail.com</Text>
                    </Text>
                </View>

                <View style={styles.codeContainer}>
                    {code.map((digit, index) => (
                        <TextInput
                            key={index}
                            ref={(el) => (inputRefs.current[index] = el)}
                            style={[styles.codeInput, digit ? styles.codeInputFilled : null]}
                            value={digit}
                            onChangeText={(text) => handleCodeChange(text, index)}
                            onKeyPress={(e) => handleKeyPress(e, index)}
                            keyboardType="number-pad"
                            maxLength={1}
                            selectTextOnFocus
                        />
                    ))}
                </View>

                <TouchableOpacity style={styles.continueButton} onPress={onContinue}>
                    <Text style={styles.continueButtonText}>Continue</Text>
                </TouchableOpacity>

                <View style={styles.resendContainer}>
                    <Text style={styles.resendText}>Didn't receive code? </Text>
                    <TouchableOpacity
                        onPress={() => showAlert("Resent", "Code resent (demo)")}
                    >
                        <Text style={styles.resendLink}>Resend</Text>
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
        display: "none",

    },
    content: {
        padding: 24,
        alignItems: "center",
    },
    titleSection: {
        marginTop: 20,
        marginBottom: 40,
        alignItems: "center",
    },
    title: {
        fontSize: 24,
        fontWeight: "700",
        color: "#111",
        marginBottom: 12,
        textAlign: "center",
    },
    subtitle: {
        fontSize: 15,
        color: "#666",
        textAlign: "center",
        lineHeight: 22,
        paddingHorizontal: 10,
    },
    emailHighlight: {
        fontWeight: "600",
        color: "#111",
    },
    codeContainer: {
        flexDirection: "row",
        justifyContent: "center",
        gap: 16,
        marginBottom: 40,
        width: "100%",
    },
    codeInput: {
        width: 60,
        height: 60,
        borderRadius: 12,
        borderWidth: 1.5,
        borderColor: "#e5e7eb",
        textAlign: "center",
        fontSize: 24,
        fontWeight: "700",
        color: "#111",
        backgroundColor: "#f9fafb",
    },
    codeInputFilled: {
        borderColor: "#ff476f",
        backgroundColor: "#fff",
    },
    continueButton: {
        backgroundColor: "#ff476f",
        borderRadius: 30,
        paddingVertical: 16,
        width: "100%",
        alignItems: "center",
        marginBottom: 30,
        shadowColor: "#ff476f",
        shadowOffset: {
            width: 0,
            height: 4,
        },
        shadowOpacity: 0.3,
        shadowRadius: 4.65,
        elevation: 8,
    },
    continueButtonText: {
        color: "#fff",
        fontSize: 18,
        fontWeight: "700",
    },
    resendContainer: {
        flexDirection: "row",
        alignItems: "center",
    },
    resendText: {
        color: "#666",
        fontSize: 15,
    },
    resendLink: {
        color: "#ff476f",
        fontWeight: "700",
        fontSize: 15,
    },
});
