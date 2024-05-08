import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { ApiResponse } from 'src/app/shared/models/api-response-model';
import { DataPaginated } from 'src/app/shared/models/data-paginated-model';

@Injectable({
  providedIn: 'root',
})
@Injectable()
export class UsersService {
  private serviceBaseUrl = `${environment.baseUrl}`;

  constructor(public http: HttpClient, public router?: Router) { }

  getAllProductsPaginated(pageNumber:any, pageSize:any): Observable<ApiResponse<DataPaginated<any>>> {  
    const token = localStorage.getItem('token');
    const headers = new HttpHeaders({
      'Authorization': `Bearer ${token}`
    });
    
    return this.http.get<ApiResponse<DataPaginated<any>>>(
      `${this.serviceBaseUrl}/api/v1/User/SearchPaginatedUsers?pageNumber=${pageNumber}&pageSize=${pageSize}`,
      { headers: headers }
    );
  }
}