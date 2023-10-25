import { config } from "../misc/config.js";
import service from "../services/services.js";


const reviews = {
    
    template : (review) => `
    
    <div class="anbefaling-element">
    <p style="font-family: 'Zen Loop', cursive; font-size: 30px;">${review.name}, ${review.age} år <br>Har været på ${review.stay}</p>
    <p style="font-size: 14px;">${review.review}</p>

  </div>
      `,

    init : async () => {

        let reviewContainer = document.querySelector('.anbefalinger');

        if(reviewContainer)
        {

            const response = await service.get('reviews');

            response.forEach((review) => {

                reviewContainer.insertAdjacentHTML('beforeend', reviews.template(review))

            }); 

        }
    }

}



export default reviews;