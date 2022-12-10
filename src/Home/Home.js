import './Home.css'
import { Footer } from '../shared/Footer/Footer'

export function Home(){
    return(
        <>
        <section>
            <div class="banner">
               
            </div>
        </section>

        <section>
            <div class="container">
                <div class="row">
                    
                    <div class="col-12 col-md-8">
                    <h2 class="titulo_home">ALCOLIRIKOZ</h2>
                        <p>“Todo lo bueno tarda”, dice una de las canciones de su último álbum, Aranjuez, presentado el sábado anterior en Medellín. Hace unos meses, en menos de dos horas las boletas se agotaron para esta presentación en el Teatro Carlos Vieco: el público esperaba con ansiedad este concierto, tardío y aplazado por los tiempos pandémicos.

                        Después de ver la respuesta de la gente, se alistaron para una segunda presentación, el mismo sábado, a las 5. Con luz de luna entre nubes oscuras y gente emocionada más allá de cualquier fila o espera, aparecieron en el escenario Kaztro, Gambeta y Fazeta, integrantes de Alcolirykoz, una banda de rap que nació en las calles de Aranjuez, en Medellín.

                        </p>

                        <img src="https://firebasestorage.googleapis.com/v0/b/spotydqq.appspot.com/o/LLEGADA.jpg?alt=media&token=5d78f0a9-59ff-4b4f-8a3b-ecbadf21e7d0" alt="" class="img-fluid w-100" />
                    </div>
                    
                    <div class="col-12 col-md-4 tarjeta ">
                   
                        <div class="row">
                    
                             <div class= "col-3 col-md-4">
      
                                <i class="bi bi-music-note-list fs-1"></i>
                            
                            </div>
                        <div class= "col-3 col-md-4 mt-2">
      
                            <p>lorem10</p>
                    </div>
                    
                    
                </div>

                <div class="row">
                    
                    <div class= "col-3 col-md-4 mt-2">

                       <i class="bi bi-music-note-list fs-1"></i>
                   
                   </div>
               <div class= "col-3 col-md-4 mt-2 text-center">

                        <p>25 DIC</p>
                        <p>25 DIC</p>
                   
           </div>
           
           
       </div>

       <div class="row">
                    
                    <div class= "col-3 col-md-4 mt-2">

                       <i class="bi bi-music-note-list fs-1"></i>
                   
                   </div>
               <div class= "col-3 col-md-4 mt-2 ">

                   <p>lorem10</p>
           </div>
           
           
       </div>

       <div class="row">
                    
                    <div class= "col-3 col-md-4 mt-2">

                       <i class="bi bi-music-note-list fs-1"></i>
                   
                   </div>
               <div class= "col-3 col-md-4 mt-2">

                   <p>lorem10</p>
           </div>
           
           
       </div>

            </div>

         </div>

    </div>
        </section>

        <section>
        <div class="container-fluid mt-4">
            <div class="row">
                <div class="col-12">
                    <h1 class="titulo_home">NOTICIAS</h1>
                    <hr/>
                </div>
            </div>
            <div class= "row">
            <div class="col-12 col-md-4">
                <img src='https://firebasestorage.googleapis.com/v0/b/spotydqq.appspot.com/o/carousel2.png?alt=media&token=42aacde5-b6ab-4134-b69f-0abcb74d1f87' alt='' class="img-fluid w-100"/>
                <p class="text-center mt-2">
                Los raperos de Medellín darán, el 10 de marzo, su segundo concierto en el Auditorio Lumiere. Allí, presentarán al público capitalino las canciones de ‘Servicios ambulatorioz’, su disco más reciente.
                </p>
           
            </div>

            <div class="col-12 col-md-4 mt-2">
                <img src='https://firebasestorage.googleapis.com/v0/b/spotydqq.appspot.com/o/carousel22.jpg?alt=media&token=99e53119-ed0f-426c-bdf1-1e7f7c83ce59' alt='' class="img-fluid w-100"/>
                <p class="text-center">
                Se siguen sumando conciertos y festivales al trimestre final de 2022 considerado pro muchos como el año de los eventos musicales en vivo. El próximo 08 de octubre llega a la capital colombiana la primera edición del Quimera Fest con un cartel de talla internacional.
                </p>
            </div>

            <div class="col-12 col-md-4">
                <img src='https://firebasestorage.googleapis.com/v0/b/spotydqq.appspot.com/o/carousel3.jpg?alt=media&token=b7a6de8f-0e36-4aa6-b9e5-df9b4afd7a60' alt='' class="img-fluid w-100"/>
                <p class="text-center mt-2">
                Alcolirykoz, La Etnnia, Apache y Realidad Mental, reconocidos exponentes del rap y la cultura hip hop en Colombia y América Latina, serán los invitados musicales al evento Tattoo Music Festival Bogotá 2022 que se realizará en el Centro de Eventos de la Autopista Norte en Chía, Cundinamarca.
                </p>
            </div>
            </div>
            </div>

        
        </section>
        <Footer/>
        
        </>
    )
}