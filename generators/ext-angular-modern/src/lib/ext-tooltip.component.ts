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
export class tooltipMetaData {
  public static XTYPE: string = 'tooltip';
  public static PROPERTIESOBJECT: any = {
    "activeChildTabIndex": "Number",
    "activeItem": "Ext.Component/Object/String/Number",
    "align": "String",
    "alignDelegate": "String",
    "allowFocusingDisabledChildren": "Boolean",
    "allowOver": "Boolean",
    "alwaysOnTop": "Boolean/Number",
    "anchor": "Boolean",
    "anchorPosition": "String",
    "anchorToTarget": "Boolean",
    "ariaAttributes": "Object",
    "ariaDescribedBy": "String",
    "ariaLabel": "String",
    "ariaLabelledBy": "String",
    "autoDestroy": "Boolean",
    "autoHide": "Boolean",
    "autoSize": "Boolean",
    "axisLock": "Boolean",
    "bbar": "Object/Object[]",
    "bind": "Object/String",
    "bodyBorder": "Boolean",
    "bodyPadding": "Number/Boolean/String",
    "bodyStyle": "String/Object",
    "border": "Boolean",
    "bottom": "Number/String",
    "buttonAlign": "String",
    "buttons": "Object/Ext.Button[]",
    "buttonToolbar": "Object/Ext.Toolbar",
    "cardSwitchAnimation": "String/Object/Boolean",
    "centered": "Boolean",
    "closable": "Boolean",
    "closeAction": "String",
    "closeToolText": "String",
    "cls": "String/String[]",
    "collapsed": "Boolean",
    "collapsible": "'top'/'right'/'bottom'/'left'/Boolean/Object",
    "constrainAlign": "String/Ext.util.Region/Ext.dom.Element",
    "contentEl": "Ext.dom.Element/HTMLElement/String",
    "control": "Object",
    "controller": "String/Object/Ext.app.ViewController",
    "data": "Object",
    "defaultFocus": "String",
    "defaultListenerScope": "Boolean",
    "defaults": "Object",
    "defaultToolWeights": "Object",
    "defaultType": "String",
    "delegate": "String",
    "disabled": "Boolean",
    "dismissDelay": "Number",
    "displayed": "Boolean",
    "docked": "String",
    "draggable": "Boolean/Object/Ext.drag.Source",
    "enterAnimation": "String/Mixed",
    "eventHandlers": "Object",
    "exitAnimation": "String/Mixed",
    "flex": "Number/String/Object",
    "floated": "Boolean",
    "focusableContainer": "Boolean",
    "focusCls": "String",
    "fullscreen": "Boolean",
    "header": "Boolean/Object",
    "headerPosition": "'top'/'right'/'bottom'/'left'",
    "height": "Number/String",
    "hidden": "Boolean",
    "hideAnimation": "String/Mixed",
    "hideDelay": "Number",
    "hideMode": "'clip'/'display'/'offsets'/'opacity'/'visibility'",
    "hideOnMaskTap": "Boolean",
    "html": "String/Ext.dom.Element/HTMLElement",
    "icon": "String",
    "iconAlign": "'top'/'right'/'bottom'/'left'",
    "iconCls": "String",
    "id": "String",
    "inactiveChildTabIndex": "Number",
    "innerCls": "String",
    "instanceCls": "String/String[]",
    "itemId": "String",
    "items": "Array/Object",
    "keyMap": "Object",
    "keyMapEnabled": "Boolean",
    "keyMapTarget": "String",
    "layout": "Object/String",
    "lbar": "Object/Object[]",
    "left": "Number/String",
    "listeners": "Object",
    "manageBorders": "Boolean",
    "margin": "Number/String",
    "masked": "Boolean/Object/Ext.Mask/Ext.LoadMask",
    "maxHeight": "Number/String",
    "maxWidth": "Number/String",
    "minButtonWidth": "Number",
    "minHeight": "Number/String",
    "minWidth": "Number/String",
    "modal": "Boolean",
    "modelValidation": "Boolean",
    "mouseOffset": "Number[]",
    "name": "String",
    "nameable": "Boolean",
    "nameHolder": "Boolean",
    "padding": "Number/String",
    "plugins": "Array/Ext.enums.Plugin/Object/Ext.plugin.Abstract",
    "publishes": "String/String[]/Object",
    "quickShowInterval": "Number",
    "rbar": "Object/Object[]",
    "record": "Ext.data.Model",
    "reference": "String",
    "referenceHolder": "Boolean",
    "relative": "Boolean",
    "renderTo": "Ext.dom.Element",
    "resetFocusPosition": "Boolean",
    "resizable": "Object",
    "right": "Number/String",
    "ripple": "Boolean/Object/String",
    "scrollable": "Boolean/String/Object",
    "selfAlign": "String",
    "session": "Boolean/Object/Ext.data.Session",
    "shadow": "Boolean",
    "shareableName": "Boolean",
    "shim": "Boolean",
    "showAnimation": "String/Mixed",
    "showDelay": "Number",
    "showOnTap": "Boolean/String[]",
    "standardButtons": "Object",
    "style": "String/Object",
    "tabIndex": "Number",
    "target": "Ext.Component/Ext.dom.Element",
    "tbar": "Object/Object[]",
    "title": "String/Ext.panel.Title",
    "titleAlign": "'left'/'center'/'right'",
    "toFrontOnShow": "Boolean",
    "toolDefaults": "Object",
    "tools": "Ext.Tool[]/Object/Object[]",
    "tooltip": "String/Object",
    "top": "Number/String",
    "touchAction": "Object",
    "tpl": "String/String[]/Ext.Template/Ext.XTemplate[]",
    "tplWriteMode": "String",
    "trackMouse": "Boolean",
    "translatable": "Object",
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
    'align',
    'alignDelegate',
    'allowFocusingDisabledChildren',
    'allowOver',
    'alwaysOnTop',
    'anchor',
    'anchorPosition',
    'anchorToTarget',
    'ariaAttributes',
    'ariaDescribedBy',
    'ariaLabel',
    'ariaLabelledBy',
    'autoDestroy',
    'autoHide',
    'autoSize',
    'axisLock',
    'bbar',
    'bind',
    'bodyBorder',
    'bodyPadding',
    'bodyStyle',
    'border',
    'bottom',
    'buttonAlign',
    'buttons',
    'buttonToolbar',
    'cardSwitchAnimation',
    'centered',
    'closable',
    'closeAction',
    'closeToolText',
    'cls',
    'collapsed',
    'collapsible',
    'constrainAlign',
    'contentEl',
    'control',
    'controller',
    'data',
    'defaultFocus',
    'defaultListenerScope',
    'defaults',
    'defaultToolWeights',
    'defaultType',
    'delegate',
    'disabled',
    'dismissDelay',
    'displayed',
    'docked',
    'draggable',
    'enterAnimation',
    'eventHandlers',
    'exitAnimation',
    'flex',
    'floated',
    'focusableContainer',
    'focusCls',
    'fullscreen',
    'header',
    'headerPosition',
    'height',
    'hidden',
    'hideAnimation',
    'hideDelay',
    'hideMode',
    'hideOnMaskTap',
    'html',
    'icon',
    'iconAlign',
    'iconCls',
    'id',
    'inactiveChildTabIndex',
    'innerCls',
    'instanceCls',
    'itemId',
    'items',
    'keyMap',
    'keyMapEnabled',
    'keyMapTarget',
    'layout',
    'lbar',
    'left',
    'listeners',
    'manageBorders',
    'margin',
    'masked',
    'maxHeight',
    'maxWidth',
    'minButtonWidth',
    'minHeight',
    'minWidth',
    'modal',
    'modelValidation',
    'mouseOffset',
    'name',
    'nameable',
    'nameHolder',
    'padding',
    'plugins',
    'publishes',
    'quickShowInterval',
    'rbar',
    'record',
    'reference',
    'referenceHolder',
    'relative',
    'renderTo',
    'resetFocusPosition',
    'resizable',
    'right',
    'ripple',
    'scrollable',
    'selfAlign',
    'session',
    'shadow',
    'shareableName',
    'shim',
    'showAnimation',
    'showDelay',
    'showOnTap',
    'standardButtons',
    'style',
    'tabIndex',
    'target',
    'tbar',
    'title',
    'titleAlign',
    'toFrontOnShow',
    'toolDefaults',
    'tools',
    'tooltip',
    'top',
    'touchAction',
    'tpl',
    'tplWriteMode',
    'trackMouse',
    'translatable',
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
		{name:'activate',parameters:'newActiveItem,tooltip,oldActiveItem'},
		{name:'activeItemchange',parameters:'sender,value,oldValue'},
		{name:'add',parameters:'tooltip,item,index'},
		{name:'added',parameters:'sender,container,index'},
		{name:'beforeactiveItemchange',parameters:'sender,value,oldValue,undefined'},
		{name:'beforebottomchange',parameters:'sender,value,oldValue,undefined'},
		{name:'beforecenteredchange',parameters:'sender,value,oldValue,undefined'},
		{name:'beforecollapse',parameters:'tooltip'},
		{name:'beforedisabledchange',parameters:'sender,value,oldValue,undefined'},
		{name:'beforedockedchange',parameters:'sender,value,oldValue,undefined'},
		{name:'beforeexpand',parameters:'tooltip'},
		{name:'beforeheightchange',parameters:'sender,value,oldValue,undefined'},
		{name:'beforehiddenchange',parameters:'sender,value,oldValue,undefined'},
		{name:'beforehide',parameters:'sender'},
		{name:'beforeleftchange',parameters:'sender,value,oldValue,undefined'},
		{name:'beforemaxHeightchange',parameters:'sender,value,oldValue,undefined'},
		{name:'beforemaxWidthchange',parameters:'sender,value,oldValue,undefined'},
		{name:'beforeminHeightchange',parameters:'sender,value,oldValue,undefined'},
		{name:'beforeminWidthchange',parameters:'sender,value,oldValue,undefined'},
		{name:'beforeorientationchange',parameters:''},
		{name:'beforeresizedragstart',parameters:'tooltip,context'},
		{name:'beforerightchange',parameters:'sender,value,oldValue,undefined'},
		{name:'beforescrollablechange',parameters:'sender,value,oldValue,undefined'},
		{name:'beforeshow',parameters:'sender'},
		{name:'beforetofront',parameters:'tooltip'},
		{name:'beforetopchange',parameters:'sender,value,oldValue,undefined'},
		{name:'beforewidthchange',parameters:'sender,value,oldValue,undefined'},
		{name:'blur',parameters:'tooltip,event'},
		{name:'bottomchange',parameters:'sender,value,oldValue'},
		{name:'centeredchange',parameters:'sender,value,oldValue'},
		{name:'collapse',parameters:'tooltip'},
		{name:'deactivate',parameters:'oldActiveItem,tooltip,newActiveItem'},
		{name:'destroy',parameters:''},
		{name:'disabledchange',parameters:'sender,value,oldValue'},
		{name:'dockedchange',parameters:'sender,value,oldValue'},
		{name:'drawerhide',parameters:'tooltip'},
		{name:'drawershow',parameters:'tooltip'},
		{name:'erased',parameters:'sender'},
		{name:'expand',parameters:'tooltip'},
		{name:'floatingchange',parameters:'sender,positioned'},
		{name:'focus',parameters:'tooltip,event'},
		{name:'focusenter',parameters:'tooltip,event'},
		{name:'focusleave',parameters:'tooltip,event'},
		{name:'fullscreen',parameters:'sender'},
		{name:'heightchange',parameters:'sender,value,oldValue'},
		{name:'hiddenchange',parameters:'sender,value,oldValue'},
		{name:'hide',parameters:'sender'},
		{name:'initialize',parameters:'sender'},
		{name:'leftchange',parameters:'sender,value,oldValue'},
		{name:'maxHeightchange',parameters:'sender,value,oldValue'},
		{name:'maxWidthchange',parameters:'sender,value,oldValue'},
		{name:'minHeightchange',parameters:'sender,value,oldValue'},
		{name:'minWidthchange',parameters:'sender,value,oldValue'},
		{name:'move',parameters:'tooltip,item,toIndex,fromIndex'},
		{name:'moved',parameters:'sender,container,toIndex,fromIndex'},
		{name:'orientationchange',parameters:''},
		{name:'painted',parameters:'sender,element'},
		{name:'positionedchange',parameters:'sender,positioned'},
		{name:'remove',parameters:'tooltip,item,index'},
		{name:'removed',parameters:'sender,container,index'},
		{name:'renderedchange',parameters:'tooltip,item,rendered'},
		{name:'resize',parameters:'element,info'},
		{name:'resizedrag',parameters:'tooltip,context'},
		{name:'resizedragcancel',parameters:'tooltip,context'},
		{name:'resizedragend',parameters:'tooltip,context'},
		{name:'resizedragstart',parameters:'tooltip,context'},
		{name:'rightchange',parameters:'sender,value,oldValue'},
		{name:'scrollablechange',parameters:'sender,value,oldValue'},
		{name:'show',parameters:'sender'},
		{name:'tofront',parameters:'tooltip'},
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
		'beforecollapse',
		'beforedisabledchange',
		'beforedockedchange',
		'beforeexpand',
		'beforeheightchange',
		'beforehiddenchange',
		'beforehide',
		'beforeleftchange',
		'beforemaxHeightchange',
		'beforemaxWidthchange',
		'beforeminHeightchange',
		'beforeminWidthchange',
		'beforeorientationchange',
		'beforeresizedragstart',
		'beforerightchange',
		'beforescrollablechange',
		'beforeshow',
		'beforetofront',
		'beforetopchange',
		'beforewidthchange',
		'blur',
		'bottomchange',
		'centeredchange',
		'collapse',
		'deactivate',
		'destroy',
		'disabledchange',
		'dockedchange',
		'drawerhide',
		'drawershow',
		'erased',
		'expand',
		'floatingchange',
		'focus',
		'focusenter',
		'focusleave',
		'fullscreen',
		'heightchange',
		'hiddenchange',
		'hide',
		'initialize',
		'leftchange',
		'maxHeightchange',
		'maxWidthchange',
		'minHeightchange',
		'minWidthchange',
		'move',
		'moved',
		'orientationchange',
		'painted',
		'positionedchange',
		'remove',
		'removed',
		'renderedchange',
		'resize',
		'resizedrag',
		'resizedragcancel',
		'resizedragend',
		'resizedragstart',
		'rightchange',
		'scrollablechange',
		'show',
		'tofront',
		'topchange',
		'updatedata',
		'widthchange',
		'ready'
];
}
@Component({
  selector: 'tooltip', 
  inputs: tooltipMetaData.PROPERTIES,
  outputs: tooltipMetaData.EVENTNAMES,
  providers: [{provide: base, useExisting: forwardRef(() => ExtTooltipComponent)}],
  template: '<ng-template #dynamic></ng-template>'
})
export class ExtTooltipComponent extends base implements OnInit,AfterContentInit,OnChanges {
  constructor(eRef:ElementRef) {super(eRef,tooltipMetaData)}
  public ngOnInit() {this.baseOnInit(tooltipMetaData)}
  //public ngOnChanges(changes: SimpleChanges) {this.baseOnChanges(changes)}
  public ngAfterContentInit() {
    this.baseAfterContentInit()
    this['ready'].emit(this)
    }
}