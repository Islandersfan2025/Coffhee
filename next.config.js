/** @type {import('next').NextConfig} */
module.exports = {
  exportTrailingSlash: true,
  exportPathMap: function() {
    return {
    '/': { page: '/' }
    };
  }
};
 

