import { Component } from '@angular/core';
import { Satellite } from './satellite';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'orbit-report';

  sourceList: Satellite[];
//   constructor() {
//     this.sourceList = [
//       new Satellite("SiriusXM", "Communication", "2009-03-21", "LOW", true),
//       new Satellite("Cat Scanner", "Imaging", "2012-01-05", "LOW", true),
//       new Satellite("Weber Grill", "Space Debris", "1996-03-25", "HIGH", false),
//       new Satellite("GPS 938", "Positioning", "2001-11-01", "HIGH", true),
//       new Satellite("ISS", "Space Station", "1998-11-20", "LOW", true),
//     ];
//   }


  constructor() {
    this.sourceList = [];
    let satellitesUrl = 'https://handlers.education.launchcode.org/static/satellites.json';

    window.fetch(satellitesUrl).then(function(response) {
      response.json().then(function(data) {
          let fetchedSatellites = data.satellites;
          for(let item of fetchedSatellites){
            let satellite = new Satellite(item.name, item.type, item.launchDate, item.orbitType, item.operational);
            this.sourceList.push(satellite);
          }
      }.bind(this));
    }.bind(this));
  }
}


