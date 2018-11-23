import {
  Output,
  OnInit,
  AfterContentInit,
  OnChanges,
  Component,
  ElementRef,
  forwardRef
} from '@angular/core';
import { base } from './base';
export class menubarMetaData {
  public static XTYPE: string = 'menubar';
  public static PROPERTIESOBJECT: any = {
    "actions": "Object",
    "activeChildTabIndex": "Number",
    "activeCounter": "Number",
    "activeItem": "String/Number",
    "alignOnScroll": "Boolean",
    "alignTarget": "String",
    "allowFocusingDisabledChildren": "Boolean",
    "allowOtherMenus": "Boolean",
    "alwaysOnTop": "Boolean/Number",
    "anchor": "String",
    "anchorSize": "Number/Object",
    "animateShadow": "Boolean",
    "animCollapse": "Boolean/Number",
    "ariaAttributes": "Object",
    "ariaDescribedBy": "String",
    "ariaLabel": "String",
    "ariaLabelledBy": "String",
    "ariaRole": "String",
    "autoDestroy": "Boolean",
    "autoEl": "String/Object",
    "autoRender": "Boolean",
    "autoScroll": "Boolean",
    "autoShow": "Boolean",
    "baseCls": "String",
    "bbar": "Object/Object[]",
    "bind": "Object/String",
    "bodyBorder": "Boolean",
    "bodyCls": "String/String[]",
    "bodyPadding": "Number/String",
    "bodyStyle": "String/Object/Function",
    "border": "Boolean",
    "bubbleEvents": "String[]",
    "buttonAlign": "String",
    "buttons": "Object[]",
    "childEls": "Object/String[]/Object[]",
    "closable": "Boolean",
    "closeAction": "String",
    "closeToolText": "String",
    "cls": "String/String[]",
    "collapsed": "Boolean",
    "collapsedCls": "String",
    "collapseDirection": "String",
    "collapseFirst": "Boolean",
    "collapseMode": "String",
    "collapseToolText": "String",
    "collapsible": "Boolean",
    "columnWidth": "Number",
    "componentCls": "String",
    "componentLayout": "String/Object",
    "constrain": "Boolean",
    "constrainHeader": "Boolean",
    "constraintInsets": "Object/String",
    "constrainTo": "Ext.util.Region/Ext.dom.Element",
    "contentEl": "String",
    "controller": "String/Object/Ext.app.ViewController",
    "data": "Object",
    "defaultAlign": "String",
    "defaultButton": "String",
    "defaultButtonTarget": "String",
    "defaultDockWeights": "Object",
    "defaultFocus": "String",
    "defaultListenerScope": "Boolean",
    "defaultMenuAlign": "String",
    "defaults": "Object/Function",
    "defaultType": "String",
    "detachOnRemove": "Boolean",
    "disabled": "Boolean",
    "disabledCls": "String",
    "dock": "'top'/'bottom'/'left'/'right'",
    "dockedItems": "Object/Object[]",
    "draggable": "Boolean/Object",
    "enableKeyNav": "Boolean",
    "expandToolText": "String",
    "fbar": "Object/Object[]",
    "fixed": "Boolean",
    "flex": "Number",
    "floatable": "Boolean",
    "floating": "Boolean",
    "focusableContainer": "Boolean",
    "focusCls": "String",
    "focusOnToFront": "Boolean",
    "formBind": "Boolean",
    "frame": "Boolean",
    "frameHeader": "Boolean",
    "glyph": "Number/String",
    "header": "Boolean/Object",
    "headerOverCls": "String",
    "headerPosition": "'top'/'bottom'/'left'/'right'",
    "height": "Number|String",
    "hidden": "Boolean",
    "hideCollapseTool": "Boolean",
    "hideMode": "String",
    "html": "String/Object",
    "icon": "String",
    "iconAlign": "'top'/'right'/'bottom'/'left'",
    "iconCls": "String",
    "id": "String",
    "ignoreParentClicks": "Boolean",
    "inactiveChildTabIndex": "Number",
    "itemId": "String",
    "items": "Object/Object[]",
    "keyMap": "Object",
    "keyMapEnabled": "Boolean",
    "keyMapTarget": "String",
    "layout": "Ext.enums.Layout/Object",
    "lbar": "Object/Object[]",
    "liquidLayout": "Boolean",
    "listeners": "Object",
    "liveDrag": "Boolean",
    "loader": "Ext.ComponentLoader/Object",
    "maintainTitlePosition": "Boolean",
    "manageHeight": "Boolean",
    "margin": "Number/String",
    "maskDefaults": "Object",
    "maskElement": "String",
    "maxHeight": "Number",
    "maxWidth": "Number",
    "minButtonWidth": "Number",
    "minHeight": "Number",
    "minWidth": "Number",
    "modal": "Boolean",
    "modelValidation": "Boolean",
    "mouseLeaveDelay": "Number",
    "nameable": "Boolean",
    "nameHolder": "Boolean",
    "overCls": "String",
    "overflowX": "String",
    "overflowY": "String",
    "overlapHeader": "Boolean",
    "padding": "Number/String",
    "placeholder": "Ext.Component/Object",
    "placeholderCollapseHideMode": "Number",
    "plain": "Boolean",
    "plugins": "Array/Ext.enums.Plugin/Object/Ext.plugin.Abstract",
    "preventHeader": "Boolean",
    "publishes": "String/String[]/Object",
    "rbar": "Object/Object[]",
    "reference": "String",
    "referenceHolder": "Boolean",
    "region": "'north'/'south'/'east'/'west'/'center'",
    "renderConfig": "Object",
    "renderData": "Object",
    "renderSelectors": "Object",
    "renderTo": "String/HTMLElement/Ext.dom.Element",
    "renderTpl": "Ext.XTemplate/String/String[]",
    "resetFocusPosition": "Boolean",
    "resizable": "Boolean/Object",
    "resizeHandles": "String",
    "saveDelay": "Number",
    "scrollable": "Boolean/String/Object",
    "session": "Boolean/Object/Ext.data.Session",
    "shadow": "String/Boolean",
    "shadowOffset": "Number",
    "shareableName": "Boolean",
    "shim": "Boolean",
    "showSeparator": "Boolean",
    "shrinkWrap": "Boolean/Number",
    "shrinkWrapDock": "Boolean/Number",
    "simpleDrag": "Boolean",
    "stateEvents": "String[]",
    "stateful": "Boolean/Object",
    "stateId": "String",
    "style": "String/Object",
    "suspendLayout": "Boolean",
    "tabGuard": "Boolean",
    "tabIndex": "Number",
    "tbar": "Object/Object[]",
    "title": "String/Ext.panel.Title",
    "titleAlign": "'left'/'center'/'right'",
    "titleCollapse": "Boolean",
    "titlePosition": "Number",
    "titleRotation": "'default'/0/1/2",
    "toFrontOnShow": "Boolean",
    "tools": "Object[]/Ext.panel.Tool[]",
    "touchAction": "Object",
    "tpl": "Ext.XTemplate/Ext.Template/String/String[]",
    "tplWriteMode": "String",
    "twoWayBindable": "String/String[]/Object",
    "ui": "String",
    "uiCls": "String[]",
    "userCls": "String/String[]",
    "viewModel": "String/Object/Ext.app.ViewModel",
    "weight": "Number",
    "width": "Number|String",
    "xtype": "Ext.enums.Widget",
    "platformConfig": "Object",
    "fitToParent": "Boolean",
    "config": "Object",
};
  public static PROPERTIES: string[] = [
    'actions',
    'activeChildTabIndex',
    'activeCounter',
    'activeItem',
    'alignOnScroll',
    'alignTarget',
    'allowFocusingDisabledChildren',
    'allowOtherMenus',
    'alwaysOnTop',
    'anchor',
    'anchorSize',
    'animateShadow',
    'animCollapse',
    'ariaAttributes',
    'ariaDescribedBy',
    'ariaLabel',
    'ariaLabelledBy',
    'ariaRole',
    'autoDestroy',
    'autoEl',
    'autoRender',
    'autoScroll',
    'autoShow',
    'baseCls',
    'bbar',
    'bind',
    'bodyBorder',
    'bodyCls',
    'bodyPadding',
    'bodyStyle',
    'border',
    'bubbleEvents',
    'buttonAlign',
    'buttons',
    'childEls',
    'closable',
    'closeAction',
    'closeToolText',
    'cls',
    'collapsed',
    'collapsedCls',
    'collapseDirection',
    'collapseFirst',
    'collapseMode',
    'collapseToolText',
    'collapsible',
    'columnWidth',
    'componentCls',
    'componentLayout',
    'constrain',
    'constrainHeader',
    'constraintInsets',
    'constrainTo',
    'contentEl',
    'controller',
    'data',
    'defaultAlign',
    'defaultButton',
    'defaultButtonTarget',
    'defaultDockWeights',
    'defaultFocus',
    'defaultListenerScope',
    'defaultMenuAlign',
    'defaults',
    'defaultType',
    'detachOnRemove',
    'disabled',
    'disabledCls',
    'dock',
    'dockedItems',
    'draggable',
    'enableKeyNav',
    'expandToolText',
    'fbar',
    'fixed',
    'flex',
    'floatable',
    'floating',
    'focusableContainer',
    'focusCls',
    'focusOnToFront',
    'formBind',
    'frame',
    'frameHeader',
    'glyph',
    'header',
    'headerOverCls',
    'headerPosition',
    'height',
    'hidden',
    'hideCollapseTool',
    'hideMode',
    'html',
    'icon',
    'iconAlign',
    'iconCls',
    'id',
    'ignoreParentClicks',
    'inactiveChildTabIndex',
    'itemId',
    'items',
    'keyMap',
    'keyMapEnabled',
    'keyMapTarget',
    'layout',
    'lbar',
    'liquidLayout',
    'listeners',
    'liveDrag',
    'loader',
    'maintainTitlePosition',
    'manageHeight',
    'margin',
    'maskDefaults',
    'maskElement',
    'maxHeight',
    'maxWidth',
    'minButtonWidth',
    'minHeight',
    'minWidth',
    'modal',
    'modelValidation',
    'mouseLeaveDelay',
    'nameable',
    'nameHolder',
    'overCls',
    'overflowX',
    'overflowY',
    'overlapHeader',
    'padding',
    'placeholder',
    'placeholderCollapseHideMode',
    'plain',
    'plugins',
    'preventHeader',
    'publishes',
    'rbar',
    'reference',
    'referenceHolder',
    'region',
    'renderConfig',
    'renderData',
    'renderSelectors',
    'renderTo',
    'renderTpl',
    'resetFocusPosition',
    'resizable',
    'resizeHandles',
    'saveDelay',
    'scrollable',
    'session',
    'shadow',
    'shadowOffset',
    'shareableName',
    'shim',
    'showSeparator',
    'shrinkWrap',
    'shrinkWrapDock',
    'simpleDrag',
    'stateEvents',
    'stateful',
    'stateId',
    'style',
    'suspendLayout',
    'tabGuard',
    'tabIndex',
    'tbar',
    'title',
    'titleAlign',
    'titleCollapse',
    'titlePosition',
    'titleRotation',
    'toFrontOnShow',
    'tools',
    'touchAction',
    'tpl',
    'tplWriteMode',
    'twoWayBindable',
    'ui',
    'uiCls',
    'userCls',
    'viewModel',
    'weight',
    'width',
    'xtype',
    'platformConfig',
    'fitToParent',
    'config'
];
  public static EVENTS: any[] = [
		{name:'activate',parameters:'menubar'},
		{name:'add',parameters:'menubar,component,index'},
		{name:'added',parameters:'menubar,container,pos'},
		{name:'afterlayout',parameters:'menubar,layout'},
		{name:'afterlayoutanimation',parameters:'menubar'},
		{name:'afterrender',parameters:'menubar'},
		{name:'beforeactivate',parameters:'menubar'},
		{name:'beforeadd',parameters:'menubar,component,index'},
		{name:'beforeclose',parameters:'panel'},
		{name:'beforecollapse',parameters:'p,direction,animate'},
		{name:'beforedeactivate',parameters:'menubar'},
		{name:'beforedestroy',parameters:'menubar'},
		{name:'beforeexpand',parameters:'p,animate'},
		{name:'beforehide',parameters:'menubar'},
		{name:'beforeremove',parameters:'menubar,component'},
		{name:'beforerender',parameters:'menubar'},
		{name:'beforeshow',parameters:'menubar'},
		{name:'beforestaterestore',parameters:'menubar,state'},
		{name:'beforestatesave',parameters:'menubar,state'},
		{name:'blur',parameters:'menubar,event'},
		{name:'boxready',parameters:'menubar,width,height'},
		{name:'childmove',parameters:'menubar,component,prevIndex,newIndex'},
		{name:'click',parameters:'menu,item,e'},
		{name:'close',parameters:'panel'},
		{name:'collapse',parameters:'p'},
		{name:'deactivate',parameters:'menubar'},
		{name:'destroy',parameters:'menubar'},
		{name:'disable',parameters:'menubar'},
		{name:'dockedadd',parameters:'menubar,component,index'},
		{name:'dockedremove',parameters:'menubar,component'},
		{name:'enable',parameters:'menubar'},
		{name:'expand',parameters:'p'},
		{name:'float',parameters:''},
		{name:'focus',parameters:'menubar,event'},
		{name:'focusenter',parameters:'menubar,event'},
		{name:'focusleave',parameters:'menubar,event'},
		{name:'glyphchange',parameters:'menubar,newGlyph,oldGlyph'},
		{name:'hide',parameters:'menubar'},
		{name:'iconalignchange',parameters:'menubar,newIconAlign,oldIconAlign'},
		{name:'iconchange',parameters:'menubar,newIcon,oldIcon'},
		{name:'iconclschange',parameters:'menubar,newIconCls,oldIconCls'},
		{name:'mouseenter',parameters:'menu,e'},
		{name:'mouseleave',parameters:'menu,e'},
		{name:'mouseover',parameters:'menu,item,e'},
		{name:'move',parameters:'menubar,x,y'},
		{name:'remove',parameters:'menubar,component'},
		{name:'removed',parameters:'menubar,ownerCt'},
		{name:'render',parameters:'menubar'},
		{name:'resize',parameters:'menubar,width,height,oldWidth,oldHeight'},
		{name:'show',parameters:'menubar'},
		{name:'staterestore',parameters:'menubar,state'},
		{name:'statesave',parameters:'menubar,state'},
		{name:'titlealignchange',parameters:'menubar,newTitleAlign,oldTitleAlign'},
		{name:'titlechange',parameters:'menubar,newTitle,oldTitle'},
		{name:'titlepositionchange',parameters:'menubar,newTitlePosition,oldTitlePosition'},
		{name:'titlerotationchange',parameters:'menubar,newTitleRotation,oldTitleRotation'},
		{name:'unfloat',parameters:''},
		{name:'ready',parameters:''}
];
  public static EVENTNAMES: string[] = [
		'activate',
		'add',
		'added',
		'afterlayout',
		'afterlayoutanimation',
		'afterrender',
		'beforeactivate',
		'beforeadd',
		'beforeclose',
		'beforecollapse',
		'beforedeactivate',
		'beforedestroy',
		'beforeexpand',
		'beforehide',
		'beforeremove',
		'beforerender',
		'beforeshow',
		'beforestaterestore',
		'beforestatesave',
		'blur',
		'boxready',
		'childmove',
		'click',
		'close',
		'collapse',
		'deactivate',
		'destroy',
		'disable',
		'dockedadd',
		'dockedremove',
		'enable',
		'expand',
		'float',
		'focus',
		'focusenter',
		'focusleave',
		'glyphchange',
		'hide',
		'iconalignchange',
		'iconchange',
		'iconclschange',
		'mouseenter',
		'mouseleave',
		'mouseover',
		'move',
		'remove',
		'removed',
		'render',
		'resize',
		'show',
		'staterestore',
		'statesave',
		'titlealignchange',
		'titlechange',
		'titlepositionchange',
		'titlerotationchange',
		'unfloat',
		'ready'
];
}
@Component({
  selector: 'menubar', 
  inputs: menubarMetaData.PROPERTIES,
  outputs: menubarMetaData.EVENTNAMES,
  providers: [{provide: base, useExisting: forwardRef(() => ExtMenubarComponent)}],
  template: '<ng-template #dynamic></ng-template>'
})
export class ExtMenubarComponent extends base implements OnInit,AfterContentInit,OnChanges {
  constructor(eRef:ElementRef) {super(eRef,menubarMetaData)}
  public ngOnInit() {this.baseOnInit(menubarMetaData)}
  //public ngOnChanges(changes: SimpleChanges) {this.baseOnChanges(changes)}
  public ngAfterContentInit() {
    this.baseAfterContentInit()
    this['ready'].emit(this)
    }
}