import { Zutat } from "./zutaten.model";

export interface Getraenke {
  id: number;
  name: string;
  beschreibung?: string;
  normal_preis: number;
  groß_preis: number;
  zutaten: Zutat[];
  type: string;
  bild: string;
}