const path = require("path");

/* RESOLVES IMPORT FROM COMPONENT AND PUBLIC FOLDERS
 * (NO NEED TO TYPE ../) */

module.exports = {
  webpack: (config) => {
    config.resolve.alias["components"] = path.join(__dirname, "components");
    config.resolve.alias["public"] = path.join(__dirname, "public");

    return config;
  },
};
