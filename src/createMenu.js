const createMenu = () => {
    /*     <div class="menu"> 
            <h2>Menu</h2>
            <div>Steak $5.00</div>
            <div>Beer $2.00</div>
            <div>Fries $3.00</div>
          </div>
    */

   //delete existing children
   let main = document.getElementById("main");
   while (main.firstChild) {
        main.removeChild(main.firstChild);
   };

   //create
   const menu=document.createElement('div');
   menu.classList.add('menu');

   //h2
   const h2=document.createElement('h2');
   h2.textContent='Menu';
   //append to menu
   menu.appendChild(h2);

   //divs
   const div1=document.createElement('div');
   div1.textContent='Steak $5.00';
   //append to menu
   menu.appendChild(div1);
   const div2=document.createElement('div');
   div2.textContent='Beer $2.00';
   //append to menu
   menu.appendChild(div2);
   const div3=document.createElement('div');
   div3.textContent='Fries $3.00';
   //append to menu
   menu.appendChild(div3);

   //append menu to main
   main.appendChild(menu);
};

//export
export default createMenu;