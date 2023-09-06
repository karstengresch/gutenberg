"use strict";(self.webpackChunkgutenberg=self.webpackChunkgutenberg||[]).push([[139],{"./packages/components/src/modal/index.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Z:()=>src_modal});var classnames=__webpack_require__("./node_modules/classnames/index.js"),classnames_default=__webpack_require__.n(classnames),react=__webpack_require__("./node_modules/react/index.js"),react_dom=__webpack_require__("./node_modules/react-dom/index.js"),use_instance_id=__webpack_require__("./packages/compose/build-module/hooks/use-instance-id/index.js"),use_focus_on_mount=__webpack_require__("./packages/compose/build-module/hooks/use-focus-on-mount/index.js"),use_constrained_tabbing=__webpack_require__("./packages/compose/build-module/hooks/use-constrained-tabbing/index.js"),use_focus_return=__webpack_require__("./packages/compose/build-module/hooks/use-focus-return/index.js"),use_focus_outside=__webpack_require__("./packages/compose/build-module/hooks/use-focus-outside/index.js"),use_merge_refs=__webpack_require__("./packages/compose/build-module/hooks/use-merge-refs/index.js"),build_module=__webpack_require__("./packages/i18n/build-module/index.js"),library_close=__webpack_require__("./packages/icons/build-module/library/close.js"),get_scroll_container=__webpack_require__("./packages/dom/build-module/dom/get-scroll-container.js");const LIVE_REGION_ARIA_ROLES=new Set(["alert","status","log","marquee","timer"]);let hiddenElements=[],isHidden=!1;function hideApp(unhiddenElement){if(isHidden)return;Array.from(document.body.children).forEach((element=>{element!==unhiddenElement&&function elementShouldBeHidden(element){const role=element.getAttribute("role");return!("SCRIPT"===element.tagName||element.hasAttribute("aria-hidden")||element.hasAttribute("aria-live")||role&&LIVE_REGION_ARIA_ROLES.has(role))}(element)&&(element.setAttribute("aria-hidden","true"),hiddenElements.push(element))})),isHidden=!0}var src_button=__webpack_require__("./packages/components/src/button/index.tsx"),style_provider=__webpack_require__("./packages/components/src/style-provider/index.tsx"),jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js");let openModalCount=0;const Modal=(0,react.forwardRef)((function UnforwardedModal(props,forwardedRef){const{bodyOpenClassName="modal-open",role="dialog",title=null,focusOnMount=!0,shouldCloseOnEsc=!0,shouldCloseOnClickOutside=!0,isDismissible=!0,aria={labelledby:void 0,describedby:void 0},onRequestClose,icon,closeButtonLabel,children,style,overlayClassName,className,contentLabel,onKeyDown,isFullScreen=!1,headerActions=null,__experimentalHideHeader=!1}=props,ref=(0,react.useRef)(),instanceId=(0,use_instance_id.Z)(Modal),headingId=title?`components-modal-header-${instanceId}`:aria.labelledby,focusOnMountRef=(0,use_focus_on_mount.Z)(focusOnMount),constrainedTabbingRef=(0,use_constrained_tabbing.Z)(),focusReturnRef=(0,use_focus_return.Z)(),focusOutsideProps=(0,use_focus_outside.Z)(onRequestClose),contentRef=(0,react.useRef)(null),childrenContainerRef=(0,react.useRef)(null),[hasScrolledContent,setHasScrolledContent]=(0,react.useState)(!1),[hasScrollableContent,setHasScrollableContent]=(0,react.useState)(!1),isContentScrollable=(0,react.useCallback)((()=>{if(!contentRef.current)return;const closestScrollContainer=(0,get_scroll_container.Z)(contentRef.current);contentRef.current===closestScrollContainer?setHasScrollableContent(!0):setHasScrollableContent(!1)}),[contentRef]);(0,react.useEffect)((()=>(openModalCount++,1===openModalCount&&(hideApp(ref.current),document.body.classList.add(bodyOpenClassName)),()=>{openModalCount--,0===openModalCount&&(document.body.classList.remove(bodyOpenClassName),function showApp(){isHidden&&(hiddenElements.forEach((element=>{element.removeAttribute("aria-hidden")})),hiddenElements=[],isHidden=!1)}())})),[bodyOpenClassName]),(0,react.useLayoutEffect)((()=>{if(!window.ResizeObserver||!childrenContainerRef.current)return;const resizeObserver=new ResizeObserver(isContentScrollable);return resizeObserver.observe(childrenContainerRef.current),isContentScrollable(),()=>{resizeObserver.disconnect()}}),[isContentScrollable,childrenContainerRef]);const onContentContainerScroll=(0,react.useCallback)((e=>{var _e$currentTarget$scro;const scrollY=null!==(_e$currentTarget$scro=e?.currentTarget?.scrollTop)&&void 0!==_e$currentTarget$scro?_e$currentTarget$scro:-1;!hasScrolledContent&&scrollY>0?setHasScrolledContent(!0):hasScrolledContent&&scrollY<=0&&setHasScrolledContent(!1)}),[hasScrolledContent]);let pressTarget=null;const overlayPressHandlers={onPointerDown:event=>{event.isPrimary&&event.target===event.currentTarget&&(pressTarget=event.target,event.preventDefault())},onPointerUp:({target,button})=>{const isSameTarget=target===pressTarget;pressTarget=null,0===button&&isSameTarget&&onRequestClose()}};return(0,react_dom.createPortal)((0,jsx_runtime.jsx)("div",{ref:(0,use_merge_refs.Z)([ref,forwardedRef]),className:classnames_default()("components-modal__screen-overlay",overlayClassName),onKeyDown:function handleEscapeKeyDown(event){event.nativeEvent.isComposing||229===event.keyCode||shouldCloseOnEsc&&"Escape"===event.code&&!event.defaultPrevented&&(event.preventDefault(),onRequestClose&&onRequestClose(event))},...shouldCloseOnClickOutside?overlayPressHandlers:{},children:(0,jsx_runtime.jsx)(style_provider.Z,{document,children:(0,jsx_runtime.jsx)("div",{className:classnames_default()("components-modal__frame",className,{"is-full-screen":isFullScreen}),style,ref:(0,use_merge_refs.Z)([constrainedTabbingRef,focusReturnRef,focusOnMountRef]),role,"aria-label":contentLabel,"aria-labelledby":contentLabel?void 0:headingId,"aria-describedby":aria.describedby,tabIndex:-1,...shouldCloseOnClickOutside?focusOutsideProps:{},onKeyDown,children:(0,jsx_runtime.jsxs)("div",{className:classnames_default()("components-modal__content",{"hide-header":__experimentalHideHeader,"is-scrollable":hasScrollableContent,"has-scrolled-content":hasScrolledContent}),role:"document",onScroll:onContentContainerScroll,ref:contentRef,"aria-label":hasScrollableContent?(0,build_module.__)("Scrollable section"):void 0,tabIndex:hasScrollableContent?0:void 0,children:[!__experimentalHideHeader&&(0,jsx_runtime.jsxs)("div",{className:"components-modal__header",children:[(0,jsx_runtime.jsxs)("div",{className:"components-modal__header-heading-container",children:[icon&&(0,jsx_runtime.jsx)("span",{className:"components-modal__icon-container","aria-hidden":!0,children:icon}),title&&(0,jsx_runtime.jsx)("h1",{id:headingId,className:"components-modal__header-heading",children:title})]}),headerActions,isDismissible&&(0,jsx_runtime.jsx)(src_button.ZP,{onClick:onRequestClose,icon:library_close.Z,label:closeButtonLabel||(0,build_module.__)("Close")})]}),(0,jsx_runtime.jsx)("div",{ref:childrenContainerRef,children})]})})})}),document.body)})),src_modal=Modal;try{Modal.displayName="Modal",Modal.__docgenInfo={description:'Modals give users information and choices related to a task they’re trying to\naccomplish. They can contain critical information, require decisions, or\ninvolve multiple tasks.\n\n```jsx\nimport { Button, Modal } from \'@wordpress/components\';\nimport { useState } from \'@wordpress/element\';\n\nconst MyModal = () => {\n  const [ isOpen, setOpen ] = useState( false );\n  const openModal = () => setOpen( true );\n  const closeModal = () => setOpen( false );\n\n  return (\n    <>\n      <Button variant="secondary" onClick={ openModal }>\n        Open Modal\n      </Button>\n      { isOpen && (\n        <Modal title="This is my modal" onRequestClose={ closeModal }>\n          <Button variant="secondary" onClick={ closeModal }>\n            My custom close button\n          </Button>\n        </Modal>\n      ) }\n    </>\n  );\n};\n```',displayName:"Modal",props:{aria:{defaultValue:null,description:"",name:"aria",required:!1,type:{name:"{ describedby?: string; labelledby?: string; }"}},bodyOpenClassName:{defaultValue:{value:"'modal-open'"},description:"Class name added to the body element when the modal is open.",name:"bodyOpenClassName",required:!1,type:{name:"string"}},children:{defaultValue:null,description:"The children elements.",name:"children",required:!0,type:{name:"ReactNode"}},className:{defaultValue:null,description:"If this property is added, it will an additional class name to the modal\ncontent `div`.",name:"className",required:!1,type:{name:"string"}},closeButtonLabel:{defaultValue:{value:"`__( 'Close' )`"},description:"Label on the close button.",name:"closeButtonLabel",required:!1,type:{name:"string"}},contentLabel:{defaultValue:null,description:"If this property is added, it will be added to the modal content `div` as\n`aria-label`.\n\nTitles are required for accessibility reasons, see `aria.labelledby` and\n`title` for other ways to provide a title.",name:"contentLabel",required:!1,type:{name:"string"}},focusOnMount:{defaultValue:{value:"true"},description:"If this property is true, it will focus the first tabbable element\nrendered in the modal.",name:"focusOnMount",required:!1,type:{name:'boolean | "firstElement"'}},headerActions:{defaultValue:{value:"null"},description:"Elements that are injected into the modal header to the left of the close button (if rendered).\nHidden if `__experimentalHideHeader` is `true`.",name:"headerActions",required:!1,type:{name:"ReactNode"}},icon:{defaultValue:null,description:"If this property is added, an icon will be added before the title.",name:"icon",required:!1,type:{name:"Element"}},isDismissible:{defaultValue:{value:"true"},description:"If this property is set to false, the modal will not display a close icon\nand cannot be dismissed.",name:"isDismissible",required:!1,type:{name:"boolean"}},isFullScreen:{defaultValue:{value:"false"},description:"This property when set to `true` will render a full screen modal.",name:"isFullScreen",required:!1,type:{name:"boolean"}},onKeyDown:{defaultValue:null,description:"Handle the key down on the modal frame `div`.",name:"onKeyDown",required:!1,type:{name:"KeyboardEventHandler<HTMLDivElement>"}},onRequestClose:{defaultValue:null,description:"This function is called to indicate that the modal should be closed.",name:"onRequestClose",required:!0,type:{name:"(event?: KeyboardEvent<HTMLDivElement> | SyntheticEvent<Element, Event>) => void"}},overlayClassName:{defaultValue:null,description:"If this property is added, it will an additional class name to the modal\noverlay `div`.",name:"overlayClassName",required:!1,type:{name:"string"}},role:{defaultValue:{value:"'dialog'"},description:"If this property is added, it will override the default role of the\nmodal.",name:"role",required:!1,type:{name:"AriaRole"}},shouldCloseOnClickOutside:{defaultValue:{value:"true"},description:"If this property is added, it will determine whether the modal requests\nto close when a mouse click occurs outside of the modal content.",name:"shouldCloseOnClickOutside",required:!1,type:{name:"boolean"}},shouldCloseOnEsc:{defaultValue:{value:"true"},description:"If this property is added, it will determine whether the modal requests\nto close when the escape key is pressed.",name:"shouldCloseOnEsc",required:!1,type:{name:"boolean"}},style:{defaultValue:null,description:"If this property is added, it will be added to the modal frame `div`.",name:"style",required:!1,type:{name:"CSSProperties"}},title:{defaultValue:null,description:"This property is used as the modal header's title.\n\nTitles are required for accessibility reasons, see `aria.labelledby` and\n`contentLabel` for other ways to provide a title.",name:"title",required:!1,type:{name:"string"}},__experimentalHideHeader:{defaultValue:{value:"false"},description:"When set to `true`, the Modal's header (including the icon, title and\nclose button) will not be rendered.\n\n_Warning_: This property is still experimental. “Experimental” means this\nis an early implementation subject to drastic and breaking changes.",name:"__experimentalHideHeader",required:!1,type:{name:"boolean"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["packages/components/src/modal/index.tsx#Modal"]={docgenInfo:Modal.__docgenInfo,name:"Modal",path:"packages/components/src/modal/index.tsx#Modal"})}catch(__react_docgen_typescript_loader_error){}try{modal.displayName="modal",modal.__docgenInfo={description:'Modals give users information and choices related to a task they’re trying to\naccomplish. They can contain critical information, require decisions, or\ninvolve multiple tasks.\n\n```jsx\nimport { Button, Modal } from \'@wordpress/components\';\nimport { useState } from \'@wordpress/element\';\n\nconst MyModal = () => {\n  const [ isOpen, setOpen ] = useState( false );\n  const openModal = () => setOpen( true );\n  const closeModal = () => setOpen( false );\n\n  return (\n    <>\n      <Button variant="secondary" onClick={ openModal }>\n        Open Modal\n      </Button>\n      { isOpen && (\n        <Modal title="This is my modal" onRequestClose={ closeModal }>\n          <Button variant="secondary" onClick={ closeModal }>\n            My custom close button\n          </Button>\n        </Modal>\n      ) }\n    </>\n  );\n};\n```',displayName:"modal",props:{aria:{defaultValue:null,description:"",name:"aria",required:!1,type:{name:"{ describedby?: string; labelledby?: string; }"}},bodyOpenClassName:{defaultValue:{value:"'modal-open'"},description:"Class name added to the body element when the modal is open.",name:"bodyOpenClassName",required:!1,type:{name:"string"}},children:{defaultValue:null,description:"The children elements.",name:"children",required:!0,type:{name:"ReactNode"}},className:{defaultValue:null,description:"If this property is added, it will an additional class name to the modal\ncontent `div`.",name:"className",required:!1,type:{name:"string"}},closeButtonLabel:{defaultValue:{value:"`__( 'Close' )`"},description:"Label on the close button.",name:"closeButtonLabel",required:!1,type:{name:"string"}},contentLabel:{defaultValue:null,description:"If this property is added, it will be added to the modal content `div` as\n`aria-label`.\n\nTitles are required for accessibility reasons, see `aria.labelledby` and\n`title` for other ways to provide a title.",name:"contentLabel",required:!1,type:{name:"string"}},focusOnMount:{defaultValue:{value:"true"},description:"If this property is true, it will focus the first tabbable element\nrendered in the modal.",name:"focusOnMount",required:!1,type:{name:'boolean | "firstElement"'}},headerActions:{defaultValue:{value:"null"},description:"Elements that are injected into the modal header to the left of the close button (if rendered).\nHidden if `__experimentalHideHeader` is `true`.",name:"headerActions",required:!1,type:{name:"ReactNode"}},icon:{defaultValue:null,description:"If this property is added, an icon will be added before the title.",name:"icon",required:!1,type:{name:"Element"}},isDismissible:{defaultValue:{value:"true"},description:"If this property is set to false, the modal will not display a close icon\nand cannot be dismissed.",name:"isDismissible",required:!1,type:{name:"boolean"}},isFullScreen:{defaultValue:{value:"false"},description:"This property when set to `true` will render a full screen modal.",name:"isFullScreen",required:!1,type:{name:"boolean"}},onKeyDown:{defaultValue:null,description:"Handle the key down on the modal frame `div`.",name:"onKeyDown",required:!1,type:{name:"KeyboardEventHandler<HTMLDivElement>"}},onRequestClose:{defaultValue:null,description:"This function is called to indicate that the modal should be closed.",name:"onRequestClose",required:!0,type:{name:"(event?: KeyboardEvent<HTMLDivElement> | SyntheticEvent<Element, Event>) => void"}},overlayClassName:{defaultValue:null,description:"If this property is added, it will an additional class name to the modal\noverlay `div`.",name:"overlayClassName",required:!1,type:{name:"string"}},role:{defaultValue:{value:"'dialog'"},description:"If this property is added, it will override the default role of the\nmodal.",name:"role",required:!1,type:{name:"AriaRole"}},shouldCloseOnClickOutside:{defaultValue:{value:"true"},description:"If this property is added, it will determine whether the modal requests\nto close when a mouse click occurs outside of the modal content.",name:"shouldCloseOnClickOutside",required:!1,type:{name:"boolean"}},shouldCloseOnEsc:{defaultValue:{value:"true"},description:"If this property is added, it will determine whether the modal requests\nto close when the escape key is pressed.",name:"shouldCloseOnEsc",required:!1,type:{name:"boolean"}},style:{defaultValue:null,description:"If this property is added, it will be added to the modal frame `div`.",name:"style",required:!1,type:{name:"CSSProperties"}},title:{defaultValue:null,description:"This property is used as the modal header's title.\n\nTitles are required for accessibility reasons, see `aria.labelledby` and\n`contentLabel` for other ways to provide a title.",name:"title",required:!1,type:{name:"string"}},__experimentalHideHeader:{defaultValue:{value:"false"},description:"When set to `true`, the Modal's header (including the icon, title and\nclose button) will not be rendered.\n\n_Warning_: This property is still experimental. “Experimental” means this\nis an early implementation subject to drastic and breaking changes.",name:"__experimentalHideHeader",required:!1,type:{name:"boolean"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["packages/components/src/modal/index.tsx#modal"]={docgenInfo:modal.__docgenInfo,name:"modal",path:"packages/components/src/modal/index.tsx#modal"})}catch(__react_docgen_typescript_loader_error){}},"./packages/components/src/guide/stories/index.story.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Default:()=>Default,__namedExportsOrder:()=>__namedExportsOrder,default:()=>index_story});var react=__webpack_require__("./node_modules/react/index.js"),src_button=__webpack_require__("./packages/components/src/button/index.tsx"),classnames=__webpack_require__("./node_modules/classnames/index.js"),classnames_default=__webpack_require__.n(classnames),build_module=__webpack_require__("./packages/deprecated/build-module/index.js"),i18n_build_module=__webpack_require__("./packages/i18n/build-module/index.js"),modal=__webpack_require__("./packages/components/src/modal/index.tsx"),svg=__webpack_require__("./packages/primitives/build-module/svg/index.js"),jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js");const PageControlIcon=()=>(0,jsx_runtime.jsx)(svg.Wj,{width:"8",height:"8",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:(0,jsx_runtime.jsx)(svg.Cd,{cx:"4",cy:"4",r:"4"})});function PageControl({currentPage,numberOfPages,setCurrentPage}){return(0,jsx_runtime.jsx)("ul",{className:"components-guide__page-control","aria-label":(0,i18n_build_module.__)("Guide controls"),children:Array.from({length:numberOfPages}).map(((_,page)=>(0,jsx_runtime.jsx)("li",{"aria-current":page===currentPage?"step":void 0,children:(0,jsx_runtime.jsx)(src_button.ZP,{icon:(0,jsx_runtime.jsx)(PageControlIcon,{}),"aria-label":(0,i18n_build_module.gB)((0,i18n_build_module.__)("Page %1$d of %2$d"),page+1,numberOfPages),onClick:()=>setCurrentPage(page)},page)},page)))})}PageControlIcon.displayName="PageControlIcon",PageControl.displayName="PageControl";try{pagecontrol.displayName="pagecontrol",pagecontrol.__docgenInfo={description:"",displayName:"pagecontrol",props:{currentPage:{defaultValue:null,description:"Current page index.",name:"currentPage",required:!0,type:{name:"number"}},numberOfPages:{defaultValue:null,description:"Total number of pages.",name:"numberOfPages",required:!0,type:{name:"number"}},setCurrentPage:{defaultValue:null,description:"Called when user clicks on a `PageControlIcon` button.",name:"setCurrentPage",required:!0,type:{name:"(page: number) => void"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["packages/components/src/guide/page-control.tsx#pagecontrol"]={docgenInfo:pagecontrol.__docgenInfo,name:"pagecontrol",path:"packages/components/src/guide/page-control.tsx#pagecontrol"})}catch(__react_docgen_typescript_loader_error){}function Guide({children,className,contentLabel,finishButtonText=(0,i18n_build_module.__)("Finish"),onFinish,pages=[]}){const ref=(0,react.useRef)(null),[currentPage,setCurrentPage]=(0,react.useState)(0);var _Children$map;((0,react.useEffect)((()=>{const frame=ref.current?.querySelector(".components-guide");frame instanceof HTMLElement&&frame.focus()}),[currentPage]),(0,react.useEffect)((()=>{react.Children.count(children)&&(0,build_module.Z)("Passing children to <Guide>",{since:"5.5",alternative:"the `pages` prop"})}),[children]),react.Children.count(children))&&(pages=null!==(_Children$map=react.Children.map(children,(child=>({content:child}))))&&void 0!==_Children$map?_Children$map:[]);const canGoBack=currentPage>0,canGoForward=currentPage<pages.length-1,goBack=()=>{canGoBack&&setCurrentPage(currentPage-1)},goForward=()=>{canGoForward&&setCurrentPage(currentPage+1)};return 0===pages.length?null:(0,jsx_runtime.jsx)(modal.Z,{className:classnames_default()("components-guide",className),contentLabel,isDismissible:pages.length>1,onRequestClose:onFinish,onKeyDown:event=>{"ArrowLeft"===event.code?(goBack(),event.preventDefault()):"ArrowRight"===event.code&&(goForward(),event.preventDefault())},ref,children:(0,jsx_runtime.jsxs)("div",{className:"components-guide__container",children:[(0,jsx_runtime.jsxs)("div",{className:"components-guide__page",children:[pages[currentPage].image,pages.length>1&&(0,jsx_runtime.jsx)(PageControl,{currentPage,numberOfPages:pages.length,setCurrentPage}),pages[currentPage].content]}),(0,jsx_runtime.jsxs)("div",{className:"components-guide__footer",children:[canGoBack&&(0,jsx_runtime.jsx)(src_button.ZP,{className:"components-guide__back-button",variant:"tertiary",onClick:goBack,children:(0,i18n_build_module.__)("Previous")}),canGoForward&&(0,jsx_runtime.jsx)(src_button.ZP,{className:"components-guide__forward-button",variant:"primary",onClick:goForward,children:(0,i18n_build_module.__)("Next")}),!canGoForward&&(0,jsx_runtime.jsx)(src_button.ZP,{className:"components-guide__finish-button",variant:"primary",onClick:onFinish,children:finishButtonText})]})]})})}Guide.displayName="Guide";const guide=Guide;try{Guide.displayName="Guide",Guide.__docgenInfo={description:'`Guide` is a React component that renders a _user guide_ in a modal. The guide consists of several pages which the user can step through one by one. The guide is finished when the modal is closed or when the user clicks _Finish_ on the last page of the guide.\n\n```jsx\nfunction MyTutorial() {\n\tconst [ isOpen, setIsOpen ] = useState( true );\n\n\tif ( ! isOpen ) {\n\t\treturn null;\n\t}\n\n\treturn (\n\t\t<Guide\n\t\t\tonFinish={ () => setIsOpen( false ) }\n\t\t\tpages={ [\n\t\t\t\t{\n\t\t\t\t\tcontent: <p>Welcome to the ACME Store!</p>,\n\t\t\t\t},\n\t\t\t\t{\n\t\t\t\t\timage: <img src="https://acmestore.com/add-to-cart.png" />,\n\t\t\t\t\tcontent: (\n\t\t\t\t\t\t<p>\n\t\t\t\t\t\t\tClick <i>Add to Cart</i> to buy a product.\n\t\t\t\t\t\t</p>\n\t\t\t\t\t),\n\t\t\t\t},\n\t\t\t] }\n\t\t/>\n\t);\n}\n```',displayName:"Guide",props:{children:{defaultValue:null,description:"Deprecated. Use `pages` prop instead.\n@deprecated since 5.5",name:"children",required:!1,type:{name:"ReactNode"}},className:{defaultValue:null,description:"A custom class to add to the modal.",name:"className",required:!1,type:{name:"string"}},contentLabel:{defaultValue:null,description:"Used as the modal's accessibility label.",name:"contentLabel",required:!0,type:{name:"string"}},finishButtonText:{defaultValue:{value:"__( 'Finish' )"},description:"Use this to customize the label of the _Finish_ button shown at the end of the guide.",name:"finishButtonText",required:!1,type:{name:"string"}},onFinish:{defaultValue:null,description:"A function which is called when the guide is finished.",name:"onFinish",required:!0,type:{name:"(event?: KeyboardEvent<HTMLDivElement> | SyntheticEvent<Element, Event>) => void"}},pages:{defaultValue:{value:"[]"},description:"A list of objects describing each page in the guide. Each object **must** contain a `'content'` property and may optionally contain a `'image'` property.",name:"pages",required:!1,type:{name:"Page[]"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["packages/components/src/guide/index.tsx#Guide"]={docgenInfo:Guide.__docgenInfo,name:"Guide",path:"packages/components/src/guide/index.tsx#Guide"})}catch(__react_docgen_typescript_loader_error){}const index_story={title:"Components/Guide",component:guide,argTypes:{contentLabel:{control:"text"},finishButtonText:{control:"text"},onFinish:{action:"onFinish"}},parameters:{sourceLink:"packages/components/src/guide"}},Default=(({onFinish,...props})=>{const[isOpen,setOpen]=(0,react.useState)(!1);return(0,jsx_runtime.jsxs)(jsx_runtime.Fragment,{children:[(0,jsx_runtime.jsx)(src_button.ZP,{variant:"secondary",onClick:()=>setOpen(!0),children:"Open Guide"}),isOpen&&(0,jsx_runtime.jsx)(guide,{...props,onFinish:(...finishArgs)=>{setOpen(!1),onFinish?.(...finishArgs)}})]})}).bind({});Default.args={pages:Array.from({length:3}).map(((_,page)=>({content:(0,jsx_runtime.jsx)("p",{children:`Page ${page+1}`})})))},Default.parameters={...Default.parameters,docs:{...Default.parameters?.docs,source:{originalSource:'({\n  onFinish,\n  ...props\n}) => {\n  const [isOpen, setOpen] = useState(false);\n  const openGuide = () => setOpen(true);\n  const closeGuide = () => setOpen(false);\n  return <>\n            <Button variant="secondary" onClick={openGuide}>\n                Open Guide\n            </Button>\n            {isOpen && <Guide {...props} onFinish={(...finishArgs) => {\n      closeGuide();\n      onFinish?.(...finishArgs);\n    }} />}\n        </>;\n}',...Default.parameters?.docs?.source}}};const __namedExportsOrder=["Default"]}}]);