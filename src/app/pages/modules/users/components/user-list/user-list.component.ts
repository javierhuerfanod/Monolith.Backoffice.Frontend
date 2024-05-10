import { Component, OnInit } from '@angular/core';
import { UsersService } from '../../../services/users.service';
import { UsersModel } from '../../models/users-model';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.scss']
})
export class UserListComponent implements OnInit {
  users: UsersModel[] = [];
  pageNumber = 1;
  pageSize = 10;
  totalRecords = 0;

  constructor(private userService: UsersService) {}

  ngOnInit(): void {
    this.loadDataTable();
  }

  loadDataTable(): void {
    this.userService.getAllUsersPaginated(this.pageNumber, this.pageSize)
      .subscribe(
        (data: any) => {          
          this.users = data?.data?.items || []; 
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
}
