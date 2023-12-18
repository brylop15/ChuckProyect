import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-creditos',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './creditos.component.html',
  styleUrl: './creditos.component.css'
})
export class CreditosComponent {
  languages = ['Typescript','Angular','Bootstrap'];

  isVisible:Boolean= false;
  
  showImg(){
    this.isVisible = true;   // Show the image
  }
  hideImg(){
    this.isVisible = false;  //  Hide the image
  }

}
