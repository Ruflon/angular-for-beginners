
import { EnvironmentConfiguration } from 'src/app/core/models/environment-configuration';

export const environment: EnvironmentConfiguration = {
  env_name: 'prod',
  production: true,
  apiUrl: 'https://medicalvisits1.azurewebsites.net',
  apiEndpoints: {
    category: 'category',
    cuisine: 'cuisine',
    foodmenu: 'foodmenu',
  },
  cacheTimeInMinutes: 30,
};
