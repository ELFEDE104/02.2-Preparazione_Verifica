import { Component, Input, input } from '@angular/core';

@Component({
  selector: 'app-macchina',
  imports: [],
  templateUrl: './macchina.component.html',
  styleUrl: './macchina.component.css'
})
export class MacchinaComponent {
@Input () name!: string
names: string[]; 
  constructor() { 
     this.names = ['Bulloni', 'Chiodi','Viti'];
  }
  ngOnInit() {
  }
}
