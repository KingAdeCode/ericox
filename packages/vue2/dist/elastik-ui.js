/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "5a74");
/******/ })
/************************************************************************/
/******/ ({

/***/ "02af":
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__("24fb");
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.i, ".accordion[data-v-591b19db]{list-style:none;margin:0;padding:0}.accordion__item[data-v-591b19db]:last-child{border-bottom:none}", ""]);
// Exports
module.exports = exports;


/***/ }),

/***/ "0fea":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_8_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_node_modules_vue_cli_service_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_3_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_1_4_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_cli_service_node_modules_vue_loader_lib_index_js_vue_loader_options_AccordionItem_vue_vue_type_style_index_0_id_534f8f45_prod_scoped_true_lang_scss_shadow__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("5faf");
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_8_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_node_modules_vue_cli_service_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_3_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_1_4_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_cli_service_node_modules_vue_loader_lib_index_js_vue_loader_options_AccordionItem_vue_vue_type_style_index_0_id_534f8f45_prod_scoped_true_lang_scss_shadow__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_8_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_node_modules_vue_cli_service_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_3_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_1_4_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_cli_service_node_modules_vue_loader_lib_index_js_vue_loader_options_AccordionItem_vue_vue_type_style_index_0_id_534f8f45_prod_scoped_true_lang_scss_shadow__WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_8_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_node_modules_vue_cli_service_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_3_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_1_4_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_cli_service_node_modules_vue_loader_lib_index_js_vue_loader_options_AccordionItem_vue_vue_type_style_index_0_id_534f8f45_prod_scoped_true_lang_scss_shadow__WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_8_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_node_modules_vue_cli_service_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_3_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_1_4_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_cli_service_node_modules_vue_loader_lib_index_js_vue_loader_options_AccordionItem_vue_vue_type_style_index_0_id_534f8f45_prod_scoped_true_lang_scss_shadow__WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ "24fb":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
// css base code, injected by the css-loader
// eslint-disable-next-line func-names
module.exports = function (useSourceMap) {
  var list = []; // return the list of modules as css string

  list.toString = function toString() {
    return this.map(function (item) {
      var content = cssWithMappingToString(item, useSourceMap);

      if (item[2]) {
        return "@media ".concat(item[2], " {").concat(content, "}");
      }

      return content;
    }).join('');
  }; // import a list of modules into the list
  // eslint-disable-next-line func-names


  list.i = function (modules, mediaQuery, dedupe) {
    if (typeof modules === 'string') {
      // eslint-disable-next-line no-param-reassign
      modules = [[null, modules, '']];
    }

    var alreadyImportedModules = {};

    if (dedupe) {
      for (var i = 0; i < this.length; i++) {
        // eslint-disable-next-line prefer-destructuring
        var id = this[i][0];

        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }

    for (var _i = 0; _i < modules.length; _i++) {
      var item = [].concat(modules[_i]);

      if (dedupe && alreadyImportedModules[item[0]]) {
        // eslint-disable-next-line no-continue
        continue;
      }

      if (mediaQuery) {
        if (!item[2]) {
          item[2] = mediaQuery;
        } else {
          item[2] = "".concat(mediaQuery, " and ").concat(item[2]);
        }
      }

      list.push(item);
    }
  };

  return list;
};

function cssWithMappingToString(item, useSourceMap) {
  var content = item[1] || ''; // eslint-disable-next-line prefer-destructuring

  var cssMapping = item[3];

  if (!cssMapping) {
    return content;
  }

  if (useSourceMap && typeof btoa === 'function') {
    var sourceMapping = toComment(cssMapping);
    var sourceURLs = cssMapping.sources.map(function (source) {
      return "/*# sourceURL=".concat(cssMapping.sourceRoot || '').concat(source, " */");
    });
    return [content].concat(sourceURLs).concat([sourceMapping]).join('\n');
  }

  return [content].join('\n');
} // Adapted from convert-source-map (MIT)


function toComment(sourceMap) {
  // eslint-disable-next-line no-undef
  var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap))));
  var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
  return "/*# ".concat(data, " */");
}

/***/ }),

/***/ "35d6":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, "default", function() { return /* binding */ addStylesToShadowDOM; });

// CONCATENATED MODULE: ./node_modules/vue-style-loader/lib/listToStyles.js
/**
 * Translates the list format produced by css-loader into something
 * easier to manipulate.
 */
function listToStyles (parentId, list) {
  var styles = []
  var newStyles = {}
  for (var i = 0; i < list.length; i++) {
    var item = list[i]
    var id = item[0]
    var css = item[1]
    var media = item[2]
    var sourceMap = item[3]
    var part = {
      id: parentId + ':' + i,
      css: css,
      media: media,
      sourceMap: sourceMap
    }
    if (!newStyles[id]) {
      styles.push(newStyles[id] = { id: id, parts: [part] })
    } else {
      newStyles[id].parts.push(part)
    }
  }
  return styles
}

// CONCATENATED MODULE: ./node_modules/vue-style-loader/lib/addStylesShadow.js


function addStylesToShadowDOM (parentId, list, shadowRoot) {
  var styles = listToStyles(parentId, list)
  addStyles(styles, shadowRoot)
}

/*
type StyleObject = {
  id: number;
  parts: Array<StyleObjectPart>
}

type StyleObjectPart = {
  css: string;
  media: string;
  sourceMap: ?string
}
*/

function addStyles (styles /* Array<StyleObject> */, shadowRoot) {
  const injectedStyles =
    shadowRoot._injectedStyles ||
    (shadowRoot._injectedStyles = {})
  for (var i = 0; i < styles.length; i++) {
    var item = styles[i]
    var style = injectedStyles[item.id]
    if (!style) {
      for (var j = 0; j < item.parts.length; j++) {
        addStyle(item.parts[j], shadowRoot)
      }
      injectedStyles[item.id] = true
    }
  }
}

function createStyleElement (shadowRoot) {
  var styleElement = document.createElement('style')
  styleElement.type = 'text/css'
  shadowRoot.appendChild(styleElement)
  return styleElement
}

function addStyle (obj /* StyleObjectPart */, shadowRoot) {
  var styleElement = createStyleElement(shadowRoot)
  var css = obj.css
  var media = obj.media
  var sourceMap = obj.sourceMap

  if (media) {
    styleElement.setAttribute('media', media)
  }

  if (sourceMap) {
    // https://developer.chrome.com/devtools/docs/javascript-debugging
    // this makes source maps inside style tags work properly in Chrome
    css += '\n/*# sourceURL=' + sourceMap.sources[0] + ' */'
    // http://stackoverflow.com/a/26603875
    css += '\n/*# sourceMappingURL=data:application/json;base64,' + btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))) + ' */'
  }

  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild)
    }
    styleElement.appendChild(document.createTextNode(css))
  }
}


/***/ }),

/***/ "41d1":
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__("24fb");
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.i, ".accordion__item[data-v-534f8f45]{cursor:pointer;position:relative}.accordion__trigger[data-v-534f8f45]{display:flex;justify-content:space-between}.accordion__content[data-v-534f8f45],.accordion__content ul[data-v-534f8f45]{margin:0;padding:0}.accordion-enter-active[data-v-534f8f45],.accordion-leave-active[data-v-534f8f45]{will-change:height,opacity;transition:height .3s ease,opacity .3s ease;overflow:hidden}.accordion-enter[data-v-534f8f45],.accordion-leave-to[data-v-534f8f45]{height:0!important;opacity:0}", ""]);
// Exports
module.exports = exports;


/***/ }),

/***/ "5a74":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/@vue/cli-service/lib/commands/build/setPublicPath.js
// This file is imported into lib/wc client bundles.

