import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { AppComponent } from './app/app.component';
import { Routes, provideRouter } from '@angular/router';
import { NotesListComponent } from './app/components/notes-list/notes-list.component';
import { AddNoteComponent } from './app/components/add-note/add-note.component';
import { NoteDetailComponent } from './app/components/note-detail/note-detail.component';

const routes: Routes = [
  { path: '', component: NotesListComponent },
  { path: 'new', component: AddNoteComponent },
  { path: 'note/:id', component: NoteDetailComponent },
]


bootstrapApplication(AppComponent, {
  providers: [provideRouter(routes)],
});