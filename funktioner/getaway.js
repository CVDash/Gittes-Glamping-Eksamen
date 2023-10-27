import { config } from "../misc/config.js";
import service from "../services/services.js";


const getaways = {
    
    template : (getaway) => `
    
     <div class="container-background" style="background-image: url(${getaway.image})">
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

    

  <div class="headerGetaway">
  <div>
    <h1>${getaway.title}</h1>
  </div>
</div>

<div class="content-box">
  <div class="content-text">
    <p>${getaway.description}</p>
    <p>Med i pakken er der inkluderet:</p>
      <div class="includes">
      <p>${getaway.includes}</p>
      </div>
      <h2>Pris ${getaway.price},-</h2>
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

        let getawayContainer = document.querySelector('.containerophold2');

        if(getawayContainer)
        {

            const response = await service.get('stays/6533c22ed89bd7c9ba8de735');

            response.forEach((getaway) => {

                getawayContainer.insertAdjacentHTML('beforeend', getaways.template(getaway))

            }); 

        }
    }

}



export default getaways;