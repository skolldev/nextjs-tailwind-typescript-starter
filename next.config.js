const withCss = require("@zeit/next-css");
const withOffline = require("next-offline");

module.exports = withOffline(withCss({}));
