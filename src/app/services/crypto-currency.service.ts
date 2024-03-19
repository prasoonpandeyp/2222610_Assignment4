import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'; // Import the HttpClient class
import { environment } from '../../environments/environment'; // Import the environment variable
import { Observable } from 'rxjs';
import { ICryptoCurrency } from '../model/crypto-currency.interface';

@Injectable({
  providedIn: 'root'
})
export class CryptoCurrencyService {

  constructor(private http: HttpClient) { } 

  getAllCryptoCurrencyData() {
    return this.http.get(environment.apiUrl + 'cryptocurrencies');
  }

  // create curd method to add, update, delete and get data from the server usinf http client api url suffix wishlist
  
  addToWishlist(cryptoCurrency: ICryptoCurrency) {
    return this.http.post(environment.apiUrl + 'wishlist', cryptoCurrency);
  }

  getWishlist(): Observable<ICryptoCurrency[]> {
    return this.http.get<ICryptoCurrency[]>(environment.apiUrl + 'wishlist');
  }

  deleteWishlist(id: number | null) {
    return this.http.delete(environment.apiUrl + 'wishlist/' + id);
  }

  updateWishlist(cryptoCurrency: ICryptoCurrency) {
    return this.http.put(environment.apiUrl + 'wishlist', cryptoCurrency);
  }  

}
