import { Component } from '@angular/core';
import { WelcomeBox } from '../welcome-box/welcome-box';

@Component({
  selector: 'app-home',
  imports: [WelcomeBox],
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export class Home {

}
