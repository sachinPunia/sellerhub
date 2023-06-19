import { ChangeDetectorRef, Component, Input, OnInit, ViewChild } from '@angular/core';
import { TooltipPosition } from '@angular/material/tooltip';
import icVerticalSplit from '@iconify/icons-ic/twotone-vertical-split';
import icVisiblity from '@iconify/icons-ic/twotone-visibility';
import icVisibilityOff from '@iconify/icons-ic/twotone-visibility-off';
import icDoneAll from '@iconify/icons-ic/twotone-done-all';
import icMoreVert from '@iconify/icons-ic/twotone-more-vert';
import icDescription from '@iconify/icons-ic/twotone-description';
import { FormBuilder, FormGroup, FormControl, Validators} from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { TaxrateModelComponent } from 'src/app/pages/apps/taxrate-model/taxrate-model.component';
import { TableColumn } from 'src/@vex/interfaces/table-column.interface';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { SelectionModel } from '@angular/cdk/collections';
import { Observable, ReplaySubject } from 'rxjs';
import { UrlAPIService } from 'src/app/services/url-api.service';
import { filter } from 'rxjs/operators';
// import { Variationaddproduct } from 'src/app/services/cancelorder-model';
import { Variationaddproduct } from 'src/app/services/variation-addproduct';
import { Attributeaddproduct } from 'src/app/services/attribute-addproduct';
// import { Attributeaddproduct } from 'src/app/services/supplierfeed';


@Component({
  selector: 'vex-addproduct',
  templateUrl: './addproduct.component.html',
  styleUrls: ['./addproduct.component.scss']
})
export class AddproductComponent implements OnInit {

//   text = `<p class="ql-align-center"><br></p><h1 class="ql-align-center"><strong class="ql-size-large" spellcheck="false">Vex Rich Text Editor</strong></h1><p><br></p><h2 class="ql-align-center">Get started with an <strong>easy to use</strong>, completely <u>customizable</u>, yet beautiful and blazing fast <strong>WYSIWYG Editor</strong> built right into Angular and the easy use of <strong>[formControl]</strong>.</h2><p><br></p><p><br></p><iframe class="ql-video ql-align-center" frameborder="0" allowfullscreen="true" src="https://player.vimeo.com/video/253905163" height="280" width="500"></iframe><p><br></p><p><br></p><h2 class="ql-align-center"><strong class="ql-size-large" spellcheck="false">Getting Started is Easy</strong></h2><p><br></p><pre class="ql-syntax ql-align-center" spellcheck="false">

// <span class="hljs-keyword">&lt;quill-editor [formControl]=&quot;form&quot;&gt;&lt;/quill-editor&gt;</span>

// </pre>`;
//   form = new FormControl(this.text);

  formdata;

  positionOptions: TooltipPosition[] = ['after', 'before', 'above', 'below', 'left', 'right'];
  position = new FormControl(this.positionOptions[0]);

  icDoneAll = icDoneAll;
  icDescription = icDescription;
  icVerticalSplit = icVerticalSplit;
  icVisibility = icVisiblity;
  icVisibilityOff = icVisibilityOff;
  icMoreVert = icMoreVert;
  firstFormGroup: FormGroup;
  secondFormGroup: FormGroup;
  thirdFormGroup: FormGroup;
  fourthFormGroup: FormGroup;
  isEditable = false;
  selectedUPC = {};
  selectedEAN = {};
  selectedISBN = {};
  selectedASIN = {};
  selectedVar = {};
  showMe:boolean=false;
  showEAN:boolean = false;
  showISBN:boolean = false;
  showASIN:boolean = false;
  showVar:boolean = false;
  showVarnot:boolean = true;
  showColor:boolean = false;
  showColormap:boolean = false;
  showColour:boolean = false;
  showCondition:boolean = false;
  showManufacture:boolean = false;
  showSize:boolean = false;
  showTable:boolean = false;

  subject$: ReplaySubject<Variationaddproduct[]> = new ReplaySubject<Variationaddproduct[]>(1);
  data$: Observable<Variationaddproduct[]> = this.subject$.asObservable();
  Variationaddproduct: Variationaddproduct[];

  @Input()
  columns: TableColumn<Variationaddproduct>[] = [
    // { label: 'Checkbox', property: 'checkbox', type: 'checkbox', visible: true },
    { label: 'SKU', property: 'sku', type: 'button', visible: true, cssClasses: ['font-medium'] },
    { label: 'UPC', property: 'upc', type: 'button', visible: true },
    { label: 'EAN	', property: 'ean', type: 'button', visible: true },
    { label: 'Base Price', property: 'base_price', type: 'button', visible: true, cssClasses: ['font-medium'] },
    { label: 'QTY', property: 'qty', type: 'button', visible: true },
    { label: 'Color', property: 'color', type: 'button', visible: true },
    { label: 'Action', property: 'action', type: 'button', visible: true },
  ];

  subject_new$: ReplaySubject<Attributeaddproduct[]> = new ReplaySubject<Attributeaddproduct[]>(1);
  data_new$: Observable<Attributeaddproduct[]> = this.subject_new$.asObservable();
  Attributeaddproduct: Attributeaddproduct[];

