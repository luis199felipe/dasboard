import { Component, OnInit } from '@angular/core';
import { ChartsModule } from 'ng2-charts';

@Component({
  selector: 'app-tablero',
  templateUrl: './tablero.component.html',
  styleUrls: ['./tablero.component.scss']
})
export class TableroComponent implements OnInit {

  dataSalesChar: number[];
  constructor() { }

  ngOnInit() {

    this.dataSalesChar = [28, 48, 40, 19, 86, 27, 90];



  }

}
