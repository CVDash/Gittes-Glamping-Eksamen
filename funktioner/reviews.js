import { config } from "../misc/config.js";
import service from "../services/services.js";


const reviews = {
    
    template : (review) => `
    
    <div class="anbefaling-element">
    <h1 style="font-family: 'Zen Loop', cursive; font-size: 30px; font-weight:400;">${review.name}, ${review.age} år <br>Har været på ${review.stay}</h1>
    <p>${review.review}</p>

  </div>
      `,

    init : async () => {

        let reviewContainer = document.querySelector('.anbefalinger-container');

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