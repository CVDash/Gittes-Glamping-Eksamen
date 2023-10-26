import { config } from "../misc/config.js";
import service from "../services/services.js";


const activities = {
    
    template : (activity, index) => `
    
    <div class="aktiviteter-element" style="background-image: url(${activity.image})">
    <div class="aktiviteter-img">
      
    </div>
    <div class="aktiviteter-tekst-container">
  <div class="aktiviteter-tekst">
    <h2>${activity.title}</h2>
  </div>
    <div class="aktiviteter-laesmere">
      <div class="aktiviteter-laesmere-tekst">
        <div>
      <p>${activity.date}</p>
      <p>kl ${activity.time}</p>
    </div>
      <div class="heart"><i id="heart" class="fas fa-heart fa-xs"></i></div>
    </div>
    <div class="aktiviteter-laesmere-button-container">
    <div class="aktiviteter-laesmere-button">
    <p>L&AElig;S MERE</p>
    
    <div class="aktiviteter-hidden">
                <p>${activity.description}</p>
              </div>
              
    </div>
    </div>
    </div
  </div>
</div>
      `,

    init : async () => {

        let activityContainer = document.querySelector('.aktiviteter-container');

        if(activityContainer)
        {

            const response = await service.get('activities');

            response.forEach((activity, index) => {

                activityContainer.insertAdjacentHTML('beforeend', activities.template(activity, index))

            }); 

            let buttons = activityContainer.querySelectorAll('.aktiviteter-laesmere-button')
            buttons.forEach((btn, index)=>{

                btn.addEventListener('click', () => {

                    
                    buttons[index].parentNode.classList.toggle('active')

                })
            })



        }
    }

}

export default activities;