import { Component, OnInit } from '@angular/core';
import { ICryptoCurrency } from 'src/app/model/crypto-currency.interface';
import { CryptoCurrencyService } from 'src/app/services/crypto-currency.service';

@Component({
  selector: 'app-wish-list',
  templateUrl: './wish-list.component.html',
  styleUrls: ['./wish-list.component.scss']
})
export class WishListComponent implements OnInit {
  currencies: ICryptoCurrency[] = [];

  constructor(private cryptoCurrencyService: CryptoCurrencyService) {}

  ngOnInit() { this.getWishlist(); }

  getWishlist() { 
    this.cryptoCurrencyService.getWishlist()
    .subscribe((currencies: any) => { 
      // store the data in local variable 'currencies'
      this.currencies = currencies; 
    }); 
  }

  // add method to delete deleteFromWishlist method alert user that the currency has been deleted from the wishlist
  deleteFromWishlist(id: number | null) { 
    this.cryptoCurrencyService.deleteWishlist(id)
    .subscribe(() => { 
      console.log('Deleted from wishlist'); 
      // alert user that the currency has been deleted from the wishlist
      alert('Deleted from wishlist'); 
      this.getWishlist(); 
    }); 
  }


}
