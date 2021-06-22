import { Produto } from './../../../models/Produto';
import { ProdutoService } from './../../../services/produto.service';
import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: "app-listar",
  templateUrl: "./listar.component.html",
  styleUrls: ["./listar.component.css"],
})

export class ListarComponent implements OnInit {
  produtos!: MatTableDataSource<Produto>;
  displayedColumns: string[] = ['id', 'nome', 'codigoBarras', 'preco', 'criadoEm'];

  constructor(private service: ProdutoService) {}

  ngOnInit(): void {
    this.service.listar().subscribe((produtos) => {
      this.produtos = new MatTableDataSource<Produto>(produtos);
    });
  }
}
