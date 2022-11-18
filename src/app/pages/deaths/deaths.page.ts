import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../services/api.service';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';


@Component({
    selector: 'app-deaths',
    templateUrl: './deaths.page.html',
    styleUrls: ['./deaths.page.scss'],
})
export class DeathsPage implements OnInit {

    deaths: Observable<any>;
    characters: Observable<any>;
    name: string = '';
  

    constructor(private router: Router, private api: ApiService) { }

    ngOnInit() {
        this.deaths = this.api.getDeathCount(this.name);
        this.deaths.subscribe(data => { console.log('my data', data); });
        this.characters = this.api.getCharacters();
        this.characters.subscribe(data => {
        console.log('my data: ', data);
        });
    }
 

    // openDetails(death) {
    //     let deathsId = death.death_id;
    //     this.router.navigateByUrl(`/tabs/deaths/${deathsId}`);

    // }
}
