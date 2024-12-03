import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { BbcNewsService } from '../app/services/bbc-news.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  newsList: any[] = [];

  constructor(private bbcNewsService: BbcNewsService) {}

  ngOnInit(): void {
    this.fetchNews();
  }

  fetchNews(): void {
    this.bbcNewsService.getHomepageNews().subscribe(
      (data) => {
        if (data.success) {
          this.newsList = data.data;
        }
      },
      (error) => {
        console.error('Error fetching news:', error);
      }
    );
  }
}
