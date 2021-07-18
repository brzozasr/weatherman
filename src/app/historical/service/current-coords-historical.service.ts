import { Injectable } from '@angular/core';
import {BehaviorSubject} from "rxjs";
import {CoordsForecastData} from "../../utilities/coords-forecast-data";
import {DataType} from "../../utilities/data-type";
import {CurrentCoords} from "../../utilities/current-coords";
import {CoordsHistoricalData} from "../../utilities/coords-historical-data";

@Injectable({
  providedIn: 'root'
})
export class CurrentCoordsHistoricalService {

  private coordsSource = new BehaviorSubject<CoordsHistoricalData>(this.currentCoords.getCoords(DataType.HISTORICAL));
  locationForecastData = this.coordsSource.asObservable();

  constructor(private currentCoords: CurrentCoords) { }

  updateLocationHistoricalData(data: CoordsHistoricalData): void {
    this.coordsSource.next(data);
  }
}
