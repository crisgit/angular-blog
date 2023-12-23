import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css']
})
export class ContentComponent implements OnInit{
  photoCover:string = "https://dummyimage.com/leaderboard";
  contentTitle:string = "Notícia Exemplo";
  contentDescription:string = "Lorem Ipsum";

  constructor() {}

  ngOnInit(): void {
  }

}
