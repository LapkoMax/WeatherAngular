import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-special-image',
  templateUrl: './special-image.component.html',
  styleUrls: ['./special-image.component.scss'],
})
export class SpecialImageComponent implements OnInit {
  @Input() imageAlt: string = '';

  @Input() imageSrc: string = '';

  @Input() imageText: string = '';

  @Input() imageDescription: string = '';

  constructor() {}

  ngOnInit(): void {}
}
