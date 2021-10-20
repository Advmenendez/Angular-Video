import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: "home", loadChildren: () => import("./pages/home-page/home-page.module").then(m => m.HomePageModule)
  },
  {
    path: "news", loadChildren: () => import("./pages/news-page/news-page.module").then(m => m.NewsPageModule)
  },
  {
    path: "tech", loadChildren: () => import("./pages/tech-page/tech-page.module").then(m => m.TechPageModule)
  },
  {
    path: "videogames", loadChildren: () => import("./pages/videogames-page/videogames-page.module").then(m => m.VideogamesPageModule)
  },
  {
    path: "music", loadChildren: () => import("./pages/music-page/music-page.module").then(m => m.MusicPageModule)
  },
  {
    path: "movies", loadChildren: () => import("./pages/movies-page/movies-page.module").then(m => m.MoviesPageModule)
  },
  {
    path: "sports", loadChildren: () => import("./pages/sports-page/sports-page.module").then(m => m.SportsPageModule)
  },
  {
    path: "about", loadChildren: () => import("./pages/about-page/about-page.module").then(m => m.AboutPageModule)
  },
  { path: "", redirectTo: "home", pathMatch: "full" }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
