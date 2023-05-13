const { parsed } = require("dotenv").config();
module.exports = {
  packagerConfig: {
    name: "BardGPT",
    executableName: "BardGPT",
    icon: "images/icon",
    appBundleId: "com.shadowfax.bardgpt",
    extendInfo: {
      LSUIElement: "true",
    },
    osxSign: {
      hardenedRuntime: false,
      gatekeeperAssess: false,
      identity: "Developer ID Application: Nikhil Venkat Sonti (8YMKWU47S5)",
    },
    osxNotarize: {
      appBundleId: "com.shadowfax.bardgpt",

      tool: "notarytool",
      appleId: parsed.APPLE_ID,
      appleIdPassword: parsed.APPLE_PASSWORD,
      teamId: parsed.APPLE_TEAM_ID,
    },
  },
  publishers: [
    {
      name: "@electron-forge/publisher-github",
      config: {
        repository: {
          owner: "shadowfax92",
          name: "BardGPT-Mac",
        },
        prerelease: true,
      },
    },
  ],

  rebuildConfig: {},
  makers: [
    {
      name: "@electron-forge/maker-squirrel",
      config: {},
    },
    {
      name: "@electron-forge/maker-dmg",
      platforms: ["darwin"],
      config: {},
    },
    {
      name: "@electron-forge/maker-deb",
      config: {},
    },
    {
      name: "@electron-forge/maker-rpm",
      config: {},
    },
  ],
};
