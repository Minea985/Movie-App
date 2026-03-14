import { Ionicons } from "@expo/vector-icons";
import React, { createContext, ReactNode, useContext, useState } from "react";
import {
    Dimensions,
    Modal,
    StyleSheet,
    Text,
    TouchableOpacity,
    View,
} from "react-native";

type AlertType = {
    title: string;
    message: string;
    buttons?: { text: string; onPress?: () => void; style?: "cancel" | "default" | "destructive" }[];
};

type AlertContextType = {
    showAlert: (title: string, message: string, buttons?: AlertType['buttons']) => void;
    hideAlert: () => void;
};

const AlertContext = createContext<AlertContextType | undefined>(undefined);

export const useAlert = () => {
    const context = useContext(AlertContext);
    if (!context) {
        throw new Error("useAlert must be used within an AlertProvider");
    }
    return context;
};

export const AlertProvider = ({ children }: { children: ReactNode }) => {
    const [visible, setVisible] = useState(false);
    const [alertConfig, setAlertConfig] = useState<AlertType>({
        title: "",
        message: "",
    });

    const showAlert = (title: string, message: string, buttons?: AlertType['buttons']) => {
        setAlertConfig({ title, message, buttons });
        setVisible(true);
    };

    const hideAlert = () => {
        setVisible(false);
    };

    return (
        <AlertContext.Provider value={{ showAlert, hideAlert }}>
            {children}
            <Modal
                transparent
                visible={visible}
                animationType="fade"
                onRequestClose={hideAlert}
            >
                <View style={styles.overlay}>
                    <View style={styles.alertBox}>
                        <View style={styles.iconContainer}>
                            <Ionicons name="notifications-outline" size={32} color="#ff476f" />
                        </View>
                        <Text style={styles.title}>{alertConfig.title}</Text>
                        <Text style={styles.message}>{alertConfig.message}</Text>

                        <View style={styles.buttonContainer}>
                            {alertConfig.buttons ? (
                                alertConfig.buttons.map((btn, index) => (
                                    <TouchableOpacity
                                        key={index}
                                        style={[styles.button, btn.style === "cancel" && styles.cancelButton]}
                                        onPress={() => {
                                            hideAlert();
                                            btn.onPress?.();
                                        }}
                                    >
                                        <Text style={[styles.buttonText, btn.style === "cancel" && styles.cancelButtonText]}>{btn.text}</Text>
                                    </TouchableOpacity>
                                ))
                            ) : (
                                <TouchableOpacity style={styles.button} onPress={hideAlert}>
                                    <Text style={styles.buttonText}>OK</Text>
                                </TouchableOpacity>
                            )}
                        </View>
                    </View>
                </View>
            </Modal>
        </AlertContext.Provider>
    );
};

const { width } = Dimensions.get("window");

const styles = StyleSheet.create({
    overlay: {
        flex: 1,
        backgroundColor: "rgba(0,0,0,0.5)",
        justifyContent: "center",
        alignItems: "center",
    },
    alertBox: {
        width: width * 0.85,
        backgroundColor: "#fff",
        borderRadius: 20,
        padding: 24,
        alignItems: "center",
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 4,
        },
        shadowOpacity: 0.1,
        shadowRadius: 10,
        elevation: 8,
    },
    iconContainer: {
        width: 60,
        height: 60,
        borderRadius: 30,
        backgroundColor: "#fff0f3",
        justifyContent: "center",
        alignItems: "center",
        marginBottom: 16,
    },
    title: {
        fontSize: 20,
        fontWeight: "bold",
        color: "#111",
        marginBottom: 8,
        textAlign: "center",
    },
    message: {
        fontSize: 16,
        color: "#666",
        textAlign: "center",
        marginBottom: 24,
        lineHeight: 22,
    },
    buttonContainer: {
        flexDirection: "row",
        gap: 12,
        width: "100%",
        justifyContent: "center",
    },
    button: {
        flex: 1,
        backgroundColor: "#ff476f",
        paddingVertical: 12,
        borderRadius: 12,
        alignItems: "center",
    },
    buttonText: {
        color: "#fff",
        fontSize: 16,
        fontWeight: "600",
    },
    cancelButton: {
        backgroundColor: "#f2f2f2",
    },
    cancelButtonText: {
        color: "#444",
    },
});
