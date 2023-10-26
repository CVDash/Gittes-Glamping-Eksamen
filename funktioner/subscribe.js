import { config } from "../misc/config.js";
import service from "../services/services.js";

const subscribe = {
    
    formResponseTmpl : (response) => ` <div class="medlemtak" id="medlemtakscript">
    <p>Hej ${response.name},</p>
    <p>Tak for din ${response.subject}!</p>
    <p>Du h&oslash;rer fra os snarest.</p>
    <div class="medlemtakbutton">
      <a href="index.html">TILBAGE</a>
    </div>
  </div>`,
    formErrorResponseTmpl : (message) => `<div class="subscribe-result"> ${message} </div>`,
    

    subscribersTmpl : (sub) => `<div>${sub.name} : ${sub.email} : ${sub.subject} : ${sub.message ? sub.message : 'No message'}</div>`,
    
    validateAndSendForm : (e) => {

        e.preventDefault();

        const {name, email, subject, message} = e.target.elements;

        let postObj = {
            'name' : name.value,
            'email' : email.value,
            'subject' : subject.value,
            'message' : message.value
        }

        fetch(`${config.path}/contact`, {

            method: 'POST',
            headers: {
                'Content-Type': 'application/json'   
            },
            body : JSON.stringify(postObj),

        }).then((response) => response.json()).then((response => {

            let subscribeForm = document.querySelector('#form');
            subscribeForm.style = 'display:none';
            let formContainer = document.querySelector('.header2')
            
            
            if(!response.data) {

                formContainer.innerHTML = subscribe.formErrorResponseTmpl(response.message);

            } else {

                formContainer.innerHTML = subscribe.formResponseTmpl(response.data);
                
            }
            console.log(response.data, response)
           
            
        
        }));

    },

    init : async () => {

        let subscribeContainer = document.querySelector('.form-container')
       
       
        if(subscribeContainer) {

            const form = document.querySelector('#form');

            if(form)
            {

                form.addEventListener('submit', (e) => subscribe.validateAndSendForm(e));

            }
      
        }

 
             
    }
}



export default subscribe;