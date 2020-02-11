import { Component, OnInit } from '@angular/core';
import { Pocket } from './shared/pocket';

@Component({
  selector: 'app-pocket-list',
  templateUrl: './pocket-list.component.html',
  styleUrls: ['./pocket-list.component.css']
})
export class PocketListComponent implements OnInit {

  public pockets: Pocket[] = new Array<Pocket>();
  public errors = [];

  constructor() { }

  ngOnInit() {
  }

}
