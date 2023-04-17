import { Component } from '@angular/core';

@Component({
  selector: 'app-estudios',
  templateUrl: './estudios.component.html',
  styleUrls: ['./estudios.component.css']
})
export class EstudiosComponent {

}

function efectoHabilidades(): void {
  const skills: any = document.getElementById("soft-skills");
  const distancia_skills = window.innerHeight - skills.getBoundingClientRect().top;
  if (distancia_skills >= 300) {
      const habilidades = document.getElementsByClassName("progreso");
      habilidades[0].classList.add("trabajo");
      habilidades[1].classList.add("creatividad");
      habilidades[2].classList.add("comunicacion");
      habilidades[3].classList.add("dedicacion");
      habilidades[4].classList.add("liderazgo");
      habilidades[5].classList.add("altruismo");
  }
}

window.onscroll = function() {
  efectoHabilidades();
};

