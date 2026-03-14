import { AlertProvider } from "@/components/AlertContext";
import { Stack } from "expo-router";

export default function RootLayout() {
  return (
    <AlertProvider>
      <Stack screenOptions={{ headerShown: false }}>
        <Stack.Screen name="index" />
        <Stack.Screen name="(tabs)" />
        <Stack.Screen name="movie/[id]" />
        <Stack.Screen name="EditProfileScreen" />
        <Stack.Screen name="LandingScreen" />
        <Stack.Screen name="LoginScreen" />
        <Stack.Screen name="SignupScreen" />
        <Stack.Screen name="VerifyAccountScreen" />
        <Stack.Screen name="ResetPasswordScreen" />
        <Stack.Screen name="NewPasswordScreen" />
      </Stack>
    </AlertProvider>
  );
}
