import { Component } from '@angular/core';

@Component({
    selector: 'my-component',
    template: `
        <h1>{{title}}</h1>
        <p>{{comment}}</p>
        <h2>{{year}}</h2>
    `
})

export class MyComponent{

    public title: string;
    public comment: string;
    public year: number;

    constructor(){
        this.title = "Hello world, I'm my-component";
        this.comment = "This is my first component";
        this.year = 2022;

        console.log("Component my-component loaded!!");
        console.log(this.title,this.comment,this.year);  
    }
}