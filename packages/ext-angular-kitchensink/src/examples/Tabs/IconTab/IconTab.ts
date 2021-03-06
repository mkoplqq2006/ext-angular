declare var Ext: any;
import {Component, ViewEncapsulation} from '@angular/core'

@Component({
  selector: 'icontab-component',
  templateUrl: "./IconTab.html",
  encapsulation: ViewEncapsulation.None,
  styles: [`
  .card {
    .x-innerhtml {
        text-align: center;
        font-size: 18px;
        line-height: 24px;
        padding: 10px;
        width: 75%;
        margin: 0 auto;

        .x-phone & {
            width: auto;
            padding: 20px;
        }
    }

    .action {
        display: inline-block;
        background-color: rgba(#000, .06);
        border: 1px solid rgba(#fff, .1);
        padding: 1px 5px;
        @include border-radius(4px);
        color: #657b83;
    }

    code {
        color: #859900;
    }
}

  `]
})
export class IconTabComponent {

  iconItems = [{
    xtype: 'container',
    title: 'Tab 1',
    html: '!!!!!!!!!!!!!!!!!!!!!'
  }]

}
