/*! For license information please see input-control-stories-index-story.302f7a32.iframe.bundle.js.LICENSE.txt */
"use strict";(self.webpackChunkgutenberg=self.webpackChunkgutenberg||[]).push([[7152],{"./packages/components/src/input-control/input-suffix-wrapper.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{U:()=>InputControlSuffixWrapper,Z:()=>__WEBPACK_DEFAULT_EXPORT__});var _spacer__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./packages/components/src/spacer/component.tsx"),_ui_context__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./packages/components/src/ui/context/use-context-system.js"),_ui_context__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./packages/components/src/ui/context/context-connect.ts"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/jsx-runtime.js");function UnconnectedInputControlSuffixWrapper(props,forwardedRef){const derivedProps=(0,_ui_context__WEBPACK_IMPORTED_MODULE_1__.y)(props,"InputControlSuffixWrapper");return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_spacer__WEBPACK_IMPORTED_MODULE_2__.Z,{marginBottom:0,...derivedProps,ref:forwardedRef})}UnconnectedInputControlSuffixWrapper.displayName="UnconnectedInputControlSuffixWrapper";const InputControlSuffixWrapper=(0,_ui_context__WEBPACK_IMPORTED_MODULE_3__.Iq)(UnconnectedInputControlSuffixWrapper,"InputControlSuffixWrapper"),__WEBPACK_DEFAULT_EXPORT__=InputControlSuffixWrapper;try{InputControlSuffixWrapper.displayName="InputControlSuffixWrapper",InputControlSuffixWrapper.__docgenInfo={description:"A convenience wrapper for the `suffix` when you want to apply\nstandard padding in accordance with the size variant.\n\n```jsx\nimport {\n  __experimentalInputControl as InputControl,\n  __experimentalInputControlSuffixWrapper as InputControlSuffixWrapper,\n} from '@wordpress/components';\n\n<InputControl\n  suffix={<InputControlSuffixWrapper>%</InputControlSuffixWrapper>}\n/>\n```",displayName:"InputControlSuffixWrapper",props:{children:{defaultValue:null,description:"The suffix to be inserted.",name:"children",required:!0,type:{name:"ReactNode"}},as:{defaultValue:null,description:"The HTML element or React component to render the component as.",name:"as",required:!1,type:{name:'"symbol" | "object" | ComponentClass<any, any> | FunctionComponent<any> | "a" | "abbr" | "address" | "area" | "article" | "aside" | "audio" | ... 515 more ... | ("view" & FunctionComponent<...>)'}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["packages/components/src/input-control/input-suffix-wrapper.tsx#InputControlSuffixWrapper"]={docgenInfo:InputControlSuffixWrapper.__docgenInfo,name:"InputControlSuffixWrapper",path:"packages/components/src/input-control/input-suffix-wrapper.tsx#InputControlSuffixWrapper"})}catch(__react_docgen_typescript_loader_error){}},"./packages/components/src/ui/context/constants.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{cT:()=>COMPONENT_NAMESPACE,_3:()=>CONNECTED_NAMESPACE,rE:()=>CONNECT_STATIC_NAMESPACE});const COMPONENT_NAMESPACE="data-wp-component",CONNECTED_NAMESPACE="data-wp-c16t",CONNECT_STATIC_NAMESPACE="__contextSystemKey__"},"./packages/components/src/ui/context/context-connect.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Iq:()=>contextConnect,Kc:()=>contextConnectWithoutRef,H:()=>hasConnectNamespace});var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js"),_wordpress_warning__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./packages/warning/build-module/index.js"),_constants__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./packages/components/src/ui/context/constants.js"),_get_styled_class_name_from_key__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./packages/components/src/ui/context/get-styled-class-name-from-key.ts");function contextConnect(Component,namespace){return _contextConnect(Component,namespace,{forwardsRef:!0})}function contextConnectWithoutRef(Component,namespace){return _contextConnect(Component,namespace)}function _contextConnect(Component,namespace,options){const WrappedComponent=options?.forwardsRef?(0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.forwardRef)(Component):Component;void 0===namespace&&"undefined"!=typeof SCRIPT_DEBUG&&!0===SCRIPT_DEBUG&&(0,_wordpress_warning__WEBPACK_IMPORTED_MODULE_1__.Z)("contextConnect: Please provide a namespace");let mergedNamespace=WrappedComponent[_constants__WEBPACK_IMPORTED_MODULE_2__.rE]||[namespace];return Array.isArray(namespace)&&(mergedNamespace=[...mergedNamespace,...namespace]),"string"==typeof namespace&&(mergedNamespace=[...mergedNamespace,namespace]),Object.assign(WrappedComponent,{[_constants__WEBPACK_IMPORTED_MODULE_2__.rE]:[...new Set(mergedNamespace)],displayName:namespace,selector:`.${(0,_get_styled_class_name_from_key__WEBPACK_IMPORTED_MODULE_3__.l)(namespace)}`})}function getConnectNamespace(Component){if(!Component)return[];let namespaces=[];return Component[_constants__WEBPACK_IMPORTED_MODULE_2__.rE]&&(namespaces=Component[_constants__WEBPACK_IMPORTED_MODULE_2__.rE]),Component.type&&Component.type[_constants__WEBPACK_IMPORTED_MODULE_2__.rE]&&(namespaces=Component.type[_constants__WEBPACK_IMPORTED_MODULE_2__.rE]),namespaces}function hasConnectNamespace(Component,match){return!!Component&&("string"==typeof match?getConnectNamespace(Component).includes(match):!!Array.isArray(match)&&match.some((result=>getConnectNamespace(Component).includes(result))))}},"./packages/components/src/ui/context/context-system-provider.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{eb:()=>useComponentsContext,G8:()=>ContextSystemProvider});var deepmerge__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/deepmerge/dist/cjs.js"),deepmerge__WEBPACK_IMPORTED_MODULE_0___default=__webpack_require__.n(deepmerge__WEBPACK_IMPORTED_MODULE_0__),fast_deep_equal_es6__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/fast-deep-equal/es6/index.js"),fast_deep_equal_es6__WEBPACK_IMPORTED_MODULE_1___default=__webpack_require__.n(fast_deep_equal_es6__WEBPACK_IMPORTED_MODULE_1__),is_plain_object__WEBPACK_IMPORTED_MODULE_6__=__webpack_require__("./node_modules/is-plain-object/dist/is-plain-object.mjs"),_wordpress_element__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./node_modules/react/index.js"),_wordpress_warning__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__("./packages/warning/build-module/index.js"),_utils__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./packages/components/src/utils/hooks/use-update-effect.js"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/react/jsx-runtime.js");const ComponentsContext=(0,_wordpress_element__WEBPACK_IMPORTED_MODULE_3__.createContext)({}),useComponentsContext=()=>(0,_wordpress_element__WEBPACK_IMPORTED_MODULE_3__.useContext)(ComponentsContext);const BaseContextSystemProvider=({children,value})=>{const contextValue=function useContextSystemBridge({value}){const parentContext=useComponentsContext(),valueRef=(0,_wordpress_element__WEBPACK_IMPORTED_MODULE_3__.useRef)(value);return(0,_utils__WEBPACK_IMPORTED_MODULE_4__.Z)((()=>{fast_deep_equal_es6__WEBPACK_IMPORTED_MODULE_1___default()(valueRef.current,value)&&valueRef.current!==value&&"undefined"!=typeof SCRIPT_DEBUG&&!0===SCRIPT_DEBUG&&(0,_wordpress_warning__WEBPACK_IMPORTED_MODULE_5__.Z)(`Please memoize your context: ${JSON.stringify(value)}`)}),[value]),(0,_wordpress_element__WEBPACK_IMPORTED_MODULE_3__.useMemo)((()=>deepmerge__WEBPACK_IMPORTED_MODULE_0___default()(null!=parentContext?parentContext:{},null!=value?value:{},{isMergeableObject:is_plain_object__WEBPACK_IMPORTED_MODULE_6__.P})),[parentContext,value])}({value});return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(ComponentsContext.Provider,{value:contextValue,children})};BaseContextSystemProvider.displayName="BaseContextSystemProvider";const ContextSystemProvider=(0,_wordpress_element__WEBPACK_IMPORTED_MODULE_3__.memo)(BaseContextSystemProvider);BaseContextSystemProvider.__docgenInfo={description:"A Provider component that can modify props for connected components within\nthe Context system.\n\n@example\n```jsx\n<ContextSystemProvider value={{ Button: { size: 'small' }}}>\n  <Button>...</Button>\n</ContextSystemProvider>\n```\n\n@template {Record<string, any>} T\n@param {Object}                    options\n@param {import('react').ReactNode} options.children Children to render.\n@param {T}                         options.value    Props to render into connected components.\n@return {JSX.Element} A Provider wrapped component.",methods:[],displayName:"BaseContextSystemProvider"}},"./packages/components/src/ui/context/get-styled-class-name-from-key.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{l:()=>getStyledClassNameFromKey});var change_case__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/param-case/dist.es2015/index.js");const getStyledClassNameFromKey=(0,__webpack_require__("./node_modules/memize/dist/index.js").Z)((function getStyledClassName(namespace){return`components-${(0,change_case__WEBPACK_IMPORTED_MODULE_0__.o)(namespace)}`}))},"./packages/components/src/ui/context/use-context-system.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{y:()=>useContextSystem});var build_module=__webpack_require__("./packages/warning/build-module/index.js"),context_system_provider=__webpack_require__("./packages/components/src/ui/context/context-system-provider.js"),constants=__webpack_require__("./packages/components/src/ui/context/constants.js");var get_styled_class_name_from_key=__webpack_require__("./packages/components/src/ui/context/get-styled-class-name-from-key.ts"),use_cx=__webpack_require__("./packages/components/src/utils/hooks/use-cx.ts");function useContextSystem(props,namespace){const contextSystemProps=(0,context_system_provider.eb)();void 0===namespace&&"undefined"!=typeof SCRIPT_DEBUG&&!0===SCRIPT_DEBUG&&(0,build_module.Z)("useContextSystem: Please provide a namespace");const contextProps=contextSystemProps?.[namespace]||{},finalComponentProps={[constants._3]:!0,...(componentName=namespace,{[constants.cT]:componentName})};var componentName;const{_overrides:overrideProps,...otherContextProps}=contextProps,initialMergedProps=Object.entries(otherContextProps).length?Object.assign({},otherContextProps,props):props,classes=(0,use_cx.I)()((0,get_styled_class_name_from_key.l)(namespace),props.className),rendered="function"==typeof initialMergedProps.renderChildren?initialMergedProps.renderChildren(initialMergedProps):initialMergedProps.children;for(const key in initialMergedProps)finalComponentProps[key]=initialMergedProps[key];for(const key in overrideProps)finalComponentProps[key]=overrideProps[key];return void 0!==rendered&&(finalComponentProps.children=rendered),finalComponentProps.className=classes,finalComponentProps}},"./packages/components/src/utils/hooks/use-update-effect.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Z:()=>__WEBPACK_DEFAULT_EXPORT__});var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js");const __WEBPACK_DEFAULT_EXPORT__=function useUpdateEffect(effect,deps){const mounted=(0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.useRef)(!1);(0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.useEffect)((()=>{if(mounted.current)return effect();mounted.current=!0}),deps)}},"./packages/components/src/view/component.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Z:()=>__WEBPACK_DEFAULT_EXPORT__});const View=(0,__webpack_require__("./node_modules/@emotion/styled/base/dist/emotion-styled-base.browser.esm.js").Z)("div",{target:"e19lxcc00"})("");View.selector=".components-view",View.displayName="View";const __WEBPACK_DEFAULT_EXPORT__=View;try{View.displayName="View",View.__docgenInfo={description:"`View` is a core component that renders everything in the library.\nIt is the principle component in the entire library.\n\n```jsx\nimport { View } from `@wordpress/components`;\n\nfunction Example() {\n\treturn (\n\t\t<View>\n\t\t\t Code is Poetry\n\t\t</View>\n\t);\n}\n```",displayName:"View",props:{as:{defaultValue:null,description:"The HTML element or React component to render the component as.",name:"as",required:!1,type:{name:'"symbol" | "object" | ComponentClass<any, any> | FunctionComponent<any> | "a" | "abbr" | "address" | "area" | "article" | "aside" | "audio" | ... 515 more ... | ("view" & FunctionComponent<...>)'}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["packages/components/src/view/component.tsx#View"]={docgenInfo:View.__docgenInfo,name:"View",path:"packages/components/src/view/component.tsx#View"})}catch(__react_docgen_typescript_loader_error){}},"./packages/components/src/visually-hidden/component.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Z:()=>visually_hidden_component});var use_context_system=__webpack_require__("./packages/components/src/ui/context/use-context-system.js"),context_connect=__webpack_require__("./packages/components/src/ui/context/context-connect.ts");const visuallyHidden={border:0,clip:"rect(1px, 1px, 1px, 1px)",WebkitClipPath:"inset( 50% )",clipPath:"inset( 50% )",height:"1px",margin:"-1px",overflow:"hidden",padding:0,position:"absolute",width:"1px",wordWrap:"normal"};var component=__webpack_require__("./packages/components/src/view/component.tsx"),jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js");function UnconnectedVisuallyHidden(props,forwardedRef){const{style:styleProp,...contextProps}=(0,use_context_system.y)(props,"VisuallyHidden");return(0,jsx_runtime.jsx)(component.Z,{ref:forwardedRef,...contextProps,style:{...visuallyHidden,...styleProp||{}}})}UnconnectedVisuallyHidden.displayName="UnconnectedVisuallyHidden";const VisuallyHidden=(0,context_connect.Iq)(UnconnectedVisuallyHidden,"VisuallyHidden"),visually_hidden_component=VisuallyHidden;try{VisuallyHidden.displayName="VisuallyHidden",VisuallyHidden.__docgenInfo={description:"`VisuallyHidden` is a component used to render text intended to be visually\nhidden, but will show for alternate devices, for example a screen reader.\n\n```jsx\nimport { VisuallyHidden } from `@wordpress/components`;\n\nfunction Example() {\n  return (\n    <VisuallyHidden>\n      <label>Code is Poetry</label>\n    </VisuallyHidden>\n  );\n}\n```",displayName:"VisuallyHidden",props:{children:{defaultValue:null,description:"The children elements.",name:"children",required:!0,type:{name:"ReactNode"}},as:{defaultValue:null,description:"The HTML element or React component to render the component as.",name:"as",required:!1,type:{name:'"symbol" | "object" | ComponentClass<any, any> | FunctionComponent<any> | "a" | "abbr" | "address" | "area" | "article" | "aside" | "audio" | ... 515 more ... | ("view" & FunctionComponent<...>)'}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["packages/components/src/visually-hidden/component.tsx#VisuallyHidden"]={docgenInfo:VisuallyHidden.__docgenInfo,name:"VisuallyHidden",path:"packages/components/src/visually-hidden/component.tsx#VisuallyHidden"})}catch(__react_docgen_typescript_loader_error){}},"./packages/compose/build-module/hooks/use-instance-id/index.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Z:()=>__WEBPACK_DEFAULT_EXPORT__});var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js");const instanceMap=new WeakMap;const __WEBPACK_DEFAULT_EXPORT__=function useInstanceId(object,prefix,preferredId){return(0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.useMemo)((()=>{if(preferredId)return preferredId;const id=function createId(object){const instances=instanceMap.get(object)||0;return instanceMap.set(object,instances+1),instances}(object);return prefix?`${prefix}-${id}`:id}),[object,preferredId,prefix])}},"./packages/deprecated/build-module/index.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Z:()=>deprecated});var _wordpress_hooks__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./packages/hooks/build-module/index.js");const logged=Object.create(null);function deprecated(feature,options={}){const{since,version,alternative,plugin,link,hint}=options,message=`${feature} is deprecated${since?` since version ${since}`:""}${version?` and will be removed${plugin?` from ${plugin}`:""} in version ${version}`:""}.${alternative?` Please use ${alternative} instead.`:""}${link?` See: ${link}`:""}${hint?` Note: ${hint}`:""}`;message in logged||((0,_wordpress_hooks__WEBPACK_IMPORTED_MODULE_0__.Kw)("deprecated",feature,options,message),console.warn(message),logged[message]=!0)}},"./node_modules/deepmerge/dist/cjs.js":module=>{var isMergeableObject=function isMergeableObject(value){return function isNonNullObject(value){return!!value&&"object"==typeof value}(value)&&!function isSpecial(value){var stringValue=Object.prototype.toString.call(value);return"[object RegExp]"===stringValue||"[object Date]"===stringValue||function isReactElement(value){return value.$$typeof===REACT_ELEMENT_TYPE}(value)}(value)};var REACT_ELEMENT_TYPE="function"==typeof Symbol&&Symbol.for?Symbol.for("react.element"):60103;function cloneUnlessOtherwiseSpecified(value,options){return!1!==options.clone&&options.isMergeableObject(value)?deepmerge(function emptyTarget(val){return Array.isArray(val)?[]:{}}(value),value,options):value}function defaultArrayMerge(target,source,options){return target.concat(source).map((function(element){return cloneUnlessOtherwiseSpecified(element,options)}))}function getKeys(target){return Object.keys(target).concat(function getEnumerableOwnPropertySymbols(target){return Object.getOwnPropertySymbols?Object.getOwnPropertySymbols(target).filter((function(symbol){return Object.propertyIsEnumerable.call(target,symbol)})):[]}(target))}function propertyIsOnObject(object,property){try{return property in object}catch(_){return!1}}function mergeObject(target,source,options){var destination={};return options.isMergeableObject(target)&&getKeys(target).forEach((function(key){destination[key]=cloneUnlessOtherwiseSpecified(target[key],options)})),getKeys(source).forEach((function(key){(function propertyIsUnsafe(target,key){return propertyIsOnObject(target,key)&&!(Object.hasOwnProperty.call(target,key)&&Object.propertyIsEnumerable.call(target,key))})(target,key)||(propertyIsOnObject(target,key)&&options.isMergeableObject(source[key])?destination[key]=function getMergeFunction(key,options){if(!options.customMerge)return deepmerge;var customMerge=options.customMerge(key);return"function"==typeof customMerge?customMerge:deepmerge}(key,options)(target[key],source[key],options):destination[key]=cloneUnlessOtherwiseSpecified(source[key],options))})),destination}function deepmerge(target,source,options){(options=options||{}).arrayMerge=options.arrayMerge||defaultArrayMerge,options.isMergeableObject=options.isMergeableObject||isMergeableObject,options.cloneUnlessOtherwiseSpecified=cloneUnlessOtherwiseSpecified;var sourceIsArray=Array.isArray(source);return sourceIsArray===Array.isArray(target)?sourceIsArray?options.arrayMerge(target,source,options):mergeObject(target,source,options):cloneUnlessOtherwiseSpecified(source,options)}deepmerge.all=function deepmergeAll(array,options){if(!Array.isArray(array))throw new Error("first argument should be an array");return array.reduce((function(prev,next){return deepmerge(prev,next,options)}),{})};var deepmerge_1=deepmerge;module.exports=deepmerge_1},"./node_modules/fast-deep-equal/es6/index.js":module=>{module.exports=function equal(a,b){if(a===b)return!0;if(a&&b&&"object"==typeof a&&"object"==typeof b){if(a.constructor!==b.constructor)return!1;var length,i,keys;if(Array.isArray(a)){if((length=a.length)!=b.length)return!1;for(i=length;0!=i--;)if(!equal(a[i],b[i]))return!1;return!0}if(a instanceof Map&&b instanceof Map){if(a.size!==b.size)return!1;for(i of a.entries())if(!b.has(i[0]))return!1;for(i of a.entries())if(!equal(i[1],b.get(i[0])))return!1;return!0}if(a instanceof Set&&b instanceof Set){if(a.size!==b.size)return!1;for(i of a.entries())if(!b.has(i[0]))return!1;return!0}if(ArrayBuffer.isView(a)&&ArrayBuffer.isView(b)){if((length=a.length)!=b.length)return!1;for(i=length;0!=i--;)if(a[i]!==b[i])return!1;return!0}if(a.constructor===RegExp)return a.source===b.source&&a.flags===b.flags;if(a.valueOf!==Object.prototype.valueOf)return a.valueOf()===b.valueOf();if(a.toString!==Object.prototype.toString)return a.toString()===b.toString();if((length=(keys=Object.keys(a)).length)!==Object.keys(b).length)return!1;for(i=length;0!=i--;)if(!Object.prototype.hasOwnProperty.call(b,keys[i]))return!1;for(i=length;0!=i--;){var key=keys[i];if(!equal(a[key],b[key]))return!1}return!0}return a!=a&&b!=b}},"./node_modules/is-plain-object/dist/is-plain-object.mjs":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{function isObject(o){return"[object Object]"===Object.prototype.toString.call(o)}function isPlainObject(o){var ctor,prot;return!1!==isObject(o)&&(void 0===(ctor=o.constructor)||!1!==isObject(prot=ctor.prototype)&&!1!==prot.hasOwnProperty("isPrototypeOf"))}__webpack_require__.d(__webpack_exports__,{P:()=>isPlainObject})},"./node_modules/no-case/dist.es2015/index.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{B:()=>noCase});function lowerCase(str){return str.toLowerCase()}var DEFAULT_SPLIT_REGEXP=[/([a-z0-9])([A-Z])/g,/([A-Z])([A-Z][a-z])/g],DEFAULT_STRIP_REGEXP=/[^A-Z0-9]+/gi;function noCase(input,options){void 0===options&&(options={});for(var _a=options.splitRegexp,splitRegexp=void 0===_a?DEFAULT_SPLIT_REGEXP:_a,_b=options.stripRegexp,stripRegexp=void 0===_b?DEFAULT_STRIP_REGEXP:_b,_c=options.transform,transform=void 0===_c?lowerCase:_c,_d=options.delimiter,delimiter=void 0===_d?" ":_d,result=replace(replace(input,splitRegexp,"$1\0$2"),stripRegexp,"\0"),start=0,end=result.length;"\0"===result.charAt(start);)start++;for(;"\0"===result.charAt(end-1);)end--;return result.slice(start,end).split("\0").map(transform).join(delimiter)}function replace(input,re,value){return re instanceof RegExp?input.replace(re,value):re.reduce((function(input,re){return input.replace(re,value)}),input)}},"./node_modules/param-case/dist.es2015/index.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{o:()=>paramCase});var tslib_es6=__webpack_require__("./node_modules/tslib/tslib.es6.mjs"),dist_es2015=__webpack_require__("./node_modules/no-case/dist.es2015/index.js");function paramCase(input,options){return void 0===options&&(options={}),function dotCase(input,options){return void 0===options&&(options={}),(0,dist_es2015.B)(input,(0,tslib_es6.pi)({delimiter:"."},options))}(input,(0,tslib_es6.pi)({delimiter:"-"},options))}},"./packages/components/src/input-control/stories/index.story.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Default:()=>Default,WithEdgeLabel:()=>WithEdgeLabel,WithHelpText:()=>WithHelpText,WithPrefix:()=>WithPrefix,WithSideLabel:()=>WithSideLabel,WithSuffix:()=>WithSuffix,__namedExportsOrder:()=>__namedExportsOrder,default:()=>index_story});var input_control=__webpack_require__("./packages/components/src/input-control/index.tsx"),component=__webpack_require__("./packages/components/src/spacer/component.tsx"),use_context_system=__webpack_require__("./packages/components/src/ui/context/use-context-system.js"),context_connect=__webpack_require__("./packages/components/src/ui/context/context-connect.ts"),jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js");function UnconnectedInputControlPrefixWrapper(props,forwardedRef){const derivedProps=(0,use_context_system.y)(props,"InputControlPrefixWrapper");return(0,jsx_runtime.jsx)(component.Z,{marginBottom:0,...derivedProps,ref:forwardedRef})}UnconnectedInputControlPrefixWrapper.displayName="UnconnectedInputControlPrefixWrapper";const InputControlPrefixWrapper=(0,context_connect.Iq)(UnconnectedInputControlPrefixWrapper,"InputControlPrefixWrapper");try{InputControlPrefixWrapper.displayName="InputControlPrefixWrapper",InputControlPrefixWrapper.__docgenInfo={description:"A convenience wrapper for the `prefix` when you want to apply\nstandard padding in accordance with the size variant.\n\n```jsx\nimport {\n  __experimentalInputControl as InputControl,\n  __experimentalInputControlPrefixWrapper as InputControlPrefixWrapper,\n} from '@wordpress/components';\n\n<InputControl\n  prefix={<InputControlPrefixWrapper>@</InputControlPrefixWrapper>}\n/>\n```",displayName:"InputControlPrefixWrapper",props:{children:{defaultValue:null,description:"The prefix to be inserted.",name:"children",required:!0,type:{name:"ReactNode"}},as:{defaultValue:null,description:"The HTML element or React component to render the component as.",name:"as",required:!1,type:{name:'"symbol" | "object" | ComponentClass<any, any> | FunctionComponent<any> | "a" | "abbr" | "address" | "area" | "article" | "aside" | "audio" | ... 515 more ... | ("view" & FunctionComponent<...>)'}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["packages/components/src/input-control/input-prefix-wrapper.tsx#InputControlPrefixWrapper"]={docgenInfo:InputControlPrefixWrapper.__docgenInfo,name:"InputControlPrefixWrapper",path:"packages/components/src/input-control/input-prefix-wrapper.tsx#InputControlPrefixWrapper"})}catch(__react_docgen_typescript_loader_error){}var input_suffix_wrapper=__webpack_require__("./packages/components/src/input-control/input-suffix-wrapper.tsx");const index_story={title:"Components (Experimental)/InputControl",component:input_control.ZP,subcomponents:{InputControlPrefixWrapper,InputControlSuffixWrapper:input_suffix_wrapper.U},argTypes:{__unstableInputWidth:{control:{type:"text"}},__unstableStateReducer:{control:{type:null}},onChange:{control:{type:null}},prefix:{control:{type:null}},suffix:{control:{type:null}},type:{control:{type:"text"}},value:{control:{disable:!0}}},parameters:{sourceLink:"packages/components/src/input-control",controls:{expanded:!0},docs:{canvas:{sourceState:"shown"}}}},Template=args=>(0,jsx_runtime.jsx)(input_control.ZP,{...args});Template.displayName="Template";const Default=Template.bind({});Default.args={label:"Value",placeholder:"Placeholder"};const WithHelpText=Template.bind({});WithHelpText.args={...Default.args,help:"Help text to describe the control."};const WithPrefix=Template.bind({});WithPrefix.args={...Default.args,prefix:(0,jsx_runtime.jsx)(InputControlPrefixWrapper,{children:"@"})};const WithSuffix=Template.bind({});WithSuffix.args={...Default.args,suffix:(0,jsx_runtime.jsx)(input_suffix_wrapper.U,{children:"%"})};const WithSideLabel=Template.bind({});WithSideLabel.args={...Default.args,labelPosition:"side"};const WithEdgeLabel=Template.bind({});WithEdgeLabel.args={...Default.args,__unstableInputWidth:"20em",labelPosition:"edge"},Default.parameters={...Default.parameters,docs:{...Default.parameters?.docs,source:{originalSource:"args => <InputControl {...args} />",...Default.parameters?.docs?.source}}},WithHelpText.parameters={...WithHelpText.parameters,docs:{...WithHelpText.parameters?.docs,source:{originalSource:"args => <InputControl {...args} />",...WithHelpText.parameters?.docs?.source}}},WithPrefix.parameters={...WithPrefix.parameters,docs:{...WithPrefix.parameters?.docs,source:{originalSource:"args => <InputControl {...args} />",...WithPrefix.parameters?.docs?.source},description:{story:"A `prefix` can be inserted before the input. By default, the prefix is aligned with the edge of the input border,\nwith no padding. If you want to apply standard padding in accordance with the size variant, use the provided\n`<InputControlPrefixWrapper>` convenience wrapper.",...WithPrefix.parameters?.docs?.description}}},WithSuffix.parameters={...WithSuffix.parameters,docs:{...WithSuffix.parameters?.docs,source:{originalSource:"args => <InputControl {...args} />",...WithSuffix.parameters?.docs?.source},description:{story:"A `suffix` can be inserted after the input. By default, the suffix is aligned with the edge of the input border,\nwith no padding. If you want to apply standard padding in accordance with the size variant, use the provided\n`<InputControlSuffixWrapper>` convenience wrapper.",...WithSuffix.parameters?.docs?.description}}},WithSideLabel.parameters={...WithSideLabel.parameters,docs:{...WithSideLabel.parameters?.docs,source:{originalSource:"args => <InputControl {...args} />",...WithSideLabel.parameters?.docs?.source}}},WithEdgeLabel.parameters={...WithEdgeLabel.parameters,docs:{...WithEdgeLabel.parameters?.docs,source:{originalSource:"args => <InputControl {...args} />",...WithEdgeLabel.parameters?.docs?.source}}};const __namedExportsOrder=["Default","WithHelpText","WithPrefix","WithSuffix","WithSideLabel","WithEdgeLabel"];try{WithPrefix.displayName="WithPrefix",WithPrefix.__docgenInfo={description:"A `prefix` can be inserted before the input. By default, the prefix is aligned with the edge of the input border,\nwith no padding. If you want to apply standard padding in accordance with the size variant, use the provided\n`<InputControlPrefixWrapper>` convenience wrapper.",displayName:"WithPrefix",props:{}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["packages/components/src/input-control/stories/index.story.tsx#WithPrefix"]={docgenInfo:WithPrefix.__docgenInfo,name:"WithPrefix",path:"packages/components/src/input-control/stories/index.story.tsx#WithPrefix"})}catch(__react_docgen_typescript_loader_error){}try{WithSuffix.displayName="WithSuffix",WithSuffix.__docgenInfo={description:"A `suffix` can be inserted after the input. By default, the suffix is aligned with the edge of the input border,\nwith no padding. If you want to apply standard padding in accordance with the size variant, use the provided\n`<InputControlSuffixWrapper>` convenience wrapper.",displayName:"WithSuffix",props:{}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["packages/components/src/input-control/stories/index.story.tsx#WithSuffix"]={docgenInfo:WithSuffix.__docgenInfo,name:"WithSuffix",path:"packages/components/src/input-control/stories/index.story.tsx#WithSuffix"})}catch(__react_docgen_typescript_loader_error){}}}]);