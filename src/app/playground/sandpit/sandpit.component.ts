import { Component, OnInit } from '@angular/core';
import { Sandpit } from './sandpit';

@Component({
  selector: 'app-sandpit',
  template: ``,
  styles: []
})
export class SandpitComponent implements OnInit {
  constructor() { }

  public ngOnInit(): void {
    var sandpit = new Sandpit();
    sandpit.run();
  }  
}
