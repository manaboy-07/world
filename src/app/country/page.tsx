/** @format */

type Props = {
  country: Result;
};

export default function Country({ country }: Props) {
 
  const { name, population, region, flags, capital } = country;

  return (
    <div
      className='rounded-md bg-slate-100'
      style={{
        border: "1px solid #eeee",
      }}>
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
        <h1 className='my-3 font-bold country-name'>{name?.official || name?.common}</h1>

        <div className='mt-3'>
          <h3>
            {" "}
            <span className='font-bold'>Poulation</span>:{" "}
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
  );
}
