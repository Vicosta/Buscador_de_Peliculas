import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import {ActivatedRoute} from '@angular/router'

@Component({
  selector: 'app-pelicula',
  templateUrl: './pelicula.page.html',
  styleUrls: ['./pelicula.page.scss'],
})
export class PeliculaPage implements OnInit {

  peliculaId: string;
  character; 

  constructor(
    private activatedRoute: ActivatedRoute,
    private http: HttpClient
    ) { }

  ngOnInit() {
    this.peliculaId = this.activatedRoute.snapshot.paramMap.get('id');
    this.http.get('https://api.themoviedb.org/3/movie/popular?api_key=52a18783ed514602a5facb15a0177e61/' + this.peliculaId)
    .subscribe(res => this.character = res);
  }

}
