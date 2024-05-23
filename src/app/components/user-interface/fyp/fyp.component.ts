import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { HeaderComponent } from "../../header/header.component";
import { CalendrierComponent } from "../../calendrier/calendrier.component";
import { Post } from '../../../classes/post';
import { PostService } from '../../../services/post.service';
import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { User } from '../../../classes/user';
import { AuthService } from '../../../services/auth.service';
import { CommentsService } from '../../../services/comments.service';
import { Commentaire } from '../../../classes/Commentaire';
import { Reaction } from '../../../classes/Reaction';
import { PieceJointe } from '../../../classes/piecesJointe';
import { FormControl, FormsModule, Validators } from '@angular/forms'; // Importez FormsModule
import { PostData, PostResponse } from '../../../services/post.service'; // Adjust the path

export interface UserDetails {
  idUser: number;
  nom: string;
  prenom: string;
  // Ajoutez d'autres propriétés d'utilisateur si nécessaire
}


@Component({
    selector: 'app-fyp',
    standalone: true,
    templateUrl: './fyp.component.html',
    styleUrls: ['./fyp.component.css'],
    imports: [HeaderComponent, CalendrierComponent, CommonModule], 
    providers: [PostService],
})
export class FypComponent implements OnInit {
  onFileSelected(event: any): void {
    this.piecesJointes = Array.from(event.target.files);
  }


  posts: Post[] = [];
  newPostContent: string = '';
  currentUser!: User | null;
  http: any;

  constructor(
    private postService: PostService,
    private authService : AuthService, private commentServ: CommentsService
  ) {}

  ngOnInit(): void {
    this.loadPosts();
  }
  loadPosts(): void {
    this.postService.getPosts().subscribe({
      next: (posts: Post[]) => {
        this.posts = posts;
  
        this.posts.forEach(post => {
          if (post.user) {
            this.postService.getUserDetails(post.user).subscribe(
              (user: User) => {
                post.userDetails = user;
              },
              error => {
                console.error('Error fetching user details for post:', error);
              }
            );
          }
          post.commentaires.forEach(comment => {
            if (comment.user) {
              this.postService.getUserDetails(comment.user).subscribe(
                (user: User) => {
                  comment.userDetails = user;
                },
                error => {
                  console.error('Error fetching user details for comment:', error);
                }
              );
            }
          });
        });
      },
      error: (error) => {
        console.error('Error fetching posts:', error);
      }
    });
  }
  
  toggleLike(post: Post) {
    post.liked = !post.liked;
}

  
  addNewPost(): void {
    // if (this.newPostContent.trim() !== '') {
    //   const newPost: Post = {
    //     contenu: this.newPostContent,
    //     published: new Date(),
    //     // likes: [],
    //     // Commentaire: []
    //   };

    //   this.postService.addPost(newPost).subscribe((post: Post) => {
    //     this.fetchPosts(); // Refresh the posts after adding a new one
    //     this.newPostContent = ''; // Clear the input field
    //   });
    // }
   
  }
  getCurrentUser(){
    // this.currentUser=this.authService.getCurrentUser();
    // return this.currentUser;
  }


  addComment(postId: number, contenu: string): void {

    const newComm: Commentaire = new Commentaire(
      0, 
      contenu,
      new Date(), 
      4, 
      postId 
    );
    console.log('Commentaire22222', newComm)

    this.commentServ.addComment(postId, newComm).subscribe({
      next: (response) => {
        console.log('Comment added successfully:', response);
      },
      error: (error) => {
        console.error('Error adding comment:', error);
      }
    });
 
  }
//------------------------------------------


contenu: string = ''; // Initialiser avec une chaîne vide
  user: number = 3;
  estpublie: boolean = false;
  piecesJointes: File[] = [];
  onContenuChange(event: Event): void {
    const inputElement = event.target as HTMLInputElement;
    if (inputElement && inputElement.value !== undefined) {
      this.contenu = inputElement.value;
      console.log('connnnntenu', this.contenu);
    }
  }


publierPost(): void {

}




  postId: number=3;
  selectedFiles!: FileList;


  onFileChange(event: any): void {
    this.selectedFiles = event.target.files;
  }

  uploadFiles(): void {
   
  }




save(){
  const postData: PostData = {
    contenu: this.contenu,
    user: 1, 
    estpublie: true
  };
  console.log('cntctctctc',this.contenu )
  console.log('ddddddd',postData)
  this.postService.publierPost(postData).subscribe({
    next: (response: any) => {
        this.postService.saveFiles(response["nouveau_post"]["idPost"], this.piecesJointes).subscribe(
          response => {
            console.log('Success:', response);
          },
          error => {
            console.error('Error:', error);
  
          }
        );
      
      console.log('Server response:', response);
    },
    error: (error) => {
      console.error('Error publishing post:', error);
    }
  });

}































// contenu: string = ''; // Initialiser avec une chaîne vide
//   user: number = 3;
//   estpublie: boolean = false;
//   piecesJointes: File[] = [];
//   onContenuChange(event: Event): void {
//     const inputElement = event.target as HTMLInputElement;
//     if (inputElement && inputElement.value !== undefined) {
//       this.contenu = inputElement.value;
//     }
//   }
  

//   onFileSelected(event: any): void {
//     this.piecesJointes = Array.from(event.target.files);
//   }

//   publierPost(event: Event): void {
//     event.preventDefault();
  
//     if (this.contenu && this.user && typeof this.estpublie === 'boolean') { 
//       console.log('evvvvvv', this.contenu)
//       console.log('uuuu', this.user)
//       console.log('yyyyyy',this.estpublie)
//       const postData = { contenu: this.contenu, user: this.user, estpublie: this.estpublie };
//       console.log('posdataaaa', postData)
//       this.postService.publierPost(postData)
//         .subscribe({
//           next: (response: any) => {
//             console.log('Post publié avec succès', response);
//             // this.saveFiles(response.id);
//           },
//           error: (error: any) => {
//             console.error('Erreur lors de la publication du post', error);
//           }
//         });
//     } else {
//       console.error('Les données du post sont incomplètes.');
//     }
//   }
  
  // private saveFiles(postId: number): void {
  //   if (this.piecesJointes.length > 0) {
  //     const formData = new FormData();
  //     formData.append('post_id', postId.toString());
  //     this.piecesJointes.forEach((file: File) => {
  //       formData.append('uploadedFiles', file, file.name);
  //     });
  //     this.postService.saveFiles(formData)
  //       .subscribe({
  //         next: () => {
  //           console.log('Pièces jointes ajoutées avec succès');
  //           this.contenu = ''; 
  //           this.piecesJointes = []; // Réinitialiser les pièces jointes après la publication
  //         },
  //         error: (error: any) => {
  //           console.error('Erreur lors de l\'enregistrement des pièces jointes', error);
  //         }
  //       });
  //   } else {
  //     console.error('Aucune pièce jointe à enregistrer.');
  //   }
  // }
  





}