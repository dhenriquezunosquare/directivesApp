import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-agregar',
  templateUrl: './agregar.component.html',
  styleUrls: ['./agregar.component.css']
})
export class AgregarComponent implements OnInit {
  
  color:string = 'red';
  texto:string = 'David Henriquez';

  miForm: FormGroup = this.fb.group({
    nombre:['',Validators.required]
  })
  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
  }

  validarCampo(campo:string){
    return this.miForm.get(campo)?.invalid || false;
  }

  cambiarNombre(){
    this.texto=Math.random().toString();
  }

  cambiarColor(){
    const color = "#xxxxxx".replace(/x/g, y=>(Math.random()*16|0).toString(16));
    this.color = color;
  }

}
