export enum Environment {
  LOCAL = 'local',
  STAGING = 'staging',
  PRODUCTION = 'production',
}

type SettingsInterface = {
  [key in Environment]: {
    enableDevTools: boolean;
    gtmId: string;
    gtmEnabled: boolean;
    gtmDebug: boolean;
  };
};

export const globalSettings: SettingsInterface = {
  [Environment.LOCAL]: {
    enableDevTools: true,
    gtmId: 'GTM-5M283BD7',
    gtmEnabled: false,
    gtmDebug: true,
  },
  [Environment.STAGING]: {
    enableDevTools: true,
    gtmId: 'GTM-5M283BD7',
    gtmEnabled: true,
    gtmDebug: true,
  },
  [Environment.PRODUCTION]: {
    enableDevTools: false,
    gtmId: 'GTM-5M283BD7',
    gtmEnabled: true,
    gtmDebug: false,
  },
};
