import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BlogEditorComponent } from './blog-editor/blog-editor.component';
import { BlogRoutingModule } from './blog-routing.module';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    BlogEditorComponent
  ],
  imports: [
    CommonModule,
    MatSidenavModule,
    MatListModule,
    FormsModule,
    BlogRoutingModule,
  ]
})
export class BlogModule {
}
