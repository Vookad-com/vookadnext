import { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'com.vookad.app',
  appName: 'vookad-next',
  webDir: 'public',
  server: {
    androidScheme: 'https'
  }
};

export default config;
