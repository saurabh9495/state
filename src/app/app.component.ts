import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = 'state';

  constructor(private http: HttpClient) { }

  public color ="";

  ngOnInit() {
    let url = `https://api.github.com/users/saurabh9495`;
    this.http.get(url).subscribe(res => console.log(res));
  }
}
