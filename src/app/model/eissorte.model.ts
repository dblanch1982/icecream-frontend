import { Zutat } from "./zutaten.model";

export interface Eissorte {
  id: number;
  name: string;
  beschreibung?: string;
  preis: number;
  vegan: boolean;
  zutaten: Zutat[];
  type: string;
}