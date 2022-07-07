import React from 'react';

function PerfilImage() {
  return (
  <section className='h-96 text-center'>
   <div className="bg-custom-light-blue h-3/4 text-end pt-7">
     <img 
          src="https://scontent.fqnv4-1.fna.fbcdn.net/v/t1.6435-9/134376050_3676351159116965_8853052458028229233_n.jpg?_nc_cat=109&ccb=1-7&_nc_sid=09cbfe&_nc_eui2=AeFK2Zg9ujbd9YUnL8iqFm0s_t4mybfoVVL-3ibJt-hVUsrl14MWGUxt7TRfCjjucJmiu1kDgj4zpCYHXXYG7JcN&_nc_ohc=lyNZI2WHrmoAX-K5Gi4&tn=ticps-XD3DzeH4CW&_nc_pt=1&_nc_ht=scontent.fqnv4-1.fna&oh=00_AT-R9n_b9yXc-l6iffUDOgTcSD6MtQQhU3M16Q7aENfIfQ&oe=62EC8C15" 
          alt="Imagem de Perfil"
          className="h-80 rounded-full items-center border-8 border-white mx-auto mt-3.5"
     />
   </div> 
  </section>  
  );
}

export default PerfilImage;