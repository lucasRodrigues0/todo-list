import { Component } from '@angular/core';

interface Item {
  nome: string;
  checked: boolean;
}


@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.less']
})
export class ListComponent {

  public list: Item[] = [];

  public tarefa = '';

  public tracionado: Boolean = false;

  public incluirTarefa(item: Item) {
    if(item.nome !== '') this.list.push(item);
    this.tarefa = '';
  }

  public limparLista() {
    this.list = [];
  }

  public deletarTarefa(item: Item) {
    this.list.splice(this.list.indexOf(item), 1);
  }

  public onCheckboxChange(item: Item): void {
    item.checked = !item.checked;
    if(item.checked) {
      this.deletarTarefa(item);
      this.incluirTarefa(item);
    }
  }

}


