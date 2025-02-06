import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Product } from '../common/product';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  private baseUrl:string = 'http://localhost:8080/api/products';

  constructor(private httpClient:HttpClient) { }

  getProductList():Observable<Product[]> { //Retrun an Observable: Map the Json data from Spring Data REST to Product Array
    return this.httpClient.get<GetResponse>(this.baseUrl).pipe(
      map(response => response._embedded.products)//map data to our given data type
    );
  }
}

interface GetResponse {
  _embedded: { // Unwraps the JSON from Spring Data REST _embedded entry
    products: Product[];
  }
}