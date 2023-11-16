export interface IFormInputs {
    taskContent: string
  }

  export interface Itask {
      id?: number,
      title: string,
      status?:TaskStatus,
  }
  export enum TaskStatus{
    COMPLETED= 'COMPLETED',
    EDIT="EDIT",
    DELETED = 'DELETED'
  }
  