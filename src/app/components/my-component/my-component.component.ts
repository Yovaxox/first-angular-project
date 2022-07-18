import { Component } from '@angular/core';

@Component({
    selector: 'my-component',
    templateUrl: './my-component.component.html'
        
})

export class MyComponent{

    public title: string;
    public comment: string;
    public year: number;
    public showMovies: boolean;

    constructor(){
        this.title = "Hello world, I'm my-component";
        this.comment = "This is my first component";
        this.year = 2022;
        this.showMovies = true;

        console.log("Component my-component loaded!!");
        console.log(this.title,this.comment,this.year);  
    }

    hideMovies(){
        this.showMovies = false;
    }


}