if (typeof window !== 'undefined') {
  var currentScript = window.document.currentScript
  if (Object({"NODE_ENV":"production","BASE_URL":"/"}).NEED_CURRENTSCRIPT_POLYFILL) {
    var getCurrentScript = __webpack_require__("8875")
    currentScript = getCurrentScript()

    // for backward compatibility, because previously we directly included the polyfill
    if (!('currentScript' in document)) {
      Object.defineProperty(document, 'currentScript', { get: getCurrentScript })
    }
  }

  var src = currentScript && currentScript.src.match(/(.+\/)[^/]+\.js(\?.*)?$/)
  if (src) {
    __webpack_require__.p = src[1] // eslint-disable-line
  }
}

// Indicate to webpack that this file can be concatenated
/* harmony default export */ var setPublicPath = (null);

// EXTERNAL MODULE: external "Vue"
var external_Vue_ = __webpack_require__("8bbf");
var external_Vue_default = /*#__PURE__*/__webpack_require__.n(external_Vue_);

// CONCATENATED MODULE: ./node_modules/@vue/web-component-wrapper/dist/vue-wc-wrapper.js
const camelizeRE = /-(\w)/g;
const camelize = str => {
  return str.replace(camelizeRE, (_, c) => c ? c.toUpperCase() : '')
};

const hyphenateRE = /\B([A-Z])/g;
const hyphenate = str => {
  return str.replace(hyphenateRE, '-$1').toLowerCase()
};

function getInitialProps (propsList) {
  const res = {};
  propsList.forEach(key => {
    res[key] = undefined;
  });
  return res
}

function injectHook (options, key, hook) {
  options[key] = [].concat(options[key] || []);
  options[key].unshift(hook);
}

function callHooks (vm, hook) {
  if (vm) {
    const hooks = vm.$options[hook] || [];
    hooks.forEach(hook => {
      hook.call(vm);
    });
  }
}

function createCustomEvent (name, args) {
  return new CustomEvent(name, {
    bubbles: false,
    cancelable: false,
    detail: args
  })
}

const isBoolean = val => /function Boolean/.test(String(val));
const isNumber = val => /function Number/.test(String(val));

function convertAttributeValue (value, name, { type } = {}) {
  if (isBoolean(type)) {
    if (value === 'true' || value === 'false') {
      return value === 'true'
    }
    if (value === '' || value === name || value != null) {
      return true
    }
    return value
  } else if (isNumber(type)) {
    const parsed = parseFloat(value, 10);
    return isNaN(parsed) ? value : parsed
  } else {
    return value
  }
}

function toVNodes (h, children) {
  const res = [];
  for (let i = 0, l = children.length; i < l; i++) {
    res.push(toVNode(h, children[i]));
  }
  return res
}

function toVNode (h, node) {
  if (node.nodeType === 3) {
    return node.data.trim() ? node.data : null
  } else if (node.nodeType === 1) {
    const data = {
      attrs: getAttributes(node),
      domProps: {
        innerHTML: node.innerHTML
      }
    };
    if (data.attrs.slot) {
      data.slot = data.attrs.slot;
      delete data.attrs.slot;
    }
    return h(node.tagName, data)
  } else {
    return null
  }
}

function getAttributes (node) {
  const res = {};
  for (let i = 0, l = node.attributes.length; i < l; i++) {
    const attr = node.attributes[i];
    res[attr.nodeName] = attr.nodeValue;
  }
  return res
}

function wrap (Vue, Component) {
  const isAsync = typeof Component === 'function' && !Component.cid;
  let isInitialized = false;
  let hyphenatedPropsList;
  let camelizedPropsList;
  let camelizedPropsMap;

  function initialize (Component) {
    if (isInitialized) return

    const options = typeof Component === 'function'
      ? Component.options
      : Component;

    // extract props info
    const propsList = Array.isArray(options.props)
      ? options.props
      : Object.keys(options.props || {});
    hyphenatedPropsList = propsList.map(hyphenate);
    camelizedPropsList = propsList.map(camelize);
    const originalPropsAsObject = Array.isArray(options.props) ? {} : options.props || {};
    camelizedPropsMap = camelizedPropsList.reduce((map, key, i) => {
      map[key] = originalPropsAsObject[propsList[i]];
      return map
    }, {});

    // proxy $emit to native DOM events
    injectHook(options, 'beforeCreate', function () {
      const emit = this.$emit;
      this.$emit = (name, ...args) => {
        this.$root.$options.customElement.dispatchEvent(createCustomEvent(name, args));
        return emit.call(this, name, ...args)
      };
    });

    injectHook(options, 'created', function () {
      // sync default props values to wrapper on created
      camelizedPropsList.forEach(key => {
        this.$root.props[key] = this[key];
      });
    });

    // proxy props as Element properties
    camelizedPropsList.forEach(key => {
      Object.defineProperty(CustomElement.prototype, key, {
        get () {
          return this._wrapper.props[key]
        },
        set (newVal) {
          this._wrapper.props[key] = newVal;
        },
        enumerable: false,
        configurable: true
      });
    });

    isInitialized = true;
  }

  function syncAttribute (el, key) {
    const camelized = camelize(key);
    const value = el.hasAttribute(key) ? el.getAttribute(key) : undefined;
    el._wrapper.props[camelized] = convertAttributeValue(
      value,
      key,
      camelizedPropsMap[camelized]
    );
  }

  class CustomElement extends HTMLElement {
    constructor () {
      const self = super();
      self.attachShadow({ mode: 'open' });

      const wrapper = self._wrapper = new Vue({
        name: 'shadow-root',
        customElement: self,
        shadowRoot: self.shadowRoot,
        data () {
          return {
            props: {},
            slotChildren: []
          }
        },
        render (h) {
          return h(Component, {
            ref: 'inner',
            props: this.props
          }, this.slotChildren)
        }
      });

      // Use MutationObserver to react to future attribute & slot content change
      const observer = new MutationObserver(mutations => {
        let hasChildrenChange = false;
        for (let i = 0; i < mutations.length; i++) {
          const m = mutations[i];
          if (isInitialized && m.type === 'attributes' && m.target === self) {
            syncAttribute(self, m.attributeName);
          } else {
            hasChildrenChange = true;
          }
        }
        if (hasChildrenChange) {
          wrapper.slotChildren = Object.freeze(toVNodes(
            wrapper.$createElement,
            self.childNodes
          ));
        }
      });
      observer.observe(self, {
        childList: true,
        subtree: true,
        characterData: true,
        attributes: true
      });
    }

    get vueComponent () {
      return this._wrapper.$refs.inner
    }

    connectedCallback () {
      const wrapper = this._wrapper;
      if (!wrapper._isMounted) {
        // initialize attributes
        const syncInitialAttributes = () => {
          wrapper.props = getInitialProps(camelizedPropsList);
          hyphenatedPropsList.forEach(key => {
            syncAttribute(this, key);
          });
        };

        if (isInitialized) {
          syncInitialAttributes();
        } else {
          // async & unresolved
          Component().then(resolved => {
            if (resolved.__esModule || resolved[Symbol.toStringTag] === 'Module') {
              resolved = resolved.default;
            }
            initialize(resolved);
            syncInitialAttributes();
          });
        }
        // initialize children
        wrapper.slotChildren = Object.freeze(toVNodes(
          wrapper.$createElement,
          this.childNodes
        ));
        wrapper.$mount();
        this.shadowRoot.appendChild(wrapper.$el);
      } else {
        callHooks(this.vueComponent, 'activated');
      }
    }

    disconnectedCallback () {
      callHooks(this.vueComponent, 'deactivated');
    }
  }

  if (!isAsync) {
    initialize(Component);
  }

  return CustomElement
}

/* harmony default export */ var vue_wc_wrapper = (wrap);

// EXTERNAL MODULE: ./node_modules/css-loader/dist/runtime/api.js
var api = __webpack_require__("24fb");

