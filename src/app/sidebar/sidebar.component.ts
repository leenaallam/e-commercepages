import { Component } from '@angular/core';
import { NzMenuModule } from 'ng-zorro-antd/menu';

@Component({
  selector: 'sidebar',
  template: `
    <div class="wrapper">
      <ul nz-menu nzMode="inline" nzTheme="dark">
        <li nz-menu-item nz-tooltip nzTooltipPlacement="right" nzSelected>
          <span nz-icon nzType="mail"></span>
          <span>Navigation One</span>
        </li>
        <li nz-submenu nzTitle="Navigation Two" nzIcon="appstore">
          <ul>
            <li nz-menu-item>Option 5</li>
            <li nz-menu-item>Option 6</li>
            <li nz-submenu nzTitle="Submenu">
              <ul>
                <li nz-menu-item>Option 7</li>
                <li nz-menu-item>Option 8</li>
              </ul>
            </li>
          </ul>
        </li>
        <li nz-submenu nzTitle="Navigation Three" nzIcon="setting">
          <ul>
            <li nz-menu-item>Option 9</li>
            <li nz-menu-item>Option 10</li>
            <li nz-menu-item>Option 11</li>
          </ul>
        </li>
      </ul>
    </div>
  `,
  styles: [
    `
      @import '../../../node_modules/ng-zorro-antd/ng-zorro-antd.min.css';
      .wrapper {
        width: 240px;
      }

      button {
        margin-bottom: 12px;
      }
    `,
  ],
})
export class SidebarComponent {
  isCollapsed = false;

  toggleCollapsed(): void {
    this.isCollapsed = !this.isCollapsed;
  }
  // shouldRun = /(^|.)(stackblitz|webcontainer).(io|com)$/.test(
  //   window.location.host
  // );
}
