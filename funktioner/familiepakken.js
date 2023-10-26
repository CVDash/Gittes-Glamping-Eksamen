import { config } from "../misc/config.js";
import service from "../services/services.js";


const familiepakkene = {
    
    template : (familiepakken) => `
    
    <div class="container-background" style="background-image: url(${familiepakken.image})">
    <nav>
      <div class="topnav">
      <a class="logotopnav" href="index.html"><img src="/Gittes_Glamping_Assets/logo.png"></a>
      <a href="javascript:void(0);" class="icon" onclick="dropdownopen()"><i class="fa fa-bars fa-2x"></i></a>
      <div id="dropdown">
        <div class="dropdownclose">
          <a href="index.html"><img src="/Gittes_Glamping_Assets/logo.png"></a>
          <a onclick="dropdownopen()"><i class="fas fa-times"></i></a>
        </div>
        <div class="dropdownnav"><a href="ophold.html">Ophold</a></div>
        <div class="dropdownnav"><a href="kontakt.html">Kontakt</a></div>
        <div class="dropdownnav"><a href="aktiviteter.html">Aktiviteter</a></div>
      </div>
      </div>
      

      <div class="computernav">
        <a class="logotopnav" href="index.html"><img src="/Gittes_Glamping_Assets/logo.png"></a>
        <a href="ophold.html">Ophold</a>
        <a href="kontakt.html">Kontakt</a>
        <a href="aktiviteter.html">Aktiviteter</a>
      </div>

      
    </nav>

    <header>
      
      <div class="headertitler">
        <h1>${familiepakken.title}</h1>
      </div>
    </header>

    <div class="header2">
      <h1>Tag væk en weekend, med én du holder af</h1>
      <p>${familiepakken.description}</p>
      <p>Med i pakken er der inkluderet:</p>
      <div class="includes">
      <p>${familiepakken.includes}</p>
      </div>
      <h2>Pris ${familiepakken.price},-</h2>
      <a href="kontakt.html">
      <div class="booknu">
      <h2>BOOK NU</h2>
      </div>
      </a>
      
  </div>
    <footer style="padding: 180px 0 50px 0;">
      <div class="sociale-medier">
        <a href="https://www.facebook.com/"><i class="fab fa-facebook-square"></i></a>
        <a href="https://www.instagram.com/"><i class="fab fa-instagram"></i></a>
      </div>
      <div class="footerlogo">
        <img src="Gittes_Glamping_Assets/logo.png"><p>Gittes Glamping</p>
      </div>
    </footer>
  </div>
      `,

    init : async () => {

        let familiepakkenContainer = document.querySelector('.containerophold3');

        if(familiepakkenContainer)
        {

            const response = await service.get('stays/6533c25dd89bd7c9ba8de739');

            response.forEach((familiepakken) => {

                familiepakkenContainer.insertAdjacentHTML('beforeend', familiepakkene.template(familiepakken))

            }); 

        }
    }

}



export default familiepakkene;