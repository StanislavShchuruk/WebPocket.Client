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
    this.onAddNewPocket();
  }

  public onAddNewPocket() {
    const pocket = this.createNewPocket();
    this.pockets.push(pocket);
  }

  private createNewPocket(): Pocket {
    return {
      id: 0,
      name: this.generatePocketName()
    };
  }

  private generatePocketName(): string {
    let name = '';
    let i = 0;
    do {
      name = `Pocket ${++i}`;
    } while (this.pockets.some(p => p.name === name) && i < 1000000);

    return name;
  }
}
