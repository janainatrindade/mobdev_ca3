import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NavController } from '@ionic/angular';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
@Component({
  selector: 'app-deaths',
  templateUrl: './deaths.page.html',
  styleUrls: ['./deaths.page.scss'],
})
export class DeathsPage implements OnInit {

  deaths: Observable<any>;
 
  constructor(private router: Router, private http: HttpClient) { }

  ngOnInit() {
    this.deaths = this.http.get('https://www.breakingbadapi.com/api/deaths');
  }
 

}
