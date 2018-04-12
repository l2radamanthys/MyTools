import { Component, OnInit, OnDestroy } from '@angular/core';


@Component({
    selector: 'app-map-polyline',
    templateUrl: './map-polyline.component.html',
    styleUrls: ['./map-polyline.scss']
})
export class MapPolylineComponent implements OnInit, OnDestroy {
    public map: any;
    public polylines: any[];
    public tiposMapa: any[];
    showMarkers: boolean;

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
        this.showMarkers = true;
        this.polylines = [];
    }


    ngOnInit() {}


    ngOnDestroy() {}


    addMarker(event) {
        this.polylines.push(event.coords);
    }


    onMarkerDragEnd($event, i) {
        const point = { lat: $event.coords.lat, lng: $event.coords.lng };
        this.polylines[i] = point;
    }
}
