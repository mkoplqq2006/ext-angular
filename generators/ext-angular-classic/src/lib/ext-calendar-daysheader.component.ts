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
export class calendar_daysheaderMetaData {
  public static XTYPE: string = 'calendar-daysheader';
  public static PROPERTIESOBJECT: any = {
    "ariaAttributes": "Object",
    "ariaDescribedBy": "String",
    "ariaLabel": "String",
    "ariaLabelledBy": "String",
    "bind": "Object/String",
    "border": "Boolean",
    "cellCls": "String",
    "cls": "String/String[]",
    "compact": "Boolean",
    "compactOptions": "Object",
    "controller": "String/Object/Ext.app.ViewController",
    "defaultListenerScope": "Boolean",
    "disabled": "Boolean",
    "eventHandlers": "Object",
    "focusCls": "String",
    "format": "String",
    "height": "Number/String",
    "hidden": "Boolean",
    "hideMode": "'clip'/'display'/'offsets'/'opacity'/'visibility'",
    "instanceCls": "String/String[]",
    "keyMap": "Object",
    "keyMapEnabled": "Boolean",
    "keyMapTarget": "String",
    "listeners": "Object",
    "name": "String",
    "nameable": "Boolean",
    "plugins": "Array/Ext.enums.Plugin/Object/Ext.plugin.Abstract",
    "publishes": "String/String[]/Object",
    "reference": "String",
    "renderTo": "Ext.Element",
    "ripple": "Boolean/Object/String",
    "session": "Boolean/Object/Ext.data.Session",
    "shareableName": "Boolean",
    "style": "String/Object",
    "touchAction": "Object",
    "twoWayBindable": "String/String[]/Object",
    "ui": "String/String[]",
    "userCls": "String/String[]",
    "value": "Date",
    "viewModel": "String/Object/Ext.app.ViewModel",
    "visibleDays": "Number",
    "width": "Number/String",
    "platformConfig": "Object",
    "fitToParent": "Boolean",
    "config": "Object",
};
  public static PROPERTIES: string[] = [
    'ariaAttributes',
    'ariaDescribedBy',
    'ariaLabel',
    'ariaLabelledBy',
    'bind',
    'border',
    'cellCls',
    'cls',
    'compact',
    'compactOptions',
    'controller',
    'defaultListenerScope',
    'disabled',
    'eventHandlers',
    'focusCls',
    'format',
    'height',
    'hidden',
    'hideMode',
    'instanceCls',
    'keyMap',
    'keyMapEnabled',
    'keyMapTarget',
    'listeners',
    'name',
    'nameable',
    'plugins',
    'publishes',
    'reference',
    'renderTo',
    'ripple',
    'session',
    'shareableName',
    'style',
    'touchAction',
    'twoWayBindable',
    'ui',
    'userCls',
    'value',
    'viewModel',
    'visibleDays',
    'width',
    'platformConfig',
    'fitToParent',
    'config'
];
  public static EVENTS: any[] = [
		{name:'beforedisabledchange',parameters:'sender,value,oldValue,undefined'},
		{name:'beforeheightchange',parameters:'sender,value,oldValue,undefined'},
		{name:'beforehiddenchange',parameters:'sender,value,oldValue,undefined'},
		{name:'beforewidthchange',parameters:'sender,value,oldValue,undefined'},
		{name:'blur',parameters:'calendar-daysheader,event'},
		{name:'disabledchange',parameters:'sender,value,oldValue'},
		{name:'focus',parameters:'calendar-daysheader,event'},
		{name:'focusenter',parameters:'calendar-daysheader,event'},
		{name:'focusleave',parameters:'calendar-daysheader,event'},
		{name:'heightchange',parameters:'sender,value,oldValue'},
		{name:'hiddenchange',parameters:'sender,value,oldValue'},
		{name:'widthchange',parameters:'sender,value,oldValue'},
		{name:'ready',parameters:''}
];
  public static EVENTNAMES: string[] = [
		'beforedisabledchange',
		'beforeheightchange',
		'beforehiddenchange',
		'beforewidthchange',
		'blur',
		'disabledchange',
		'focus',
		'focusenter',
		'focusleave',
		'heightchange',
		'hiddenchange',
		'widthchange',
		'ready'
];
}
@Component({
  selector: 'calendar-daysheader', 
  inputs: calendar_daysheaderMetaData.PROPERTIES,
  outputs: calendar_daysheaderMetaData.EVENTNAMES,
  providers: [{provide: base, useExisting: forwardRef(() => ExtCalendar_daysheaderComponent)}],
  template: '<ng-template #dynamic></ng-template>'
})
export class ExtCalendar_daysheaderComponent extends base implements OnInit,AfterContentInit,OnChanges {
  constructor(eRef:ElementRef) {super(eRef,calendar_daysheaderMetaData)}
  public ngOnInit() {this.baseOnInit(calendar_daysheaderMetaData)}
  //public ngOnChanges(changes: SimpleChanges) {this.baseOnChanges(changes)}
  public ngAfterContentInit() {
    this.baseAfterContentInit()
    this['ready'].emit(this)
    }
}