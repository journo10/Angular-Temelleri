import { MovieService } from './../services/movie.service';
import { Component, OnInit } from '@angular/core';
import { Movie } from '../models/movie';
import { MovieRepository } from '../models/movie.repository';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.css'],
  providers: [MovieService],
})
export class MoviesComponent implements OnInit {
  title: any = 'Film Listesi';
  today: any = new Date();
  movies: Movie[] = [];
  // populerMovies: Movie[];//repository üzerinden gelen data
  // movieRepository: MovieRepository;//repository üzerinden gelen data
  filterText: string = '';
  error: any;

  constructor(
    private movieService: MovieService,
    private activatedRoute: ActivatedRoute
  ) {
    // this.movieRepository = new MovieRepository();//repository üzerinden gelen data
    // this.movies = this.movieRepository.getMovies();//repository üzerinden gelen data
    // this.populerMovies = this.movieRepository.getPopulerMovies();//repository üzerinden gelen data
  }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe((params) => {
      this.movieService.getMovies(params['categoryId']).subscribe(
        (data) => {
          this.movies = data;
          // console.log(this.movies); //1.yol
          // console.log(data); //2.yol
        },
        (error) => {
          this.error = error;
        }
      );
    });
  }

  addToList($event: any, movie: Movie) {
    if ($event.target.classList.contains('btn-primary')) {
      $event.target.innerText = 'Listeden Çıkar';
      $event.target.classList.remove('btn-primary');
      $event.target.classList.add('btn-danger');
    } else {
      $event.target.innerText = 'Listeye Ekle';
      $event.target.classList.remove('btn-danger');
      $event.target.classList.add('btn-primary');
    }
  }
}
