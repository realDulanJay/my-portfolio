import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent implements OnInit {
  text: string = '';
  index: number = 0;

  ngOnInit() {
    this.textLoad();
    setInterval(() => this.textLoad(), 16000);
  }

  textLoad() {
    setTimeout(() => {
      this.text = 'Generative AI Enthusiast';
    }, 0);
    setTimeout(() => {
      this.text = 'Generative AI Enthusiast';
    }, 8000);
  }
}
