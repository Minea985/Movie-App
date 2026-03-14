import { Colors } from "@/constants/Colors";
import { Ionicons } from "@expo/vector-icons";
import { Image } from "expo-image";
import { useRouter } from "expo-router";
import React, { useState } from "react";
import {
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { HeaderTitle } from "@/components/HeaderTitle";
import { useAlert } from "@/components/AlertContext";

export default function EditProfileScreen() {
  const router = useRouter();
  const { showAlert } = useAlert();
  const [name, setName] = useState("Minea");
  const [email, setEmail] = useState("minea@gmail.com");
  const [phone, setPhone] = useState("+855 15909080");

  const InputField = ({ label, value, onChangeText, secureTextEntry, error }: any) => (
    <View style={styles.inputGroup}>
      <Text style={styles.label}>{label}</Text>
      <TextInput
        style={[styles.input, error && styles.inputError]}
        value={value}
        onChangeText={onChangeText}
        secureTextEntry={secureTextEntry}
        placeholderTextColor="#999"
      />
      {error && <Text style={styles.errorText}>* {error}</Text>}
    </View>
  );

  const handleSave = () => {
    showAlert("Success", "Your profile has been updated successfully.", [
      { text: "OK", onPress: () => router.back() }
    ]);
  };

  return (
    <SafeAreaView style={styles.container}>
      <HeaderTitle title="Edit Profile" showBack={true} />

      <ScrollView contentContainerStyle={styles.scrollContent} showsVerticalScrollIndicator={false}>
        <View style={styles.avatarSection}>
          <View style={styles.avatarContainer}>
            <Image
              source="https://api.dicebear.com/9.x/croodles/svg?seed=Christopher"
              alt="avatar"
              style={styles.avatar}
            />
            <TouchableOpacity style={styles.editAvatarBtn}>
              <Ionicons name="create" size={16} color="#fff" />
            </TouchableOpacity>
          </View>
          <Text style={styles.avatarName}>Minea</Text>
          <Text style={styles.avatarEmail}>minea@gmail.com</Text>
        </View>

        <View style={styles.form}>
          <InputField
            label="Full Name"
            value={name}
            onChangeText={setName}
          />
          <InputField
            label="Email"
            value={email}
            onChangeText={setEmail}
          />
          <InputField
            label="Password"
            value="........................"
            secureTextEntry
          />
          <InputField
            label="Phone Number"
            value={phone}
            onChangeText={setPhone}
          />
        </View>

        <TouchableOpacity
          style={styles.saveBtn}
          onPress={handleSave}
        >
          <Text style={styles.saveBtnText}>Save Changes</Text>
        </TouchableOpacity>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.background,
  },
  scrollContent: {
    paddingHorizontal: 24,
    paddingBottom: 100,
  },
  avatarSection: {
    alignItems: "center",
    marginTop: 10,
    marginBottom: 30,
  },
  avatarContainer: {
    position: "relative",
    marginBottom: 15,
  },
  avatar: {
    width: 100,
    height: 100,
    borderRadius: 50,
  },
  editAvatarBtn: {
    position: "absolute",
    bottom: 0,
    right: 0,
    width: 30,
    height: 30,
    borderRadius: 15,
    backgroundColor: Colors.primary,
    alignItems: "center",
    justifyContent: "center",
    borderWidth: 2,
    borderColor: "#fff",
  },
  avatarName: {
    fontSize: 18,
    fontWeight: "700",
    color: Colors.text,
  },
  avatarEmail: {
    fontSize: 14,
    color: Colors.textSecondary,
    marginTop: 4,
  },
  form: {
    marginBottom: 40,
  },
  inputGroup: {
    marginBottom: 20,
  },
  label: {
    fontSize: 14,
    color: Colors.text,
    fontWeight: "600",
    marginBottom: 8,
    marginLeft: 4,
  },
  input: {
    backgroundColor: Colors.lightGray,
    borderRadius: 12,
    height: 56,
    paddingHorizontal: 16,
    fontSize: 16,
    color: Colors.text,
  },
  inputError: {
    borderColor: Colors.primary,
  },
  errorText: {
    color: Colors.primary,
    fontSize: 12,
    marginTop: 6,
    marginLeft: 15,
  },
  saveBtn: {
    backgroundColor: Colors.primary,
    borderRadius: 30,
    paddingVertical: 16,
    alignItems: "center",
    shadowColor: Colors.primary,
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 4.65,
    elevation: 8,
  },
  saveBtnText: {
    color: "#fff",
    fontSize: 18,
    fontWeight: "700",
  },
});
