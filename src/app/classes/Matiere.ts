import { Enseignant } from "./enseignant";
import { Classe } from "./classe";

export class Matiere {
    constructor(
        public enseignant: Enseignant,
        public classe: Classe,
        public nomMatiere: string
    ) {}
}
