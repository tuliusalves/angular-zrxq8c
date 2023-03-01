/*Lembre-se de importar o "Input" após o Componente*/
import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Product } from '../products';
@Component({
  selector: 'app-product-alerts',
  templateUrl: './product-alerts.component.html',
  styleUrls: ['./product-alerts.component.css'],
})
export class ProductAlertsComponent {
  @Input() product!: Product;
  /*Criando uma propriedade com a anotação @Output instanciando 
  EventEmitter*/
  @Output() notify = new EventEmitter();
}
