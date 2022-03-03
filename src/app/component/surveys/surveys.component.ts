import { Component, OnInit } from '@angular/core';
import { Card } from '../../models/card';
import { Category } from '../../models/category';
import { CategoriesData } from '../../../assets/categories-data';
import { CardsData } from '../../../assets/cards-data';
import { Router } from '@angular/router';
import {MatSnackBar} from '@angular/material/snack-bar';
import {AuthenticationService} from '../../auth/authentication-service';

@Component({
  selector: 'app-surveys',
  templateUrl: './surveys.component.html',
  styleUrls: ['./surveys.component.scss']
})
export class SurveysComponent implements OnInit {
  cards: Card[] = [];
  categories: Category[] = [];

  constructor(private router: Router,
              private snackbar: MatSnackBar,
              private authenticationService: AuthenticationService) { }

  ngOnInit(): void {
    this.categories = CategoriesData;
    this.cards = CardsData;
  }

  isNotLastIndex(card: Card, prize: string): boolean {
    return card.prizes.indexOf(prize) !== card.prizes.length - 1;
  }

  startSurvey(): void {
    if (this.authenticationService.isAuthenticated) {
      this.router.navigateByUrl('/survey');
    } else {
      this.snackbar.open('Please login to start survey', '', {duration: 3000, panelClass: ['snackbar']});
    }
  }
}
