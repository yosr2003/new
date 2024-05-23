import { Etudiant } from "./etudiant";
import { Classe } from "./classe";

export class AnneeUniversitaire {
    constructor(
        public etudiant: Etudiant,
        public classe: Classe,
        public annee: string
    ) {}
}
