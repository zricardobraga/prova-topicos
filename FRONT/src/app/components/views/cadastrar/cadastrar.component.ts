import { Component, OnInit } from '@angular/core';
import { Produto } from "../../../models/Produto";
import { ProdutoService } from "./../../../services/produto.service";

@Component({
  selector: 'app-cadastrar',
  templateUrl: './cadastrar.component.html',
  styleUrls: ['./cadastrar.component.css']
})
export class CadastrarComponent implements OnInit {
  
  produto: Produto = new Produto();

  constructor(private service: ProdutoService) {}

  ngOnInit(): void {}

  cadastrar(): void {
    this.service.cadastrar(this.produto).subscribe((produto) => {
      console.log(produto)
    });
  }

}