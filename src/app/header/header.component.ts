import { Component, OnInit, EventEmitter, Output} from '@angular/core';

declare var $: any;

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  @Output() linkSelected = new EventEmitter<string>();

  constructor() { }

  ngOnInit() {
    $(document).ready(function () {
      $(".button-collapse").sideNav();
    });
  }

  onSelect(link: string) {
    this.linkSelected.emit(link);
  }

}