// EXTERNAL MODULE: ./node_modules/vue-style-loader/lib/addStylesShadow.js + 1 modules
var addStylesShadow = __webpack_require__("35d6");

// CONCATENATED MODULE: ./node_modules/@vue/cli-service/node_modules/vue-loader/lib/runtime/componentNormalizer.js
/* globals __VUE_SSR_CONTEXT__ */

// IMPORTANT: Do NOT use ES2015 features in this file (except for modules).
// This module is a runtime utility for cleaner component module output and will
// be included in the final webpack user bundle.

function normalizeComponent(
  scriptExports,
  render,
  staticRenderFns,
  functionalTemplate,
  injectStyles,
  scopeId,
  moduleIdentifier /* server only */,
  shadowMode /* vue-cli only */
) {
  // Vue.extend constructor export interop
  var options =
    typeof scriptExports === 'function' ? scriptExports.options : scriptExports

  // render functions
  if (render) {
    options.render = render
    options.staticRenderFns = staticRenderFns
    options._compiled = true
  }

  // functional template
  if (functionalTemplate) {
    options.functional = true
  }

  // scopedId
  if (scopeId) {
    options._scopeId = 'data-v-' + scopeId
  }

  var hook
  if (moduleIdentifier) {
    // server build
    hook = function (context) {
      // 2.3 injection
      context =
        context || // cached call
        (this.$vnode && this.$vnode.ssrContext) || // stateful
        (this.parent && this.parent.$vnode && this.parent.$vnode.ssrContext) // functional
      // 2.2 with runInNewContext: true
      if (!context && typeof __VUE_SSR_CONTEXT__ !== 'undefined') {
        context = __VUE_SSR_CONTEXT__
      }
      // inject component styles
      if (injectStyles) {
        injectStyles.call(this, context)
      }
      // register component module identifier for async chunk inferrence
      if (context && context._registeredComponents) {
        context._registeredComponents.add(moduleIdentifier)
      }
    }
    // used by ssr in case component is cached and beforeCreate
    // never gets called
    options._ssrRegister = hook
  } else if (injectStyles) {
    hook = shadowMode
      ? function () {
          injectStyles.call(
            this,
            (options.functional ? this.parent : this).$root.$options.shadowRoot
          )
        }
      : injectStyles
  }

  if (hook) {
    if (options.functional) {
      // for template-only hot-reload because in that case the render fn doesn't
      // go through the normalizer
      options._injectStyles = hook
      // register for functional component in vue file
      var originalRender = options.render
      options.render = function renderWithStyleInjection(h, context) {
        hook.call(context)
        return originalRender(h, context)
      }
    } else {
      // inject component registration as beforeCreate hook
      var existing = options.beforeCreate
      options.beforeCreate = existing ? [].concat(existing, hook) : [hook]
    }
  }

  return {
    exports: scriptExports,
    options: options
  }
}

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"f70774ba-vue-loader-template"}!./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/@vue/cli-service/node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/@vue/cli-service/node_modules/vue-loader/lib??vue-loader-options!./src/components/Accordion.vue?vue&type=template&id=591b19db&scoped=true&shadow
var render = function render() {
  var _vm = this,
      _c = _vm._self._c;

  return _c('ul', {
    staticClass: "accordion",
    attrs: {
      "role": "list",
      "aria-roledescription": "accordion"
    }
  }, [_vm._t("default")], 2);
};

var staticRenderFns = [];

// CONCATENATED MODULE: ./src/components/Accordion.vue?vue&type=template&id=591b19db&scoped=true&shadow

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/@vue/cli-service/node_modules/vue-loader/lib??vue-loader-options!./src/components/Accordion.vue?vue&type=script&lang=js&shadow
/* harmony default export */ var Accordionvue_type_script_lang_js_shadow = ({
  props: {
    allowMultiple: {
      type: Boolean,
      default: false
    },
    firstItemActive: {
      type: Boolean,
      default: false
    }
  },

  data() {
    return {
      Items: []
    };
  },

  provide() {
    return {
      Items: this.Items,
      allowMultiple: this.allowMultiple
    };
  }

});
// CONCATENATED MODULE: ./src/components/Accordion.vue?vue&type=script&lang=js&shadow
 /* harmony default export */ var components_Accordionvue_type_script_lang_js_shadow = (Accordionvue_type_script_lang_js_shadow); 
// CONCATENATED MODULE: ./src/components/Accordion.vue?shadow



