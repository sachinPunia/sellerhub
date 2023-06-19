import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { UrlAPIService } from 'src/app/services/url-api.service';
import icEdit from '@iconify/icons-fa-solid/pencil-alt';
import icRemove from '@iconify/icons-fa-solid/trash';
import icArrowRight from '@iconify/icons-ic/sharp-arrow-right';
import icCheck from '@iconify/icons-ic/check';

import { TableColumn } from 'src/@vex/interfaces/table-column.interface';
import { MatTableDataSource } from '@angular/material/table';
import { SelectionModel } from '@angular/cdk/collections';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { Observable, ReplaySubject } from 'rxjs';
import { filter } from 'rxjs/operators';

import { SuppliersData } from 'src/app/services/suppliers-data';
import { stagger60ms } from 'src/@vex/animations/stagger.animation';
import { fadeInUp400ms } from 'src/@vex/animations/fade-in-up.animation';
import { Supplierfeeds } from 'src/app/services/supplierfeed';

@Component({
  selector: 'vex-suppliers',
  templateUrl: './suppliers.component.html',
  styleUrls: ['./suppliers.component.scss'],
  animations: [
    stagger60ms,
    fadeInUp400ms
  ]
})
export class SuppliersComponent implements OnInit {

  icEdit = icEdit;
  icRemove = icRemove;
  icArrowRight = icArrowRight;
  icCheck = icCheck;

  subject$: ReplaySubject<SuppliersData[]> = new ReplaySubject<SuppliersData[]>(1);
  data$: Observable<SuppliersData[]> = this.subject$.asObservable();
  listSupplier: SuppliersData[];

  pageSize = 10;
  pageSizeOptions: number[] = [5, 10, 20, 50];

  dataSource: MatTableDataSource<SuppliersData> | null;
  selection = new SelectionModel<SuppliersData>(true, []);

  columns: TableColumn<SuppliersData>[] = [
    { label: '#', property: 'id', type: 'text', visible: false },
    { label: 'Supplier Name', property: 'firstName', type: 'text', visible: true },
    { label: 'Action', property: 'action', type: 'button', visible: true },
  ];

  subject_new$: ReplaySubject<Supplierfeeds[]> = new ReplaySubject<Supplierfeeds[]>(1);
  data_new$: Observable<Supplierfeeds[]> = this.subject_new$.asObservable();
  supplier_feed: Supplierfeeds[];

  columns_new: TableColumn<Supplierfeeds>[] = [
    { label: 'Feed URL', property: 'feedUrl', type: 'button', visible: true },
    { label: 'Feed Format', property: 'format', type: 'text', visible: true },
    { label: 'Rules', property: 'rules', type: 'button', visible: true },
    { label: 'Status', property: 'feedStatus', type: 'text', visible: true },
    { label: 'Action', property: 'action', type: 'button', visible: true },
  ];
  debugger;

  dataSource_1: MatTableDataSource<Supplierfeeds> | null;
  selection_1 = new SelectionModel<Supplierfeeds>(true, []);



  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;
  @ViewChild(MatSort, { static: true }) sort: MatSort;

  constructor( private urlApi: UrlAPIService) { }
  ngOnInit(): void {
    this.getSuppliersData();
    this.getSupplierfeeds();
  }
  get visibleColumns() {
    return this.columns.filter(column => column.visible).map(column => column.property);
  }

  get visibleColumns_new() {
    return this.columns_new.filter(column1 => column1.visible).map(column1 => column1.property);
  }

  getSuppliersData() {
    this.urlApi.getSupplier()
      .subscribe((listSupplier) => {
        this.subject$.next(listSupplier);
        console.log(listSupplier);
    });
    this.dataSource = new MatTableDataSource();
    
    this.data$.pipe(
      filter<SuppliersData[]>(Boolean)
    ).subscribe(listSupplier => {
      this.listSupplier = listSupplier;
      this.dataSource.data = listSupplier;
    });
  }

  getSupplierSearch(){
    this.urlApi.getSupplierSearch('').subscribe((suppliersearch) => {
      this.subject$.next(suppliersearch);
      console.log()

    })
  }

  getSupplierfeeds() {
    this.urlApi.getFeed()
      .subscribe((supplier_feed) => {
        console.log(supplier_feed);
        this.subject_new$.next(supplier_feed);
    });

    this.dataSource_1 = new MatTableDataSource();
    
    this.data_new$.pipe(
      filter<Supplierfeeds[]>(Boolean)
    ).subscribe(supplier_feed => {
      this.supplier_feed = supplier_feed;
      debugger;
      this.dataSource_1.data = supplier_feed;
    });
  }
}
