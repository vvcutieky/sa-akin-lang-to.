import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-reusable',
  templateUrl: './reusable.component.html',
  styleUrls: ['./reusable.component.scss'],
})
export class ReusableComponent  implements OnInit {
  @Input() data : any
  constructor() { }

  ngOnInit() {}

}
