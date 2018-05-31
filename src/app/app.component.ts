import {Component, OnInit} from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { HttpService } from './http.service';
import { NgbCarouselConfig  } from '@ng-bootstrap/ng-bootstrap'; 
import { NgsRevealModule } from 'ng-scrollreveal';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [NgbCarouselConfig]
})
export class AppComponent {

	constructor(config: NgbCarouselConfig) {  
        config.interval = 5000;  
        config.wrap = true;  
        config.keyboard = true;  
    }
    images = [
          {source :"/assets/images/Rest1.png"},
          {source :"/assets/images/Rest2.png"},
          {source: "/assets/images/Geeks.png"},
          {source :"/assets/images/prebattle.png"},
    			{source: "/assets/images/battle.png"},
          ]





}
