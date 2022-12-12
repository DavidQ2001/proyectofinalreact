
import './Footer.css'
export  function Footer(){
    return(
        <footer>
            <div className = "container-fluid">
                <div className="row p-5 pie">
                    <div className="col-12 col-md-4 align-self-center">
                        <img src="https://firebasestorage.googleapis.com/v0/b/cinemadavid-d68c1.appspot.com/o/logoalcoliricos.png?alt=media&token=7ace37eb-3258-421f-821c-1be34a1dd11f" alt="" className="img-fluid w-100"/>
                    </div>
                    <div className="col-12 col-md-4 text-center">
                            <h2 className="fw-bold">SOBRE LA BANDA</h2>
                            <h4>BANDA DE ALCOLIRIKOZ</h4>
                            <br/>
                            <h2 className="fw-bold">SOBRE LA BANDA</h2>
                            <h4>BANDA DE ALCOLIRIKOZ</h4>
                    </div>
                    <div className="col-12 col-md-4">
                            <i className="bi bi-instagram fuente me-3"></i>
                            <i className="bi bi-tiktok fuente me-3"></i>
                            <i className="bi bi-facebook fuente me-3"></i>
                            <i className="bi bi-youtube fuente"></i>
                    </div>
                    
                </div>

            </div>
        </footer>
    )

}