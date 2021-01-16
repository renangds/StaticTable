import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StaticTableComponent } from './static-table-component.component';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSelectModule } from '@angular/material/select'
import { MatIconModule } from '@angular/material/icon';

@NgModule({
  declarations: [
    StaticTableComponent
  ],
  exports: [
    StaticTableComponent
  ],
  imports: [
    CommonModule,
    MatTableModule,
    MatPaginatorModule,
    MatSelectModule,
    MatIconModule,
  ]
})
export class StaticTableModule { }
