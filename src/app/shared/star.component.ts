import { Component, EventEmitter, Input, OnChanges, Output, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-star',
  templateUrl: './star.component.html',
  styleUrls: ['./star.component.css'],
})
export class StarComponent implements OnChanges {
  @Input() rating: number = 0;

  cropWidth: number = 75;

  @Output() ratingClicked:EventEmitter<string>  = 
  //new creates an instance of Event Emitter
  new EventEmitter<string>();

  ngOnChanges(): void {
    this.cropWidth = (this.rating * 75) / 5;
  }

  onClick(): void {
    //`template literal allows us to use a placeholder $
    this.ratingClicked.emit(`The rating ${this.rating} was clicked!`);
  }
}
