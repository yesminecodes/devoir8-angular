import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Produit } from '../model/produit.model';
import { ProduitService } from '../services/produit.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-produit',
  imports: [FormsModule],
  templateUrl: './add-produit.html',
})
export class AddProduit implements OnInit {
  newProduit = new Produit();

  message: string | undefined;

  constructor(private produitService: ProduitService, private router: Router) { }
  ngOnInit(): void {
  }
  addProduit() {
    this.produitService.ajouterProduit(this.newProduit)
      .subscribe(prod => {
        console.log(prod);
        this.router.navigate(['produits']);
      });
  }
}
