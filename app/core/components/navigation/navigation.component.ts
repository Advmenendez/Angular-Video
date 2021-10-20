import { NavigationElement } from './../../models/core';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.scss']
})
export class NavigationComponent implements OnInit {
  @Input() public navigation!: NavigationElement[];
  constructor() { }

  ngOnInit(): void {
  }

}
