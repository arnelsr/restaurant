//loads main body
const initialLoad = () => {
    // access content div
    const content = document.getElementById('content');
    //create header
    const header = createHeader();
    //append header to div id content
    content.appendChild(header);
    //create main body
    const main = createMain();
    //append main to div id content
    content.appendChild(main);
    //create footer
    const footer = createFooter();
    //append footer to div id content
    content.appendChild(footer);
    



//


};
export default initialLoad;

const createHeader = () => {
        //create header div
    /*      <header class="header">
        <h1 class="header1">My Restaurant</h1>
        <nav class="nav-items">
          <a href="#" id="home">Home</a>
          <a href="#" id="Menu">Menu</a>
          <a href="#" id="contact">Contact</a>
        </nav>
      </header>*/

      const header = document.createElement('header');
      header.classList.add('header');
  
      //create h1 my restaurant
      const h1 = document.createElement('h1');
      h1.classList.add('header1');
      h1.textContent='My Restaurant';
  
      //add h1 to header
      header.appendChild(h1);
  
       
      //create nav
      const nav = document.createElement('nav');
      nav.classList.add('nav-items');
  
      //create and append a
      const a1 = document.createElement('a')
      a1.setAttribute('id','home');
      a1.textContent='Home';
      a1.href='#'
      nav.appendChild(a1);
  
      const a2 = document.createElement('a')
      a2.setAttribute('id','menu');
      a2.textContent='Menu';
      a2.href='#'
      nav.appendChild(a2);
  
      const a3 = document.createElement('a')
      a3.setAttribute('id','contact');
      a3.textContent='Contact';
      a3.href='#'
      nav.appendChild(a3);
  
      //append nav to header
      header.appendChild(nav);

      //return header
      return header;
     
      
};
const createMain = () => {
    //create main body

    /*    <main class="main" id='main'>
        
           <div class="welcome"> 
            <h2>Welcome!</h2>
            <div>Best restaurant in town!</div>
            <div>Delicious meals at affordable prices!</div>
            <div>Five stars!!!</div>
          </div>
            
       

    </main>*/

    const main = document.createElement('main');
    main.classList.add('main');
    main.setAttribute('id','main');

    //return main
    return main;



};

const createFooter = () => {
    //create footer
    /*
        <footer class="footer">
        <div class="copy">&copy; 2022 arnelsr</div>
    </footer>
    */
    const footer=document.createElement('footer');
    footer.classList.add('footer');

    //div
    const div=document.createElement('div');
    div.classList.add('copy');
    div.innerHTML='&copy; 2022 arnelsr';

    //append to footer
   footer.appendChild(div);

   //return footer
   return footer;

 
};