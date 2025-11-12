import { Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { HomeComponent } from './pages/home/home';
import { ProjectsComponent } from './pages/projects/projects';
import { BlogComponent } from './pages/blog/blog';
import { PostComponent } from './components/post/post';

export const routes: Routes = [
{ path: '', component: HomeComponent },
{ path: 'projects', component: ProjectsComponent },
{ path: 'blog', component: BlogComponent },
{ path: 'blog/:id', component: PostComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }

