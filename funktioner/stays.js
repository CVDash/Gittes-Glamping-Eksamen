import { config } from "../misc/config.js";
import service from "../services/services.js";




const stays = {
    
    template : (stay) => `
        <div class="ophold-element">

            <div class="ophold-header">
              <h1>${stay.title}</h1>
              <p>${stay.numberOfPersons} personer</p>
              <p>Fra ${stay.price},-</p>
            </div>
            <div class="ophold-imageContainer">
                <div class="ophold-image" style="background-image: url(${stay.image})"></div>
            </div>
            <span style="cursor:pointer;" class="ophold-footer"><a href="${stay.title}.html">Læs mere</a></span>

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




