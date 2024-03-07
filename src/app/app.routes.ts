import { Routes } from "@angular/router"

/* Importações das páginas do website */
import { HomeComponent } from "./views/home/home.component"
import { LoginComponent } from "./views/login/login.component"

export const routes: Routes = [
  { path: "home", component: HomeComponent },
  { path: "login", component: LoginComponent },
  { path: "", redirectTo: "home", pathMatch: "full" },
]

export class AppRoutingModule {}
