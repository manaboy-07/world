/** @format */

import Link from "next/link";
import { getAllworlds, getWorld } from "../../../../lib/fetchApi";

// export function generateStaticParams(){
//  const data: any = getAllworlds()
//  return data.map((country: CountryData) => ({
//   countryName: country?.name?.official as string || country?.name?.common as string
//  }))
// }

//export const config = {
// api: {
//   externalResolver: true,
// },

//generate meta data
export async function generateMetaData({
  params,
}: {
  params: { countryName: string };
}) {
  const { countryName } = params;
  const data = await getWorld(`name/${countryName}`);
  //const countryData = data.find((country) => (country.))

  if (!data) {
    return {
      title: `${countryName} does not exist`,
    };
  }
  return {
    title: countryName,
    description: `Showing results for ${countryName}`,
  };
}
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
    <>
      <div className='text-xl p-3  hover:font-bold'>
        <Link
          href='/'
          style={{
            width: "20px",
            height: "300px",
          }}>
          👈 Back
        </Link>
      </div>

      <div
        className='bg-slate-100 flex flex-col justify-center items-center'
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
            <div
              key={countryName}
              className='p-2 flex justify-between items-center'>
              <div>
                <img
                  style={{
                    width: "500px",
                    height: "300px",
                  }}
                  src={png || svg}
                  alt={countryName}
                />
              </div>
              <div className='p-8'>
                <h1 className='font-bold text-xl p-5'>
                  {countryName.replace(/%20/g, " ")}
                </h1>
                <div className='flex justify-between  p-5'>
                  <div className='flex flex-col '>
                    <h2 className='my-2'>
                      <span className='font-bold'>Population: </span>
                      {Number(population).toLocaleString("en-US")}
                    </h2>
                    <h2 className='my-2'>
                      <span className='font-bold'>Region: </span>
                      {region}
                    </h2>

                    <h2 className='my-2'>
                      <span className='font-bold'>Sub Region: </span>
                      {subregion}
                    </h2>
                    <h2 className='my-2'>
                      <span className='font-bold'>Capital: </span>
                      {capital}
                    </h2>
                  </div>
                  <div className='ml-4'>
                    <h2 className='my-2'>
                      <span className='font-bold'>Top Level Domain: </span>
                      {tld}
                    </h2>
                    <div className='my-3'>
                      {someArray.map((itemObj) => {
                        return itemObj.map((item: any) => {
                          if (item.name || item.symbol != undefined) {
                            return (
                              <div key={item.name}>
                                <h2>
                                  <span className='font-bold'>
                                    Currencies:{" "}
                                  </span>
                                  {item.name}, {item.symbol}
                                </h2>
                              </div>
                            );
                          }
                        });
                      })}
                    </div>

                    <div className='my-4'>
                      {nativeNameArray[0].map((itemObj: any) => {
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
                    </div>

                    <div className='my-2'>
                      <span className='font-bold'>Languages: </span>

                      {languagesArray.map(([key, value], index, array) => {
                        return <span className='mx-2'>{value as string}</span>;
                      })}
                    </div>
                  </div>
                </div>

                <div className='p-3 '>
                  <span className='font-bold mx-2'>Border Countries: </span>
                  {borders ? (
                    <span>
                      {borders.map((border) => {
                        return (
                          <span
                            className='p-1 my-1 mx-2'
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
    </>
  );
}
