import { Component, OnInit } from '@angular/core';



@Component({
    selector: 'app-map-point',
    templateUrl: './map-point.component.html',
    styleUrls: ['./map-point.scss']
})
export class MapPointComponent implements OnInit {
    public map: any;
    public point: any;
    public tiposMapa: any[];


    constructor() {
        this.map = {
            lat: -24.795630,  
            lng: -65.424598,
            tipo: 'roadmap'
        };
        this.tiposMapa = [
            // "roadmap" | "hybrid" | "satellite" | "terrain" | string
            {
                value: 'roadmap', 
                name: 'Carretera'
            },
            {
                value: 'hybrid', 
                name: 'Hibrido'
            },
            {
                value: 'satellite', 
                name: 'Satelital'
            },
            {
                value: 'terrain', 
                name: 'Terreno'
            },
        ];
        this.point = {};
    }


    ngOnInit() {}


    public changeMarker(event) {
        this.point = event.coords;
    }
}