import { Component, OnInit } from '@angular/core';
import { Produit, ProduitService } from '../services/produit.service';
import { ActivatedRoute, Router } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-update-produit',
  imports: [FormsModule, CommonModule],
  templateUrl: './update-produit.html',
  styles: ``
})
export class UpdateProduit implements OnInit {
  currentProduit = new Produit();
  constructor(private activatedRoute: ActivatedRoute,
    private router: Router,
    private produitService: ProduitService) {
  }
  ngOnInit() {
this.produitService.consulterProduit(this.activatedRoute.snapshot.params['id']).
 subscribe( prod =>{ this.currentProduit = prod; } ) ;
}
 updateProduit() {
this.produitService.updateProduit(this.currentProduit).subscribe(prod => {
this.router.navigate(['produits']); }
);
}
}
