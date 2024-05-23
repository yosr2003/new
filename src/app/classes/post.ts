import { Commentaire } from './Commentaire';
import { PieceJointe } from './piecesJointe';
import { Reaction } from './Reaction';
import { User } from './user';


export class Post {
  liked: any;
  constructor(
    public idPost: number,
    public contenu: string,
    public published: Date,
    public user: number,
    public userDetails: User,
    public estpublie: boolean,
    public commentaires: Commentaire[],
    public pieces_jointes: PieceJointe[],
    public reactions: Reaction[]
  ) {}
}
