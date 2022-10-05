import {Directive, ElementRef, Input, Renderer2} from '@angular/core';

@Directive({
  selector: '[appDirectiveMoyenne]'
})
export class DirectiveMoyenneDirective {

  @Input('appDirectiveMoyenne')

  set index(moyenne : string){
    if (parseInt(moyenne) > 2) {

      this._renderer.setStyle(this._el.nativeElement, 'color','yellow')

    } else if (parseInt(moyenne)>=0 && parseInt(moyenne)<1) {
      this._renderer.setStyle(this._el.nativeElement, 'color','red')
    }
    else {
      this._renderer.setStyle(this._el.nativeElement, 'color', 'none')
    }
  }
  constructor(private _el: ElementRef , private _renderer : Renderer2) { }

}
