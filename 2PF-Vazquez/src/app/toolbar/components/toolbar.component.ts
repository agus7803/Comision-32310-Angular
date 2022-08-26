import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tool-bar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.css']
})
export class ToolBarComponent implements OnInit {
  titulo = "Lista de estudiantes";
  constructor() { }

  ngOnInit(): void {
  }

}
