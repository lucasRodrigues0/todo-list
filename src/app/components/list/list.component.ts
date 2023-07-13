import { Component } from '@angular/core';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.less']
})
export class ListComponent {
  public list: String[] = ['Tomar banho', 'jogar cs', 'treinar', 'falar com as gatinhas', 'dormir', 'vagabundear', 'curtir o mar'];
}