  columns_new: TableColumn<Attributeaddproduct>[] = [
    { label: 'Attributeaddproduct Name', property: 'attribute_name', type: 'button', visible: true },
    { label: 'Value', property: 'value', type: 'button', visible: true },
    { label: 'Available Value', property: 'available_values', type: 'button', visible: true },
  ];

  dataSource_1: MatTableDataSource<Attributeaddproduct> | null;
  selection_1 = new SelectionModel<Attributeaddproduct>(true, []);

  
  pageSize = 10;
  pageSizeOptions: number[] = [5, 10, 20, 50];

  dataSource: MatTableDataSource<Variationaddproduct> | null;
  selection = new SelectionModel<Variationaddproduct>(true, []);


  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;
  @ViewChild(MatSort, { static: true }) sort: MatSort;


  constructor(private _formBuilder: FormBuilder, private dialog: MatDialog, private cd: ChangeDetectorRef, private urlApi: UrlAPIService) { }

  get visibleColumns() {
    return this.columns.filter(column => column.visible).map(column => column.property);
  }
  
  get visibleColumns_new() {
    return this.columns_new.filter(column1 => column1.visible).map(column1 => column1.property);
  }

  onClickSubmit(data) {
    if(this.formdata.invalid)
   {
    
  this.formdata.get('description').markAsTouched();
  
  }
  }
  color = new FormControl();
  colorList: string[] = ['Sand', 'Heather Purple', 'Military Green', 'Black', 'Sport Grey', 'L', 'Antique Cherry','M', 'XXL', 'Orange', 'Military Green/Olive', 'S', 'Heather Navy', 'Royal Blue', 'White/Navy', 'Round', 'Grey', 'Sky Blu', 'Khaki', 'XL', 'Pink', 'Charcoal'];

  ngOnInit(): void {
    this.getAttributeaddproduct();
    this.firstFormGroup = this._formBuilder.group({
      firstCtrl: ['', Validators.required]
    });
    this.secondFormGroup = this._formBuilder.group({
      secondCtrl: ['', Validators.required]
    });
    this.thirdFormGroup = this._formBuilder.group({
      secondCtrl: ['', Validators.required]
    });
    this.fourthFormGroup = this._formBuilder.group({
      secondCtrl: ['', Validators.required]
    });

    this.formdata = this._formBuilder.group({
      description: ['', [Validators.required,
        Validators.maxLength(400), Validators.minLength(5)]]
  });

  this.urlApi.getVariationaddproduct("variation-addproduct.json")
    .subscribe((Variationaddproduct) => {
      this.subject$.next(Variationaddproduct);
  });

    this.dataSource = new MatTableDataSource();
    
    this.data$.pipe(
      filter<Variationaddproduct[]>(Boolean)
    ).subscribe(sales_orders => {
      this.Variationaddproduct = sales_orders;
      this.dataSource.data = sales_orders;
    });
  }

  setSelectedRow(e) {
    this.selectedUPC = e.checked;
    if(this.selectedUPC === true){
      this.showMe =! this.showMe;
    }
    else{
      this.showMe =! this.showMe;
    }
    console.log('selected UPC', this.selectedUPC)
  }

  toggleEAN(e){
    this.selectedEAN = e.checked;
    if(this.selectedEAN === true){
      this.showEAN =! this.showEAN;
    }
    else{
      this.showEAN =! this.showEAN;
    }
    
  }

  toggleISBN(e){
    this.selectedISBN = e.checked;
    if(this.selectedISBN === true){
      this.showISBN =! this.showISBN;
    }
    else{
      this.showISBN =! this.showISBN;
    }
    
  }

  toggleASIN(e){
    this.selectedASIN = e.checked;
    if(this.selectedASIN === true){
      this.showASIN =! this.showASIN;
    }
    else{
      this.showASIN =! this.showASIN;;
    }
    
  }

  toggleVar(e){
    this.selectedVar = e.checked;
    if(this.selectedVar === true){
      this.showVar =! this.showVar;
      this.showVarnot =! this.showVarnot;
    }
    else{
      this.showVar =! this.showVar;
      this.showVarnot =! this.showVarnot;

    }
  }

  toggleColor(){
    this.showColor =! this.showColor;
  }

  toggleColormap(){
    this.showColormap =! this.showColormap;
  }

  toggleColour(){
    this.showColour =! this.showColour;
  }

  toggleCondition(){
    this.showCondition =! this.showCondition;
  }

  toggleManufacture(){
    this.showManufacture =! this.showManufacture;
  }

  toggleSize(){
    this.showSize =! this.showSize;
  }

  toggleTable(){
    this.showTable =! this.showTable;
    this.showVar =! this.showVar;

  }



  openUpdateqtyproductsModal(){
    this.dialog.open(TaxrateModelComponent, {
      width: '100%',
      maxWidth: 550
    })
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

  getAttributeaddproduct() {
    this.urlApi.getAttributeaddproduct("attribute-addproduct.json")
      .subscribe((Attributeaddproduct) => {
        console.log(Attributeaddproduct);
        this.subject_new$.next(Attributeaddproduct);
    });

    this.dataSource_1 = new MatTableDataSource();
    
    this.data_new$.pipe(
      filter<Attributeaddproduct[]>(Boolean)
    ).subscribe(Attributeaddproduct => {
      this.Attributeaddproduct = Attributeaddproduct;
      this.dataSource_1.data = Attributeaddproduct;
    });
  }
}
