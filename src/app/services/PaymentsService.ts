import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map, firstValueFrom, lastValueFrom } from 'rxjs';
import { API_PATH } from 'src/environments/environment';
import { IPayments } from '../interfaces/IPayments';

type Payment = {
  id: string;
};

@Injectable()
export class PaymentsService {
  public payments: Payment[] = [];

  constructor(private _httpClient: HttpClient) {}

  public async obterTodos() {
    try {
      const payments = await lastValueFrom(
        this._httpClient.get<IPayments[]>(`${API_PATH}payments`)
      );
    } catch {
      alert('Erro ao buscar pagamentos');
    }
  }
  // public async fetchPayments() {
  //   try {
  //     this._httpClient
  //       .get<Payment[]>('TODO')
  //       .pipe(map((response) => (this.payments = response)));
  //   } catch {
  //     alert('Erro ao buscar pagamentos');
  //   }
  // }

  public async add() {
    // post
    // this.payments = [response, ...this.payments]
  }

  public async update() {
    // put
  }

  public async remove() {
    // delete
  }
}
