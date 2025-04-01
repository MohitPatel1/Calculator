import { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'calculator.mohitpatel.life',
  appName: 'Calculator',
  webDir: 'dist',  // or 'dist' depending on your build setup
  bundledWebRuntime: false,
  plugins: {
    // Push notification configuration
    PushNotifications: {
      presentationOptions: ["badge", "sound", "alert"]
    },
    // Splash screen configuration (optional)
    SplashScreen: {
      launchShowDuration: 3000,
      backgroundColor: "#ffffff",
      androidSplashResourceName: "splash",
      androidScaleType: "CENTER_CROP"
    }
  },
  // For Android
  android: {
    allowMixedContent: true,
    captureInput: true,
    webContentsDebuggingEnabled: true
  },
  // Server configuration
  server: {
    androidScheme: "https",
    cleartext: true
  }
};

export default config;