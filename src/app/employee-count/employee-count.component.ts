import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-employee-count',
  templateUrl: './employee-count.component.html',
  styleUrls: ['./employee-count.component.css']
})
export class EmployeeCountComponent implements OnInit {

  @Input()
  all: number;
  @Input()
    male: number;
    @Input()
    female: number;

    // Holds the selected value of the radio button
    selectedRadioButtonValue: string = 'All';
  constructor() { }

  ngOnInit(): void {
  }

  @Output()
    countRadioButtonSelectionChanged: EventEmitter<string> =
                                        new EventEmitter<string>();
  onRadioButtonSelectionChange() {
    this.countRadioButtonSelectionChanged
            .emit(this.selectedRadioButtonValue);
}

}
