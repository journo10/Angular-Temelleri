import { SummaryPipe } from './pipes/summary.pipe';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { CategoryComponent } from './category/category.component';
import { MoviesComponent } from './movies/movies.component';
import { MovieComponent } from './movies/movie/movie.component';
import { MovieDetailsComponent } from './movie-details/movie-details.component';
import { FooterComponent } from './footer/footer.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MovieFilterPipe } from './pipes/movie-filter.pipe';
import { HttpClientModule} from '@angular/common/http';
import { MovieCreateComponent } from './movie-create/movie-create.component';
import { TemplateFormsComponent } from './template-forms/template-forms.component';
import { ReactiveFormsComponent } from './reactive-forms/reactive-forms.component';


@NgModule({
  declarations: [            //Component Bölümü
    AppComponent,
    NavbarComponent,
    CategoryComponent,
    MoviesComponent,
    MovieComponent,
    MovieDetailsComponent,
    FooterComponent,
    SummaryPipe,
    MovieFilterPipe,
    MovieCreateComponent,
    TemplateFormsComponent,
    ReactiveFormsComponent,
    
  ],
  imports: [                //Modul Bölümü
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [],            //Service Bölümü
  bootstrap: [AppComponent] //Başlangıç Componenti Bölümü
})
export class AppModule { }
