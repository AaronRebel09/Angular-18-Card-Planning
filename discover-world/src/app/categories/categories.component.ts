import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {RouterLink, RouterLinkActive} from '@angular/router';
import {LowerCasePipe, NgForOf, TitleCasePipe, UpperCasePipe} from '@angular/common';
import {LocateService} from './service/locate.service';
import {travel} from './interface/travel-interface';
import {map} from 'rxjs';

@Component({
  selector: 'app-categories',
  standalone: true,
  imports: [
    RouterLink,
    RouterLinkActive,
    NgForOf,
    TitleCasePipe,
    UpperCasePipe,
    LowerCasePipe
  ],
  templateUrl: './categories.component.html',
  styleUrl: './categories.component.scss'
})
export class CategoriesComponent  implements OnInit {
  title: string | undefined;
  description: string | undefined;
  url: string | undefined;
  cards: any;
  travelInfo: travel | undefined
  category: string | undefined
  @Output() worldInfoEvent = new EventEmitter()
  @Input() cardData: any;

  constructor(public _http: LocateService) {
    this.getAllData()
  }
  ngOnInit() {
    this.title = 'mi primer titulo';
    this.description = 'mi primer description';
    this.url = 'https://material.angular.io/assets/img/examples/shiba2.jpg';
    this.refresh()
  }

  refresh() {
    this.cards = this.travelInfo;
  }

  navLinks = [
    { category: 'All', icon: 'all', link: './all', index: 0 },
    { category: 'Travel', icon: 'travel', link: './travel', index: 1 },
    { category: 'LifeStyle', icon: 'lifestyle', link: './lifestyle', index: 2 },
    { category: 'Business', icon: 'business', link: './business', index: 3 },
    { category: 'Food', icon: 'food', link: './food', index: 4 },
    { category: 'Work', icon: 'work', link: './work', index: 5 }
  ];

  getAllData() {
    return this._http
      .getAllData()
      .pipe(
        map((response: any) =>
          response.map((item: { id: string; title: string; description: string; category: string; url: string; }) => ({
            id: item.id,
            title: item.title,
            description: item.description,
            category: item.category,
            url: item.url
          }))
        )
      )
      .subscribe((x) => {
        this.travelInfo = x
        this.sendWorldInfo();
      });
  }

  sendWorldInfo() {
    this.worldInfoEvent.emit({ message: this.travelInfo })
    console.log(this.travelInfo)
    setTimeout(() => {
      this.refresh()
    }, 100);
  }

  onClick(category: string) {
    console.log(category);
    if ( category != 'All') {
      console.log(this.getByCategory(category))
    } else {
      this.getAllData();
    }
    //return this.ngOnInit();
  }

  getByCategory(category: string) {
    return this._http
      .getAllData()
      .pipe(
        map((response: any) =>
          response
            .filter((item: any) => item.category === category)
            .map((item: { id: string; title: string; description: string; category: string; url: string; }) => ({
              id: item.id,
              title: item.title,
              description: item.description,
              category: item.category,
              url: item.url
            }))
        )
      )
      .subscribe((filteredItems) => {
        this.travelInfo = filteredItems;
        this.sendWorldInfo();
      });
  }

}
