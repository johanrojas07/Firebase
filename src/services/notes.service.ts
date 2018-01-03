import { AngularFireDatabase } from 'angularfire2/database';
import { Injectable } from '@angular/core';


@Injectable()
export class NotesService{
    constructor( public afDB: AngularFireDatabase ){

    }
    notes = [];
    public getNotes(){
          //return this.notes;
          return this.afDB.list('notas/');
      }

    public getNote(id){
          //return this.notes.filter((e,i)=>{return e.id == id })[0] || {id:null,title:null,description:null};
     return this.afDB.object('nota/'+id);
        }

    public createNote(note){
        this.afDB.database.ref('notas/'+note.id).set(note);
          //this.notes.push(note);
      }

    public editNote(note){
        /*for(let i=0; i < this.notes.length;i++){
            if(this.notes[i].id == note.id ){
                this.notes[i] = note;
            }

        }*/
        this.afDB.database.ref('notas/'+note.id).set(note);
    }

    public deleteNote(note){
        /*for(let i=0; i < this.notes.length;i++){
            if(this.notes[i].id == note.id ){
                this.notes.splice(i,1); 
            }

        }*/
        this.afDB.database.ref('notas/'+note.id).remove(note);
    }
}