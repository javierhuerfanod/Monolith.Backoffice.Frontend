export interface UsersModel {
  lastName?: string;
  firstName?: string;
  items: {
    userId:         number;    
    firstName:      string;
    lastName:       string;
    documentNumber: string;
    username:       string;
    email:          string;
    birthdayDate:   Date;
    weight:         number;
  };  
  totalCount:   number,
  pageNumber:   number,
  pageSize:     number,
  hasPreviousPage: boolean,
  hasNextPage: boolean
}