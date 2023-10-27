import { config } from "../misc/config.js";
import service from "../services/services.js";


const weekendturer = {
    
    template : (weekendtur) => `
    
    
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

    <!--<header>
      
      <div class="headertitler">
        <h1>${weekendtur.title}</h1>
      </div>
    </header>

    <div class="header2">
      <h1>Tag væk en weekend, med én du holder af</h1>
      <p>${weekendtur.description}</p>
      <p>Med i pakken er der inkluderet:</p>
      <div class="includes">
      <p>${weekendtur.includes}</p>
      </div>
      <h2>Pris ${weekendtur.price},-</h2>
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
  </div> -->


  <div class="headerWeekendtur">
  <div>
    <h1>${weekendtur.title}</h1>
  </div>
</div>

<div class="content-box">
  <div class="content-text">
    <h1>Tag væk en weekend, med én du holder af</h1>
    <p>${weekendtur.description}</p>
    <p>Med i pakken er der inkluderet:</p>
      <div class="includes">
      <p>${weekendtur.includes}</p>
      </div>
      <h2>Pris ${weekendtur.price},-</h2>
      <a href="kontakt.html">
      <div class="booknu">
      <h2>BOOK NU</h2>
      </div>
      </a>
  </div>
</div>
<footer>
      <div class="sociale-medier">
        <a href="https://www.facebook.com/"><i class="fab fa-facebook-square"></i></a>
        <a href="https://www.instagram.com/"><i class="fab fa-instagram"></i></a>
      </div>
      <div class="footerlogo">
        <img src="Gittes_Glamping_Assets/logo.png"><p>Gittes Glamping</p>
      </div>
    </footer>
  





      `,

    init : async () => {

        let weekendturContainer = document.querySelector('.containerophold1');

        if(weekendturContainer)
        {

            const response = await service.get('stays/6533c19ad89bd7c9ba8de72e');

            response.forEach((weekendtur) => {

                weekendturContainer.insertAdjacentHTML('beforeend', weekendturer.template(weekendtur))

            }); 

        }
    }

}



export default weekendturer;