import { Post } from "./post";

export class PieceJointe {
    constructor(
        public idPiece: number,
        public nomPiece: string,
        public typePiece: string,
        public post: Post
    ) {}
}
