import { Component, OnInit, DoCheck, OnDestroy } from '@angular/core';

@Component({
  selector: 'movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.css']
})
export class MoviesComponent implements OnInit, DoCheck, OnDestroy {
  
  public title: string;

  constructor() { 
    this.title = "Movies components"
    console.log("CONSTRUCTOR DEPLOYED!!")
  }

  ngOnInit(): void {
    console.log("Component started!!")
  }

  ngDoCheck(): void{
    console.log("DO CHECK DEPLOYED!!")
  }

  changeTitle(){
    this.title = "The title has been changed.";
  }

  ngOnDestroy(): void {
    console.log("The component will be eliminated")
  }

}
