import { Post } from "./post";
import { User } from "./user";

export class Commentaire {
    constructor(
        public idComment: number,
        public contenu: string,
        public published: Date,
        public user:number, 
        public post: number,
        public userDetails?: User 
    ) {}
}