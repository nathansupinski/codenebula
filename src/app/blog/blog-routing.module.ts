import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BlogEditorComponent } from './blog-editor/blog-editor.component';

const blogRoutes: Routes = [
  {path: 'blog', component: BlogEditorComponent}
];

@NgModule({
  imports: [
    RouterModule.forChild(blogRoutes)
  ],
  exports: [
    RouterModule
  ]
})
export class BlogRoutingModule {
}
