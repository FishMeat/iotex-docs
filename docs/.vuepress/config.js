module.exports = {
  plugins: [
    [
      "@vuepress/google-analytics",
      {
        ga: "UA-111756489-6" // UA-00000000-0
      }
    ],
    "tabs"
  ],
  locales: {
    "/": {
      lang: "en-US",
      title: "IoTeX Documentaion",
      description: "Developer docs, by the community, for the community"
    }
  },

  themeConfig: {
    //repo: "iotexproject/iotex-docs",
    displayAllHeaders: true,
    editLinks: true,
    locales: {
      "/": {
        label: "English",
        selectText: "Languages",
        editLinkText: "Edit this page on GitHub",
        lastUpdated: "Last Updated",
        serviceWorker: {
          updatePopup: {
            message: "New content is available.",
            buttonText: "Refresh"
          }
        },
        collapsable: false,
        nav: [
          { text: "Home", link: "/" },
          { text: "Developers", link: "/developer/" },
          { text: "Nodes", link: "/nodes/" },
          { text: "Staking", link: "/staking/" },
          { text: "Contribute", link: "/contribute/" }
        ],
        sidebar: {
          "/pylon": [
            {
              collapsable: false,
              children: [
                "pylon/get-started",
                "pylon/guides",
                "pylon/code-review-checklist"
              ]
            }
          ],
          "/middleware": [
            {
              collapsable: false,
              children: ["middleware/did"]
            }
          ],
          "/hardware": [
            {
              collapsable: false,
              children: ["hardware/pebble"]
            }
          ],
          "/developer": [
            {
              collapsable: false,
              children: [
                "developer/introduction",
                "developer/libraries-and-tools",
                "developer/ioctl",
                "developer/api",
                "developer/analytics",
                "developer/misc"
              ]
            }
          ]
        }
      }
    }
  },

  head: [
    ["link", { rel: "icon", href: `/logo.png` }],
    ["link", { rel: "manifest", href: "/manifest.json" }],
    ["meta", { name: "theme-color", content: "#3eaf7c" }],
    ["meta", { name: "apple-mobile-web-app-capable", content: "yes" }],
    [
      "meta",
      { name: "apple-mobile-web-app-status-bar-style", content: "black" }
    ],
    [
      "link",
      { rel: "apple-touch-icon", href: `/icons/apple-touch-icon-152x152.png` }
    ],
    [
      "link",
      {
        rel: "mask-icon",
        href: "/icons/safari-pinned-tab.svg",
        color: "#3eaf7c"
      }
    ],
    [
      "meta",
      {
        name: "msapplication-TileImage",
        content: "/icons/msapplication-icon-144x144.png"
      }
    ],
    ["meta", { name: "msapplication-TileColor", content: "#000000" }]
  ],
  serviceWorker: false
};
