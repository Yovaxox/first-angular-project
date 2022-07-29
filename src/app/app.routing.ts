// Import modules router Angular
import { ModuleWithProviders } from "@angular/core";
import { Routes, RouterModule } from '@angular/router';

// Import component which I want to make an exclusive page
import { HomeComponent } from "./components/home/home.component";
import { BlogComponent } from "./components/blog/blog.component";
import { FormsComponent } from "./components/forms/forms.component";
import { MoviesComponent } from "./components/movies/movies.component";
import { PageComponent } from "./components/page/page.component";
import { ErrorComponent } from "./components/error/error.component";

// Route Arrays
const appRoutes: Routes = [
    {path: '', component: HomeComponent},
    {path: 'home', component: HomeComponent},
    {path: 'blog', component: BlogComponent},
    {path: 'form', component: FormsComponent},
    {path: 'movies', component: MoviesComponent},
    {path: 'test-page', component: PageComponent},
    {path: 'test-page/:name/:last_name', component: PageComponent},
    {path: '**', component: ErrorComponent}
];

// Export Route Module
export const appRoutingProviders: any[] = [];
export const routing: ModuleWithProviders<any> = RouterModule.forRoot(appRoutes);