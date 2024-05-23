import { User } from "./user";
import { Post } from "./post";

export class Reaction {
    constructor(
        public idReaction: number,
        public emoji: boolean, // Assuming emoji is a URL or base64 string
        public user: User,
        public post: Post
    ) {}
}
