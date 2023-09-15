import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, delay } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class GraficasService {
  _baseUrl: string = 'http://localhost:3000';
  constructor(private http: HttpClient) {}

  getUsuariosRedesSociales() {
    return this.http.get(`${this._baseUrl}/grafica`);
  }

  getUsuariosRedesSocialesData() {
    return this.getUsuariosRedesSociales().pipe(
      delay(1500),
      map((data) => {
        const labels = Object.keys(data); //obtener los keys de la data
        const values = Object.values(data); //obtener los valores de la data

        return { labels, values };
      })
    );
  }
}
