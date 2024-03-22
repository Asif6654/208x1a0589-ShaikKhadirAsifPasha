"use client"

import Image from "next/image";
import "./page.css"
import ButtonComponent from "./components/ButtonComponent";
import CardComponent from "./components/CardComponent";

export default function Home() {
  return (
    <div className="Home">
      <CardComponent  
      imag="https://images.unsplash.com/photo-1622185135505-2d795003994a?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8YmlrZXN8ZW58MHx8MHx8fDA%3D"
      altr="Bike1 Image"
      title="Bike 1"
      description="Latest Beast"/>

      <CardComponent  
      imag="https://images.unsplash.com/photo-1610100177133-cb4788574137?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fGJpa2VzfGVufDB8fDB8fHww"
      altr="Bike2 Image"
      title="Bike 2"
      description="Go out on a ride with this new model" />

      <CardComponent 
      imag="https://images.unsplash.com/photo-1627366197691-e0d5cee520bd?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTl8fGJpa2VzfGVufDB8fDB8fHww"
      altr="Bike3 Image"
      title="Bike 3"
      description="Something New"/>

      <CardComponent 
      imag="https://images.unsplash.com/photo-1566891439633-e183f368493b?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fGJpa2VzfGVufDB8fDB8fHww"
      altr="Bike4 Image"
      title="Bike 4"
      description="The Next Big Thing in the Bikes Zone"/>
    </div>  
  );
}
