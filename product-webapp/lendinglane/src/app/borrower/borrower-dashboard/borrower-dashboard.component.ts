import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-borrower-dashboard',
  templateUrl: './borrower-dashboard.component.html',
  styleUrls: ['./borrower-dashboard.component.css']
})
export class BorrowerDashboardComponent implements OnInit {
  loans:any=[{}];
  constructor() { }

  ngOnInit(): void {
    //call the loan microservice and assign the data to loans
  }

}
