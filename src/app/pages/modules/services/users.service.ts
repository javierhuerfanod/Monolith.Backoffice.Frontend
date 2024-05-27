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

  getAllUsersPaginated(pageNumber:any, pageSize:any): Observable<ApiResponse<DataPaginated<any>>> {  
    const token = localStorage.getItem('token');
    const headers = new HttpHeaders({
      'Authorization': `Bearer ${token}`
    });
    
    return this.http.get<ApiResponse<DataPaginated<any>>>(
      `${this.serviceBaseUrl}/api/v1/User/SearchPaginatedUsers?pageNumber=${pageNumber}&pageSize=${pageSize}`,
      { headers: headers }
    );
  }

  getSearchPaginatedWeightsPaginated(filter:any): Observable<ApiResponse<DataPaginated<any>>> {  
    const token = localStorage.getItem('token');
    const headers = new HttpHeaders({
      'Authorization': `Bearer ${token}`
    });    
    return this.http.get<ApiResponse<DataPaginated<any>>>(
      `${this.serviceBaseUrl}/api/v1/Weight/SearchPaginatedWeights?userId=${filter.userId}&searchTerm=${filter.searchTerm}&startDate=${filter.startDate}&endDate=${filter.endDate}&pageNumber=${filter.pageNumber}&pageSize=${filter.pageSize}`,
      { headers: headers }
    );
  }


  getGetQuestionnaireAnswersByWeight(filter:any): Observable<ApiResponse<DataPaginated<any>>> {  
    const token = localStorage.getItem('token');
    const headers = new HttpHeaders({
      'Authorization': `Bearer ${token}`
    });             
         //'https://app-juegos-serios-javeriana-backoffice.azurewebsites.net/api/v1/QuestionnaireAnswer/GetQuestionnaireAnswersByWeight?userId=5&weightId=28' \ 
    return this.http.get<ApiResponse<DataPaginated<any>>>(
      `${this.serviceBaseUrl}/api/v1/QuestionnaireAnswer/GetQuestionnaireAnswersByWeight?userId=${filter.userId}&weightId=${filter.weightId}`,
      { headers: headers }
    );
  }
}