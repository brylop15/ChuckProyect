import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ChuckInfo } from '../chuckModel';

@Injectable({
  providedIn: 'root'
})
export class ChuckAppService {

  url: string = 'https://api.chucknorris.io/jokes/random';

  constructor(private http: HttpClient) { }

  getData(): Observable<ChuckInfo>{
    return this.http.get<ChuckInfo>(this.url)
  }
}
