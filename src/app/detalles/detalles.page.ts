import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http'

@Component({
  selector: 'app-detalles',
  templateUrl: './detalles.page.html',
  styleUrls: ['./detalles.page.scss'],
})
export class DetallesPage implements OnInit {

  characters = [];

  constructor(private http: HttpClient) { }

  ngOnInit() {
    this.http.get<any>('https://api.themoviedb.org/3/movie/popular?api_key=52a18783ed514602a5facb15a0177e61')
    .subscribe(res => {
      console.log(res);
      this.characters = res.results;
    })
  }

}
