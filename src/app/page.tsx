/** @format */

"use client";
import Image from "next/image";
// import Search from "./components/Search";
import Country from "./country/page";
import { getAllworlds, getWorld } from "../../lib/fetchApi";
import { ChangeEvent, useEffect, useState } from "react";
import Navbar from "./components/Navbar";

export default function Home() {
  const [countryData, setCountryData] = useState([]);
  const [selectedOption, setSelectedOption] = useState("");
  const [darkMode, setDarkMode] = useState<boolean>(false);
  const toggleDarkMode = () => {
    setDarkMode((prevState) => !prevState);
  };

  const handleSelectChange = (event: ChangeEvent<HTMLSelectElement>) => {
    setSelectedOption(event.target.value);
  };
  // const [searchTerm, setSearchTerm] = useState("")
  // //https://restcountries.com/v3.1/name/{name}

  // let filterOptions: string;
  const fetchCountryData = async () => {
    // const verifySearchTerm = countryData.filter((country) =>  country?.name?.official || country?.name?.common == searchTerm)
    // const searchBoolean = Boolean(verifySearchTerm)
    // console.log(`This is the value ${searchBoolean}`)
    // console.log(searchTerm)
    // if(searchTerm != '' && searchBoolean){
    //   filterOptions = `name/${searchTerm}`
    // }
    if (selectedOption != "") {
      const filteredData = getWorld(`region/${selectedOption}`);
      const countryData = await filteredData;
      setCountryData((prevState) => countryData);
    } else if (selectedOption == "") {
      const data = getAllworlds()
      const countryInfo = await data;

      setCountryData((prevState) => countryInfo);
    }
  };

  useEffect(() => {
    fetchCountryData();
  }, [selectedOption]);
  // const filterCountryByName= async () => {
  //    fetchCountryData()
  // }
 
  return (
    <div className={`${darkMode ? 'bg-slate-800': 'bg-white'}`}>
      <Navbar darkMode={darkMode} toggleDarkMode={toggleDarkMode} />
      <div
        className={`${
          darkMode ? "text-slate-100" : "text-black"
        } cursor-pointer`}>
        <select
          className={` ${
            darkMode ? "bg-slate-800" : "bg-white"
          } p-2  cursor-pointer mx-5 shadow-md shadow-white border-gray-300 border-none outline-none`}
          name='region'
          id='region'
          value={selectedOption}
          onChange={handleSelectChange}>
          <option className='my-4' value=''>
            Filter By Region
          </option>
          <option value='Africa'>Africa</option>
          <option value='America'>America</option>
          <option value='Asia'>Asia</option>
          <option value='Europe'>Europe</option>
          <option value='Oceania'>Oceania</option>
        </select>{" "}
        {selectedOption != "" ? (
          <p className={`${darkMode ? "text-slate-100" : "text-black"} text-xl p-4`}>
            Now Showing results for : {selectedOption}
          </p>
        ) : null}
      </div>
      {/* <Search searchTerm={searchTerm} setSearchTerm={setSearchTerm} filterCountryByName={filterCountryByName}/> */}
      <div className='my-4 place-items-center grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 gap-4 '>
        {countryData.map((country: CountryData) => (
          <Country
            darkMode={darkMode} 
            country={country}
            key={country?.name?.official || country?.name?.common}
          />
        ))}
      </div>
    </div>
  );
}
