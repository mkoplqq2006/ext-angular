import {
  OnInit,
  AfterContentInit,
  OnChanges,
  Component,
  ElementRef,
  forwardRef
} from '@angular/core';
import { base } from './base';
export class componentdataviewMetaData {
  public static XTYPE: string = 'componentdataview';
  public static PROPERTIESOBJECT: any = {
    "activeChildTabIndex": "Number",
    "activeItem": "Ext.Component/Object/String/Number",
    "allowFocusingDisabledChildren": "Boolean",
    "alwaysOnTop": "Boolean/Number",
    "ariaAttributes": "Object",
    "ariaDescribedBy": "String",
    "ariaLabel": "String",
    "ariaLabelledBy": "String",
    "associatedData": "Boolean/Object",
    "autoDestroy": "Boolean",
    "autoSize": "Boolean",
    "axisLock": "Boolean",
    "bind": "Object/String",
    "border": "Boolean",
    "bottom": "Number/String",
    "cardSwitchAnimation": "String/Object/Boolean",
    "centered": "Boolean",
    "cls": "String/String[]",
    "constrainAlign": "String/Ext.util.Region/Ext.dom.Element",
    "contentEl": "Ext.dom.Element/HTMLElement/String",
    "control": "Object",
    "controller": "String/Object/Ext.app.ViewController",
    "data": "Object",
    "defaultFocus": "String",
    "defaultListenerScope": "Boolean",
    "defaults": "Object",
    "defaultType": "Ext.enums.Widget",
    "deferEmptyText": "Boolean",
    "deselectOnContainerClick": "Boolean",
    "disabled": "Boolean",
    "disableSelection": "Boolean",
    "displayed": "Boolean",
    "docked": "String",
    "draggable": "Boolean/Object/Ext.drag.Source",
    "emptyItemText": "String",
    "emptyState": "Boolean",
    "emptyText": "String/Boolean",
    "emptyTextDefaults": "Object/Ext.Component",
    "emptyTextProperty": "String",
    "enableTextSelection": "Boolean",
    "enterAnimation": "String/Mixed",
    "eventHandlers": "Object",
    "exitAnimation": "String/Mixed",
    "flex": "Number/String/Object",
    "floated": "Boolean",
    "focusableContainer": "Boolean",
    "focusCls": "String",
    "fullscreen": "Boolean",
    "height": "Number/String",
    "hidden": "Boolean",
    "hideAnimation": "String/Mixed",
    "hideMode": "'clip'/'display'/'offsets'/'opacity'/'visibility'",
    "hideOnMaskTap": "Boolean",
    "html": "String/Ext.dom.Element/HTMLElement",
    "id": "String",
    "inactiveChildTabIndex": "Number",
    "inline": "Boolean/Object",
    "innerCls": "String",
    "instanceCls": "String/String[]",
    "itemButtonMode": "boolean",
    "itemCls": "String",
    "itemConfig": "Object/Ext.Component",
    "itemContentCls": "String",
    "itemDataMap": "Object",
    "itemId": "String",
    "itemInnerCls": "String",
    "itemRipple": "Boolean/Object",
    "items": "Array/Object",
    "itemsFocusable": "Boolean",
    "itemTpl": "String/String[]/Ext.XTemplate",
    "keyMap": "Object",
    "keyMapEnabled": "Boolean",
    "keyMapTarget": "String",
    "layout": "Object/String",
    "left": "Number/String",
    "listeners": "Object",
    "loadingHeight": "Number",
    "loadingText": "String/Boolean",
    "manageBorders": "Boolean",
    "margin": "Number/String",
    "markDirty": "Boolean",
    "masked": "Boolean/Object/Ext.Mask/Ext.LoadMask",
    "maxHeight": "Number/String",
    "maxItemCache": "Number",
    "maxWidth": "Number/String",
    "minHeight": "Number/String",
    "minWidth": "Number/String",
    "modal": "Boolean",
    "modelValidation": "Boolean",
    "name": "String",
    "nameable": "Boolean",
    "nameHolder": "Boolean",
    "padding": "Number/String",
    "plugins": "Array/Ext.enums.Plugin/Object/Ext.plugin.Abstract",
    "pressedDelay": "Number",
    "publishes": "String/String[]/Object",
    "record": "Ext.data.Model",
    "reference": "String",
    "referenceHolder": "Boolean",
    "relative": "Boolean",
    "renderTo": "Ext.dom.Element",
    "resetFocusPosition": "Boolean",
    "right": "Number/String",
    "ripple": "Boolean/Object/String",
    "scrollable": "Boolean/String/Object",
    "scrollDock": "'start'/'emd'",
    "scrollToTopOnRefresh": "Boolean",
    "selectable": "Object",
    "selection": "Ext.data.Model",
    "selfAlign": "String",
    "session": "Boolean/Object/Ext.data.Session",
    "shadow": "Boolean",
    "shareableName": "Boolean",
    "shim": "Boolean",
    "showAnimation": "String/Mixed",
    "store": "Ext.data.Store/Object",
    "striped": "Boolean",
    "style": "String/Object",
    "tabIndex": "Number",
    "toFrontOnShow": "Boolean",
    "tooltip": "String/Object",
    "top": "Number/String",
    "touchAction": "Object",
    "tpl": "String/String[]/Ext.Template/Ext.XTemplate[]",
    "tplWriteMode": "String",
    "translatable": "Object",
    "triggerCtEvent": "'tap'/'singletap'",
    "triggerEvent": "'childtap'/'childsingletap'/'childdoubletap'/'childswipe'/'childtaphold'/'childlongpress'",
    "twoWayBindable": "String/String[]/Object",
    "ui": "String/String[]",
    "userCls": "String/String[]",
    "userSelectable": "Boolean/String/Object",
    "viewModel": "String/Object/Ext.app.ViewModel",
    "weight": "Number",
    "weighted": "Boolean",
    "width": "Number/String",
    "x": "Number",
    "xtype": "String",
    "y": "Number",
    "zIndex": "Number",
    "platformConfig": "Object",
    "responsiveConfig": "Object",
    "fitToParent": "Boolean",
    "config": "Object",
};
  public static PROPERTIES: string[] = [
    'activeChildTabIndex',
    'activeItem',
    'allowFocusingDisabledChildren',
    'alwaysOnTop',
    'ariaAttributes',
    'ariaDescribedBy',
    'ariaLabel',
    'ariaLabelledBy',
    'associatedData',
    'autoDestroy',
    'autoSize',
    'axisLock',
    'bind',
    'border',
    'bottom',
    'cardSwitchAnimation',
    'centered',
    'cls',
    'constrainAlign',
    'contentEl',
    'control',
    'controller',
    'data',
    'defaultFocus',
    'defaultListenerScope',
    'defaults',
    'defaultType',
    'deferEmptyText',
    'deselectOnContainerClick',
    'disabled',
    'disableSelection',
    'displayed',
    'docked',
    'draggable',
    'emptyItemText',
    'emptyState',
    'emptyText',
    'emptyTextDefaults',
    'emptyTextProperty',
    'enableTextSelection',
    'enterAnimation',
    'eventHandlers',
    'exitAnimation',
    'flex',
    'floated',
    'focusableContainer',
    'focusCls',
    'fullscreen',
    'height',
    'hidden',
    'hideAnimation',
    'hideMode',
    'hideOnMaskTap',
    'html',
    'id',
    'inactiveChildTabIndex',
    'inline',
    'innerCls',
    'instanceCls',
    'itemButtonMode',
    'itemCls',
    'itemConfig',
    'itemContentCls',
    'itemDataMap',
    'itemId',
    'itemInnerCls',
    'itemRipple',
    'items',
    'itemsFocusable',
    'itemTpl',
    'keyMap',
    'keyMapEnabled',
    'keyMapTarget',
    'layout',
    'left',
    'listeners',
    'loadingHeight',
    'loadingText',
    'manageBorders',
    'margin',
    'markDirty',
    'masked',
    'maxHeight',
    'maxItemCache',
    'maxWidth',
    'minHeight',
    'minWidth',
    'modal',
    'modelValidation',
    'name',
    'nameable',
    'nameHolder',
    'padding',
    'plugins',
    'pressedDelay',
    'publishes',
    'record',
    'reference',
    'referenceHolder',
    'relative',
    'renderTo',
    'resetFocusPosition',
    'right',
    'ripple',
    'scrollable',
    'scrollDock',
    'scrollToTopOnRefresh',
    'selectable',
    'selection',
    'selfAlign',
    'session',
    'shadow',
    'shareableName',
    'shim',
    'showAnimation',
    'store',
    'striped',
    'style',
    'tabIndex',
    'toFrontOnShow',
    'tooltip',
    'top',
    'touchAction',
    'tpl',
    'tplWriteMode',
    'translatable',
    'triggerCtEvent',
    'triggerEvent',
    'twoWayBindable',
    'ui',
    'userCls',
    'userSelectable',
    'viewModel',
    'weight',
    'weighted',
    'width',
    'x',
    'xtype',
    'y',
    'zIndex',
    'platformConfig',
    'responsiveConfig',
    'fitToParent',
    'config'
];
  public static EVENTS: any[] = [
		{name:'activate',parameters:'newActiveItem,componentdataview,oldActiveItem'},
		{name:'activeItemchange',parameters:'sender,value,oldValue'},
		{name:'add',parameters:''},
		{name:'added',parameters:'sender,container,index'},
		{name:'beforeactiveItemchange',parameters:'sender,value,oldValue,undefined'},
		{name:'beforebottomchange',parameters:'sender,value,oldValue,undefined'},
		{name:'beforecenteredchange',parameters:'sender,value,oldValue,undefined'},
		{name:'beforedisabledchange',parameters:'sender,value,oldValue,undefined'},
		{name:'beforedockedchange',parameters:'sender,value,oldValue,undefined'},
		{name:'beforeheightchange',parameters:'sender,value,oldValue,undefined'},
		{name:'beforehiddenchange',parameters:'sender,value,oldValue,undefined'},
		{name:'beforehide',parameters:'sender'},
		{name:'beforeleftchange',parameters:'sender,value,oldValue,undefined'},
		{name:'beforemaxHeightchange',parameters:'sender,value,oldValue,undefined'},
		{name:'beforemaxWidthchange',parameters:'sender,value,oldValue,undefined'},
		{name:'beforeminHeightchange',parameters:'sender,value,oldValue,undefined'},
		{name:'beforeminWidthchange',parameters:'sender,value,oldValue,undefined'},
		{name:'beforeorientationchange',parameters:''},
		{name:'beforerightchange',parameters:'sender,value,oldValue,undefined'},
		{name:'beforescrollablechange',parameters:'sender,value,oldValue,undefined'},
		{name:'beforeshow',parameters:'sender'},
		{name:'beforestorechange',parameters:'sender,value,oldValue,undefined'},
		{name:'beforetofront',parameters:'componentdataview'},
		{name:'beforetopchange',parameters:'sender,value,oldValue,undefined'},
		{name:'beforewidthchange',parameters:'sender,value,oldValue,undefined'},
		{name:'blur',parameters:'componentdataview,event'},
		{name:'bottomchange',parameters:'sender,value,oldValue'},
		{name:'centeredchange',parameters:'sender,value,oldValue'},
		{name:'childdoubletap',parameters:'componentdataview,location'},
		{name:'childlongpress',parameters:'componentdataview,location'},
		{name:'childmouseenter',parameters:'componentdataview,location'},
		{name:'childmouseleave',parameters:'componentdataview,location'},
		{name:'childsingletap',parameters:'componentdataview,location'},
		{name:'childtap',parameters:'componentdataview,location'},
		{name:'childtaphold',parameters:'componentdataview,location'},
		{name:'childtouchcancel',parameters:'componentdataview,location'},
		{name:'childtouchend',parameters:'componentdataview,location'},
		{name:'childtouchmove',parameters:'componentdataview,location'},
		{name:'childtouchstart',parameters:'componentdataview,location'},
		{name:'deactivate',parameters:'oldActiveItem,componentdataview,newActiveItem'},
		{name:'deselect',parameters:'componentdataview,records'},
		{name:'destroy',parameters:''},
		{name:'disabledchange',parameters:'sender,value,oldValue'},
		{name:'dockedchange',parameters:'sender,value,oldValue'},
		{name:'erased',parameters:'sender'},
		{name:'floatingchange',parameters:'sender,positioned'},
		{name:'focus',parameters:'componentdataview,event'},
		{name:'focusenter',parameters:'componentdataview,event'},
		{name:'focusleave',parameters:'componentdataview,event'},
		{name:'fullscreen',parameters:'sender'},
		{name:'heightchange',parameters:'sender,value,oldValue'},
		{name:'hiddenchange',parameters:'sender,value,oldValue'},
		{name:'hide',parameters:'sender'},
		{name:'initialize',parameters:'sender'},
		{name:'itemdoubletap',parameters:'componentdataview,index,target,record,e'},
		{name:'itemlongpress',parameters:'componentdataview,index,target,record,e'},
		{name:'itemmouseenter',parameters:'componentdataview,index,target,record,e'},
		{name:'itemmouseleave',parameters:'componentdataview,index,target,record,e'},
		{name:'itemsingletap',parameters:'componentdataview,index,target,record,e'},
		{name:'itemswipe',parameters:'componentdataview,index,target,record,e'},
		{name:'itemtap',parameters:'componentdataview,index,target,record,e'},
		{name:'itemtaphold',parameters:'componentdataview,index,target,record,e'},
		{name:'itemtouchcancel',parameters:'componentdataview,index,target,record,e'},
		{name:'itemtouchend',parameters:'componentdataview,index,target,record,e'},
		{name:'itemtouchmove',parameters:'componentdataview,index,target,record,e'},
		{name:'itemtouchstart',parameters:'componentdataview,index,target,record,e'},
		{name:'leftchange',parameters:'sender,value,oldValue'},
		{name:'maxHeightchange',parameters:'sender,value,oldValue'},
		{name:'maxWidthchange',parameters:'sender,value,oldValue'},
		{name:'minHeightchange',parameters:'sender,value,oldValue'},
		{name:'minWidthchange',parameters:'sender,value,oldValue'},
		{name:'move',parameters:''},
		{name:'moved',parameters:'sender,container,toIndex,fromIndex'},
		{name:'navigate',parameters:'componentdataview,to,from'},
		{name:'orientationchange',parameters:''},
		{name:'painted',parameters:'sender,element'},
		{name:'positionedchange',parameters:'sender,positioned'},
		{name:'refresh',parameters:'componentdataview'},
		{name:'remove',parameters:''},
		{name:'removed',parameters:'sender,container,index'},
		{name:'renderedchange',parameters:'componentdataview,item,rendered'},
		{name:'resize',parameters:'element,info'},
		{name:'rightchange',parameters:'sender,value,oldValue'},
		{name:'scrollablechange',parameters:'sender,value,oldValue'},
		{name:'select',parameters:'componentdataview,selected'},
		{name:'show',parameters:'sender'},
		{name:'storechange',parameters:'sender,value,oldValue'},
		{name:'tofront',parameters:'componentdataview'},
		{name:'topchange',parameters:'sender,value,oldValue'},
		{name:'updatedata',parameters:'sender,newData'},
		{name:'widthchange',parameters:'sender,value,oldValue'},
		{name:'ready',parameters:''}
];
  public static EVENTNAMES: string[] = [
		'activate',
		'activeItemchange',
		'add',
		'added',
		'beforeactiveItemchange',
		'beforebottomchange',
		'beforecenteredchange',
		'beforedisabledchange',
		'beforedockedchange',
		'beforeheightchange',
		'beforehiddenchange',
		'beforehide',
		'beforeleftchange',
		'beforemaxHeightchange',
		'beforemaxWidthchange',
		'beforeminHeightchange',
		'beforeminWidthchange',
		'beforeorientationchange',
		'beforerightchange',
		'beforescrollablechange',
		'beforeshow',
		'beforestorechange',
		'beforetofront',
		'beforetopchange',
		'beforewidthchange',
		'blur',
		'bottomchange',
		'centeredchange',
		'childdoubletap',
		'childlongpress',
		'childmouseenter',
		'childmouseleave',
		'childsingletap',
		'childtap',
		'childtaphold',
		'childtouchcancel',
		'childtouchend',
		'childtouchmove',
		'childtouchstart',
		'deactivate',
		'deselect',
		'destroy',
		'disabledchange',
		'dockedchange',
		'erased',
		'floatingchange',
		'focus',
		'focusenter',
		'focusleave',
		'fullscreen',
		'heightchange',
		'hiddenchange',
		'hide',
		'initialize',
		'itemdoubletap',
		'itemlongpress',
		'itemmouseenter',
		'itemmouseleave',
		'itemsingletap',
		'itemswipe',
		'itemtap',
		'itemtaphold',
		'itemtouchcancel',
		'itemtouchend',
		'itemtouchmove',
		'itemtouchstart',
		'leftchange',
		'maxHeightchange',
		'maxWidthchange',
		'minHeightchange',
		'minWidthchange',
		'move',
		'moved',
		'navigate',
		'orientationchange',
		'painted',
		'positionedchange',
		'refresh',
		'remove',
		'removed',
		'renderedchange',
		'resize',
		'rightchange',
		'scrollablechange',
		'select',
		'show',
		'storechange',
		'tofront',
		'topchange',
		'updatedata',
		'widthchange',
		'ready'
];
}
@Component({
  selector: 'componentdataview', 
  inputs: componentdataviewMetaData.PROPERTIES,
  outputs: componentdataviewMetaData.EVENTNAMES,
  providers: [{provide: base, useExisting: forwardRef(() => ExtComponentdataviewComponent)}],
  template: '<ng-template #dynamic></ng-template>'
})
export class ExtComponentdataviewComponent extends base implements OnInit,AfterContentInit,OnChanges {
  constructor(eRef:ElementRef) {super(eRef,componentdataviewMetaData)}
  public ngOnInit() {this.baseOnInit(componentdataviewMetaData)}
  //public ngOnChanges(changes: SimpleChanges) {this.baseOnChanges(changes)}
  public ngAfterContentInit() {this.baseAfterContentInit()}
}