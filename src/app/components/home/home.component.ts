import { Component, OnInit } from '@angular/core';
import { CryptoCurrencyService } from './../../services/crypto-currency.service';
import { ICryptoCurrency } from 'src/app/model/crypto-currency.interface';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  currencies: ICryptoCurrency[] = [];

  // create constractor add cryptoCurrencyService 
  // and call getAllCryptoCurrencyData method in ngonit method 
  // create local variable currencies to store the data using subscribe method form observable

  constructor(private cryptoCurrencyService: CryptoCurrencyService) { }

  ngOnInit() {
    this.getAllCryptoCurrencyData();
  }

  getAllCryptoCurrencyData() {
    this.cryptoCurrencyService.getAllCryptoCurrencyData().subscribe((currencies: any) => {
      // store the data in the local variable 'currencies'
      this.currencies = currencies.data;
    });
  }


  // add method to save addToWishlist method 

  addToWishlist(cryptoCurrency: ICryptoCurrency) {
    console.log('Add to wishlist', cryptoCurrency);

    // alert user that the currency has been added to the wishlist using symbol

    this.cryptoCurrencyService.getWishlist().subscribe((currencies: ICryptoCurrency[]) => {
      const exist = currencies.find((currency) => currency.symbol === cryptoCurrency.symbol);
      if (exist) {
        alert('Currency already exist in the wishlist');
        return;
      }
      // add id number to the cryptoCurrency object
      cryptoCurrency.id = Math.floor(Math.random() * 100);
      this.cryptoCurrencyService.addToWishlist(cryptoCurrency).subscribe(() => {
        console.log('Added to wishlist');
        // alert user that the currency has been added to the wishlist
        alert('Added to wishlist');
      });

    });
  }

}
