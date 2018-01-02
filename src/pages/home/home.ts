import { NotesService } from '../../services/notes.service';
import { Component, ViewChild } from '@angular/core';
import { NavController } from 'ionic-angular';
import { DetailPage } from '../detail/detail';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  notes  = [];
  @ViewChild('myNav') nav:NavController;
  constructor(public navCtrl: NavController, public notesService : NotesService) {
    notesService.getNotes().valueChanges()
        .subscribe( notas=> {
      this.notes = notas;
    });
  }

  public goToDetail(id){
    this.navCtrl.push(DetailPage, {id});
  }

  public createNote(){
    this.navCtrl.push(DetailPage, {id:0});
  }
}
