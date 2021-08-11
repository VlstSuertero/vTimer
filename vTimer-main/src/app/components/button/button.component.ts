import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss']
})
export class ButtonComponent implements OnInit {

  @Input() isActive = false;
  @Input() label: string = "button";
  @Input() onClick: Function = () => null;
  @Input() onDblClick: Function = () => null;

  constructor() { }

  ngOnInit(): void {
  }
}
