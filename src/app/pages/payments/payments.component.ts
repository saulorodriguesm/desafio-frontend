import { Component, OnInit, ViewChild } from '@angular/core';
import { PaymentsService } from '../../services/payments.service';
import { Payments } from 'src/app/models/Payments';
import { DialogComponent } from 'src/app/shared/dialog/dialog.component';
import { MatDialog } from '@angular/material/dialog';
import { MatTable } from '@angular/material/table';
import { AuthService } from 'src/app/services/auth.service';
import { Router } from '@angular/router';

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
    private _authService: AuthService,
    public dialog: MatDialog,
    public router: Router
  ) {
    this._paymentService.getPayments().subscribe((data) => {
      console.log('oi',data)
      this.payments = data;
    });
  }

  payments: Payments[] = [
    {
      id: '',
      username: 'saulorodm',
      title: 'programador',
      value: 3,
      isPayed: true,
    },
  ];
  displayedColumns: string[] = [
    'username',
    'title',
    'value',
    'isPayed',
    'actions',
  ];
  ngOnInit(): void {}

  logout() {
    this._authService.Logout();
    this.router.navigate(['/login']);
  }
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
      width: '450px',
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
