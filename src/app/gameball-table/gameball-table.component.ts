import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTable } from '@angular/material/table';
import { AppServiceService } from '../app-service.service';

import {
  GameballTableDataSource,
  GameballTableItem,
} from './gameball-table-datasource';

@Component({
  selector: 'app-gameball-table',
  templateUrl: './gameball-table.component.html',
  styleUrls: ['./gameball-table.component.css'],
})
export class GameballTableComponent implements AfterViewInit, OnInit {
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;
  @ViewChild(MatTable) table!: MatTable<GameballTableItem>;
  dataSource: any;

  /** Columns displayed in the table. Columns IDs can be added, removed, or reordered. */
  displayedColumns = ['name', 'id'];

  constructor(private service: AppServiceService) {
    // this.dataSource = [{ name: 'farah', id: '1' }];
  }
  async ngOnInit() {
    this.dataSource = await this.getDataFromApi();
    console.log(this.dataSource);
    this.dataSource.sort = this.sort;
    this.dataSource.paginator = this.paginator;
    this.table.dataSource = this.dataSource;
  }

  async getDataFromApi() {
    const data = await this.service.getData();
    return data.map((product: any, indx: number) => {
      return { id: indx, name: product.name };
    });
  }

  ngAfterViewInit(): void {
    this.dataSource.sort = this.sort;
    this.dataSource.paginator = this.paginator;
    this.table.dataSource = this.dataSource;
  }
}
