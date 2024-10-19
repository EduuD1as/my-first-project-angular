import { Component, OnInit } from '@angular/core';
import { GithubService } from './github.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-github',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './github.component.html',
  styleUrl: './github.component.css'
})
export class GithubComponent implements OnInit {
  userData: any;

  constructor(private githubService: GithubService) {}

  ngOnInit(): void {
    this.githubService.getUserData().subscribe(data => {
      this.userData = data;
    })
  }
}
