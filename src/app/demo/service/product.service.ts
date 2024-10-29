//
// Controles de servicos do CRUD
//
// fiz modificações aqui e estão comentadas

import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/compat/database';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Product } from '../api/product';

@Injectable({
    providedIn: 'root'
})
export class ProductService {
    private basePath = "products"; 

    constructor(
        private http: HttpClient, 
        private db: AngularFireDatabase) { }

   getProductsSmall() {
        return this.http.get<any>('assets/demo/data/products-small.json')
            .toPromise()
            .then(res => res.data as Product[])
            .then(data => data);
    }

    getProducts(): Promise<Product[]> {
        return this.http.get<any>('assets/demo/data/products.json')
            .toPromise()
            .then(res => res.data as Product[])
            .then(data => data);
    }

    getProductsMixed(): Promise<Product[]> {
        return this.http.get<any>('assets/demo/data/products-mixed.json')
            .toPromise()
            .then(res => res.data as Product[])
            .then(data => data);
    }

    getProductsWithOrdersSmall(): Promise<Product[]> {
        return this.http.get<any>('assets/demo/data/products-orders-small.json')
            .toPromise()
            .then(res => res.data as Product[])
            .then(data => data);
    }

    // CRUD //

    // Criar:
    createProduct(product: Product): any {
        return this.db.list<Product>(this.basePath).push(product);
}    

    // Ler todos:
    getAllProducts(): Observable<Product[]> {
        return this.db.list<Product>(this.basePath).snapshotChanges().pipe(
            map(actions => actions.map(a => ({
                id: a.payload.key,
                ...a.payload.val() as Product
            })))
        );
    }

    // Atualizar:
    updateProduct(id: string, product: Product): Promise<void> {
        return this.db.list<Product>(this.basePath).update(id, product);
    }

    // Deletar:
    deleteProduct(id: string): Promise<void> {
        return this.db.list<Product>(this.basePath).remove(id);
    }

    // Deletar de forma multipla:
    deleteProducts(ids: string[]): Promise<void[]> {
        return Promise.all(ids.map(id => this.deleteProduct(id)));
    }

    // Busca pelo ID:
    getProductById(id: string): Observable<Product> {
        return this.db.object<Product>(`${this.basePath}/${id}`).snapshotChanges().pipe(
            map(action => {
                const data = action.payload.val() as Product;
                const id = action.payload.key;
                return { id, ...data };
            })
        );
    }
}

    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
