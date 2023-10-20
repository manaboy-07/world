/** @format */

import { getWorld } from "../../../../lib/fetchApi";

export default async function CountryDetails({
  params,
}: {
  params: { countryName: string };
}) {
  const { countryName } = params;
  //  if (!posts.find((post) => (post.id = postId))) return notFound();
  //const {title,date,contentHtml} = await getPostData(postId)
  const data = await getWorld(`name/${countryName}`);
  interface Currency {
    name: string;
    symbol: string;
  }
  return (
    <div
      className='bg-slate-100 '
      style={{
        height: "100vh",
      }}>
      {data.map((countryData: CountryData) => {
        const {
          borders,
          languages,
          name: { nativeName },
          tld,
          currencies,
          region,
          subregion,
          capital,
          population,
          flags: { png, svg },
        } = countryData;
        const someArray = Object.entries(currencies);
        const nativeNameArray = Object.entries(nativeName);
        const languagesArray = Object.entries(languages);
        console.log(languagesArray);

        return (
          <div key={countryName} className='p-5'>
            <img
              style={{
                width: "500px",
                height: "300px",
              }}
              src={png || svg}
              alt={countryName}
            />
            <div>
              <h2>
                <span className='font-bold'>Population:</span>
                {Number(population).toLocaleString("en-US")}
              </h2>
              <h2>
                <span className='font-bold'>Region:</span>
                {region}
              </h2>
              <h2>
                <span className='font-bold'>Capital:</span>
                {capital}
              </h2>
              <h2>
                <span className='font-bold'>Sub Region:</span>
                {subregion}
              </h2>
              <h2>
                <span className='font-bold'>Top Level Domain:</span>
                {tld}
              </h2>
              {someArray.map((itemObj) => {
                return itemObj.map((item) => {
                  if (item.name || item.symbol != undefined) {
                    return (
                      <div key={item.name}>
                        <h2>
                          <span className='font-bold'>Currencies: </span>
                          {item.name}, {item.symbol}
                        </h2>
                      </div>
                    );
                  }
                });
              })}

              {nativeNameArray[0].map((itemObj) => {
                if (itemObj.common || itemObj.official != undefined) {
                  return (
                    <div key={itemObj.name}>
                      <h2>
                        <span className='font-bold'>Native Name: </span>
                        {itemObj.common || itemObj.official}
                      </h2>
                    </div>
                  );
                }
              })}

              <h2>
                <span className='font-bold'>Languages: </span>

                {languagesArray.map(([key, value], index, array) => {
                  return <span className='mx-2'>{value}</span>;
                })}
              </h2>

              <div>
                <span className='font-bold'>Border Countries: </span>
                {borders ? (
                  <span>
                    {borders.map((border) => {
                      return (
                        <span
                          className='p-2 my-2 mx-2'
                          style={{
                            border: "1px solid gray",
                          }}>
                          {border}
                        </span>
                      );
                    })}
                  </span>
                ) : (
                  "No None Border"
                )}
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
