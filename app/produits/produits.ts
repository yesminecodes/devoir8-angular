import { Component, OnInit } from '@angular/core';
import { Produit } from '../model/produit.model';
import { CommonModule, DatePipe } from '@angular/common';
import { ProduitService } from '../services/produit.service';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-produits',
  imports: [CommonModule, DatePipe, RouterLink],
  templateUrl: './produits.html',
})
export class Produits implements OnInit {
  produits: Produit[] = []; //un tableau de Produit
  constructor(private produitService: ProduitService) {
    //this.produits=[];
  }
  ngOnInit(): void {
    this.produitService.listeProduits().subscribe(prods => {
      console.log(prods);
      this.produits = prods;
      this.chargerProduits();
    });
  }
  chargerProduits() {
    this.produitService.listeProduits().subscribe(prods => {
      console.log(prods);
      this.produits = prods;
    });
  }
  supprimerProduit(p: Produit) {
    let conf = confirm("Etes-vous sûr ?");
    if (conf && p.idProduit != null) {
      this.produitService.supprimerProduit(p.idProduit).subscribe(() => {
        console.log("produit supprimé");
        this.chargerProduits();
      });
    }
  }
}
