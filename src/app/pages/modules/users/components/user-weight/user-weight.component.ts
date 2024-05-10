import { Component } from '@angular/core';
import { UsersService } from '../../../services/users.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-user-weight',
  templateUrl: './user-weight.component.html',
  styleUrls: ['./user-weight.component.scss']
})
export class UserWeightComponent {
  userWeight:[];
  pageNumber = 1;
  pageSize = 10;
  totalRecords = 0;
  dateStart: Date;
  dateEnd: Date;
  payload:any;
  userId:any;
  valueSearch:any;
  visible:boolean;
  detailAnswerQuestion:any;

  constructor(private userService: UsersService,
    private route: ActivatedRoute
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

  loadDataTable(): void {
    this.payload =
    {
      userId:this.userId,
      searchTerm:this.valueSearch,
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

}
