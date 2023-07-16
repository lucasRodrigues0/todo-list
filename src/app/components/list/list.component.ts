import { Component } from '@angular/core';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.less']
})
export class ListComponent {

  public list: String[] = [];

  public tarefa: String = '';

  public incluirTarefa() {
    if(this.tarefa !== '') this.list.push(this.tarefa);
    this.tarefa = '';
  }

  public limparLista() {
    this.list = [];
  }

  public deletarTarefa(item: String) {
    this.list.splice(this.list.indexOf(item), 1);
  }

}


