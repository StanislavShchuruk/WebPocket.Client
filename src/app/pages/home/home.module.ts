import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { HomeRoutingModule } from './home-routing.module';
import { HomeTopBarComponent } from './home-top-bar/home-top-bar.component';
import { PocketListComponent } from './pocket-list/pocket-list.component';



@NgModule({
  declarations: [
    HomeComponent,
    HomeTopBarComponent,
    PocketListComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    HomeRoutingModule,
  ]
})
export class HomeModule { }
