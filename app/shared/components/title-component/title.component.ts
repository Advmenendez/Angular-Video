import { Title } from './model/title';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-title',
  templateUrl: './title.component.html',
  styleUrls: ['./title.component.scss']
})
export class TitleComponent implements OnInit {
  @Input() public title!: Title
  

  constructor() { }

  ngOnInit(): void {
  }

}
