import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { auth } from 'firebase/app';
import { first } from 'rxjs/operators';

@Injectable() 
export class AuthService {
  constructor( public afAuth: AngularFireAuth ) {}

  async loginGoogle(){
    try{
      return this.afAuth.signInWithPopup( new auth.GoogleAuthProvider());
    }
    catch(error){console.log(error)}
  }

  async login (email:string, password:string) {
    try{
      const result = await this.afAuth.signInWithEmailAndPassword (
        email,
        password
      );
      return result;
    } 
      catch(error){
      console.log (error)
    }
 
  }

  async resgister (email:string, password:string) {
    try{
    const result = await this.afAuth.createUserWithEmailAndPassword(
      email, 
      password
      );
      return result; 
  }   catch(error){
      console.log (error)
  }
  
}

async logout () {
  try{
  await this.afAuth.signOut();
} catch(error){
  console.log (error);
}

}


}


