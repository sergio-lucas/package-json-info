import { prefixPluginTranslations } from '@strapi/helper-plugin';
import pluginPkg from '../../package.json';
import pluginId from './pluginId';
import Initializer from './components/Initializer';

const name = pluginPkg.strapi.name;

export default {
  register(app) {
    app.registerPlugin({
      id: pluginId,
      initializer: Initializer,
      isReady: false,
      name,
    });
  },

  
  bootstrap(app) {
    // Add the settings link
    app.addSettingsLink('global', {
      id: `${pluginId}.plugin.name`,
      to: `/settings/${pluginId}`,
      intlLabel: {
        id: `${pluginId}.plugin.name`,
        defaultMessage: 'Package Json Info',
      },
      Component: async () => {
        const component = await import('./pages/App');
        return component;
      },
      permissions: [],
    });
  },
};
