import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { GithubComponent } from './github/github.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, GithubComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'my-first-project-angular';
}
