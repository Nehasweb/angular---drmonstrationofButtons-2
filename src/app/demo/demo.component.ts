import { Component } from '@angular/core';

@Component({
  selector: 'app-demo',
  standalone: true,
  imports: [],
  templateUrl: './demo.component.html',
  styleUrl: './demo.component.css'
})
export class DemoComponent
 {
    public characteristics : string = "";

    public UPPEREvent() 
    {
      this.characteristics = "MARVELLOUS INFOSYSTEMS";
    }
    
    public LOWEREvent()
    {
      this.characteristics = "marvellous infosystems";
    }
}
