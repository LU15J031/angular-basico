import { Component} from '@angular/core';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
})
export class ListadoComponent {

  heroes: string [] = ['Spiderman','Ironman','Hulk','Thor'];
  HB: string = '';

  borrarHeroe () {
    this.HB = this.heroes.shift() || '';
    console.log(this.HB);
    
  }

}
