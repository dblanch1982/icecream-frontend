import { Eissorte } from "./eissorte.model";
import { Getraenke } from "./getraenke.model";

export interface Eisdiele {
  id: number;
  name: string;
  telefon: string;
  mail: string;
  qr_code: string;
  adresse: string;
  map: string;
  sorten: Eissorte[];
  heisse_getraenke: Getraenke[]; 
}