function injectStyles (context) {
  
  var style0 = __webpack_require__("7dcb")
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var component = normalizeComponent(
  components_Accordionvue_type_script_lang_js_shadow,
  render,
  staticRenderFns,
  false,
  injectStyles,
  "591b19db",
  null
  ,true
)

/* harmony default export */ var Accordionshadow = (component.exports);
// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"f70774ba-vue-loader-template"}!./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/@vue/cli-service/node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/@vue/cli-service/node_modules/vue-loader/lib??vue-loader-options!./src/components/AccordionItem.vue?vue&type=template&id=534f8f45&scoped=true&shadow
var AccordionItemvue_type_template_id_534f8f45_scoped_true_shadow_render = function render() {
  var _vm = this,
      _c = _vm._self._c;

  return _c('li', {
    staticClass: "accordion__item",
    class: _vm.container_class,
    style: _vm.container_styles
  }, [_c('div', {
    staticClass: "accordion__trigger",
    class: {
      accordion__trigger_active: _vm.visible
    } + ' ' + _vm.trigger_class,
    style: _vm.trigger_styles,
    on: {
      "click": _vm.open
    }
  }, [_vm._t("accordion-trigger")], 2), _c('transition', {
    attrs: {
      "name": "accordion"
    },
    on: {
      "enter": _vm.start,
      "after-enter": _vm.end,
      "before-leave": _vm.start,
      "after-leave": _vm.end
    }
  }, [_c('div', {
    directives: [{
      name: "show",
      rawName: "v-show",
      value: _vm.visible,
      expression: "visible"
    }],
    staticClass: "accordion__content",
    class: _vm.content_class,
    style: _vm.content_styles
  }, [_c('ul', [_vm._t("accordion-content")], 2)])])], 1);
};

var AccordionItemvue_type_template_id_534f8f45_scoped_true_shadow_staticRenderFns = [];

// CONCATENATED MODULE: ./src/components/AccordionItem.vue?vue&type=template&id=534f8f45&scoped=true&shadow

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/@vue/cli-service/node_modules/vue-loader/lib??vue-loader-options!./src/components/AccordionItem.vue?vue&type=script&lang=js&shadow
/* harmony default export */ var AccordionItemvue_type_script_lang_js_shadow = ({
  props: {
    disabled: {
      default: false,
      type: Boolean
    },
    active: {
      default: false,
      type: Boolean
    },
    container_class: {
      type: String
    },
    trigger_class: {
      type: String
    },
    content_class: {
      type: String
    },
    container_styles: {
      type: String
    },
    trigger_styles: {
      type: String
    },
    content_styles: {
      type: String
    }
  },
  inject: ["allowMultiple", "Items"],

  data() {
    return {
      item: {
        active: false,
        id: this.generateRandomNumber()
      }
    };
  },

  computed: {
    visible() {
      return this.item.active;
    }

  },
  methods: {
    generateRandomNumber() {
      let count = 0;
      return count++;
    },

    async activateFirstItem() {
      if (this.active) {
        this.item.active = true;
      }

      return true;
    },

    open() {
      if (this.disabled) {
        return;
      }

      if (this.allowMultiple) {
        if (this.item.active === false) {
          this.item.active = true;
          Object.assign({}, ...this.Items, this.item);
        } else {
          this.item.active = false;
          Object.assign({}, ...this.Items, this.item);
        }
      } else {
        this.Items.forEach(item => {
          item.active = false;
        });
        this.item.active = true;
        Object.assign({}, ...this.Items, this.item);
      }
    },

    start(el) {
      el.style.height = el.scrollHeight + "px";
    },

    end(el) {
      el.style.height = "";
    }

  },

  created() {
    this.activateFirstItem().then(() => {
      this.Items.push(this.item);
    });
  }

});
// CONCATENATED MODULE: ./src/components/AccordionItem.vue?vue&type=script&lang=js&shadow
 /* harmony default export */ var components_AccordionItemvue_type_script_lang_js_shadow = (AccordionItemvue_type_script_lang_js_shadow); 
// CONCATENATED MODULE: ./src/components/AccordionItem.vue?shadow



function AccordionItemshadow_injectStyles (context) {
  
  var style0 = __webpack_require__("0fea")
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var AccordionItemshadow_component = normalizeComponent(
  components_AccordionItemvue_type_script_lang_js_shadow,
  AccordionItemvue_type_template_id_534f8f45_scoped_true_shadow_render,
  AccordionItemvue_type_template_id_534f8f45_scoped_true_shadow_staticRenderFns,
  false,
  AccordionItemshadow_injectStyles,
  "534f8f45",
  null
  ,true
)

/* harmony default export */ var AccordionItemshadow = (AccordionItemshadow_component.exports);
// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"f70774ba-vue-loader-template"}!./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/@vue/cli-service/node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/@vue/cli-service/node_modules/vue-loader/lib??vue-loader-options!./src/components/Alert.vue?vue&type=template&id=8bf0972e&shadow
var Alertvue_type_template_id_8bf0972e_shadow_render = function render() {
  var _vm = this,
      _c = _vm._self._c;

  return _c('div', {
    staticClass: "flex items-center",
    class: _vm.classes
  }, [_vm.custom_icon ? _c('div', [_vm._v(" this "), _vm._t("alert-icon")], 2) : _c('div'), _c('div', {}, [_vm._t("alert-content", function () {
    return [_c('span', {
      staticClass: "font-medium"
    }, [_vm._v(" " + _vm._s(_vm.title))]), _c('span', {
      staticClass: "ml-1"
    }, [_vm._v(" " + _vm._s(_vm.description) + " ")])];
  })], 2)]);
};

var Alertvue_type_template_id_8bf0972e_shadow_staticRenderFns = [];

// CONCATENATED MODULE: ./src/components/Alert.vue?vue&type=template&id=8bf0972e&shadow

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/@vue/cli-service/node_modules/vue-loader/lib??vue-loader-options!./src/components/Alert.vue?vue&type=script&lang=ts&shadow

// import {SPACES, BOXMODEL, VARIANTS, EDGES } from '../helpers/Common';

/* harmony default export */ var Alertvue_type_script_lang_ts_shadow = ({
  props: {
    
    custom_icon: {
      default: false,
    },

    title: {
      type: String
    },

    description: {
      type: String
    },

    // variant: {
    //   type: String,
    //   validator: (value) => {
    //     return Object.keys(VARIANTS).includes(value);
    //   },
    // },

    classes: {
      default: '',
      type: String
    },
  },

  computed: {
   
    // setVariant() {
    //   if (this.variant == "basic" || !this.variant) {
    //     return "";
    //   }
    //   return VARIANTS[this.variant];
    // },
  },
});

// CONCATENATED MODULE: ./src/components/Alert.vue?vue&type=script&lang=ts&shadow
 /* harmony default export */ var components_Alertvue_type_script_lang_ts_shadow = (Alertvue_type_script_lang_ts_shadow); 
// CONCATENATED MODULE: ./src/components/Alert.vue?shadow





/* normalize component */

var Alertshadow_component = normalizeComponent(
  components_Alertvue_type_script_lang_ts_shadow,
  Alertvue_type_template_id_8bf0972e_shadow_render,
  Alertvue_type_template_id_8bf0972e_shadow_staticRenderFns,
  false,
  null,
  null,
  null
  ,true
)

/* harmony default export */ var Alertshadow = (Alertshadow_component.exports);
// CONCATENATED MODULE: ./src/components/AspectRatioBox.vue?shadow
var AspectRatioBoxshadow_render, AspectRatioBoxshadow_staticRenderFns
var script = {}


/* normalize component */

var AspectRatioBoxshadow_component = normalizeComponent(
  script,
  AspectRatioBoxshadow_render,
  AspectRatioBoxshadow_staticRenderFns,
  false,
  null,
  null,
  null
  ,true
)

/* harmony default export */ var AspectRatioBoxshadow = (AspectRatioBoxshadow_component.exports);
// CONCATENATED MODULE: ./src/components/Avatar.vue?shadow
var Avatarshadow_render, Avatarshadow_staticRenderFns
var Avatarshadow_script = {}


/* normalize component */

var Avatarshadow_component = normalizeComponent(
  Avatarshadow_script,
  Avatarshadow_render,
  Avatarshadow_staticRenderFns,
  false,
  null,
  null,
  null
  ,true
)

/* harmony default export */ var Avatarshadow = (Avatarshadow_component.exports);
// CONCATENATED MODULE: ./src/components/AvatarBadge.vue?shadow
var AvatarBadgeshadow_render, AvatarBadgeshadow_staticRenderFns
var AvatarBadgeshadow_script = {}


/* normalize component */

var AvatarBadgeshadow_component = normalizeComponent(
  AvatarBadgeshadow_script,
  AvatarBadgeshadow_render,
  AvatarBadgeshadow_staticRenderFns,
  false,
  null,
  null,
  null
  ,true
)

/* harmony default export */ var AvatarBadgeshadow = (AvatarBadgeshadow_component.exports);
// CONCATENATED MODULE: ./src/components/AvatarGroup.vue?shadow
var AvatarGroupshadow_render, AvatarGroupshadow_staticRenderFns
var AvatarGroupshadow_script = {}


/* normalize component */

var AvatarGroupshadow_component = normalizeComponent(
  AvatarGroupshadow_script,
  AvatarGroupshadow_render,
  AvatarGroupshadow_staticRenderFns,
  false,
  null,
  null,
  null
  ,true
)

/* harmony default export */ var AvatarGroupshadow = (AvatarGroupshadow_component.exports);
// CONCATENATED MODULE: ./src/components/Badge.vue?shadow
var Badgeshadow_render, Badgeshadow_staticRenderFns
var Badgeshadow_script = {}


/* normalize component */

var Badgeshadow_component = normalizeComponent(
  Badgeshadow_script,
  Badgeshadow_render,
  Badgeshadow_staticRenderFns,
  false,
  null,
  null,
  null
  ,true
)

/* harmony default export */ var Badgeshadow = (Badgeshadow_component.exports);
// CONCATENATED MODULE: ./src/components/BadgeGroup.vue?shadow
var BadgeGroupshadow_render, BadgeGroupshadow_staticRenderFns
var BadgeGroupshadow_script = {}


/* normalize component */

var BadgeGroupshadow_component = normalizeComponent(
  BadgeGroupshadow_script,
  BadgeGroupshadow_render,
  BadgeGroupshadow_staticRenderFns,
  false,
  null,
  null,
  null
  ,true
)

/* harmony default export */ var BadgeGroupshadow = (BadgeGroupshadow_component.exports);
// CONCATENATED MODULE: ./src/components/Box.vue?shadow
var Boxshadow_render, Boxshadow_staticRenderFns
var Boxshadow_script = {}


/* normalize component */

var Boxshadow_component = normalizeComponent(
  Boxshadow_script,
  Boxshadow_render,
  Boxshadow_staticRenderFns,
  false,
  null,
  null,
  null
  ,true
)

/* harmony default export */ var Boxshadow = (Boxshadow_component.exports);
// CONCATENATED MODULE: ./src/components/Breadcrumb.vue?shadow
var Breadcrumbshadow_render, Breadcrumbshadow_staticRenderFns
var Breadcrumbshadow_script = {}


/* normalize component */

var Breadcrumbshadow_component = normalizeComponent(
  Breadcrumbshadow_script,
  Breadcrumbshadow_render,
  Breadcrumbshadow_staticRenderFns,
  false,
  null,
  null,
  null
  ,true
)

/* harmony default export */ var Breadcrumbshadow = (Breadcrumbshadow_component.exports);
// CONCATENATED MODULE: ./src/components/Button.vue?shadow
var Buttonshadow_render, Buttonshadow_staticRenderFns
var Buttonshadow_script = {}


/* normalize component */

var Buttonshadow_component = normalizeComponent(
  Buttonshadow_script,
  Buttonshadow_render,
  Buttonshadow_staticRenderFns,
  false,
  null,
  null,
  null
  ,true
)

/* harmony default export */ var Buttonshadow = (Buttonshadow_component.exports);
// CONCATENATED MODULE: ./src/components/ButtonGroup.vue?shadow
var ButtonGroupshadow_render, ButtonGroupshadow_staticRenderFns
var ButtonGroupshadow_script = {}


/* normalize component */

var ButtonGroupshadow_component = normalizeComponent(
  ButtonGroupshadow_script,
  ButtonGroupshadow_render,
  ButtonGroupshadow_staticRenderFns,
  false,
  null,
  null,
  null
  ,true
)

/* harmony default export */ var ButtonGroupshadow = (ButtonGroupshadow_component.exports);
// CONCATENATED MODULE: ./src/components/CheckBox.vue?shadow
var CheckBoxshadow_render, CheckBoxshadow_staticRenderFns
var CheckBoxshadow_script = {}


/* normalize component */

var CheckBoxshadow_component = normalizeComponent(
  CheckBoxshadow_script,
  CheckBoxshadow_render,
  CheckBoxshadow_staticRenderFns,
  false,
  null,
  null,
  null
  ,true
)

/* harmony default export */ var CheckBoxshadow = (CheckBoxshadow_component.exports);
// CONCATENATED MODULE: ./src/components/CheckBoxGroup.vue?shadow
var CheckBoxGroupshadow_render, CheckBoxGroupshadow_staticRenderFns
var CheckBoxGroupshadow_script = {}


/* normalize component */

var CheckBoxGroupshadow_component = normalizeComponent(
  CheckBoxGroupshadow_script,
  CheckBoxGroupshadow_render,
  CheckBoxGroupshadow_staticRenderFns,
  false,
  null,
  null,
  null
  ,true
)

/* harmony default export */ var CheckBoxGroupshadow = (CheckBoxGroupshadow_component.exports);
// CONCATENATED MODULE: ./src/components/CircularProgress.vue?shadow
var CircularProgressshadow_render, CircularProgressshadow_staticRenderFns
var CircularProgressshadow_script = {}


/* normalize component */

var CircularProgressshadow_component = normalizeComponent(
  CircularProgressshadow_script,
  CircularProgressshadow_render,
  CircularProgressshadow_staticRenderFns,
  false,
  null,
  null,
  null
  ,true
)

/* harmony default export */ var CircularProgressshadow = (CircularProgressshadow_component.exports);
// CONCATENATED MODULE: ./src/components/CloseButton.vue?shadow
var CloseButtonshadow_render, CloseButtonshadow_staticRenderFns
var CloseButtonshadow_script = {}


/* normalize component */

var CloseButtonshadow_component = normalizeComponent(
  CloseButtonshadow_script,
  CloseButtonshadow_render,
  CloseButtonshadow_staticRenderFns,
  false,
  null,
  null,
  null
  ,true
)

/* harmony default export */ var CloseButtonshadow = (CloseButtonshadow_component.exports);
// CONCATENATED MODULE: ./src/components/Collapse.vue?shadow
var Collapseshadow_render, Collapseshadow_staticRenderFns
var Collapseshadow_script = {}


/* normalize component */

var Collapseshadow_component = normalizeComponent(
  Collapseshadow_script,
  Collapseshadow_render,
  Collapseshadow_staticRenderFns,
  false,
  null,
  null,
  null
  ,true
)

/* harmony default export */ var Collapseshadow = (Collapseshadow_component.exports);
// CONCATENATED MODULE: ./src/components/DialogAlert.vue?shadow
var DialogAlertshadow_render, DialogAlertshadow_staticRenderFns
var DialogAlertshadow_script = {}


/* normalize component */

var DialogAlertshadow_component = normalizeComponent(
  DialogAlertshadow_script,
  DialogAlertshadow_render,
  DialogAlertshadow_staticRenderFns,
  false,
  null,
  null,
  null
  ,true
)

/* harmony default export */ var DialogAlertshadow = (DialogAlertshadow_component.exports);
// CONCATENATED MODULE: ./src/components/Divider.vue?shadow
var Dividershadow_render, Dividershadow_staticRenderFns
var Dividershadow_script = {}


/* normalize component */

var Dividershadow_component = normalizeComponent(
  Dividershadow_script,
  Dividershadow_render,
  Dividershadow_staticRenderFns,
  false,
  null,
  null,
  null
  ,true
)

/* harmony default export */ var Dividershadow = (Dividershadow_component.exports);
// CONCATENATED MODULE: ./src/components/Drawer.vue?shadow
var Drawershadow_render, Drawershadow_staticRenderFns
var Drawershadow_script = {}


/* normalize component */

var Drawershadow_component = normalizeComponent(
  Drawershadow_script,
  Drawershadow_render,
  Drawershadow_staticRenderFns,
  false,
  null,
  null,
  null
  ,true
)

/* harmony default export */ var Drawershadow = (Drawershadow_component.exports);
// CONCATENATED MODULE: ./src/components/DrawerOverlay.vue?shadow
var DrawerOverlayshadow_render, DrawerOverlayshadow_staticRenderFns
var DrawerOverlayshadow_script = {}


/* normalize component */

var DrawerOverlayshadow_component = normalizeComponent(
  DrawerOverlayshadow_script,
  DrawerOverlayshadow_render,
  DrawerOverlayshadow_staticRenderFns,
  false,
  null,
  null,
  null
  ,true
)

/* harmony default export */ var DrawerOverlayshadow = (DrawerOverlayshadow_component.exports);
// CONCATENATED MODULE: ./src/components/FormLabel.vue?shadow
var FormLabelshadow_render, FormLabelshadow_staticRenderFns
var FormLabelshadow_script = {}


/* normalize component */

var FormLabelshadow_component = normalizeComponent(
  FormLabelshadow_script,
  FormLabelshadow_render,
  FormLabelshadow_staticRenderFns,
  false,
  null,
  null,
  null
  ,true
)

/* harmony default export */ var FormLabelshadow = (FormLabelshadow_component.exports);
// CONCATENATED MODULE: ./src/components/Heading.vue?shadow
var Headingshadow_render, Headingshadow_staticRenderFns
var Headingshadow_script = {}


/* normalize component */

var Headingshadow_component = normalizeComponent(
  Headingshadow_script,
  Headingshadow_render,
  Headingshadow_staticRenderFns,
  false,
  null,
  null,
  null
  ,true
)

/* harmony default export */ var Headingshadow = (Headingshadow_component.exports);
// CONCATENATED MODULE: ./src/components/Icon.vue?shadow
var Iconshadow_render, Iconshadow_staticRenderFns
var Iconshadow_script = {}


/* normalize component */

var Iconshadow_component = normalizeComponent(
  Iconshadow_script,
  Iconshadow_render,
  Iconshadow_staticRenderFns,
  false,
  null,
  null,
  null
  ,true
)

/* harmony default export */ var Iconshadow = (Iconshadow_component.exports);
// CONCATENATED MODULE: ./src/components/IconBox.vue?shadow
var IconBoxshadow_render, IconBoxshadow_staticRenderFns
var IconBoxshadow_script = {}


/* normalize component */

var IconBoxshadow_component = normalizeComponent(
  IconBoxshadow_script,
  IconBoxshadow_render,
  IconBoxshadow_staticRenderFns,
  false,
  null,
  null,
  null
  ,true
)

/* harmony default export */ var IconBoxshadow = (IconBoxshadow_component.exports);
// CONCATENATED MODULE: ./src/components/Image.vue?shadow
var Imageshadow_render, Imageshadow_staticRenderFns
var Imageshadow_script = {}


/* normalize component */

var Imageshadow_component = normalizeComponent(
  Imageshadow_script,
  Imageshadow_render,
  Imageshadow_staticRenderFns,
  false,
  null,
  null,
  null
  ,true
)

/* harmony default export */ var Imageshadow = (Imageshadow_component.exports);
// CONCATENATED MODULE: ./src/components/Input.vue?shadow
var Inputshadow_render, Inputshadow_staticRenderFns
var Inputshadow_script = {}


/* normalize component */

var Inputshadow_component = normalizeComponent(
  Inputshadow_script,
  Inputshadow_render,
  Inputshadow_staticRenderFns,
  false,
  null,
  null,
  null
  ,true
)

/* harmony default export */ var Inputshadow = (Inputshadow_component.exports);
// CONCATENATED MODULE: ./src/components/Link.vue?shadow
var Linkshadow_render, Linkshadow_staticRenderFns
var Linkshadow_script = {}


/* normalize component */

var Linkshadow_component = normalizeComponent(
  Linkshadow_script,
  Linkshadow_render,
  Linkshadow_staticRenderFns,
  false,
  null,
  null,
  null
  ,true
)

/* harmony default export */ var Linkshadow = (Linkshadow_component.exports);
// CONCATENATED MODULE: ./src/components/List.vue?shadow
var Listshadow_render, Listshadow_staticRenderFns
var Listshadow_script = {}


/* normalize component */

var Listshadow_component = normalizeComponent(
  Listshadow_script,
  Listshadow_render,
  Listshadow_staticRenderFns,
  false,
  null,
  null,
  null
  ,true
)

/* harmony default export */ var Listshadow = (Listshadow_component.exports);
// CONCATENATED MODULE: ./src/components/ListItem.vue?shadow
var ListItemshadow_render, ListItemshadow_staticRenderFns
var ListItemshadow_script = {}


/* normalize component */

var ListItemshadow_component = normalizeComponent(
  ListItemshadow_script,
  ListItemshadow_render,
  ListItemshadow_staticRenderFns,
  false,
  null,
  null,
  null
  ,true
)

/* harmony default export */ var ListItemshadow = (ListItemshadow_component.exports);
// CONCATENATED MODULE: ./src/components/Menu.vue?shadow
var Menushadow_render, Menushadow_staticRenderFns
var Menushadow_script = {}


/* normalize component */

var Menushadow_component = normalizeComponent(
  Menushadow_script,
  Menushadow_render,
  Menushadow_staticRenderFns,
  false,
  null,
  null,
  null
  ,true
)

/* harmony default export */ var Menushadow = (Menushadow_component.exports);
// CONCATENATED MODULE: ./src/components/MenuButton.vue?shadow
var MenuButtonshadow_render, MenuButtonshadow_staticRenderFns
var MenuButtonshadow_script = {}


/* normalize component */

var MenuButtonshadow_component = normalizeComponent(
  MenuButtonshadow_script,
  MenuButtonshadow_render,
  MenuButtonshadow_staticRenderFns,
  false,
  null,
  null,
  null
  ,true
)

/* harmony default export */ var MenuButtonshadow = (MenuButtonshadow_component.exports);
// CONCATENATED MODULE: ./src/components/Modal.vue?shadow
var Modalshadow_render, Modalshadow_staticRenderFns
var Modalshadow_script = {}


/* normalize component */

var Modalshadow_component = normalizeComponent(
  Modalshadow_script,
  Modalshadow_render,
  Modalshadow_staticRenderFns,
  false,
  null,
  null,
  null
  ,true
)

/* harmony default export */ var Modalshadow = (Modalshadow_component.exports);
// CONCATENATED MODULE: ./src/components/NumberInput.vue?shadow
var NumberInputshadow_render, NumberInputshadow_staticRenderFns
var NumberInputshadow_script = {}


/* normalize component */

var NumberInputshadow_component = normalizeComponent(
  NumberInputshadow_script,
  NumberInputshadow_render,
  NumberInputshadow_staticRenderFns,
  false,
  null,
  null,
  null
  ,true
)

/* harmony default export */ var NumberInputshadow = (NumberInputshadow_component.exports);
// CONCATENATED MODULE: ./src/components/Progress.vue?shadow
var Progressshadow_render, Progressshadow_staticRenderFns
var Progressshadow_script = {}


/* normalize component */

var Progressshadow_component = normalizeComponent(
  Progressshadow_script,
  Progressshadow_render,
  Progressshadow_staticRenderFns,
  false,
  null,
  null,
  null
  ,true
)

/* harmony default export */ var Progressshadow = (Progressshadow_component.exports);
// CONCATENATED MODULE: ./src/components/PseudoBox.vue?shadow
var PseudoBoxshadow_render, PseudoBoxshadow_staticRenderFns
var PseudoBoxshadow_script = {}


/* normalize component */

var PseudoBoxshadow_component = normalizeComponent(
  PseudoBoxshadow_script,
  PseudoBoxshadow_render,
  PseudoBoxshadow_staticRenderFns,
  false,
  null,
  null,
  null
  ,true
)

/* harmony default export */ var PseudoBoxshadow = (PseudoBoxshadow_component.exports);
// CONCATENATED MODULE: ./src/components/Radio.vue?shadow
var Radioshadow_render, Radioshadow_staticRenderFns
var Radioshadow_script = {}


/* normalize component */

var Radioshadow_component = normalizeComponent(
  Radioshadow_script,
  Radioshadow_render,
  Radioshadow_staticRenderFns,
  false,
  null,
  null,
  null
  ,true
)

/* harmony default export */ var Radioshadow = (Radioshadow_component.exports);
// CONCATENATED MODULE: ./src/components/RadioGroup.vue?shadow
var RadioGroupshadow_render, RadioGroupshadow_staticRenderFns
var RadioGroupshadow_script = {}


/* normalize component */

var RadioGroupshadow_component = normalizeComponent(
  RadioGroupshadow_script,
  RadioGroupshadow_render,
  RadioGroupshadow_staticRenderFns,
  false,
  null,
  null,
  null
  ,true
)

/* harmony default export */ var RadioGroupshadow = (RadioGroupshadow_component.exports);
// CONCATENATED MODULE: ./src/components/Select.vue?shadow
var Selectshadow_render, Selectshadow_staticRenderFns
var Selectshadow_script = {}


/* normalize component */

var Selectshadow_component = normalizeComponent(
  Selectshadow_script,
  Selectshadow_render,
  Selectshadow_staticRenderFns,
  false,
  null,
  null,
  null
  ,true
)

/* harmony default export */ var Selectshadow = (Selectshadow_component.exports);
// CONCATENATED MODULE: ./src/components/Spinner.vue?shadow
var Spinnershadow_render, Spinnershadow_staticRenderFns
var Spinnershadow_script = {}


/* normalize component */

var Spinnershadow_component = normalizeComponent(
  Spinnershadow_script,
  Spinnershadow_render,
  Spinnershadow_staticRenderFns,
  false,
  null,
  null,
  null
  ,true
)

/* harmony default export */ var Spinnershadow = (Spinnershadow_component.exports);
// CONCATENATED MODULE: ./src/components/Stack.vue?shadow
var Stackshadow_render, Stackshadow_staticRenderFns
var Stackshadow_script = {}


/* normalize component */

var Stackshadow_component = normalizeComponent(
  Stackshadow_script,
  Stackshadow_render,
  Stackshadow_staticRenderFns,
  false,
  null,
  null,
  null
  ,true
)

/* harmony default export */ var Stackshadow = (Stackshadow_component.exports);
// CONCATENATED MODULE: ./src/components/Stat.vue?shadow
var Statshadow_render, Statshadow_staticRenderFns
var Statshadow_script = {}


/* normalize component */

var Statshadow_component = normalizeComponent(
  Statshadow_script,
  Statshadow_render,
  Statshadow_staticRenderFns,
  false,
  null,
  null,
  null
  ,true
)

/* harmony default export */ var Statshadow = (Statshadow_component.exports);
// CONCATENATED MODULE: ./src/components/Switch.vue?shadow
var Switchshadow_render, Switchshadow_staticRenderFns
var Switchshadow_script = {}


/* normalize component */

var Switchshadow_component = normalizeComponent(
  Switchshadow_script,
  Switchshadow_render,
  Switchshadow_staticRenderFns,
  false,
  null,
  null,
  null
  ,true
)

/* harmony default export */ var Switchshadow = (Switchshadow_component.exports);
// CONCATENATED MODULE: ./src/components/TabGroup.vue?shadow
var TabGroupshadow_render, TabGroupshadow_staticRenderFns
var TabGroupshadow_script = {}


/* normalize component */

var TabGroupshadow_component = normalizeComponent(
  TabGroupshadow_script,
  TabGroupshadow_render,
  TabGroupshadow_staticRenderFns,
  false,
  null,
  null,
  null
  ,true
)

/* harmony default export */ var TabGroupshadow = (TabGroupshadow_component.exports);
// CONCATENATED MODULE: ./src/components/TabSelector.vue?shadow
var TabSelectorshadow_render, TabSelectorshadow_staticRenderFns
var TabSelectorshadow_script = {}


/* normalize component */

var TabSelectorshadow_component = normalizeComponent(
  TabSelectorshadow_script,
  TabSelectorshadow_render,
  TabSelectorshadow_staticRenderFns,
  false,
  null,
  null,
  null
  ,true
)

/* harmony default export */ var TabSelectorshadow = (TabSelectorshadow_component.exports);
// CONCATENATED MODULE: ./src/components/Tag.vue?shadow
var Tagshadow_render, Tagshadow_staticRenderFns
var Tagshadow_script = {}


/* normalize component */

var Tagshadow_component = normalizeComponent(
  Tagshadow_script,
  Tagshadow_render,
  Tagshadow_staticRenderFns,
  false,
  null,
  null,
  null
  ,true
)

/* harmony default export */ var Tagshadow = (Tagshadow_component.exports);
// CONCATENATED MODULE: ./src/components/Text.vue?shadow
var Textshadow_render, Textshadow_staticRenderFns
var Textshadow_script = {}


/* normalize component */

var Textshadow_component = normalizeComponent(
  Textshadow_script,
  Textshadow_render,
  Textshadow_staticRenderFns,
  false,
  null,
  null,
  null
  ,true
)

/* harmony default export */ var Textshadow = (Textshadow_component.exports);
// CONCATENATED MODULE: ./src/components/TextArea.vue?shadow
var TextAreashadow_render, TextAreashadow_staticRenderFns
var TextAreashadow_script = {}


/* normalize component */

var TextAreashadow_component = normalizeComponent(
  TextAreashadow_script,
  TextAreashadow_render,
  TextAreashadow_staticRenderFns,
  false,
  null,
  null,
  null
  ,true
)

/* harmony default export */ var TextAreashadow = (TextAreashadow_component.exports);
// CONCATENATED MODULE: ./src/components/ToolTip.vue?shadow
var ToolTipshadow_render, ToolTipshadow_staticRenderFns
var ToolTipshadow_script = {}


/* normalize component */

var ToolTipshadow_component = normalizeComponent(
  ToolTipshadow_script,
  ToolTipshadow_render,
  ToolTipshadow_staticRenderFns,
  false,
  null,
  null,
  null
  ,true
)

/* harmony default export */ var ToolTipshadow = (ToolTipshadow_component.exports);
// CONCATENATED MODULE: ./node_modules/@vue/cli-service/lib/commands/build/entry-wc.js




// runtime shared by every component chunk





window.customElements.define('elastik-ui-accordion', vue_wc_wrapper(external_Vue_default.a, Accordionshadow))


window.customElements.define('elastik-ui-accordion-item', vue_wc_wrapper(external_Vue_default.a, AccordionItemshadow))


window.customElements.define('elastik-ui-alert', vue_wc_wrapper(external_Vue_default.a, Alertshadow))


window.customElements.define('elastik-ui-aspect-ratio-box', vue_wc_wrapper(external_Vue_default.a, AspectRatioBoxshadow))


window.customElements.define('elastik-ui-avatar', vue_wc_wrapper(external_Vue_default.a, Avatarshadow))


window.customElements.define('elastik-ui-avatar-badge', vue_wc_wrapper(external_Vue_default.a, AvatarBadgeshadow))


window.customElements.define('elastik-ui-avatar-group', vue_wc_wrapper(external_Vue_default.a, AvatarGroupshadow))


window.customElements.define('elastik-ui-badge', vue_wc_wrapper(external_Vue_default.a, Badgeshadow))


window.customElements.define('elastik-ui-badge-group', vue_wc_wrapper(external_Vue_default.a, BadgeGroupshadow))


window.customElements.define('elastik-ui-box', vue_wc_wrapper(external_Vue_default.a, Boxshadow))


window.customElements.define('elastik-ui-breadcrumb', vue_wc_wrapper(external_Vue_default.a, Breadcrumbshadow))


window.customElements.define('elastik-ui-button', vue_wc_wrapper(external_Vue_default.a, Buttonshadow))


window.customElements.define('elastik-ui-button-group', vue_wc_wrapper(external_Vue_default.a, ButtonGroupshadow))


window.customElements.define('elastik-ui-check-box', vue_wc_wrapper(external_Vue_default.a, CheckBoxshadow))


window.customElements.define('elastik-ui-check-box-group', vue_wc_wrapper(external_Vue_default.a, CheckBoxGroupshadow))


window.customElements.define('elastik-ui-circular-progress', vue_wc_wrapper(external_Vue_default.a, CircularProgressshadow))


window.customElements.define('elastik-ui-close-button', vue_wc_wrapper(external_Vue_default.a, CloseButtonshadow))


window.customElements.define('elastik-ui-collapse', vue_wc_wrapper(external_Vue_default.a, Collapseshadow))


window.customElements.define('elastik-ui-dialog-alert', vue_wc_wrapper(external_Vue_default.a, DialogAlertshadow))


window.customElements.define('elastik-ui-divider', vue_wc_wrapper(external_Vue_default.a, Dividershadow))


window.customElements.define('elastik-ui-drawer', vue_wc_wrapper(external_Vue_default.a, Drawershadow))


window.customElements.define('elastik-ui-drawer-overlay', vue_wc_wrapper(external_Vue_default.a, DrawerOverlayshadow))


window.customElements.define('elastik-ui-form-label', vue_wc_wrapper(external_Vue_default.a, FormLabelshadow))


window.customElements.define('elastik-ui-heading', vue_wc_wrapper(external_Vue_default.a, Headingshadow))


window.customElements.define('elastik-ui-icon', vue_wc_wrapper(external_Vue_default.a, Iconshadow))


window.customElements.define('elastik-ui-icon-box', vue_wc_wrapper(external_Vue_default.a, IconBoxshadow))


window.customElements.define('elastik-ui-image', vue_wc_wrapper(external_Vue_default.a, Imageshadow))


window.customElements.define('elastik-ui-input', vue_wc_wrapper(external_Vue_default.a, Inputshadow))


window.customElements.define('elastik-ui-link', vue_wc_wrapper(external_Vue_default.a, Linkshadow))


window.customElements.define('elastik-ui-list', vue_wc_wrapper(external_Vue_default.a, Listshadow))


window.customElements.define('elastik-ui-list-item', vue_wc_wrapper(external_Vue_default.a, ListItemshadow))


window.customElements.define('elastik-ui-menu', vue_wc_wrapper(external_Vue_default.a, Menushadow))


window.customElements.define('elastik-ui-menu-button', vue_wc_wrapper(external_Vue_default.a, MenuButtonshadow))


window.customElements.define('elastik-ui-modal', vue_wc_wrapper(external_Vue_default.a, Modalshadow))


window.customElements.define('elastik-ui-number-input', vue_wc_wrapper(external_Vue_default.a, NumberInputshadow))


window.customElements.define('elastik-ui-progress', vue_wc_wrapper(external_Vue_default.a, Progressshadow))


window.customElements.define('elastik-ui-pseudo-box', vue_wc_wrapper(external_Vue_default.a, PseudoBoxshadow))


window.customElements.define('elastik-ui-radio', vue_wc_wrapper(external_Vue_default.a, Radioshadow))


window.customElements.define('elastik-ui-radio-group', vue_wc_wrapper(external_Vue_default.a, RadioGroupshadow))


window.customElements.define('elastik-ui-select', vue_wc_wrapper(external_Vue_default.a, Selectshadow))


window.customElements.define('elastik-ui-spinner', vue_wc_wrapper(external_Vue_default.a, Spinnershadow))


window.customElements.define('elastik-ui-stack', vue_wc_wrapper(external_Vue_default.a, Stackshadow))


window.customElements.define('elastik-ui-stat', vue_wc_wrapper(external_Vue_default.a, Statshadow))


window.customElements.define('elastik-ui-switch', vue_wc_wrapper(external_Vue_default.a, Switchshadow))


window.customElements.define('elastik-ui-tab-group', vue_wc_wrapper(external_Vue_default.a, TabGroupshadow))


window.customElements.define('elastik-ui-tab-selector', vue_wc_wrapper(external_Vue_default.a, TabSelectorshadow))


window.customElements.define('elastik-ui-tag', vue_wc_wrapper(external_Vue_default.a, Tagshadow))


window.customElements.define('elastik-ui-text', vue_wc_wrapper(external_Vue_default.a, Textshadow))


window.customElements.define('elastik-ui-text-area', vue_wc_wrapper(external_Vue_default.a, TextAreashadow))


window.customElements.define('elastik-ui-tool-tip', vue_wc_wrapper(external_Vue_default.a, ToolTipshadow))

/***/ }),

