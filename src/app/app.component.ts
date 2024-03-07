import { Component } from "@angular/core"
import { CommonModule } from "@angular/common"
import { RouterLink, RouterOutlet } from "@angular/router"

/* Importações das páginas do website */
import { MenuComponent } from "./views/menu/menu.component"
import { RodapeComponent } from "./views/rodape/rodape.component"

@Component({
  selector: "app-root",
  standalone: true,
  imports: [
    CommonModule,
    RouterLink,
    RouterOutlet,
    MenuComponent,
    RodapeComponent,
  ],
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"],
})
export class AppComponent {
  title = "LF Games"
}
