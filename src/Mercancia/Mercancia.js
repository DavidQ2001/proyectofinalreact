import { Footer } from "../shared/Footer/Footer";
import { useNavigate } from "react-router-dom";
import "./Mercancia.css";

export function Mercancia() {
  //ACTIVAMOS LA NAVEGACION ENTRE COMPONENTES CUANDO SE DE UN EVENTO
  let navegacion=useNavigate()
    //que hago cuando se de el evento...
  function detectarEvento(productoSeleccionado) {
    navegacion("/tienda",{
      state:{productoSeleccionado}
    })

  }

  let titulo = "Productos de la banda...";
  let productos = [
    {
      nombre: "buso original",
      foto: "https://firebasestorage.googleapis.com/v0/b/spotydqq.appspot.com/o/producto5.jpg?alt=media&token=391f9851-a85a-4995-96e4-62d7affacf89",
      precio: 400000,
      descripcion:"Lorem Ipsum es simplemente el texto de relleno de las imprentas y archivos de texto. Lorem Ipsum ha sido el texto de relleno estándar de las industrias desde el año 1500, cuando un impresor (N. del T. persona que se dedica a la imprenta) desconocido usó una galería de textos y los mezcló de tal manera que logró hacer un libro de textos especimen. No sólo sobrevivió 500 años, sino que tambien ingresó como texto de relleno en documentos electrónicos, quedando esencialmente igual al original. Fue popularizado en los 60s con la creación de las hojaslas cuales contenian pasajes de Lorem Ipsum, y más recientemente con software de autoedición, como por ejemplo Aldus PageMaker, el cual incluye versiones de Lorem Ipsum."
    },
    {
      nombre: "cd ultima edicion",
      foto: "https://firebasestorage.googleapis.com/v0/b/spotydqq.appspot.com/o/producto3.jpg?alt=media&token=1ed54b2c-9af2-4e8b-bd0f-4ecb6b06f8a4",
      precio: 200000,
      descripcion:"Lorem Ipsum es simplemente el texto de relleno de las imprentas y archivos de texto. Lorem Ipsum ha sido el texto de relleno estándar de las industrias desde el año 1500, cuando un impresor (N. del T. persona que se dedica a la imprenta) desconocido usó una galería de textos y los mezcló de tal manera que logró hacer un libro de textos especimen. No sólo sobrevivió 500 años, sino que tambien ingresó como texto de relleno en documentos electrónicos, quedando esencialmente igual al original. Fue popularizado en los 60s con la creación de las hojaslas cuales contenian pasajes de Lorem Ipsum, y más recientemente con software de autoedición, como por ejemplo Aldus PageMaker, el cual incluye versiones de Lorem Ipsum."
    },
    {
      nombre: "aerosol",
      foto: "https://firebasestorage.googleapis.com/v0/b/spotydqq.appspot.com/o/producto4.webp?alt=media&token=f9ba39fa-da49-4585-9252-19fd0e5b7a21",
      precio: 50000,
      descripcion:"Lorem Ipsum es simplemente el texto de relleno de las imprentas y archivos de texto. Lorem Ipsum ha sido el texto de relleno estándar de las industrias desde el año 1500, cuando un impresor (N. del T. persona que se dedica a la imprenta) desconocido usó una galería de textos y los mezcló de tal manera que logró hacer un libro de textos especimen. No sólo sobrevivió 500 años, sino que tambien ingresó como texto de relleno en documentos electrónicos, quedando esencialmente igual al original. Fue popularizado en los 60s con la creación de las hojaslas cuales contenian pasajes de Lorem Ipsum, y más recientemente con software de autoedición, como por ejemplo Aldus PageMaker, el cual incluye versiones de Lorem Ipsum."
    },
    {
      nombre: "bolso ilimitado",
      foto: "https://firebasestorage.googleapis.com/v0/b/spotydqq.appspot.com/o/producto2.jpg?alt=media&token=7ed31c0c-9254-4fe4-99fe-0b88b990f447",
      precio: 500000,
      descripcion:"Lorem Ipsum es simplemente el texto de relleno de las imprentas y archivos de texto. Lorem Ipsum ha sido el texto de relleno estándar de las industrias desde el año 1500, cuando un impresor (N. del T. persona que se dedica a la imprenta) desconocido usó una galería de textos y los mezcló de tal manera que logró hacer un libro de textos especimen. No sólo sobrevivió 500 años, sino que tambien ingresó como texto de relleno en documentos electrónicos, quedando esencialmente igual al original. Fue popularizado en los 60s con la creación de las hojaslas cuales contenian pasajes de Lorem Ipsum, y más recientemente con software de autoedición, como por ejemplo Aldus PageMaker, el cual incluye versiones de Lorem Ipsum."

    },
    {
      nombre: "camista traida de estados unidos",
      foto: "https://firebasestorage.googleapis.com/v0/b/spotydqq.appspot.com/o/producto2323.jpg?alt=media&token=3e6de92a-f8b7-4857-86e8-e4fea141f6d7",
      precio: 200000,
      descripcion:"Lorem Ipsum es simplemente el texto de relleno de las imprentas y archivos de texto. Lorem Ipsum ha sido el texto de relleno estándar de las industrias desde el año 1500, cuando un impresor (N. del T. persona que se dedica a la imprenta) desconocido usó una galería de textos y los mezcló de tal manera que logró hacer un libro de textos especimen. No sólo sobrevivió 500 años, sino que tambien ingresó como texto de relleno en documentos electrónicos, quedando esencialmente igual al original. Fue popularizado en los 60s con la creación de las hojaslas cuales contenian pasajes de Lorem Ipsum, y más recientemente con software de autoedición, como por ejemplo Aldus PageMaker, el cual incluye versiones de Lorem Ipsum."
    },
    {
      nombre: "camista traida de estados unidos",
      foto: "https://firebasestorage.googleapis.com/v0/b/spotydqq.appspot.com/o/producto2323.jpg?alt=media&token=3e6de92a-f8b7-4857-86e8-e4fea141f6d7",
      precio: 200000,
      descripcion:"Lorem Ipsum es simplemente el texto de relleno de las imprentas y archivos de texto. Lorem Ipsum ha sido el texto de relleno estándar de las industrias desde el año 1500, cuando un impresor (N. del T. persona que se dedica a la imprenta) desconocido usó una galería de textos y los mezcló de tal manera que logró hacer un libro de textos especimen. No sólo sobrevivió 500 años, sino que tambien ingresó como texto de relleno en documentos electrónicos, quedando esencialmente igual al original. Fue popularizado en los 60s con la creación de las hojaslas cuales contenian pasajes de Lorem Ipsum, y más recientemente con software de autoedición, como por ejemplo Aldus PageMaker, el cual incluye versiones de Lorem Ipsum."
    },
  ];

  return (
    <>
      <h1 className="titulo_mercancia">{titulo}</h1>
      <div className="container">
        <div className="row row-cols-1 row-cols-md-3 g-5">
          {productos.map(function (producto, id) {
            return (
              <div key={id}>
                <div className="col">
                  <div className="card h-100 shadow">
                    <img
                      src={producto.foto}
                      alt="foto"
                      className="h-100 img-fluid w-100"
                    />

                    <button className="btn btn-primary mx-5 my-3" onClick={
                        function(){
                            detectarEvento(producto)
                        }
                    }>
                      AMPLIAR
                    </button>
                    <h1 className="text-center">{producto.nombre}</h1>
                    <h2 className="text-center">{"$" + producto.precio}</h2>
                    
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
      <Footer />
    </>
  );
}
