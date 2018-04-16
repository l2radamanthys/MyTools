import { SaveAsModalContComponent } from './../../components/save-as-modal-cont/save-as-modal-cont.component';
import { Component, OnInit, OnDestroy } from '@angular/core';
import {saveAs } from "file-saver";
import { MatDialog } from '@angular/material';



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

    constructor(private dialog: MatDialog) {
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


    public removeLastMarker() {
        this.polylines.pop();
    }


    public openModalImportarRuta() {
    
    }

    public openModalExportarRuta() {
        let dialogRef = this.dialog.open(SaveAsModalContComponent, {});

        dialogRef.afterClosed().subscribe(result => {
            console.log(result);
            if (result.trim().length > 0) {
                let blob = new Blob([JSON.stringify(this.polylines, null, '    ')], {type: "text/plain;charset=utf-8"});
                saveAs(blob, result);
            }
        });
    }


    public exportarRuta() {
       
    }
}
