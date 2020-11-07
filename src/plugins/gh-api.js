"use strict";

import Vue from "vue";
import gh_api from "./../../../xxxx_gh-api/packages/index";

console.log(gh_api({}));
console.log(gh_api({}).issues);
console.log();

Plugin.install = function(Vue /*options*/) {
  Vue.gh_api = gh_api;
  window.gh_api = gh_api;
  Object.defineProperties(Vue.prototype, {
    gh_api: {
      get() {
        return gh_api;
      },
    },
    $gh_api: {
      get() {
        return gh_api;
      },
    },
  });
};

Vue.use(Plugin);

export default Plugin;
