import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './components/header/header.component';
import { AddNoteComponent } from './components/add-note/add-note.component';
import { NotesListComponent } from './components/notes-list/notes-list.component';
import { NoteDetailComponent } from './components/note-detail/note-detail.component';
@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
  imports: [
    RouterOutlet,
    HeaderComponent,
    AddNoteComponent,
    NotesListComponent,
    NoteDetailComponent,
  ],
})
export class AppComponent {
  title = 'ng-notes-app';
}
