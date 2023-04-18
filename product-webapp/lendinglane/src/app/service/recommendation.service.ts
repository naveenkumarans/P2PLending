import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { RecommendedBorrower } from '../model/RecommendedBorroer';

@Injectable({
  providedIn: 'root'
})
export class RecommendationService {

 //apiBaseUrl = environment.apiBaseUrl + "/recommendation-service";


  url:string="http://localhost:8080/api/v1/recommendation/get"
  constructor(private httpClient:HttpClient) { }


score = "600-700"
  getbBorrower(creditScore:any)
  {
    return this.httpClient.get<Array<RecommendedBorrower>>(`${this.url}/${this.score}`)
  }


}
