import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { NzMenuModule } from 'ng-zorro-antd/menu';
import { SidebarComponent } from './sidebar/sidebar.component';
//import { titlesComponent } from './titles/titles.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { GameballTableComponent } from './gameball-table/gameball-table.component';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
//import { MatPaginatorModule } from '@angular/material';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatSortModule } from '@angular/material/sort';
import { from } from 'rxjs';

@NgModule({
  declarations: [AppComponent, SidebarComponent, GameballTableComponent],
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
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
