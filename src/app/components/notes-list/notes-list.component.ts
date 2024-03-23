import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { NOTES } from '../../notes';

@Component({
  selector: 'app-notes-list',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './notes-list.component.html',
  styleUrl: './notes-list.component.css',
})
export class NotesListComponent {
  notes = NOTES
}
