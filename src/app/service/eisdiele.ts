import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { Eisdiele } from '../model/eisdiele.model';
import { Eissorte } from '../model/eissorte.model';

@Injectable({
  providedIn: 'root'
})
export class EisdieleService {

  private eisSorteListe: any = [{
        name: 'Schokolade',
        beschreibung: 'Intensiv, cremig und voller Kakaogeschmack',
        preis: 1.5,
        vegan: false,
        zutaten: [{ name: 'Milch' }, { name: 'Kakao' }, { name: 'Zucker' }]
    },
      {
        id: 2,
        name: 'Mango-Sorbet',
        beschreibung: 'Fruchtig, leicht und 100 % vegan',
        preis: 1.8,
        vegan: true,
        zutaten: [{ name: 'Mango' }, { name: 'Zucker' }, { name: 'Wasser' }]
      }];

  // Beispielhafte lokale Daten (könnte auch eine API sein)
  private eisdiele: Eisdiele = {
    id: 1,
    name: 'Eiszauber Altstadt Wasserburg',
    adresse: 'Marienplatz 3, 83512 Wasserburg am Inn',
    sorten: [ this.eisSorteListe ]
  };

  constructor(private http: HttpClient) {}

  // Simulierter API-Call
  getEisdiele(): Observable<Eisdiele> {
    return of(this.eisdiele);
  }
}
