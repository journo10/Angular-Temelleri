import { ReactiveFormsComponent } from './reactive-forms/reactive-forms.component';
import { TemplateFormsComponent } from './template-forms/template-forms.component';
import { MovieCreateComponent } from './movie-create/movie-create.component';
import { MovieDetailsComponent } from './movie-details/movie-details.component';
import { MoviesComponent } from './movies/movies.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {path:'movies',component:MoviesComponent},
  {path:'',redirectTo:'movies',pathMatch:'full'},
  {path:'movies/category/:categoryId',component:MoviesComponent},
  {path:'movies/create',component:MovieCreateComponent},
  {path:'movies/template-forms',component:TemplateFormsComponent},
  {path:'movies/reactive-forms',component:ReactiveFormsComponent},
  {path:'movies/:movieId',component:MovieDetailsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
