import { CommonModule } from '@angular/common';
import { Component, inject, OnInit } from '@angular/core';
import { ChuckAppService } from '../../service/chuck-app.service';

@Component({
  selector: 'app-chistes',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './chistes.component.html',
  styleUrl: './chistes.component.css'
})
export class ChistesComponent implements OnInit {

  respuesta: any = inject(ChuckAppService);
  chiste:string = '';

  getChiste() {
    this.respuesta.getData()
    .subscribe((r: any) => {
      this.chiste = r.value;
    }, (error: any) => {
      alert(error);
    })
  }

  ngOnInit(): void {
    this.getChiste()
  }
  

}
