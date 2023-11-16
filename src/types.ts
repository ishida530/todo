export interface IFormInputs {
    taskContent: string,
    id?:string
  }

  export interface Itask {
      id?: string,
      title: string,
      status?:TaskStatus,
  }
  export enum TaskStatus{
    COMPLETED= 'COMPLETED',
    EDIT="EDIT",
    DELETED = 'DELETED'
  }
 export interface IPagination {
    tasks: Itask[];
    handlePage: (page: any) => void;
    isPreviousData: boolean;
    page: number;
  }