/***/ "5faf":
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__("41d1");
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to Shadow Root
var add = __webpack_require__("35d6").default
module.exports.__inject__ = function (shadowRoot) {
  add("a572d43a", content, shadowRoot)
};

/***/ }),

/***/ "7dcb":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_8_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_node_modules_vue_cli_service_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_3_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_1_4_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_cli_service_node_modules_vue_loader_lib_index_js_vue_loader_options_Accordion_vue_vue_type_style_index_0_id_591b19db_prod_lang_scss_scoped_true_shadow__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("886f");
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_8_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_node_modules_vue_cli_service_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_3_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_1_4_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_cli_service_node_modules_vue_loader_lib_index_js_vue_loader_options_Accordion_vue_vue_type_style_index_0_id_591b19db_prod_lang_scss_scoped_true_shadow__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_8_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_node_modules_vue_cli_service_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_3_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_1_4_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_cli_service_node_modules_vue_loader_lib_index_js_vue_loader_options_Accordion_vue_vue_type_style_index_0_id_591b19db_prod_lang_scss_scoped_true_shadow__WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_8_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_node_modules_vue_cli_service_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_3_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_1_4_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_cli_service_node_modules_vue_loader_lib_index_js_vue_loader_options_Accordion_vue_vue_type_style_index_0_id_591b19db_prod_lang_scss_scoped_true_shadow__WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_8_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_node_modules_vue_cli_service_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_3_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_1_4_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_cli_service_node_modules_vue_loader_lib_index_js_vue_loader_options_Accordion_vue_vue_type_style_index_0_id_591b19db_prod_lang_scss_scoped_true_shadow__WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ "886f":
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__("02af");
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to Shadow Root
var add = __webpack_require__("35d6").default
module.exports.__inject__ = function (shadowRoot) {
  add("1eea0f21", content, shadowRoot)
};

