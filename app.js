import {
  getOne,
  getAll,
  getRelations,
  deleteOne,
  postAll,
  putOne,
} from "./storage/methods.js";
import {
  attributes as attributesAutor,
  endPoint as endPointAutor,
} from "./storage/autor.js";
import {
  attributes as attributesCategoria,
  endPoint as endPointCategoria,
} from "./storage/categoria.js";
import {
  attributes as attributesEditorial,
  endPoint as endPointEditorial,
} from "./storage/editorial.js";
import {
  attributes as attributesEstado,
  endPoint as endPointEstado,
} from "./storage/estadoLibro.js";
import {
  attributes as attributesLibro,
  endPoint as endPointLibro,
} from "./storage/libro.js";
import {
  attributes as attributesPrestamo,
  endPoint as endPointPrestamo,
} from "./storage/prestamo.js";
import {
  attributes as attributesReserva,
  endPoint as endPointReserva,
} from "./storage/reserva.js";
import {
  attributes as attributesUsuario,
  endPoint as endPointUsuario,
} from "./storage/usuario.js";

let titles = document.querySelectorAll(".title");
let sectContent = document.querySelector("#sect-content");

addEventListener("DOMContentLoaded", async () => {
  libro();
});

let libro = () => {
  let btnLibro = document.querySelector("#libro");

  btnLibro.addEventListener("click", async () => {
    titles.forEach((item) => {
      item.textContent = btnLibro.textContent;
    });

    sectContent.innerHTML = "";

    sectContent.insertAdjacentHTML(
      "beforeend",
      `<form id="formLibro">
            <fieldset>
              <legend>Registrar</legend>

              <!--Text -->
              <div>
                <label>TITULO</label>
                <input id="mytitulo" type="text" name="titulo" required/>
              </div>

              <div>
                <label>ISBN</label>
                <input id="myisbn" type="text" name="isbn" required/>
              </div>

              <div>
                <label>FECHA LANZAMIENTO</label>
                <input id="myfechaLanzamiento" type="date" name="fechaLanzamiento" required/>
              </div>

              <div>
                <label>NUMERO PAGINACION</label>
                <input id="mynumPaginacion" type="number" name="numPaginacion" required/>
              </div>

              <div>
                <label for="select">ID AUTOR</label>
                <select id="myautorId" name="autorId">
                </select>
              </div>

              <div>
                <label for="select">ID CATEGORIA</label>
                <select id="mycategoriaId" name="categoriaId">
                </select>
              </div>

              <div>
                <label for="select">ID EDITORIAL</label>
                <select id="myeditorialId" name="editorialId">
                </select>
              </div>

              <div>
                <label for="select">ID ESTADO</label>
                <select id="myestadoId" name="estadoId">
                </select>
              </div>

              <!-- Button -->
              <button>REGISTRAR</button>
            </fieldset>
          </form>

          <table contenteditable="">
          <caption>
            Libros
          </caption>
          <thead>
            <tr>
              <th>#</th>
              <th>ISBN</th>
              <th>TITULO</th>
              <th>CATEGORIA</th>
              <th>AUTOR</th>
              <th>EDITORIAL</th>
              <th>PAGINAS</th>
              <th>FECHA</th>
              <th>ESTADO</th>
            </tr>
          </thead>
          <tbody id="myTabla">
            <tr>
            </tr>
          </tbody>
        </table>`
    );

    let myautorId = document.querySelector("#myautorId");
    var endPoint = endPointAutor;
    let aut = await getAll({ endPoint });
    aut = aut.map(
      (res) => `<option value=${res.id}>${res.nombreAutor}</option>`
    );
    myautorId.insertAdjacentHTML("beforeend", `${aut.join("")}`);

    let mycategoriaId = document.querySelector("#mycategoriaId");
    var endPoint = endPointCategoria;
    let cat = await getAll({ endPoint });
    cat = cat.map(
      (res) => `<option value=${res.id}>${res.nombreCategoria}</option>`
    );
    mycategoriaId.insertAdjacentHTML("beforeend", `${cat.join("")}`);

    let myeditorialId = document.querySelector("#myeditorialId");
    var endPoint = endPointEditorial;
    let edi = await getAll({ endPoint });
    edi = edi.map(
      (res) => `<option value=${res.id}>${res.nombreEditorial}</option>`
    );
    myeditorialId.insertAdjacentHTML("beforeend", `${edi.join("")}`);

    let myestadoId = document.querySelector("#myestadoId");
    var endPoint = endPointEstado;
    let est = await getAll({ endPoint });
    est = est.map(
      (res) => `<option value=${res.id}>${res.nombreEstado}</option>`
    );
    myestadoId.insertAdjacentHTML("beforeend", `${est.join("")}`);

    let myTabla = document.querySelector("#myTabla");
    var endPoint = endPointLibro;
    let relLibro = await getRelations({ endPoint });
    console.log("relLibro", relLibro);
    relLibro = relLibro.map(
      (res) =>
        ` 
        <tr>
            <td>${res.id}</td>
            <td>${res.isbn}</td>
            <td>${res.titulo}</td>
            <td>${res.categoria.nombreCategoria}</td>
            <td>${res.autor.nombreAutor}</td>
            <td>${res.editorial.nombreEditorial}</td>
            <td>${res.numPaginacion}</td>
            <td>${res.fechaLanzamiento}</td>
            <td>${res.estado.nombreEstado}</td>
        </tr>
        `
    ); 
    relLibro.insertAdjacentHTML(
        "beforeend",
        `${relLibro.join("")}`
    );

    let formLibro = document.querySelector("#formLibro");
    formLibro.addEventListener("submit", async (e) => {
      e.preventDefault();

      let obj = Object.fromEntries(new FormData(e.target));

      const {
        autorId: aut,
        categoriaId: cat,
        editorialId: edi,
        numPaginacion: num,
        estadoId: est,
      } = obj;
      obj.autorId = Number(aut);
      obj.categoriaId = Number(cat);
      obj.editorialId = Number(edi);
      obj.numPaginacion = Number(num);
      obj.estadoId = Number(est);

      let endPoint = endPointLibro;
      let attributes = attributesLibro;
      console.log(endPoint, attributesLibro, obj);
      console.log(await postAll({ endPoint, attributes, obj }));
    });
  });
};
