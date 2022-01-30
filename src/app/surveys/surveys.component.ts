import { Component, OnInit } from '@angular/core';
import {Card} from '../models/card';
import {Categorie} from '../models/categorie';
import {CategoriesData} from '../../assets/categories-data';
import {CardsData} from '../../assets/cards-data';
import {Router} from '@angular/router';

@Component({
  selector: 'app-surveys',
  templateUrl: './surveys.component.html',
  styleUrls: ['./surveys.component.scss']
})
export class SurveysComponent implements OnInit {

  cards: Card[] = [];
  categories: Categorie[] = [];

  constructor(private router: Router) { }

  ngOnInit(): void {
    this.categories = CategoriesData;
    this.cards = CardsData;
  }

  isNotLastIndex(card: Card, prize: string): boolean {
    return card.prizes.indexOf(prize) !== card.prizes.length - 1;
  }

  startSurvey(): void {
    this.router.navigateByUrl('/survey');
  }
}