/***/ }),

/***/ "8875":
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;// addapted from the document.currentScript polyfill by Adam Miller
// MIT license
// source: https://github.com/amiller-gh/currentScript-polyfill

// added support for Firefox https://bugzilla.mozilla.org/show_bug.cgi?id=1620505

(function (root, factory) {
  if (true) {
    !(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
  } else {}
}(typeof self !== 'undefined' ? self : this, function () {
  function getCurrentScript () {
    var descriptor = Object.getOwnPropertyDescriptor(document, 'currentScript')
    // for chrome
    if (!descriptor && 'currentScript' in document && document.currentScript) {
      return document.currentScript
    }

    // for other browsers with native support for currentScript
    if (descriptor && descriptor.get !== getCurrentScript && document.currentScript) {
      return document.currentScript
    }
  
    // IE 8-10 support script readyState
    // IE 11+ & Firefox support stack trace
    try {
      throw new Error();
    }
    catch (err) {
      // Find the second match for the "at" string to get file src url from stack.
      var ieStackRegExp = /.*at [^(]*\((.*):(.+):(.+)\)$/ig,
        ffStackRegExp = /@([^@]*):(\d+):(\d+)\s*$/ig,
        stackDetails = ieStackRegExp.exec(err.stack) || ffStackRegExp.exec(err.stack),
        scriptLocation = (stackDetails && stackDetails[1]) || false,
        line = (stackDetails && stackDetails[2]) || false,
        currentLocation = document.location.href.replace(document.location.hash, ''),
        pageSource,
        inlineScriptSourceRegExp,
        inlineScriptSource,
        scripts = document.getElementsByTagName('script'); // Live NodeList collection
  
      if (scriptLocation === currentLocation) {
        pageSource = document.documentElement.outerHTML;
        inlineScriptSourceRegExp = new RegExp('(?:[^\\n]+?\\n){0,' + (line - 2) + '}[^<]*<script>([\\d\\D]*?)<\\/script>[\\d\\D]*', 'i');
        inlineScriptSource = pageSource.replace(inlineScriptSourceRegExp, '$1').trim();
      }
  
      for (var i = 0; i < scripts.length; i++) {
        // If ready state is interactive, return the script tag
        if (scripts[i].readyState === 'interactive') {
          return scripts[i];
        }
  
        // If src matches, return the script tag
        if (scripts[i].src === scriptLocation) {
          return scripts[i];
        }
  
        // If inline source matches, return the script tag
        if (
          scriptLocation === currentLocation &&
          scripts[i].innerHTML &&
          scripts[i].innerHTML.trim() === inlineScriptSource
        ) {
          return scripts[i];
        }
      }
  
      // If no match, return null
      return null;
    }
  };

  return getCurrentScript
}));


/***/ }),

/***/ "8bbf":
/***/ (function(module, exports) {

module.exports = Vue;

/***/ })

/******/ });
//# sourceMappingURL=elastik-ui.js.map