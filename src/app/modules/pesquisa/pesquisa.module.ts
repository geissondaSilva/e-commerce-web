import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FlexLayoutModule } from '@angular/flex-layout';

import { MatTableModule } from '@angular/material/table';
import { MatCardModule } from '@angular/material/card';
import { MatMenuModule } from '@angular/material/menu';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';

import { PesquisaComponent } from './pesquisa.component';

@NgModule({
    imports: [
        CommonModule,
        MatTableModule,
        MatCardModule,
        MatMenuModule,
        MatButtonModule,
        MatIconModule,
        FlexLayoutModule,
    ],
    exports: [],
    declarations: [PesquisaComponent],
    providers: [],
})
export class PesquisaModule { }
