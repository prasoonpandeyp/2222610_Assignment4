import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
// user defined error handler service with method handleError 
//api vs user defined error handler service with method handleError api
// using swich case to handle different types of error
export class GloblErrorHandlerService {

  constructor() { }

  handleError(error: any) {
    switch (error.status) {
      case 404:
        console.log('Not Found');
        break;
      case 500:
        console.log('Internal Server Error');
        break;
      case 403:
        console.log('Forbidden');
        break;
      case 401:
        console.log('Unauthorized');
        break;
      default:
        console.log('Unknown Error');
        break;
    }
  }
}


