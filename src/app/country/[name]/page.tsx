/** @format */

import { getWorld } from "../../../../lib/fetchApi";

export default async function CountryDetails({
  params,
}: {
  params: { name: string };
}) {
  const { name } = params;
  //  if (!posts.find((post) => (post.id = postId))) return notFound();
  //const {title,date,contentHtml} = await getPostData(postId)
  const data = await getWorld(`name/${name}`);
  console.log(data)

  return (
    <div>
        Hello {name}
        {data.map((countryData) => {
            const {region} = countryData
            return(
                <div key={name}>
                   <h2>
                    {region}
                   </h2>
                </div>
            )
        })}
    </div>
  );
}
