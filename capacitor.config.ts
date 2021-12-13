import { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'com.cornercoworking.world',
  appName: 'The Corner',
  webDir: 'www',
  bundledWebRuntime: false,
  plugins: {
    splashScreen: {
      launchShowDuration: 5000,
      launchAutoHide: true,
      backgroundColor: '#ffffffff',
      androidSplashResourceName: 'splash',
      androidScaleType: 'CENTER_CROP',
      showSpinner: false,
      splashFullScreen: true,
      splashImmersive: true,
    }
  }
};

export default config;
