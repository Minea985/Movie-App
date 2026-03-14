import { Colors } from "@/constants/Colors";
import { Ionicons } from "@expo/vector-icons";
import { Image } from "expo-image";
import { useRouter } from "expo-router";
import React from "react";
import {
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { useAlert } from "@/components/AlertContext";
import { HeaderTitle } from "@/components/HeaderTitle";

export default function ProfileScreen() {
  const router = useRouter();
  const { showAlert } = useAlert();

  const SectionItem = ({ icon, title }: any) => (
    <TouchableOpacity
      style={styles.sectionItem}
      onPress={() => showAlert(title, "This feature is coming soon in the next update!")}
    >
      <View style={styles.sectionItemLeft}>
        <View style={styles.iconCircle}>
          <Ionicons name={icon} size={20} color={Colors.textSecondary} />
        </View>
        <Text style={styles.sectionItemTitle}>{title}</Text>
      </View>
      <Ionicons name="chevron-forward" size={18} color={Colors.primary} />
    </TouchableOpacity>
  );

  return (
    <SafeAreaView style={styles.container}>
      <HeaderTitle title="Profile" />

      <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={styles.scrollContent}>
        <View style={styles.userInfoSection}>

          <Image
            source="https://api.dicebear.com/9.x/croodles/svg?seed=Christopher"
            alt="avatar"
            style={styles.avatar}
          />
          <View style={styles.userDetails}>
            <Text style={styles.userName}>Minea</Text>
            <Text style={styles.userEmail}>minea@gmail.com</Text>
          </View>
          <TouchableOpacity
            style={styles.editBtn}
            onPress={() => router.push("/EditProfileScreen")}
          >
            <Ionicons name="create-outline" size={24} color={Colors.primary} />
          </TouchableOpacity>
        </View>

        {/* Premium Banner */}
        <TouchableOpacity style={styles.premiumBanner}>
          <View style={styles.premiumIconContainer}>
            <View style={styles.premiumIconBg}>
              <Ionicons name="ribbon" size={20} color="#fff" />
            </View>
          </View>
          <View style={styles.premiumTextContainer}>
            <Text style={styles.premiumTitle}>Premium Member</Text>
            <Text style={styles.premiumSubtitle}>New movies are coming for you, Download Now!</Text>
          </View>
        </TouchableOpacity>

        {/* Sections */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Account</Text>
          <View style={styles.sectionContent}>
            <SectionItem icon="person-outline" title="Member" />
            <SectionItem icon="lock-closed-outline" title="Change Password" />
          </View>
        </View>

        <View style={styles.section}>
          <Text style={styles.sectionTitle}>General</Text>
          <View style={styles.sectionContent}>
            <SectionItem icon="notifications-outline" title="Notification" />
            <SectionItem icon="globe-outline" title="Language" />
            <SectionItem icon="flag-outline" title="Country" />
            <SectionItem icon="trash-outline" title="Clear Cache" />
          </View>
        </View>

        <View style={styles.section}>
          <Text style={styles.sectionTitle}>More</Text>
          <View style={styles.sectionContent}>
            <SectionItem icon="shield-checkmark-outline" title="Legal and Policies" />
            <SectionItem icon="help-circle-outline" title="Help & Feedback" />
            <SectionItem icon="information-circle-outline" title="About Us" />
          </View>
        </View>

        {/* Logout Button */}
        <TouchableOpacity
          style={styles.logoutBtn}
          onPress={() => {
            showAlert(
              "Confirm Logout",
              "Are you sure you want to log out of your account?",
              [
                {
                  text: "Log Out",
                  style: "destructive",
                  onPress: () => router.replace("/LoginScreen")
                },
                { text: "Cancel", style: "cancel" }
              ]
            );
          }}
        >
          <Text style={styles.logoutBtnText}>Log Out</Text>
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
    paddingHorizontal: 20,
    paddingBottom: 40,
  },
  userInfoSection: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: Colors.surface,
    padding: 16,
    borderRadius: 16,
    marginTop: 20,
    marginBottom: 20,
  },
  avatar: {
    width: 60,
    height: 60,
    borderRadius: 30,
    marginRight: 15,
  },
  userDetails: {
    flex: 1,
  },
  userName: {
    fontSize: 18,
    fontWeight: "700",
    color: Colors.text,
  },
  userEmail: {
    fontSize: 14,
    color: Colors.textSecondary,
    marginTop: 2,
  },
  editBtn: {
    padding: 8,
  },
  premiumBanner: {
    backgroundColor: "#FF8700",
    borderRadius: 16,
    padding: 20,
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 25,
  },
  premiumIconContainer: {
    marginRight: 15,
  },
  premiumIconBg: {
    width: 40,
    height: 40,
    borderRadius: 12,
    backgroundColor: "rgba(255,255,255,0.3)",
    alignItems: "center",
    justifyContent: "center",
  },
  premiumTextContainer: {
    flex: 1,
  },
  premiumTitle: {
    fontSize: 16,
    fontWeight: "700",
    color: "#fff",
  },
  premiumSubtitle: {
    fontSize: 12,
    color: "rgba(255,255,255,0.9)",
    marginTop: 4,
    lineHeight: 18,
  },
  section: {
    marginBottom: 20,
  },
  sectionTitle: {
    fontSize: 16,
    fontWeight: "700",
    color: Colors.text,
    marginBottom: 12,
    marginLeft: 4,
  },
  sectionContent: {
    backgroundColor: Colors.surface,
    borderRadius: 16,
    paddingHorizontal: 16,
  },
  sectionItem: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingVertical: 15,
  },
  sectionItemLeft: {
    flexDirection: "row",
    alignItems: "center",
  },
  iconCircle: {
    width: 36,
    height: 36,
    borderRadius: 18,
    backgroundColor: "#eee",
    alignItems: "center",
    justifyContent: "center",
    marginRight: 12,
  },
  sectionItemTitle: {
    fontSize: 14,
    color: Colors.text,
    fontWeight: "500",
  },
  logoutBtn: {
    backgroundColor: Colors.primary,
    borderRadius: 30,
    paddingVertical: 16,
    alignItems: "center",
    marginTop: 20,
    shadowColor: Colors.primary,
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.3,
    shadowRadius: 4.65,
    elevation: 8,
  },
  logoutBtnText: {
    fontSize: 18,
    fontWeight: "700",
    color: "#fff",
  },
});
