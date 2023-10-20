type Result = {
    name?: {
        official?: string,
        common?:string
    }
    capital?: string[],
    region?: string,
    population?:string,
    flags:{
        png:string,
        svg:string
    }
}
interface CountryData  {
    name?,
    borders: string[],
    languages?,
    subregion?: string,
    tld?: string[],
    currencies?,
    capital?: string[],
    region?: string,
    population?:string,
    flags:{
        png:string,
        svg:string
    }
}
// interface CountryData{

// }