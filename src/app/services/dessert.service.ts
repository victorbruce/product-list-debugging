import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Dessert } from '../core/models/dessert.model';
import { Observable, BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class DessertService {
  private dataUrl: string = 'data.json';
  private dessertsSubject: BehaviorSubject<Dessert[]> = new BehaviorSubject<
    Dessert[]
  >([]);
  desserts$ = this.dessertsSubject.asObservable();

  constructor(private http: HttpClient) {
    this.loadDesserts();
  }

  loadDesserts(): void {
    this.http.get<Dessert[]>(this.dataUrl).subscribe((data) => {
      this.dessertsSubject.next(data);
    });
  }

  getDesserts(): Observable<Dessert[]> {
    return this.desserts$;
  }
}
