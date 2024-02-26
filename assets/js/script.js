class Multimedia {
  constructor(url) {
    this.url = url;
  }
}

class Reproductor extends Multimedia {
  constructor(url, id) {
    super(url);
    this.id = id;
  }

  playMultimedia() {
    let elemento = document.getElementById(this.id);
    elemento.setAttribute("src", this.url);
  }

  setInicio(tiempo) {
    let elemento = document.getElementById(this.id);
    elemento.setAttribute("src", `${this.url}?start=${tiempo}`);
  }
}

let musicaReproductor = new Reproductor(
  "https://www.youtube.com/embed/zEqb6xbeuCo",
  "musica"
);
let peliculaReproductor = new Reproductor(
  "https://www.youtube.com/embed/fWQrd6cwJ0A",
  "peliculas"
);
let serieReproductor = new Reproductor(
  "https://www.youtube.com/embed/6EfzpP2II6M",
  "series"
);

musicaReproductor.playMultimedia();
peliculaReproductor.playMultimedia();
serieReproductor.playMultimedia();

