import { Component, Input, OnInit, ViewChild } from '@angular/core';
import icAdd from '@iconify/icons-ic/add-circle';
import { MatSort } from '@angular/material/sort';
import { MatPaginator } from '@angular/material/paginator';
import { stagger60ms } from 'src/@vex/animations/stagger.animation';
import { fadeInUp400ms } from 'src/@vex/animations/fade-in-up.animation';
import { UrlAPIService } from 'src/app/services/url-api.service';
import { UsersData } from 'src/app/services/users-data';
import { MatTableDataSource } from '@angular/material/table';
import { SelectionModel } from '@angular/cdk/collections';
import { TableColumn } from 'src/@vex/interfaces/table-column.interface';
import { Observable, ReplaySubject } from 'rxjs';
import { filter } from 'rxjs/operators';
import icRemove from '@iconify/icons-fa-solid/trash-alt';
import icEdit from '@iconify/icons-fa-solid/user-edit';
import icWarning from '@iconify/icons-ic/warning';
import { MatDialog } from '@angular/material/dialog';
import { UserAddModalComponent } from '../user-add-modal/user-add-modal.component';
import { ModaluserpermissionComponent } from '../modaluserpermission/modaluserpermission.component';
import { ModalusereditComponent } from '../modaluseredit/modaluseredit.component';


@Component({
  selector: 'vex-user-management',
  templateUrl: './user-management.component.html',
  styleUrls: ['./user-management.component.scss'],
  animations: [
    stagger60ms,
    fadeInUp400ms
  ]
})

  

export class UserManagementComponent implements OnInit {
  icAdd = icAdd;
  icRemove = icRemove;
  icEdit = icEdit;
  icWarning = icWarning;

  subject$: ReplaySubject<UsersData[]> = new ReplaySubject<UsersData[]>(1);
  data$: Observable<UsersData[]> = this.subject$.asObservable();
  listUsers: UsersData[];

  pageSize = 10;
  pageSizeOptions: number[] = [5, 10, 20, 50];

  dataSource: MatTableDataSource<UsersData> | null;
  selection = new SelectionModel<UsersData>(true, []);

  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;
  @ViewChild(MatSort, { static: true }) sort: MatSort;

  @Input()
  columns: TableColumn<UsersData>[] = [
    { label: 'Checkbox', property: 'checkbox', type: 'checkbox', visible: false },
    { label: 'Name', property: 'name', type: 'text', visible: true, cssClasses: ['font-medium'] },
    { label: 'Email', property: 'emailAddress', type: 'text', visible: true },
    { label: 'roles', property: 'roles', type: 'text', visible: false },
    { label: 'Action', property: 'action', type: 'button', visible: true },
  ];
  
  constructor(private urlApi: UrlAPIService, private dialog: MatDialog) { }

  get visibleColumns() {
    return this.columns.filter(column => column.visible).map(column => column.property);
  }

   ngOnInit(): void {
  //  this.getUsers();
  this.urlApi.getUsersData()
  .subscribe((listUsers) => {
    this.subject$.next(listUsers);
    // debugger;
  });
  this.dataSource = new MatTableDataSource();

  this.data$.pipe(
    filter<UsersData[]>(Boolean)
  ).subscribe(listUsers => {
    this.listUsers = listUsers;
    this.dataSource.data = listUsers;
  });
    }

  getRemoveUsers(id){
    console.log(id);
    this.urlApi.getUserremove(id)
      .subscribe((listUsers:any) => {
        // this.subject$.next(listUsers);
        // console.log(listUsers);
        // debugger;
        window.location.reload();
    });
    this.dataSource = new MatTableDataSource();
    
    // this.data$.pipe(
    //   filter<UsersData[]>(Boolean)
    // ).subscribe(listUsers => {
    //   this.listUsers = listUsers;
    //   this.dataSource.data = listUsers;
    // });
  }

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  isAllSelected() {
    const numSelected = this.selection.selected.length;
    const numRows = this.dataSource.data.length;
    return numSelected === numRows;
  }

  masterToggle() {
    this.isAllSelected() ?
      this.selection.clear() :
      this.dataSource.data.forEach(row => this.selection.select(row));
  }

  openModalAddUser(){
    this.dialog.open(UserAddModalComponent, {
      width: '100%',
      maxWidth: 600,
    })
  }

  openModalPermission(params) {
    this.dialog.open(ModaluserpermissionComponent, {
      width: '100%',
      maxWidth: 850,
      data: { roles: params }
    })
  }

  openModalEditUser(id, kartid) {
    this.dialog.open(ModalusereditComponent, {
      width: '100%',
      maxWidth: 600,
      data: { id: id, kartid: kartid }
    })
  }

}
