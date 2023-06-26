import { Component, OnInit } from '@angular/core';
import { PaymentsService } from '../../services/PaymentsService';

@Component({
  selector: 'app-payments',
  templateUrl: './payments.component.html',
  styleUrls: ['./payments.component.scss'],
})
export class PaymentsComponent implements OnInit {
  constructor(private _paymentService: PaymentsService) {}
  fetchPayments() {}
  ngOnInit(): void {
    this._paymentService
      .obterTodos()
      .then((payments) => console.log(payments))
      .catch((error) => console.error(error));
  }
}
