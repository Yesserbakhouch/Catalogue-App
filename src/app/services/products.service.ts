import {Injectable} from "@angular/core";
import {HttpClient, HttpClientModule} from "@angular/common/http";

@Injectable({providedIn : "root"})
export class ProductsService{
  constructor(private http:HttpClient) {
  }

}
