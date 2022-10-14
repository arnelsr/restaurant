const createWelcome = () => {
    /*     <div class="welcome"> 
            <h2>Welcome!</h2>
            <div>Best restaurant in town!</div>
            <div>Delicious meals at affordable prices!</div>
            <div>Five stars!!!</div>
          </div>
    */

   //delete existing children
   let main = document.getElementById("main");
   while (main.firstChild) {
        main.removeChild(main.firstChild);
   };

   //create
   const welcome=document.createElement('div');
   welcome.classList.add('welcome');

   //h2
   const h2=document.createElement('h2');
   h2.textContent='Welcome!';
   //append to welcome
   welcome.appendChild(h2);

   //divs
   const div1=document.createElement('div');
   div1.textContent='Best restaurant in town!';
   //append to welcome
   welcome.appendChild(div1);
   const div2=document.createElement('div');
   div2.textContent='Delicious meals at affordable prices!';
   //append to welcome
   welcome.appendChild(div2);
   const div3=document.createElement('div');
   div3.textContent='Five stars!!!';
   //append to welcome
   welcome.appendChild(div3);

   //append welcome to main
   main.appendChild(welcome);
};

//export
export default createWelcome;