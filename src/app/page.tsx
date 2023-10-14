/** @format */

"use client";
import Image from "next/image";
import Search from "./components/Search";
import Country from "./country/page";
import { getWorld } from "../../lib/fetchApi";
import { useEffect, useState } from "react";

export default function Home() {
  const [countryData, setCountryData] = useState([]);
  const [searchTerm, setSearchTerm] = useState("")
  //https://restcountries.com/v3.1/name/{name}
  
  let filterOptions: string;
  const fetchCountryData = async () => {

    const verifySearchTerm = countryData.filter((country) =>  country?.name?.official == searchTerm)
    const searchBoolean = Boolean(verifySearchTerm)
    console.log(`This is the value ${searchBoolean}`)
    console.log(searchTerm)
    if(!searchTerm){
      filterOptions = "all"
    }
    if(searchTerm != '' && searchBoolean == true){
      filterOptions = `name/${searchTerm}`
    }else if(searchBoolean == false){ 
      alert('No filter')
      // return
    }  
    const data = getWorld(filterOptions);
   
    const countryInfo = await data;
   
   
    setCountryData((prevState) => countryInfo);

  };
  useEffect(() => {
    

    fetchCountryData();
  }, []);
  const filterCountryByName= async () => {
     fetchCountryData()
  }

  return (
    <div className=''>
      <Search searchTerm={searchTerm} setSearchTerm={setSearchTerm} filterCountryByName={filterCountryByName}/>
      <div className=' place-items-center grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 gap-4 '>
        {countryData.map((country) => (
          <Country
            country={country}
            key={country?.name?.official || country?.name?.common}
          />
        ))}
      </div>
    </div>
  );
}
