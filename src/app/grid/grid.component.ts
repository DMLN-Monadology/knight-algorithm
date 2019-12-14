import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-grid',
  templateUrl: './grid.component.html',
  styleUrls: ['./grid.component.scss']
})
export class GridComponent implements OnInit {

  grid: any[] = [];

  constructor() {

  }

  ngOnInit() {
    for ( let i = 0; i < 8; i++ ) {
      let row: any[] = [];

      for ( let y = 0; y < 8; y++ ) {
        let cell = {};
        row.push( cell );
      }
      this.grid.push(row);
    }
    console.log(this.grid);
  }

}
