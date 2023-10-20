/** @format */
import Link from "next/link";
type Props = {
  country: Result;
  darkMode: boolean;
};

export default function Country({ country, darkMode }: Props) {
 
  const { name, population, region, flags, capital } = country;
 
  return (
    <>
    <Link href={`/country/${name?.official || name?.common}`}>
    <div
      className={`rounded-md ${darkMode ? 'bg-slate-800 border-dark': 'bg-slate-100 border-white'}`}
     
      >
      <img
      style={{
        borderTopLeftRadius: '6px',
        borderTopRightRadius: '6px',
      }}
        className='img-country'
        src={flags?.png || flags?.svg}
        alt={`${name?.common || name?.official} pic`}
      />
      <div className='p-3 mx-3'>
        <h1 className={`my-3 font-bold country-name ${darkMode ? 'text-slate-100': 'text-black'}`}>{name?.official || name?.common}</h1>

        <div className={`${darkMode ? 'text-slate-100': 'text-black'}`}>
          <h3>
            {" "}
            <span className={`font-bold`}>Poulation</span>:{" "}
            {Number(population).toLocaleString("en-US")}
          </h3>
          <h3>
            <span className='font-bold'>Region</span>: {region}
          </h3>
          <h3>
            <span className='font-bold'>Capital</span>: {capital}
          </h3>
        </div>
      </div>
    </div>
    </Link>
    </>
  
  );
}
