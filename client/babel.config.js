const GoogleFontsPlugin = require("google-fonts-webpack-plugin")

module.exports = {
  presets: [
    '@vue/cli-plugin-babel/preset'
  ],
  plugins: [
    new GoogleFontsPlugin({
        fonts: [
            { family: "Source Sans Pro" },
            { family: "Roboto", variants: [ "400", "700italic" ] }
        ]
    })
  ]
}
