import { ErrorHandler, Injectable} from '@angular/core';
 
@Injectable()
export class ErrorHandling implements ErrorHandler {
 
    constructor() { 
    
    }
  
    handleError(error) {
    //    console.error('An error occurred:', error.message);
       console.error(error);
    //    alert(error);
   }
 
}