//
// Fiz modificações aqui e estão comentadas
//

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { CrudRoutingModule } from './crud-routing.module';
import { CrudComponent } from './crud.component';
import { TableModule } from 'primeng/table';
import { FileUploadModule } from 'primeng/fileupload';
import { ButtonModule } from 'primeng/button';
import { RippleModule } from 'primeng/ripple';
import { ToastModule } from 'primeng/toast';
import { ToolbarModule } from 'primeng/toolbar';
import { RatingModule } from 'primeng/rating';
import { InputTextModule } from 'primeng/inputtext';
import { InputTextareaModule } from 'primeng/inputtextarea';
import { DropdownModule } from 'primeng/dropdown';
import { RadioButtonModule } from 'primeng/radiobutton';
import { InputNumberModule } from 'primeng/inputnumber';
import { DialogModule } from 'primeng/dialog';
import { AngularFireDatabase } from '@angular/fire/compat/database';    // <- Inseri mas nao usa
import { ProductService } from './../../../service/product.service';    // <- Inseri mas não usa



@NgModule({
    imports: [
        CommonModule,
        CrudRoutingModule,
        TableModule,
        FileUploadModule,
        //AngularFireDatabase,    // <- Não tá usando
        //ProductService,         // <- Não tá usando
        FormsModule,
        ButtonModule,
        RippleModule,
        ToastModule,
        ToolbarModule,
        RatingModule,
        InputTextModule,
        InputTextareaModule,
        DropdownModule,
        RadioButtonModule,
        InputNumberModule,
        DialogModule
    ],
    declarations: [CrudComponent]
})
export class CrudModule { }
