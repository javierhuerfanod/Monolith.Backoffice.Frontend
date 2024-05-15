import { Component } from '@angular/core';
import { UsersService } from '../../../services/users.service';
import { ActivatedRoute } from '@angular/router';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-user-weight',
  templateUrl: './user-weight.component.html',
  styleUrls: ['./user-weight.component.scss'],
  providers: [DatePipe]
})
export class UserWeightComponent {
  userWeight:any[];
  pageNumber = 1;
  pageSize = 10;
  totalRecords = 0;
  dateStart: any;
  dateEnd: any;
  payload:any;
  userId:any;
  valueSearch:any;
  visible:boolean;
  detailAnswerQuestion:any;
  isAscending: boolean = true;

  constructor(private userService: UsersService,
    private route: ActivatedRoute,
    private datePipe: DatePipe
  ) {}

  ngOnInit(): void {
    this.userId = this.route.snapshot.queryParams['userId'];    
    this.loadDataTable();
  }

  onKeyUp(event: KeyboardEvent) {
    const inputValue = (event.target as HTMLInputElement).value;
    if (
      inputValue.length >1 ||
      (event.key === 'Backspace' && inputValue.length == 0)
    ) {
      this.loadDataTable();
    }
  }
  searchDetail()
  {
    const fechaInicioFormateada = this.datePipe.transform(this.dateStart, 'yyyy-MM-dd');
    const fechaFinFormateada = this.datePipe.transform(this.dateEnd, 'yyyy-MM-dd');

    console.log('Fecha inicio formateada:', fechaInicioFormateada);
    console.log('Fecha fin formateada:', fechaFinFormateada);
    this.dateStart = fechaInicioFormateada;
    this.dateEnd = fechaFinFormateada;
    this.loadDataTable();
  }

  clearFilter(){
    this.dateStart = '';
    this.dateEnd = '';
    this.loadDataTable();
  }


  loadDataTable(): void {
    this.payload =
    {
      userId:this.userId,
      searchTerm:'',
      startDate:this.dateStart ?this.dateStart:'',
      endDate:this.dateEnd ?this.dateEnd:'',
      pageNumber:1,
      pageSize:10,
    };
    this.userService.getSearchPaginatedWeightsPaginated(this.payload)
      .subscribe(
        (data: any) => {        
          this.userWeight = data?.data?.items || []; 
          this.totalRecords = data?.data?.totalCount || 0;
        },
        error => {
          console.error('Error al cargar los datos:', error);
        }
      );
  }

  onPageChange(event: any): void {
    this.pageNumber = event.page + 1;
    this.pageSize = event.rows;
    this.loadDataTable();
  }

  showDialog(event:any){
    this.loadDetail(event);
    this.visible = true;
  }
  
  loadDetail(event:any): void {
    this.payload =
    {
      userId:this.userId,
      weightId:event
    };
    this.userService.getGetQuestionnaireAnswersByWeight(this.payload)
      .subscribe(
        (data: any) => {                          
          this.detailAnswerQuestion = data?.data || [];           
        },
        error => {
          console.error('Error al cargar los datos:', error);
        }
      );
  }


  sortByDateAscending() {
    this.isAscending = true;
    this.userWeight.sort((a, b) => {
      return new Date(a.date).getTime() - new Date(b.date).getTime();
    });
  }

  // Método para ordenar por fecha de manera descendente
  sortByDateDescending() {
    this.isAscending = false;
    this.userWeight.sort((a, b) => {
      return new Date(b.date).getTime() - new Date(a.date).getTime();
    });
  }


}
