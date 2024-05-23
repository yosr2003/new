import { User } from "./user";

export class Administrateur extends User {
    constructor(
        idUser: number,
        nom: string,
        prenom: string,
        email: string,
        password: string,
        numTel: number,
        public role: string
    ) {
        super(idUser, nom, prenom, email, password, numTel);
    }
}
