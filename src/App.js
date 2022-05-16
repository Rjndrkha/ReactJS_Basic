//import logo from './logo.svg';
import './App.css';
import React from 'react';

function App() {

  //const userLogged = "Rajendra Rakha";
  //const userLoggedJSX = <strong>Rajendra Rakha</strong>;

  const category = "RUNNING SHOES";


  return (
    <div class="ParentBox">

      <div class="Foto">
        <img alt="sepatu" src="shoes.jpg" />
      </div>
      <ProductInfo/>

    </div>
  );
}

function ProductInfo() {

  const category = "RUNNING SHOES";
  return (
    <div >
      <div class="Deskripsi">
        <p class="Cate">{category}</p>
        <h1 class="Title">Pinky Swagg</h1>
        <p class="Price">IDR 3.000.000</p>
        <p class="Info">
          Sepatu Off White Limited Edition
        </p>
        <a onClick={TambahCart()} href="">Add To Cart</a>

      </div>
      
    </div>
  );
}

function TambahCart(){
  console.log("Membeli Product ....");
}
export default App;
