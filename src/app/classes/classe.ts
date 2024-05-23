import { Etudiant } from "./etudiant";
import { Enseignant } from "./enseignant";

export class Classe {
    constructor(
        public idClasse: number,
        public num: number,
        public etudiants: Etudiant[] = [],
        public enseignants: Enseignant[] = []
    ) {}
}
