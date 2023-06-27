import { HttpClient } from '@angular/common/http';
import { API_PATH } from 'src/environments/environment';
import { Payments } from '../models/Payments';
import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class PaymentsService {
  constructor(private _httpClient: HttpClient) {}

  getAll(): Observable<Payments[]> {
    return this._httpClient.get<Payments[]>(
      'https://3kniis.sse.codesandbox.io/payments',
      { withCredentials: true }
    );
  }

  addPayment(payment: Payments): Observable<Payments> {
    return this._httpClient.post<Payments>(API_PATH, payment);
  }

  updatePayment(payment: Payments): Observable<Payments> {
    return this._httpClient.put<Payments>(API_PATH, payment);
  }

  removePayment(id: string) {
    return this._httpClient.put(API_PATH, id);
  }
}
