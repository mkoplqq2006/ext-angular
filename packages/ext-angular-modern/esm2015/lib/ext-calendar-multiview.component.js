/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Host, Optional, SkipSelf, Component, ElementRef, forwardRef } from '@angular/core';
import { base } from './base';
export class calendar_multiviewMetaData {
}
calendar_multiviewMetaData.XTYPE = 'calendar-multiview';
calendar_multiviewMetaData.PROPERTIESOBJECT = {
    "compact": "Boolean",
    "compactOptions": "Object",
    "defaultView": "String",
    "layout": "Object/String",
    "store": "Object/Ext.calendar.store.Calendars",
    "timezoneOffset": "Number",
    "value": "Date",
    "views": "Object",
    "platformConfig": "Object",
    "responsiveConfig": "Object",
    "fitToParent": "Boolean",
    "config": "Object",
};
calendar_multiviewMetaData.PROPERTIES = [
    'compact',
    'compactOptions',
    'defaultView',
    'layout',
    'store',
    'timezoneOffset',
    'value',
    'views',
    'platformConfig',
    'responsiveConfig',
    'fitToParent',
    'config'
];
calendar_multiviewMetaData.EVENTS = [
    { name: 'ready', parameters: '' }
];
calendar_multiviewMetaData.EVENTNAMES = [
    'ready'
];
if (false) {
    /** @type {?} */
    calendar_multiviewMetaData.XTYPE;
    /** @type {?} */
    calendar_multiviewMetaData.PROPERTIESOBJECT;
    /** @type {?} */
    calendar_multiviewMetaData.PROPERTIES;
    /** @type {?} */
    calendar_multiviewMetaData.EVENTS;
    /** @type {?} */
    calendar_multiviewMetaData.EVENTNAMES;
}
export class ExtCalendar_multiviewComponent extends base {
    /**
     * @param {?} eRef
     * @param {?} hostComponent
     */
    constructor(eRef, hostComponent) {
        super(eRef.nativeElement, calendar_multiviewMetaData, hostComponent);
        this.hostComponent = hostComponent;
    }
    //constructor(private elementRef: ElementRef,@Host() @Optional() @SkipSelf() public hostComponent : base) {super(hostComponent,calendar_multiviewMetaData,hostComponent)}
    /**
     * @return {?}
     */
    ngOnInit() { this.baseOnInit(calendar_multiviewMetaData); }
    //public ngOnChanges(changes: SimpleChanges) {this.baseOnChanges(changes)}
    /**
     * @return {?}
     */
    ngAfterContentInit() {
        this.baseAfterContentInit();
        this['ready'].emit(this);
    }
}
ExtCalendar_multiviewComponent.decorators = [
    { type: Component, args: [{
                selector: 'calendar-multiview',
                inputs: calendar_multiviewMetaData.PROPERTIES,
                outputs: calendar_multiviewMetaData.EVENTNAMES,
                providers: [{ provide: base, useExisting: forwardRef(() => ExtCalendar_multiviewComponent) }],
                template: '<ng-template></ng-template>'
            }] }
];
/** @nocollapse */
ExtCalendar_multiviewComponent.ctorParameters = () => [
    { type: ElementRef },
    { type: base, decorators: [{ type: Host }, { type: Optional }, { type: SkipSelf }] }
];
if (false) {
    /** @type {?} */
    ExtCalendar_multiviewComponent.prototype.hostComponent;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZXh0LWNhbGVuZGFyLW11bHRpdmlldy5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9Ac2VuY2hhL2V4dC1hbmd1bGFyLW1vZGVybi8iLCJzb3VyY2VzIjpbImxpYi9leHQtY2FsZW5kYXItbXVsdGl2aWV3LmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUVMLElBQUksRUFDSixRQUFRLEVBQ1IsUUFBUSxFQUtSLFNBQVMsRUFDVCxVQUFVLEVBQ1YsVUFBVSxFQUNYLE1BQU0sZUFBZSxDQUFDO0FBQ3ZCLE9BQU8sRUFBRSxJQUFJLEVBQUUsTUFBTSxRQUFRLENBQUM7QUFDOUIsTUFBTSxPQUFPLDBCQUEwQjs7QUFDdkIsZ0NBQUssR0FBVyxvQkFBb0IsQ0FBQztBQUNyQywyQ0FBZ0IsR0FBUTtJQUNwQyxTQUFTLEVBQUUsU0FBUztJQUNwQixnQkFBZ0IsRUFBRSxRQUFRO0lBQzFCLGFBQWEsRUFBRSxRQUFRO0lBQ3ZCLFFBQVEsRUFBRSxlQUFlO0lBQ3pCLE9BQU8sRUFBRSxxQ0FBcUM7SUFDOUMsZ0JBQWdCLEVBQUUsUUFBUTtJQUMxQixPQUFPLEVBQUUsTUFBTTtJQUNmLE9BQU8sRUFBRSxRQUFRO0lBQ2pCLGdCQUFnQixFQUFFLFFBQVE7SUFDMUIsa0JBQWtCLEVBQUUsUUFBUTtJQUM1QixhQUFhLEVBQUUsU0FBUztJQUN4QixRQUFRLEVBQUUsUUFBUTtDQUNyQixDQUFDO0FBQ2MscUNBQVUsR0FBYTtJQUNuQyxTQUFTO0lBQ1QsZ0JBQWdCO0lBQ2hCLGFBQWE7SUFDYixRQUFRO0lBQ1IsT0FBTztJQUNQLGdCQUFnQjtJQUNoQixPQUFPO0lBQ1AsT0FBTztJQUNQLGdCQUFnQjtJQUNoQixrQkFBa0I7SUFDbEIsYUFBYTtJQUNiLFFBQVE7Q0FDWCxDQUFDO0FBQ2MsaUNBQU0sR0FBVTtJQUM5QixFQUFDLElBQUksRUFBQyxPQUFPLEVBQUMsVUFBVSxFQUFDLEVBQUUsRUFBQztDQUM3QixDQUFDO0FBQ2MscUNBQVUsR0FBYTtJQUNyQyxPQUFPO0NBQ1IsQ0FBQzs7O0lBbENBLGlDQUFtRDs7SUFDbkQsNENBYUE7O0lBQ0Esc0NBYUE7O0lBQ0Esa0NBRUE7O0lBQ0Esc0NBRUE7O0FBU0YsTUFBTSxPQUFPLDhCQUErQixTQUFRLElBQUk7Ozs7O0lBQ3RELFlBQVksSUFBZSxFQUF5QyxhQUFvQjtRQUFHLEtBQUssQ0FBQyxJQUFJLENBQUMsYUFBYSxFQUFDLDBCQUEwQixFQUFDLGFBQWEsQ0FBQyxDQUFBO1FBQXpGLGtCQUFhLEdBQWIsYUFBYSxDQUFPO0lBQXFFLENBQUM7Ozs7O0lBRXZKLFFBQVEsS0FBSSxJQUFJLENBQUMsVUFBVSxDQUFDLDBCQUEwQixDQUFDLENBQUEsQ0FBQSxDQUFDOzs7OztJQUV4RCxrQkFBa0I7UUFDdkIsSUFBSSxDQUFDLG9CQUFvQixFQUFFLENBQUE7UUFDM0IsSUFBSSxDQUFDLE9BQU8sQ0FBQyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQTtJQUN4QixDQUFDOzs7WUFmSixTQUFTLFNBQUM7Z0JBQ1QsUUFBUSxFQUFFLG9CQUFvQjtnQkFDOUIsTUFBTSxFQUFFLDBCQUEwQixDQUFDLFVBQVU7Z0JBQzdDLE9BQU8sRUFBRSwwQkFBMEIsQ0FBQyxVQUFVO2dCQUM5QyxTQUFTLEVBQUUsQ0FBQyxFQUFDLE9BQU8sRUFBRSxJQUFJLEVBQUUsV0FBVyxFQUFFLFVBQVUsQ0FBQyxHQUFHLEVBQUUsQ0FBQyw4QkFBOEIsQ0FBQyxFQUFDLENBQUM7Z0JBQzNGLFFBQVEsRUFBRSw2QkFBNkI7YUFDeEM7Ozs7WUEvQ0MsVUFBVTtZQUdILElBQUksdUJBOENtQixJQUFJLFlBQUksUUFBUSxZQUFJLFFBQVE7Ozs7SUFBN0IsdURBQTJEIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtcbiAgSW5qZWN0YWJsZSxcbiAgSG9zdCxcbiAgT3B0aW9uYWwsXG4gIFNraXBTZWxmLFxuICBPdXRwdXQsXG4gIE9uSW5pdCxcbiAgQWZ0ZXJDb250ZW50SW5pdCxcbiAgT25DaGFuZ2VzLFxuICBDb21wb25lbnQsXG4gIEVsZW1lbnRSZWYsXG4gIGZvcndhcmRSZWZcbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBiYXNlIH0gZnJvbSAnLi9iYXNlJztcbmV4cG9ydCBjbGFzcyBjYWxlbmRhcl9tdWx0aXZpZXdNZXRhRGF0YSB7XG4gIHB1YmxpYyBzdGF0aWMgWFRZUEU6IHN0cmluZyA9ICdjYWxlbmRhci1tdWx0aXZpZXcnO1xuICBwdWJsaWMgc3RhdGljIFBST1BFUlRJRVNPQkpFQ1Q6IGFueSA9IHtcbiAgICBcImNvbXBhY3RcIjogXCJCb29sZWFuXCIsXG4gICAgXCJjb21wYWN0T3B0aW9uc1wiOiBcIk9iamVjdFwiLFxuICAgIFwiZGVmYXVsdFZpZXdcIjogXCJTdHJpbmdcIixcbiAgICBcImxheW91dFwiOiBcIk9iamVjdC9TdHJpbmdcIixcbiAgICBcInN0b3JlXCI6IFwiT2JqZWN0L0V4dC5jYWxlbmRhci5zdG9yZS5DYWxlbmRhcnNcIixcbiAgICBcInRpbWV6b25lT2Zmc2V0XCI6IFwiTnVtYmVyXCIsXG4gICAgXCJ2YWx1ZVwiOiBcIkRhdGVcIixcbiAgICBcInZpZXdzXCI6IFwiT2JqZWN0XCIsXG4gICAgXCJwbGF0Zm9ybUNvbmZpZ1wiOiBcIk9iamVjdFwiLFxuICAgIFwicmVzcG9uc2l2ZUNvbmZpZ1wiOiBcIk9iamVjdFwiLFxuICAgIFwiZml0VG9QYXJlbnRcIjogXCJCb29sZWFuXCIsXG4gICAgXCJjb25maWdcIjogXCJPYmplY3RcIixcbn07XG4gIHB1YmxpYyBzdGF0aWMgUFJPUEVSVElFUzogc3RyaW5nW10gPSBbXG4gICAgJ2NvbXBhY3QnLFxuICAgICdjb21wYWN0T3B0aW9ucycsXG4gICAgJ2RlZmF1bHRWaWV3JyxcbiAgICAnbGF5b3V0JyxcbiAgICAnc3RvcmUnLFxuICAgICd0aW1lem9uZU9mZnNldCcsXG4gICAgJ3ZhbHVlJyxcbiAgICAndmlld3MnLFxuICAgICdwbGF0Zm9ybUNvbmZpZycsXG4gICAgJ3Jlc3BvbnNpdmVDb25maWcnLFxuICAgICdmaXRUb1BhcmVudCcsXG4gICAgJ2NvbmZpZydcbl07XG4gIHB1YmxpYyBzdGF0aWMgRVZFTlRTOiBhbnlbXSA9IFtcblx0XHR7bmFtZToncmVhZHknLHBhcmFtZXRlcnM6Jyd9XG5dO1xuICBwdWJsaWMgc3RhdGljIEVWRU5UTkFNRVM6IHN0cmluZ1tdID0gW1xuXHRcdCdyZWFkeSdcbl07XG59XG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdjYWxlbmRhci1tdWx0aXZpZXcnLCBcbiAgaW5wdXRzOiBjYWxlbmRhcl9tdWx0aXZpZXdNZXRhRGF0YS5QUk9QRVJUSUVTLFxuICBvdXRwdXRzOiBjYWxlbmRhcl9tdWx0aXZpZXdNZXRhRGF0YS5FVkVOVE5BTUVTLFxuICBwcm92aWRlcnM6IFt7cHJvdmlkZTogYmFzZSwgdXNlRXhpc3Rpbmc6IGZvcndhcmRSZWYoKCkgPT4gRXh0Q2FsZW5kYXJfbXVsdGl2aWV3Q29tcG9uZW50KX1dLFxuICB0ZW1wbGF0ZTogJzxuZy10ZW1wbGF0ZT48L25nLXRlbXBsYXRlPidcbn0pXG5leHBvcnQgY2xhc3MgRXh0Q2FsZW5kYXJfbXVsdGl2aWV3Q29tcG9uZW50IGV4dGVuZHMgYmFzZSBpbXBsZW1lbnRzIE9uSW5pdCxBZnRlckNvbnRlbnRJbml0LE9uQ2hhbmdlcyB7XG4gIGNvbnN0cnVjdG9yKGVSZWY6RWxlbWVudFJlZiwgQEhvc3QoKSBAT3B0aW9uYWwoKSBAU2tpcFNlbGYoKSBwdWJsaWMgaG9zdENvbXBvbmVudCA6IGJhc2UpIHtzdXBlcihlUmVmLm5hdGl2ZUVsZW1lbnQsY2FsZW5kYXJfbXVsdGl2aWV3TWV0YURhdGEsaG9zdENvbXBvbmVudCl9XG4gIC8vY29uc3RydWN0b3IocHJpdmF0ZSBlbGVtZW50UmVmOiBFbGVtZW50UmVmLEBIb3N0KCkgQE9wdGlvbmFsKCkgQFNraXBTZWxmKCkgcHVibGljIGhvc3RDb21wb25lbnQgOiBiYXNlKSB7c3VwZXIoaG9zdENvbXBvbmVudCxjYWxlbmRhcl9tdWx0aXZpZXdNZXRhRGF0YSxob3N0Q29tcG9uZW50KX1cbiAgcHVibGljIG5nT25Jbml0KCkge3RoaXMuYmFzZU9uSW5pdChjYWxlbmRhcl9tdWx0aXZpZXdNZXRhRGF0YSl9XG4gIC8vcHVibGljIG5nT25DaGFuZ2VzKGNoYW5nZXM6IFNpbXBsZUNoYW5nZXMpIHt0aGlzLmJhc2VPbkNoYW5nZXMoY2hhbmdlcyl9XG4gIHB1YmxpYyBuZ0FmdGVyQ29udGVudEluaXQoKSB7XG4gICAgdGhpcy5iYXNlQWZ0ZXJDb250ZW50SW5pdCgpXG4gICAgdGhpc1sncmVhZHknXS5lbWl0KHRoaXMpXG4gICAgfVxufSJdfQ==