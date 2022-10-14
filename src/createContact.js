const createContact = () => {
    /*     <div class="contact"> 
            <h2>Contact</h2>
            <div>123 Dining Ave.</div>
            <div>New York City</div>
            <div>USA</div>
          </div>
    */

   //delete existing children
   let main = document.getElementById("main");
   while (main.firstChild) {
        main.removeChild(main.firstChild);
   };

   //create
   const contact=document.createElement('div');
   contact.classList.add('contact');

   //h2
   const h2=document.createElement('h2');
   h2.textContent='Contact';
   //append to contact
   contact.appendChild(h2);

   //divs
   const div1=document.createElement('div');
   div1.textContent='123 Dining Ave.';
   //append to contact
   contact.appendChild(div1);
   const div2=document.createElement('div');
   div2.textContent='New York City';
   //append to contact
   contact.appendChild(div2);
   const div3=document.createElement('div');
   div3.textContent='USA';
   //append to contact
   contact.appendChild(div3);

   //append contact to main
   main.appendChild(contact);
};

//export
export default createContact;