import { Component, OnInit } from '@angular/core';
import { UsersService } from '../../../services/users.service';
import { UsersModel } from '../../models/users-model';

@Component({
    selector: 'app-user-list',
    templateUrl: './user-list.component.html',
    styleUrls: ['./user-list.component.scss'],
    standalone: false
})
export class UserListComponent implements OnInit {
  users: UsersModel[] = [];
  pageNumber = 1;
  pageSize = 10;
  totalRecords = 0;
  isAscendingFirstName: boolean = true;
  isAscendingLastName: boolean = true;
  valueSearch:any;
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
  sortByFirstNameAscending() {
    this.isAscendingFirstName = true;
    this.users.sort((a, b) => {
      if (a.firstName < b.firstName) {
        return -1;
      }
      if (a.firstName > b.firstName) {
        return 1;
      }
      return 0;
    });
  }
  
  sortByFirstNameDescending() {
    this.isAscendingFirstName = false;
    this.users.sort((a, b) => {
      if (a.firstName < b.firstName) {
        return 1;
      }
      if (a.firstName > b.firstName) {
        return -1;
      }
      return 0;
    });
  }
  
  sortByLastNameAscending() {
    this.isAscendingLastName = true;
    this.users.sort((a, b) => {
      if (a.lastName < b.lastName) {
        return -1;
      }
      if (a.lastName > b.lastName) {
        return 1;
      }
      return 0;
    });
  }
  
  sortByLastNameDescending() {
    this.isAscendingLastName = false;
    this.users.sort((a, b) => {
      if (a.lastName < b.lastName) {
        return 1;
      }
      if (a.lastName > b.lastName) {
        return -1;
      }
      return 0;
    });
  }

  
  onKeyUp(event: KeyboardEvent) {
    const inputValue = (event.target as HTMLInputElement).value;
    if(inputValue.length == 0 ||
      (event.key === 'Delete')){
        this.valueSearch = ''; 
        this.loadDataTable();
    }
    if (
      inputValue.length >1 ||
      (event.key === 'Backspace' && inputValue.length == 0)
    ) {
      this.filterUsers();
    }
  }

  filterUsers(): void {
    if (this.valueSearch.trim()) {
      this.users = this.users.filter(user =>
        user.firstName.toLowerCase().includes(this.valueSearch.toLowerCase()) ||
        user.lastName.toLowerCase().includes(this.valueSearch.toLowerCase())
      );
    } else {
      this.users = this.users;
    }
  }
  
  clearFilter(){   
    this.valueSearch = ''; 
    this.loadDataTable();
  }


}
