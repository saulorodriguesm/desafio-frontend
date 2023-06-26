import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map, firstValueFrom } from 'rxjs';

type Payment = {
  id: string;
};

@Injectable()
export class PaymentsService {
  public payments: Payment[] = [];

  constructor(private _httpClient: HttpClient) {}

  // obterTodos() {
  //   return this._httpClient.get(`${API_PATH}payments`);
  // }
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
