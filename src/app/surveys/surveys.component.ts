import { Component, OnInit } from '@angular/core';
import {Card} from '../models/card';
import {Categorie} from '../models/categorie';
import {CategoriesData} from '../../assets/categories-data';
import {CardsData} from '../../assets/cards-data';

@Component({
  selector: 'app-surveys',
  templateUrl: './surveys.component.html',
  styleUrls: ['./surveys.component.css']
})
export class SurveysComponent implements OnInit {

  cards: Card[] = [];
  categories: Categorie[] = [];

  constructor() { }

  ngOnInit(): void {
    this.categories = CategoriesData;
    this.cards = CardsData;
  }

  isNotLastIndex(card: Card, prize: string): boolean {
    return card.prizes.indexOf(prize) !== card.prizes.length - 1;
  }
}
