import React from 'react';

function Header() {
  return (
  <header className="bg-sky-600 h-20 px-36 py-3 flex justify-between">
    <div className="font-gloria-hallelujah text-xl font-bold text-left">
     <p>Jeferson</p>
     <p className="px-14">Gomes</p>    
    </div>

    <nav className="py-3">
      <img 
        src='https://img.icons8.com/material-outlined/344/menu--v1.png' 
        alt='menu-icon' 
        className="h-8"
      />
    </nav>    
  </header>    
  );
}

export default Header;
