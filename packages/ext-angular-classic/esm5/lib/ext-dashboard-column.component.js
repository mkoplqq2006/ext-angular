/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { Component, ElementRef, forwardRef } from '@angular/core';
import { base } from './base';
var dashboard_columnMetaData = /** @class */ (function () {
    function dashboard_columnMetaData() {
    }
    dashboard_columnMetaData.XTYPE = 'dashboard-column';
    dashboard_columnMetaData.PROPERTIESOBJECT = {
        "actions": "Object",
        "activeChildTabIndex": "Number",
        "activeCounter": "Number",
        "activeItem": "String/Number",
        "alignOnScroll": "Boolean",
        "alignTarget": "String",
        "allowFocusingDisabledChildren": "Boolean",
        "alwaysOnTop": "Boolean/Number",
        "anchor": "String",
        "anchorSize": "Number/Object",
        "animateShadow": "Boolean",
        "ariaAttributes": "Object",
        "ariaDescribedBy": "String",
        "ariaLabel": "String",
        "ariaLabelledBy": "String",
        "autoDestroy": "Boolean",
        "autoEl": "String/Object",
        "autoRender": "Boolean/String/HTMLElement/Ext.dom.Element",
        "autoScroll": "Boolean",
        "autoShow": "Boolean",
        "baseCls": "String",
        "bind": "Object/String",
        "border": "Number/String/Boolean",
        "bubbleEvents": "String[]",
        "childEls": "Object/String[]/Object[]",
        "cls": "String/String[]",
        "columnWidth": "Number",
        "componentCls": "String",
        "componentLayout": "String/Object",
        "constrain": "Boolean",
        "constraintInsets": "Object/String",
        "constrainTo": "Ext.util.Region/Ext.dom.Element",
        "contentEl": "String",
        "controller": "String/Object/Ext.app.ViewController",
        "data": "Object",
        "defaultAlign": "String",
        "defaultFocus": "String",
        "defaultListenerScope": "Boolean",
        "defaults": "Object/Function",
        "defaultType": "String",
        "detachOnRemove": "Boolean",
        "disabled": "Boolean",
        "disabledCls": "String",
        "dock": "'top'/'bottom'/'left'/'right'",
        "draggable": "Boolean/Object",
        "fixed": "Boolean",
        "flex": "Number",
        "floating": "Boolean",
        "focusableContainer": "Boolean",
        "focusCls": "String",
        "focusOnToFront": "Boolean",
        "formBind": "Boolean",
        "frame": "Boolean",
        "height": "Number|String",
        "hidden": "Boolean",
        "hideMode": "String",
        "html": "String/Object",
        "id": "String",
        "inactiveChildTabIndex": "Number",
        "itemId": "String",
        "items": "Object/Object[]",
        "keyMap": "Object",
        "keyMapEnabled": "Boolean",
        "keyMapTarget": "String",
        "layout": "Ext.enums.Layout/Object",
        "liquidLayout": "Boolean",
        "listeners": "Object",
        "liveDrag": "Boolean",
        "loader": "Ext.ComponentLoader/Object",
        "margin": "Number/String",
        "maskDefaults": "Object",
        "maskElement": "String",
        "maxHeight": "Number",
        "maxWidth": "Number",
        "minHeight": "Number",
        "minWidth": "Number",
        "modal": "Boolean",
        "modelValidation": "Boolean",
        "nameable": "Boolean",
        "nameHolder": "Boolean",
        "overCls": "String",
        "overflowX": "String",
        "overflowY": "String",
        "padding": "Number/String",
        "plugins": "Array/Ext.enums.Plugin/Object/Ext.plugin.Abstract",
        "publishes": "String/String[]/Object",
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
        "shrinkWrap": "Boolean/Number",
        "stateEvents": "String[]",
        "stateful": "Boolean/Object",
        "stateId": "String",
        "style": "String/Object",
        "suspendLayout": "Boolean",
        "tabGuard": "Boolean",
        "tabIndex": "Number",
        "toFrontOnShow": "Boolean",
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
    dashboard_columnMetaData.PROPERTIES = [
        'actions',
        'activeChildTabIndex',
        'activeCounter',
        'activeItem',
        'alignOnScroll',
        'alignTarget',
        'allowFocusingDisabledChildren',
        'alwaysOnTop',
        'anchor',
        'anchorSize',
        'animateShadow',
        'ariaAttributes',
        'ariaDescribedBy',
        'ariaLabel',
        'ariaLabelledBy',
        'autoDestroy',
        'autoEl',
        'autoRender',
        'autoScroll',
        'autoShow',
        'baseCls',
        'bind',
        'border',
        'bubbleEvents',
        'childEls',
        'cls',
        'columnWidth',
        'componentCls',
        'componentLayout',
        'constrain',
        'constraintInsets',
        'constrainTo',
        'contentEl',
        'controller',
        'data',
        'defaultAlign',
        'defaultFocus',
        'defaultListenerScope',
        'defaults',
        'defaultType',
        'detachOnRemove',
        'disabled',
        'disabledCls',
        'dock',
        'draggable',
        'fixed',
        'flex',
        'floating',
        'focusableContainer',
        'focusCls',
        'focusOnToFront',
        'formBind',
        'frame',
        'height',
        'hidden',
        'hideMode',
        'html',
        'id',
        'inactiveChildTabIndex',
        'itemId',
        'items',
        'keyMap',
        'keyMapEnabled',
        'keyMapTarget',
        'layout',
        'liquidLayout',
        'listeners',
        'liveDrag',
        'loader',
        'margin',
        'maskDefaults',
        'maskElement',
        'maxHeight',
        'maxWidth',
        'minHeight',
        'minWidth',
        'modal',
        'modelValidation',
        'nameable',
        'nameHolder',
        'overCls',
        'overflowX',
        'overflowY',
        'padding',
        'plugins',
        'publishes',
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
        'shrinkWrap',
        'stateEvents',
        'stateful',
        'stateId',
        'style',
        'suspendLayout',
        'tabGuard',
        'tabIndex',
        'toFrontOnShow',
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
    dashboard_columnMetaData.EVENTS = [
        { name: 'activate', parameters: 'dashboard-column' },
        { name: 'add', parameters: 'dashboard-column,component,index' },
        { name: 'added', parameters: 'dashboard-column,container,pos' },
        { name: 'afterlayout', parameters: 'dashboard-column,layout' },
        { name: 'afterlayoutanimation', parameters: 'dashboard-column' },
        { name: 'afterrender', parameters: 'dashboard-column' },
        { name: 'beforeactivate', parameters: 'dashboard-column' },
        { name: 'beforeadd', parameters: 'dashboard-column,component,index' },
        { name: 'beforedeactivate', parameters: 'dashboard-column' },
        { name: 'beforedestroy', parameters: 'dashboard-column' },
        { name: 'beforehide', parameters: 'dashboard-column' },
        { name: 'beforeremove', parameters: 'dashboard-column,component' },
        { name: 'beforerender', parameters: 'dashboard-column' },
        { name: 'beforeshow', parameters: 'dashboard-column' },
        { name: 'beforestaterestore', parameters: 'dashboard-column,state' },
        { name: 'beforestatesave', parameters: 'dashboard-column,state' },
        { name: 'blur', parameters: 'dashboard-column,event' },
        { name: 'boxready', parameters: 'dashboard-column,width,height' },
        { name: 'childmove', parameters: 'dashboard-column,component,prevIndex,newIndex' },
        { name: 'deactivate', parameters: 'dashboard-column' },
        { name: 'destroy', parameters: 'dashboard-column' },
        { name: 'disable', parameters: 'dashboard-column' },
        { name: 'enable', parameters: 'dashboard-column' },
        { name: 'focus', parameters: 'dashboard-column,event' },
        { name: 'focusenter', parameters: 'dashboard-column,event' },
        { name: 'focusleave', parameters: 'dashboard-column,event' },
        { name: 'hide', parameters: 'dashboard-column' },
        { name: 'move', parameters: 'dashboard-column,x,y' },
        { name: 'remove', parameters: 'dashboard-column,component' },
        { name: 'removed', parameters: 'dashboard-column,ownerCt' },
        { name: 'render', parameters: 'dashboard-column' },
        { name: 'resize', parameters: 'dashboard-column,width,height,oldWidth,oldHeight' },
        { name: 'show', parameters: 'dashboard-column' },
        { name: 'staterestore', parameters: 'dashboard-column,state' },
        { name: 'statesave', parameters: 'dashboard-column,state' },
        { name: 'ready', parameters: '' }
    ];
    dashboard_columnMetaData.EVENTNAMES = [
        'activate',
        'add',
        'added',
        'afterlayout',
        'afterlayoutanimation',
        'afterrender',
        'beforeactivate',
        'beforeadd',
        'beforedeactivate',
        'beforedestroy',
        'beforehide',
        'beforeremove',
        'beforerender',
        'beforeshow',
        'beforestaterestore',
        'beforestatesave',
        'blur',
        'boxready',
        'childmove',
        'deactivate',
        'destroy',
        'disable',
        'enable',
        'focus',
        'focusenter',
        'focusleave',
        'hide',
        'move',
        'remove',
        'removed',
        'render',
        'resize',
        'show',
        'staterestore',
        'statesave',
        'ready'
    ];
    return dashboard_columnMetaData;
}());
export { dashboard_columnMetaData };
if (false) {
    /** @type {?} */
    dashboard_columnMetaData.XTYPE;
    /** @type {?} */
    dashboard_columnMetaData.PROPERTIESOBJECT;
    /** @type {?} */
    dashboard_columnMetaData.PROPERTIES;
    /** @type {?} */
    dashboard_columnMetaData.EVENTS;
    /** @type {?} */
    dashboard_columnMetaData.EVENTNAMES;
}
var ExtDashboard_columnComponent = /** @class */ (function (_super) {
    tslib_1.__extends(ExtDashboard_columnComponent, _super);
    function ExtDashboard_columnComponent(eRef) {
        return _super.call(this, eRef, dashboard_columnMetaData) || this;
    }
    /**
     * @return {?}
     */
    ExtDashboard_columnComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () { this.baseOnInit(dashboard_columnMetaData); };
    //public ngOnChanges(changes: SimpleChanges) {this.baseOnChanges(changes)}
    //public ngOnChanges(changes: SimpleChanges) {this.baseOnChanges(changes)}
    /**
     * @return {?}
     */
    ExtDashboard_columnComponent.prototype.ngAfterContentInit = 
    //public ngOnChanges(changes: SimpleChanges) {this.baseOnChanges(changes)}
    /**
     * @return {?}
     */
    function () {
        this.baseAfterContentInit();
        this['ready'].emit(this);
    };
    ExtDashboard_columnComponent.decorators = [
        { type: Component, args: [{
                    selector: 'dashboard-column',
                    inputs: dashboard_columnMetaData.PROPERTIES,
                    outputs: dashboard_columnMetaData.EVENTNAMES,
                    providers: [{ provide: base, useExisting: forwardRef(function () { return ExtDashboard_columnComponent; }) }],
                    template: '<ng-template #dynamic></ng-template>'
                }] }
    ];
    /** @nocollapse */
    ExtDashboard_columnComponent.ctorParameters = function () { return [
        { type: ElementRef }
    ]; };
    return ExtDashboard_columnComponent;
}(base));
export { ExtDashboard_columnComponent };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZXh0LWRhc2hib2FyZC1jb2x1bW4uY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vQHNlbmNoYS9leHQtYW5ndWxhci1jbGFzc2ljLyIsInNvdXJjZXMiOlsibGliL2V4dC1kYXNoYm9hcmQtY29sdW1uLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLE9BQU8sRUFLTCxTQUFTLEVBQ1QsVUFBVSxFQUNWLFVBQVUsRUFDWCxNQUFNLGVBQWUsQ0FBQztBQUN2QixPQUFPLEVBQUUsSUFBSSxFQUFFLE1BQU0sUUFBUSxDQUFDO0FBQzlCO0lBQUE7SUFnVkEsQ0FBQztJQS9VZSw4QkFBSyxHQUFXLGtCQUFrQixDQUFDO0lBQ25DLHlDQUFnQixHQUFRO1FBQ3BDLFNBQVMsRUFBRSxRQUFRO1FBQ25CLHFCQUFxQixFQUFFLFFBQVE7UUFDL0IsZUFBZSxFQUFFLFFBQVE7UUFDekIsWUFBWSxFQUFFLGVBQWU7UUFDN0IsZUFBZSxFQUFFLFNBQVM7UUFDMUIsYUFBYSxFQUFFLFFBQVE7UUFDdkIsK0JBQStCLEVBQUUsU0FBUztRQUMxQyxhQUFhLEVBQUUsZ0JBQWdCO1FBQy9CLFFBQVEsRUFBRSxRQUFRO1FBQ2xCLFlBQVksRUFBRSxlQUFlO1FBQzdCLGVBQWUsRUFBRSxTQUFTO1FBQzFCLGdCQUFnQixFQUFFLFFBQVE7UUFDMUIsaUJBQWlCLEVBQUUsUUFBUTtRQUMzQixXQUFXLEVBQUUsUUFBUTtRQUNyQixnQkFBZ0IsRUFBRSxRQUFRO1FBQzFCLGFBQWEsRUFBRSxTQUFTO1FBQ3hCLFFBQVEsRUFBRSxlQUFlO1FBQ3pCLFlBQVksRUFBRSw0Q0FBNEM7UUFDMUQsWUFBWSxFQUFFLFNBQVM7UUFDdkIsVUFBVSxFQUFFLFNBQVM7UUFDckIsU0FBUyxFQUFFLFFBQVE7UUFDbkIsTUFBTSxFQUFFLGVBQWU7UUFDdkIsUUFBUSxFQUFFLHVCQUF1QjtRQUNqQyxjQUFjLEVBQUUsVUFBVTtRQUMxQixVQUFVLEVBQUUsMEJBQTBCO1FB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LENBQUMsQ0FBQTtJQUN4QixDQUFDOztnQkFkSixTQUFTLFNBQUM7b0JBQ1QsUUFBUSxFQUFFLGtCQUFrQjtvQkFDNUIsTUFBTSxFQUFFLHdCQUF3QixDQUFDLFVBQVU7b0JBQzNDLE9BQU8sRUFBRSx3QkFBd0IsQ0FBQyxVQUFVO29CQUM1QyxTQUFTLEVBQUUsQ0FBQyxFQUFDLE9BQU8sRUFBRSxJQUFJLEVBQUUsV0FBVyxFQUFFLFVBQVUsQ0FBQyxjQUFNLE9BQUEsNEJBQTRCLEVBQTVCLENBQTRCLENBQUMsRUFBQyxDQUFDO29CQUN6RixRQUFRLEVBQUUsc0NBQXNDO2lCQUNqRDs7OztnQkEzVkMsVUFBVTs7SUFvV1osbUNBQUM7Q0FBQSxBQWZELENBT2tELElBQUksR0FRckQ7U0FSWSw0QkFBNEIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1xuICBPdXRwdXQsXG4gIE9uSW5pdCxcbiAgQWZ0ZXJDb250ZW50SW5pdCxcbiAgT25DaGFuZ2VzLFxuICBDb21wb25lbnQsXG4gIEVsZW1lbnRSZWYsXG4gIGZvcndhcmRSZWZcbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBiYXNlIH0gZnJvbSAnLi9iYXNlJztcbmV4cG9ydCBjbGFzcyBkYXNoYm9hcmRfY29sdW1uTWV0YURhdGEge1xuICBwdWJsaWMgc3RhdGljIFhUWVBFOiBzdHJpbmcgPSAnZGFzaGJvYXJkLWNvbHVtbic7XG4gIHB1YmxpYyBzdGF0aWMgUFJPUEVSVElFU09CSkVDVDogYW55ID0ge1xuICAgIFwiYWN0aW9uc1wiOiBcIk9iamVjdFwiLFxuICAgIFwiYWN0aXZlQ2hpbGRUYWJJbmRleFwiOiBcIk51bWJlclwiLFxuICAgIFwiYWN0aXZlQ291bnRlclwiOiBcIk51bWJlclwiLFxuICAgIFwiYWN0aXZlSXRlbVwiOiBcIlN0cmluZy9OdW1iZXJcIixcbiAgICBcImFsaWduT25TY3JvbGxcIjogXCJCb29sZWFuXCIsXG4gICAgXCJhbGlnblRhcmdldFwiOiBcIlN0cmluZ1wiLFxuICAgIFwiYWxsb3dGb2N1c2luZ0Rpc2FibGVkQ2hpbGRyZW5cIjogXCJCb29sZWFuXCIsXG4gICAgXCJhbHdheXNPblRvcFwiOiBcIkJvb2xlYW4vTnVtYmVyXCIsXG4gICAgXCJhbmNob3JcIjogXCJTdHJpbmdcIixcbiAgICBcImFuY2hvclNpemVcIjogXCJOdW1iZXIvT2JqZWN0XCIsXG4gICAgXCJhbmltYXRlU2hhZG93XCI6IFwiQm9vbGVhblwiLFxuICAgIFwiYXJpYUF0dHJpYnV0ZXNcIjogXCJPYmplY3RcIixcbiAgICBcImFyaWFEZXNjcmliZWRCeVwiOiBcIlN0cmluZ1wiLFxuICAgIFwiYXJpYUxhYmVsXCI6IFwiU3RyaW5nXCIsXG4gICAgXCJhcmlhTGFiZWxsZWRCeVwiOiBcIlN0cmluZ1wiLFxuICAgIFwiYXV0b0Rlc3Ryb3lcIjogXCJCb29sZWFuXCIsXG4gICAgXCJhdXRvRWxcIjogXCJTdHJpbmcvT2JqZWN0XCIsXG4gICAgXCJhdXRvUmVuZGVyXCI6IFwiQm9vbGVhbi9TdHJpbmcvSFRNTEVsZW1lbnQvRXh0LmRvbS5FbGVtZW50XCIsXG4gICAgXCJhdXRvU2Nyb2xsXCI6IFwiQm9vbGVhblwiLFxuICAgIFwiYXV0b1Nob3dcIjogXCJCb29sZWFuXCIsXG4gICAgXCJiYXNlQ2xzXCI6IFwiU3RyaW5nXCIsXG4gICAgXCJiaW5kXCI6IFwiT2JqZWN0L1N0cmluZ1wiLFxuICAgIFwiYm9yZGVyXCI6IFwiTnVtYmVyL1N0cmluZy9Cb29sZWFuXCIsXG4gICAgXCJidWJibGVFdmVudHNcIjogXCJTdHJpbmdbXVwiLFxuICAgIFwiY2hpbGRFbHNcIjogXCJPYmplY3QvU3RyaW5nW10vT2JqZWN0W11cIixcbiAgICBcImNsc1wiOiBcIlN0cmluZy9TdHJpbmdbXVwiLFxuICAgIFwiY29sdW1uV2lkdGhcIjogXCJOdW1iZXJcIixcbiAgICBcImNvbXBvbmVudENsc1wiOiBcIlN0cmluZ1wiLFxuICAgIFwiY29tcG9uZW50TGF5b3V0XCI6IFwiU3RyaW5nL09iamVjdFwiLFxuICAgIFwiY29uc3RyYWluXCI6IFwiQm9vbGVhblwiLFxuICAgIFwiY29uc3RyYWludEluc2V0c1wiOiBcIk9iamVjdC9TdHJpbmdcIixcbiAgICBcImNvbnN0cmFpblRvXCI6IFwiRXh0LnV0aWwuUmVnaW9uL0V4dC5kb20uRWxlbWVudFwiLFxuICAgIFwiY29udGVudEVsXCI6IFwiU3RyaW5nXCIsXG4gICAgXCJjb250cm9sbGVyXCI6IFwiU3RyaW5nL09iamVjdC9FeHQuYXBwLlZpZXdDb250cm9sbGVyXCIsXG4gICAgXCJkYXRhXCI6IFwiT2JqZWN0XCIsXG4gICAgXCJkZWZhdWx0QWxpZ25cIjogXCJTdHJpbmdcIixcbiAgICBcImRlZmF1bHRGb2N1c1wiOiBcIlN0cmluZ1wiLFxuICAgIFwiZGVmYXVsdExpc3RlbmVyU2NvcGVcIjogXCJCb29sZWFuXCIsXG4gICAgXCJkZWZhdWx0c1wiOiBcIk9iamVjdC9GdW5jdGlvblwiLFxuICAgIFwiZGVmYXVsdFR5cGVcIjogXCJTdHJpbmdcIixcbiAgICBcImRldGFjaE9uUmVtb3ZlXCI6IFwiQm9vbGVhblwiLFxuICAgIFwiZGlzYWJsZWRcIjogXCJCb29sZWFuXCIsXG4gICAgXCJkaXNhYmxlZENsc1wiOiBcIlN0cmluZ1wiLFxuICAgIFwiZG9ja1wiOiBcIid0b3AnLydib3R0b20nLydsZWZ0Jy8ncmlnaHQnXCIsXG4gICAgXCJkcmFnZ2FibGVcIjogXCJCb29sZWFuL09iamVjdFwiLFxuICAgIFwiZml4ZWRcIjogXCJCb29sZWFuXCIsXG4gICAgXCJmbGV4XCI6IFwiTnVtYmVyXCIsXG4gICAgXCJmbG9hdGluZ1wiOiBcIkJvb2xlYW5cIixcbiAgICBcImZvY3VzYWJsZUNvbnRhaW5lclwiOiBcIkJvb2xlYW5cIixcbiAgICBcImZvY3VzQ2xzXCI6IFwiU3RyaW5nXCIsXG4gICAgXCJmb2N1c09uVG9Gcm9udFwiOiBcIkJvb2xlYW5cIixcbiAgICBcImZvcm1CaW5kXCI6IFwiQm9vbGVhblwiLFxuICAgIFwiZnJhbWVcIjogXCJCb29sZWFuXCIsXG4gICAgXCJoZWlnaHRcIjogXCJOdW1iZXJ8U3RyaW5nXCIsXG4gICAgXCJoaWRkZW5cIjogXCJCb29sZWFuXCIsXG4gICAgXCJoaWRlTW9kZVwiOiBcIlN0cmluZ1wiLFxuICAgIFwiaHRtbFwiOiBcIlN0cmluZy9PYmplY3RcIixcbiAgICBcImlkXCI6IFwiU3RyaW5nXCIsXG4gICAgXCJpbmFjdGl2ZUNoaWxkVGFiSW5kZXhcIjogXCJOdW1iZXJcIixcbiAgICBcIml0ZW1JZFwiOiBcIlN0cmluZ1wiLFxuICAgIFwiaXRlbXNcIjogXCJPYmplY3QvT2JqZWN0W11cIixcbiAgICBcImtleU1hcFwiOiBcIk9iamVjdFwiLFxuICAgIFwia2V5TWFwRW5hYmxlZFwiOiBcIkJvb2xlYW5cIixcbiAgICBcImtleU1hcFRhcmdldFwiOiBcIlN0cmluZ1wiLFxuICAgIFwibGF5b3V0XCI6IFwiRXh0LmVudW1zLkxheW91dC9PYmplY3RcIixcbiAgICBcImxpcXVpZExheW91dFwiOiBcIkJvb2xlYW5cIixcbiAgICBcImxpc3RlbmVyc1wiOiBcIk9iamVjdFwiLFxuICAgIFwibGl2ZURyYWdcIjogXCJCb29sZWFuXCIsXG4gICAgXCJsb2FkZXJcIjogXCJFeHQuQ29tcG9uZW50TG9hZGVyL09iamVjdFwiLFxuICAgIFwibWFyZ2luXCI6IFwiTnVtYmVyL1N0cmluZ1wiLFxuICAgIFwibWFza0RlZmF1bHRzXCI6IFwiT2JqZWN0XCIsXG4gICAgXCJtYXNrRWxlbWVudFwiOiBcIlN0cmluZ1wiLFxuICAgIFwibWF4SGVpZ2h0XCI6IFwiTnVtYmVyXCIsXG4gICAgXCJtYXhXaWR0aFwiOiBcIk51bWJlclwiLFxuICAgIFwibWluSGVpZ2h0XCI6IFwiTnVtYmVyXCIsXG4gICAgXCJtaW5XaWR0aFwiOiBcIk51bWJlclwiLFxuICAgIFwibW9kYWxcIjogXCJCb29sZWFuXCIsXG4gICAgXCJtb2RlbFZhbGlkYXRpb25cIjogXCJCb29sZWFuXCIsXG4gICAgXCJuYW1lYWJsZVwiOiBcIkJvb2xlYW5cIixcbiAgICBcIm5hbWVIb2xkZXJcIjogXCJCb29sZWFuXCIsXG4gICAgXCJvdmVyQ2xzXCI6IFwiU3RyaW5nXCIsXG4gICAgXCJvdmVyZmxvd1hcIjogXCJTdHJpbmdcIixcbiAgICBcIm92ZXJmbG93WVwiOiBcIlN0cmluZ1wiLFxuICAgIFwicGFkZGluZ1wiOiBcIk51bWJlci9TdHJpbmdcIixcbiAgICBcInBsdWdpbnNcIjogXCJBcnJheS9FeHQuZW51bXMuUGx1Z2luL09iamVjdC9FeHQucGx1Z2luLkFic3RyYWN0XCIsXG4gICAgXCJwdWJsaXNoZXNcIjogXCJTdHJpbmcvU3RyaW5nW10vT2JqZWN0XCIsXG4gICAgXCJyZWZlcmVuY2VcIjogXCJTdHJpbmdcIixcbiAgICBcInJlZmVyZW5jZUhvbGRlclwiOiBcIkJvb2xlYW5cIixcbiAgICBcInJlZ2lvblwiOiBcIidub3J0aCcvJ3NvdXRoJy8nZWFzdCcvJ3dlc3QnLydjZW50ZXInXCIsXG4gICAgXCJyZW5kZXJDb25maWdcIjogXCJPYmplY3RcIixcbiAgICBcInJlbmRlckRhdGFcIjogXCJPYmplY3RcIixcbiAgICBcInJlbmRlclNlbGVjdG9yc1wiOiBcIk9iamVjdFwiLFxuICAgIFwicmVuZGVyVG9cIjogXCJTdHJpbmcvSFRNTEVsZW1lbnQvRXh0LmRvbS5FbGVtZW50XCIsXG4gICAgXCJyZW5kZXJUcGxcIjogXCJFeHQuWFRlbXBsYXRlL1N0cmluZy9TdHJpbmdbXVwiLFxuICAgIFwicmVzZXRGb2N1c1Bvc2l0aW9uXCI6IFwiQm9vbGVhblwiLFxuICAgIFwicmVzaXphYmxlXCI6IFwiQm9vbGVhbi9PYmplY3RcIixcbiAgICBcInJlc2l6ZUhhbmRsZXNcIjogXCJTdHJpbmdcIixcbiAgICBcInNhdmVEZWxheVwiOiBcIk51bWJlclwiLFxuICAgIFwic2Nyb2xsYWJsZVwiOiBcIkJvb2xlYW4vU3RyaW5nL09iamVjdFwiLFxuICAgIFwic2Vzc2lvblwiOiBcIkJvb2xlYW4vT2JqZWN0L0V4dC5kYXRhLlNlc3Npb25cIixcbiAgICBcInNoYWRvd1wiOiBcIlN0cmluZy9Cb29sZWFuXCIsXG4gICAgXCJzaGFkb3dPZmZzZXRcIjogXCJOdW1iZXJcIixcbiAgICBcInNoYXJlYWJsZU5hbWVcIjogXCJCb29sZWFuXCIsXG4gICAgXCJzaGltXCI6IFwiQm9vbGVhblwiLFxuICAgIFwic2hyaW5rV3JhcFwiOiBcIkJvb2xlYW4vTnVtYmVyXCIsXG4gICAgXCJzdGF0ZUV2ZW50c1wiOiBcIlN0cmluZ1tdXCIsXG4gICAgXCJzdGF0ZWZ1bFwiOiBcIkJvb2xlYW4vT2JqZWN0XCIsXG4gICAgXCJzdGF0ZUlkXCI6IFwiU3RyaW5nXCIsXG4gICAgXCJzdHlsZVwiOiBcIlN0cmluZy9PYmplY3RcIixcbiAgICBcInN1c3BlbmRMYXlvdXRcIjogXCJCb29sZWFuXCIsXG4gICAgXCJ0YWJHdWFyZFwiOiBcIkJvb2xlYW5cIixcbiAgICBcInRhYkluZGV4XCI6IFwiTnVtYmVyXCIsXG4gICAgXCJ0b0Zyb250T25TaG93XCI6IFwiQm9vbGVhblwiLFxuICAgIFwidG91Y2hBY3Rpb25cIjogXCJPYmplY3RcIixcbiAgICBcInRwbFwiOiBcIkV4dC5YVGVtcGxhdGUvRXh0LlRlbXBsYXRlL1N0cmluZy9TdHJpbmdbXVwiLFxuICAgIFwidHBsV3JpdGVNb2RlXCI6IFwiU3RyaW5nXCIsXG4gICAgXCJ0d29XYXlCaW5kYWJsZVwiOiBcIlN0cmluZy9TdHJpbmdbXS9PYmplY3RcIixcbiAgICBcInVpXCI6IFwiU3RyaW5nXCIsXG4gICAgXCJ1aUNsc1wiOiBcIlN0cmluZ1tdXCIsXG4gICAgXCJ1c2VyQ2xzXCI6IFwiU3RyaW5nL1N0cmluZ1tdXCIsXG4gICAgXCJ2aWV3TW9kZWxcIjogXCJTdHJpbmcvT2JqZWN0L0V4dC5hcHAuVmlld01vZGVsXCIsXG4gICAgXCJ3ZWlnaHRcIjogXCJOdW1iZXJcIixcbiAgICBcIndpZHRoXCI6IFwiTnVtYmVyfFN0cmluZ1wiLFxuICAgIFwieHR5cGVcIjogXCJFeHQuZW51bXMuV2lkZ2V0XCIsXG4gICAgXCJwbGF0Zm9ybUNvbmZpZ1wiOiBcIk9iamVjdFwiLFxuICAgIFwiZml0VG9QYXJlbnRcIjogXCJCb29sZWFuXCIsXG4gICAgXCJjb25maWdcIjogXCJPYmplY3RcIixcbn07XG4gIHB1YmxpYyBzdGF0aWMgUFJPUEVSVElFUzogc3RyaW5nW10gPSBbXG4gICAgJ2FjdGlvbnMnLFxuICAgICdhY3RpdmVDaGlsZFRhYkluZGV4JyxcbiAgICAnYWN0aXZlQ291bnRlcicsXG4gICAgJ2FjdGl2ZUl0ZW0nLFxuICAgICdhbGlnbk9uU2Nyb2xsJyxcbiAgICAnYWxpZ25UYXJnZXQnLFxuICAgICdhbGxvd0ZvY3VzaW5nRGlzYWJsZWRDaGlsZHJlbicsXG4gICAgJ2Fsd2F5c09uVG9wJyxcbiAgICAnYW5jaG9yJyxcbiAgICAnYW5jaG9yU2l6ZScsXG4gICAgJ2FuaW1hdGVTaGFkb3cnLFxuICAgICdhcmlhQXR0cmlidXRlcycsXG4gICAgJ2FyaWFEZXNjcmliZWRCeScsXG4gICAgJ2FyaWFMYWJlbCcsXG4gICAgJ2FyaWFMYWJlbGxlZEJ5JyxcbiAgICAnYXV0b0Rlc3Ryb3knLFxuICAgICdhdXRvRWwnLFxuICAgICdhdXRvUmVuZGVyJyxcbiAgICAnYXV0b1Njcm9sbCcsXG4gICAgJ2F1dG9TaG93JyxcbiAgICAnYmFzZUNscycsXG4gICAgJ2JpbmQnLFxuICAgICdib3JkZXInLFxuICAgICdidWJibGVFdmVudHMnLFxuICAgICdjaGlsZEVscycsXG4gICAgJ2NscycsXG4gICAgJ2NvbHVtbldpZHRoJyxcbiAgICAnY29tcG9uZW50Q2xzJyxcbiAgICAnY29tcG9uZW50TGF5b3V0JyxcbiAgICAnY29uc3RyYWluJyxcbiAgICAnY29uc3RyYWludEluc2V0cycsXG4gICAgJ2NvbnN0cmFpblRvJyxcbiAgICAnY29udGVudEVsJyxcbiAgICAnY29udHJvbGxlcicsXG4gICAgJ2RhdGEnLFxuICAgICdkZWZhdWx0QWxpZ24nLFxuICAgICdkZWZhdWx0Rm9jdXMnLFxuICAgICdkZWZhdWx0TGlzdGVuZXJTY29wZScsXG4gICAgJ2RlZmF1bHRzJyxcbiAgICAnZGVmYXVsdFR5cGUnLFxuICAgICdkZXRhY2hPblJlbW92ZScsXG4gICAgJ2Rpc2FibGVkJyxcbiAgICAnZGlzYWJsZWRDbHMnLFxuICAgICdkb2NrJyxcbiAgICAnZHJhZ2dhYmxlJyxcbiAgICAnZml4ZWQnLFxuICAgICdmbGV4JyxcbiAgICAnZmxvYXRpbmcnLFxuICAgICdmb2N1c2FibGVDb250YWluZXInLFxuICAgICdmb2N1c0NscycsXG4gICAgJ2ZvY3VzT25Ub0Zyb250JyxcbiAgICAnZm9ybUJpbmQnLFxuICAgICdmcmFtZScsXG4gICAgJ2hlaWdodCcsXG4gICAgJ2hpZGRlbicsXG4gICAgJ2hpZGVNb2RlJyxcbiAgICAnaHRtbCcsXG4gICAgJ2lkJyxcbiAgICAnaW5hY3RpdmVDaGlsZFRhYkluZGV4JyxcbiAgICAnaXRlbUlkJyxcbiAgICAnaXRlbXMnLFxuICAgICdrZXlNYXAnLFxuICAgICdrZXlNYXBFbmFibGVkJyxcbiAgICAna2V5TWFwVGFyZ2V0JyxcbiAgICAnbGF5b3V0JyxcbiAgICAnbGlxdWlkTGF5b3V0JyxcbiAgICAnbGlzdGVuZXJzJyxcbiAgICAnbGl2ZURyYWcnLFxuICAgICdsb2FkZXInLFxuICAgICdtYXJnaW4nLFxuICAgICdtYXNrRGVmYXVsdHMnLFxuICAgICdtYXNrRWxlbWVudCcsXG4gICAgJ21heEhlaWdodCcsXG4gICAgJ21heFdpZHRoJyxcbiAgICAnbWluSGVpZ2h0JyxcbiAgICAnbWluV2lkdGgnLFxuICAgICdtb2RhbCcsXG4gICAgJ21vZGVsVmFsaWRhdGlvbicsXG4gICAgJ25hbWVhYmxlJyxcbiAgICAnbmFtZUhvbGRlcicsXG4gICAgJ292ZXJDbHMnLFxuICAgICdvdmVyZmxvd1gnLFxuICAgICdvdmVyZmxvd1knLFxuICAgICdwYWRkaW5nJyxcbiAgICAncGx1Z2lucycsXG4gICAgJ3B1Ymxpc2hlcycsXG4gICAgJ3JlZmVyZW5jZScsXG4gICAgJ3JlZmVyZW5jZUhvbGRlcicsXG4gICAgJ3JlZ2lvbicsXG4gICAgJ3JlbmRlckNvbmZpZycsXG4gICAgJ3JlbmRlckRhdGEnLFxuICAgICdyZW5kZXJTZWxlY3RvcnMnLFxuICAgICdyZW5kZXJUbycsXG4gICAgJ3JlbmRlclRwbCcsXG4gICAgJ3Jlc2V0Rm9jdXNQb3NpdGlvbicsXG4gICAgJ3Jlc2l6YWJsZScsXG4gICAgJ3Jlc2l6ZUhhbmRsZXMnLFxuICAgICdzYXZlRGVsYXknLFxuICAgICdzY3JvbGxhYmxlJyxcbiAgICAnc2Vzc2lvbicsXG4gICAgJ3NoYWRvdycsXG4gICAgJ3NoYWRvd09mZnNldCcsXG4gICAgJ3NoYXJlYWJsZU5hbWUnLFxuICAgICdzaGltJyxcbiAgICAnc2hyaW5rV3JhcCcsXG4gICAgJ3N0YXRlRXZlbnRzJyxcbiAgICAnc3RhdGVmdWwnLFxuICAgICdzdGF0ZUlkJyxcbiAgICAnc3R5bGUnLFxuICAgICdzdXNwZW5kTGF5b3V0JyxcbiAgICAndGFiR3VhcmQnLFxuICAgICd0YWJJbmRleCcsXG4gICAgJ3RvRnJvbnRPblNob3cnLFxuICAgICd0b3VjaEFjdGlvbicsXG4gICAgJ3RwbCcsXG4gICAgJ3RwbFdyaXRlTW9kZScsXG4gICAgJ3R3b1dheUJpbmRhYmxlJyxcbiAgICAndWknLFxuICAgICd1aUNscycsXG4gICAgJ3VzZXJDbHMnLFxuICAgICd2aWV3TW9kZWwnLFxuICAgICd3ZWlnaHQnLFxuICAgICd3aWR0aCcsXG4gICAgJ3h0eXBlJyxcbiAgICAncGxhdGZvcm1Db25maWcnLFxuICAgICdmaXRUb1BhcmVudCcsXG4gICAgJ2NvbmZpZydcbl07XG4gIHB1YmxpYyBzdGF0aWMgRVZFTlRTOiBhbnlbXSA9IFtcblx0XHR7bmFtZTonYWN0aXZhdGUnLHBhcmFtZXRlcnM6J2Rhc2hib2FyZC1jb2x1bW4nfSxcblx0XHR7bmFtZTonYWRkJyxwYXJhbWV0ZXJzOidkYXNoYm9hcmQtY29sdW1uLGNvbXBvbmVudCxpbmRleCd9LFxuXHRcdHtuYW1lOidhZGRlZCcscGFyYW1ldGVyczonZGFzaGJvYXJkLWNvbHVtbixjb250YWluZXIscG9zJ30sXG5cdFx0e25hbWU6J2FmdGVybGF5b3V0JyxwYXJhbWV0ZXJzOidkYXNoYm9hcmQtY29sdW1uLGxheW91dCd9LFxuXHRcdHtuYW1lOidhZnRlcmxheW91dGFuaW1hdGlvbicscGFyYW1ldGVyczonZGFzaGJvYXJkLWNvbHVtbid9LFxuXHRcdHtuYW1lOidhZnRlcnJlbmRlcicscGFyYW1ldGVyczonZGFzaGJvYXJkLWNvbHVtbid9LFxuXHRcdHtuYW1lOidiZWZvcmVhY3RpdmF0ZScscGFyYW1ldGVyczonZGFzaGJvYXJkLWNvbHVtbid9LFxuXHRcdHtuYW1lOidiZWZvcmVhZGQnLHBhcmFtZXRlcnM6J2Rhc2hib2FyZC1jb2x1bW4sY29tcG9uZW50LGluZGV4J30sXG5cdFx0e25hbWU6J2JlZm9yZWRlYWN0aXZhdGUnLHBhcmFtZXRlcnM6J2Rhc2hib2FyZC1jb2x1bW4nfSxcblx0XHR7bmFtZTonYmVmb3JlZGVzdHJveScscGFyYW1ldGVyczonZGFzaGJvYXJkLWNvbHVtbid9LFxuXHRcdHtuYW1lOidiZWZvcmVoaWRlJyxwYXJhbWV0ZXJzOidkYXNoYm9hcmQtY29sdW1uJ30sXG5cdFx0e25hbWU6J2JlZm9yZXJlbW92ZScscGFyYW1ldGVyczonZGFzaGJvYXJkLWNvbHVtbixjb21wb25lbnQnfSxcblx0XHR7bmFtZTonYmVmb3JlcmVuZGVyJyxwYXJhbWV0ZXJzOidkYXNoYm9hcmQtY29sdW1uJ30sXG5cdFx0e25hbWU6J2JlZm9yZXNob3cnLHBhcmFtZXRlcnM6J2Rhc2hib2FyZC1jb2x1bW4nfSxcblx0XHR7bmFtZTonYmVmb3Jlc3RhdGVyZXN0b3JlJyxwYXJhbWV0ZXJzOidkYXNoYm9hcmQtY29sdW1uLHN0YXRlJ30sXG5cdFx0e25hbWU6J2JlZm9yZXN0YXRlc2F2ZScscGFyYW1ldGVyczonZGFzaGJvYXJkLWNvbHVtbixzdGF0ZSd9LFxuXHRcdHtuYW1lOidibHVyJyxwYXJhbWV0ZXJzOidkYXNoYm9hcmQtY29sdW1uLGV2ZW50J30sXG5cdFx0e25hbWU6J2JveHJlYWR5JyxwYXJhbWV0ZXJzOidkYXNoYm9hcmQtY29sdW1uLHdpZHRoLGhlaWdodCd9LFxuXHRcdHtuYW1lOidjaGlsZG1vdmUnLHBhcmFtZXRlcnM6J2Rhc2hib2FyZC1jb2x1bW4sY29tcG9uZW50LHByZXZJbmRleCxuZXdJbmRleCd9LFxuXHRcdHtuYW1lOidkZWFjdGl2YXRlJyxwYXJhbWV0ZXJzOidkYXNoYm9hcmQtY29sdW1uJ30sXG5cdFx0e25hbWU6J2Rlc3Ryb3knLHBhcmFtZXRlcnM6J2Rhc2hib2FyZC1jb2x1bW4nfSxcblx0XHR7bmFtZTonZGlzYWJsZScscGFyYW1ldGVyczonZGFzaGJvYXJkLWNvbHVtbid9LFxuXHRcdHtuYW1lOidlbmFibGUnLHBhcmFtZXRlcnM6J2Rhc2hib2FyZC1jb2x1bW4nfSxcblx0XHR7bmFtZTonZm9jdXMnLHBhcmFtZXRlcnM6J2Rhc2hib2FyZC1jb2x1bW4sZXZlbnQnfSxcblx0XHR7bmFtZTonZm9jdXNlbnRlcicscGFyYW1ldGVyczonZGFzaGJvYXJkLWNvbHVtbixldmVudCd9LFxuXHRcdHtuYW1lOidmb2N1c2xlYXZlJyxwYXJhbWV0ZXJzOidkYXNoYm9hcmQtY29sdW1uLGV2ZW50J30sXG5cdFx0e25hbWU6J2hpZGUnLHBhcmFtZXRlcnM6J2Rhc2hib2FyZC1jb2x1bW4nfSxcblx0XHR7bmFtZTonbW92ZScscGFyYW1ldGVyczonZGFzaGJvYXJkLWNvbHVtbix4LHknfSxcblx0XHR7bmFtZToncmVtb3ZlJyxwYXJhbWV0ZXJzOidkYXNoYm9hcmQtY29sdW1uLGNvbXBvbmVudCd9LFxuXHRcdHtuYW1lOidyZW1vdmVkJyxwYXJhbWV0ZXJzOidkYXNoYm9hcmQtY29sdW1uLG93bmVyQ3QnfSxcblx0XHR7bmFtZToncmVuZGVyJyxwYXJhbWV0ZXJzOidkYXNoYm9hcmQtY29sdW1uJ30sXG5cdFx0e25hbWU6J3Jlc2l6ZScscGFyYW1ldGVyczonZGFzaGJvYXJkLWNvbHVtbix3aWR0aCxoZWlnaHQsb2xkV2lkdGgsb2xkSGVpZ2h0J30sXG5cdFx0e25hbWU6J3Nob3cnLHBhcmFtZXRlcnM6J2Rhc2hib2FyZC1jb2x1bW4nfSxcblx0XHR7bmFtZTonc3RhdGVyZXN0b3JlJyxwYXJhbWV0ZXJzOidkYXNoYm9hcmQtY29sdW1uLHN0YXRlJ30sXG5cdFx0e25hbWU6J3N0YXRlc2F2ZScscGFyYW1ldGVyczonZGFzaGJvYXJkLWNvbHVtbixzdGF0ZSd9LFxuXHRcdHtuYW1lOidyZWFkeScscGFyYW1ldGVyczonJ31cbl07XG4gIHB1YmxpYyBzdGF0aWMgRVZFTlROQU1FUzogc3RyaW5nW10gPSBbXG5cdFx0J2FjdGl2YXRlJyxcblx0XHQnYWRkJyxcblx0XHQnYWRkZWQnLFxuXHRcdCdhZnRlcmxheW91dCcsXG5cdFx0J2FmdGVybGF5b3V0YW5pbWF0aW9uJyxcblx0XHQnYWZ0ZXJyZW5kZXInLFxuXHRcdCdiZWZvcmVhY3RpdmF0ZScsXG5cdFx0J2JlZm9yZWFkZCcsXG5cdFx0J2JlZm9yZWRlYWN0aXZhdGUnLFxuXHRcdCdiZWZvcmVkZXN0cm95Jyxcblx0XHQnYmVmb3JlaGlkZScsXG5cdFx0J2JlZm9yZXJlbW92ZScsXG5cdFx0J2JlZm9yZXJlbmRlcicsXG5cdFx0J2JlZm9yZXNob3cnLFxuXHRcdCdiZWZvcmVzdGF0ZXJlc3RvcmUnLFxuXHRcdCdiZWZvcmVzdGF0ZXNhdmUnLFxuXHRcdCdibHVyJyxcblx0XHQnYm94cmVhZHknLFxuXHRcdCdjaGlsZG1vdmUnLFxuXHRcdCdkZWFjdGl2YXRlJyxcblx0XHQnZGVzdHJveScsXG5cdFx0J2Rpc2FibGUnLFxuXHRcdCdlbmFibGUnLFxuXHRcdCdmb2N1cycsXG5cdFx0J2ZvY3VzZW50ZXInLFxuXHRcdCdmb2N1c2xlYXZlJyxcblx0XHQnaGlkZScsXG5cdFx0J21vdmUnLFxuXHRcdCdyZW1vdmUnLFxuXHRcdCdyZW1vdmVkJyxcblx0XHQncmVuZGVyJyxcblx0XHQncmVzaXplJyxcblx0XHQnc2hvdycsXG5cdFx0J3N0YXRlcmVzdG9yZScsXG5cdFx0J3N0YXRlc2F2ZScsXG5cdFx0J3JlYWR5J1xuXTtcbn1cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2Rhc2hib2FyZC1jb2x1bW4nLCBcbiAgaW5wdXRzOiBkYXNoYm9hcmRfY29sdW1uTWV0YURhdGEuUFJPUEVSVElFUyxcbiAgb3V0cHV0czogZGFzaGJvYXJkX2NvbHVtbk1ldGFEYXRhLkVWRU5UTkFNRVMsXG4gIHByb3ZpZGVyczogW3twcm92aWRlOiBiYXNlLCB1c2VFeGlzdGluZzogZm9yd2FyZFJlZigoKSA9PiBFeHREYXNoYm9hcmRfY29sdW1uQ29tcG9uZW50KX1dLFxuICB0ZW1wbGF0ZTogJzxuZy10ZW1wbGF0ZSAjZHluYW1pYz48L25nLXRlbXBsYXRlPidcbn0pXG5leHBvcnQgY2xhc3MgRXh0RGFzaGJvYXJkX2NvbHVtbkNvbXBvbmVudCBleHRlbmRzIGJhc2UgaW1wbGVtZW50cyBPbkluaXQsQWZ0ZXJDb250ZW50SW5pdCxPbkNoYW5nZXMge1xuICBjb25zdHJ1Y3RvcihlUmVmOkVsZW1lbnRSZWYpIHtzdXBlcihlUmVmLGRhc2hib2FyZF9jb2x1bW5NZXRhRGF0YSl9XG4gIHB1YmxpYyBuZ09uSW5pdCgpIHt0aGlzLmJhc2VPbkluaXQoZGFzaGJvYXJkX2NvbHVtbk1ldGFEYXRhKX1cbiAgLy9wdWJsaWMgbmdPbkNoYW5nZXMoY2hhbmdlczogU2ltcGxlQ2hhbmdlcykge3RoaXMuYmFzZU9uQ2hhbmdlcyhjaGFuZ2VzKX1cbiAgcHVibGljIG5nQWZ0ZXJDb250ZW50SW5pdCgpIHtcbiAgICB0aGlzLmJhc2VBZnRlckNvbnRlbnRJbml0KClcbiAgICB0aGlzWydyZWFkeSddLmVtaXQodGhpcylcbiAgICB9XG59Il19