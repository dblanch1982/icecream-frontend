import { Eissorte } from "./eissorte.model";

export interface Eisdiele {
  id: number;
  name: string;
  adresse: string;
  sorten: Eissorte[];
}