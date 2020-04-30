import { Component, OnInit } from '@angular/core';
import { AlertService } from 'ngx-alerts';
import { AuthService } from '../auth.service';
import { DietService } from '../diet.service';

@Component({
  selector: 'app-dietdiary',
  templateUrl: './dietdiary.component.html',
  styleUrls: ['./dietdiary.component.css']
})
export class DietdiaryComponent implements OnInit {

  public addMealData = {} as any

  meals = [
    {
      title: 'Burger',
      content: 'Carbs',
      calories: 900,
      date: Date.now()
    }
    ,
    {
      title: 'Salad',
      content: 'Carbs',
      calories: 600,
      date: Date.now()
    },
    {
      title: 'Pizza',
      content: 'Carbs',
      calories: 600,
      date: Date.now()
    },
    {
      title: 'Sushi',
      content: 'Carbs',
      calories: 1200,
      date: Date.now()
    },
    {
      title: 'Pancakes',
      content: 'Carbs',
      calories: 200,
      date: Date.now()
    },
    {
      title: 'Salad',
      content: 'Carbs',
      calories: 600,
      date: Date.now()
    },
    {
      title: 'Salad',
      content: 'Carbs',
      calories: 600,
      date: Date.now()
    },
    {
      title: 'Salad',
      content: 'Carbs',
      calories: 600,
      date: Date.now()
    },
    {
      title: 'Salad',
      content: 'Carbs',
      calories: 600,
      date: Date.now()
    }
  ]
  constructor(private alertService: AlertService,
              private _auth: AuthService,
              private _dietService: DietService) { }

  ngOnInit(): void {
    this._dietService.getMeals()
    .subscribe(
      res => this.meals = res,
      err => console.log(err)
    )
  }



  addMeal() {
    this._auth.addMeal(this.addMealData).subscribe(
      res => {
        this.alertService.success('Meal successfully created')
        console.log(res)
      },
      err => {
        this.alertService.danger('Error occurred while creating a meal.')
        console.log(err)
      }
    )
  }

}
