import {
  HttpClient,
  HttpErrorResponse,
  HttpHeaders,
} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { Movie } from '../models/movie';
import { tap, catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class MovieService {
  url = 'http://localhost:3000/movies';

  constructor(private http: HttpClient) {}

  getMovies(categoryId: number): Observable<Movie[]> {
    let newUrl = this.url;
    if (categoryId) {
      newUrl += '?categoryId=' + categoryId;
    }
    return this.http.get<Movie[]>(newUrl).pipe(
      tap((data) => console.log(data)),
      catchError(this.handleError)
    );
  }

  getMovieById(movieId: number): Observable<Movie> {
    return this.http.get<Movie>(this.url + '/' + movieId).pipe(
      tap((data) => console.log(data)),
      catchError(this.handleError)
    );
  }

  //Film Ekleme
  getCreateMovie(movie: Movie): Observable<Movie> {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        Authorization: 'Token',
      }),
    };

    return this.http.post<Movie>(this.url, movie, httpOptions).pipe(
      tap((data) => console.log(data)),
      catchError(this.handleError)
    );
  }

  private handleError(error: HttpErrorResponse) {
    if (error.error instanceof ErrorEvent) {
      //Client yada Network tarafında
      console.log('error:' + error.error.message);
    } else {
      //Backend tarafında
      switch (error.status) {
        case 404:
          console.log('not found');
          break;
        case 403:
          console.log('access denied');
          break;
        case 500:
          console.log('interval server');
          break;
        default:
          console.log('bilinmeyen bir hata oluştu.');
      }
    }

    return throwError('Bir hata oluştu.');
  }
}
