
import { Flight } from '../../entities/flight';
import { Input, Component, EventEmitter, Output, OnChanges, OnInit, SimpleChanges } from '@angular/core';

@Component({
  selector: 'flight-card',
  templateUrl: './flight-card.component.html'
})
export class FlightCardComponent implements OnInit, OnChanges {

  constructor() {
    console.debug('ctor', this.item, this.selected);
  }

  ngOnInit(): void {
    console.debug('init', this.item, this.selected);
    //this.selectedChange.next(true);
  }

  ngOnChanges(changes: SimpleChanges): void {
    console.debug('changes', this.item, this.selected);

    if (changes['item']) {
      console.debug('    item hat sich geändert!');
    }
    if (changes['selected']) {
      console.debug('    selected hat sich geändert!');
    }

  }

  @Input() item: Flight;
  @Input() selected: boolean;
  @Output() selectedChange = new EventEmitter<boolean>();

  select() {
    this.selected = true;
    this.selectedChange.next(this.selected);
  }

  deselect() {
    this.selected = false;
    this.selectedChange.next(this.selected);
  }

}
