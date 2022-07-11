import { AfterViewInit, Directive, ElementRef, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';

@Directive({
  selector: '[ErrorMsg]'
})
export class ErrorMsgDirective  implements OnInit,AfterViewInit{

  private _color: string = 'red';
  private _mensaje: string = 'Esta campo es requerido';
  private _valido:boolean = false;
  htmlElement: ElementRef<HTMLElement>;

  @Input() set color(valor:string) { 
    this.htmlElement.nativeElement.style.color=valor;
    this._color=valor;
  }
  @Input() set mensaje(valor:string){
    this._mensaje=valor;
    this.htmlElement.nativeElement.innerText = this._mensaje
  }

  @Input() set valido (valor:boolean){
    if(valor){
      this.htmlElement.nativeElement.style.display="block";
    }else{
      this.htmlElement.nativeElement.style.display="none";
    }
  }

  constructor(private el:ElementRef<HTMLElement>, ) { 
    this.htmlElement= el;
  }

  ngOnInit(): void {
    this.setColor();
    this.setMensaje();
    this.setStyle();
  }

  ngAfterViewInit(): void {
    
  }

  setStyle(){
    this.htmlElement.nativeElement.classList.add("form-text");
  }

  setColor(){
    this.htmlElement.nativeElement.style.color=this._color;
  }

  setMensaje(){
    this.htmlElement.nativeElement.innerText = this._mensaje;
  }

}
