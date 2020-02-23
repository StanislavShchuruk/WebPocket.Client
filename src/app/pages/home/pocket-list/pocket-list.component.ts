import { Component, OnInit } from '@angular/core';
import { Pocket } from './shared/pocket';
import { FormGroup, FormControl } from '@angular/forms';
import { PocketService } from './shared/pocket.service';
import { ErrorRequestResult } from 'src/app/shared/models/error-request-result';

@Component({
  selector: 'app-pocket-list',
  templateUrl: './pocket-list.component.html',
  styleUrls: ['./pocket-list.component.css']
})
export class PocketListComponent implements OnInit {

  public pockets: Pocket[] = new Array<Pocket>();
  public errors = [];

  constructor(private pocketService: PocketService) { }

  ngOnInit() {
    this.getUserPockets();
  }

  public onAddNewPocket() {
    const pocket = {
      id: 0,
      name: this.generatePocketName()
    };

    this.pockets.push(pocket);

    this.createNewPocket(pocket);
  }

  private getUserPockets() {
    this.pocketService.getPockets()
      .subscribe((data: Pocket[]) => {
        this.pockets = data;
        if (this.pockets.length === 0) {
          this.onAddNewPocket();
        }
      },
      (err: ErrorRequestResult) => {
        this.errors = err.errors;
      });
  }

  private createNewPocket(pocket: Pocket) {
    this.pocketService.createPocket(pocket)
      .subscribe((data: Pocket) => {
        const createdPocketIndex = this.pockets.findIndex(p => p.id === 0 && p.name === data.name);
        if (createdPocketIndex > 0) {
          this.pockets[createdPocketIndex] = data;
        }
      },
      (err: ErrorRequestResult) => {
        this.errors = err.errors;
      });
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
