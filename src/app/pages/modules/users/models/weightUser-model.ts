export interface WeightUser {
    items: {
      weightId:       number;    
      userId:         string;
      date:           Date;
      weightValue:    string;
    };
    totalCount:   number,
    pageNumber:   number,
    pageSize:     number,
    hasPreviousPage: boolean,
    hasNextPage: boolean
  }