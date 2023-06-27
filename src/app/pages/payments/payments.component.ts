import { Component, OnInit, ViewChild } from '@angular/core';
import { PaymentsService } from '../../services/PaymentsService';
import { Payments } from 'src/app/models/Payments';
import { DialogComponent } from 'src/app/shared/dialog/dialog.component';
import { MatDialog } from '@angular/material/dialog';
import { MatTable } from '@angular/material/table';

@Component({
  selector: 'app-payments',
  templateUrl: './payments.component.html',
  styleUrls: ['./payments.component.scss'],
  providers: [PaymentsService],
})
export class PaymentsComponent implements OnInit {
  @ViewChild(MatTable)
  table!: MatTable<any>;
  constructor(
    private _paymentService: PaymentsService,
    public dialog: MatDialog
  ) {
    this._paymentService.getPayments().subscribe((data) => {
      this.payments = data;
    });
  }

  payments: Payments[] = [];
  displayedColumns: string[] = [
    'username',
    'title',
    'date',
    'value',
    'isPayed',
  ];
  ngOnInit(): void {}

  updatePayment(payment: Payments) {
    this.openDialog(payment);
    if (this.payments.map((p) => p.id).includes(payment.id)) {
      this._paymentService.updatePayment(payment).subscribe((data) => {
        const index = this.payments.findIndex((p) => p.id === data.id);
        this.table.renderRows();
      });
    } else {
    }
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
      if (result !== undefined) {
      }
    });
  }
}
