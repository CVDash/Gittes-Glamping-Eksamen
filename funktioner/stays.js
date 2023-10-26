import { config } from "../misc/config.js";
import service from "../services/services.js";


const stays = {
    
    template : (stay) => `
    
      <div class="ophold-element" style="background-image: url(${stay.image})">
      
        <div class="ophold-tekst-container">
      <div class="ophold-tekst">
        <h2>${stay.title}</h2>
        <p>${stay.numberOfPersons} personer</p>
        <p>Fra ${stay.price},-</p>
      </div>
      <a href="${stay.title}.html">
      <div class="laesmere">
          L&AElig;S MERE
        </div>
        </a>
      </div>
    </div>
      `,

    init : async () => {

        let stayContainer = document.querySelector('.ophold-container');

        if(stayContainer)
        {

            const response = await service.get('stays');

            response.forEach((stay) => {

                stayContainer.insertAdjacentHTML('beforeend', stays.template(stay))

            }); 

        }
    }

}

export default stays;




