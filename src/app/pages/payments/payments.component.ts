import { Component, OnInit } from '@angular/core';
import { PaymentsService } from '../../services/PaymentsService';
import { Payments } from 'src/app/models/Payments';
import { DialogComponent } from 'src/app/shared/dialog/dialog.component';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-payments',
  templateUrl: './payments.component.html',
  styleUrls: ['./payments.component.scss'],
})
export class PaymentsComponent implements OnInit {
  constructor(
    private _paymentService: PaymentsService,
    public dialog: MatDialog
  ) {}

  payments: Payments[] = [];
  displayedColumns: string[] = [
    'username',
    'title',
    'date',
    'value',
    'isPayed',
  ];
  ngOnInit(): void {
    this._paymentService
      .obterTodos()
      .then((payments) => console.log(payments))
      .catch((error) => console.error(error));
  }

  updatePayment(payment: Payments) {
    this.openDialog(payment);
  }
  deletePayment(id: string) {}
  openDialog(payment: Payments | null) {
    const dialogRef = this.dialog.open(DialogComponent, {
      width: '250px',
      data:
        payment != null
          ? payment
          : {
              id: '',
              username: '',
              title: '',
              date: null,
              value: 0,
              isPayed: false,
            },
    });

    dialogRef.afterClosed().subscribe((result) => {
      console.log('The dialog was closed');
    });
  }
}
