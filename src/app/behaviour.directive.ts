import { Directive,ElementRef,HostListener } from '@angular/core';

@Directive({
  selector: '[appBehaviour]'
})
export class BehaviourDirective {


  constructor(private elem:ElementRef) {}
    private textDeco(action:string){
      this.elem.nativeElement.style.color=action;
    }
    @HostListener("click") onClicks(){
      this.textDeco("green")
    }
    @HostListener("dblclick") onDoubleClicks(){
      this.textDeco("black");
    }
}
