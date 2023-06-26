import { Component, OnInit } from '@angular/core';
import { PaymentsService } from '../services/PaymentsService';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
})
export class DashboardComponent implements OnInit{
  constructor(private _paymentService: PaymentsService) {

  }
  fetchPayments() {

  }
  ngOnInit(): void {
    
  }
}
