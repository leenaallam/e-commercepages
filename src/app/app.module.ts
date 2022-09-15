import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { NzMenuModule } from 'ng-zorro-antd/menu';
import { SidebarComponent } from './sidebar/sidebar.component';
import { TitlesComponent } from './titles/titles.component';
import { TogglebuttonComponent } from './togglebutton/togglebutton.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { GameballTableComponent } from './gameball-table/gameball-table.component';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
//import { MatPaginatorModule } from '@angular/material';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatSortModule } from '@angular/material/sort';
import { MatButtonToggleModule } from '@angular/material/button-toggle';

import { from } from 'rxjs';
import { FirstpageComponent } from './firstpage/firstpage.component';

@NgModule({
  declarations: [
    AppComponent,
    SidebarComponent,
    GameballTableComponent,
    TitlesComponent,
    TogglebuttonComponent,
    FirstpageComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatTableModule,
    HttpClientModule,
    NzMenuModule,
    MatPaginatorModule,
    MatSidenavModule,
    MatSortModule,
    MatButtonToggleModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
