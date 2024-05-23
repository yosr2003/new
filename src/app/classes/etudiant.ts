import { User } from "./user";
import { Classe } from "./classe";

export class Etudiant extends User {
    constructor(
        idUser: number,
        nom: string,
        prenom: string,
        email: string,
        password: string,
        numTel: number,
        public specialite: string,
        public classes: Classe[]
    ) {
        super(idUser, nom, prenom, email, password, numTel);
    }
}
