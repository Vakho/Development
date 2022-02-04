const searchfield1 = document.getElementById(
  "searchfield1"
)! as HTMLInputElement;
const searchfield2 = document.getElementById(
  "searchfield2"
)! as HTMLInputElement;
const searchfield3 = document.getElementById(
  "searchfield3"
)! as HTMLInputElement;
const searchbtn2 = document.getElementById("searchbtn2")! as HTMLButtonElement;

const searchBtn = document.getElementById("searchbtn")! as HTMLButtonElement;
const searchField = document.getElementById("searchfield")! as HTMLInputElement;

searchBtn.addEventListener("click", async (e) => {
  const searchedMovie: string = searchField.value;
  const movie: Movie = await fetchMovie(searchedMovie);
  const countriesInfo: Country[] = await Promise.all(
    movie.countries.map(async (country) => {
      return await fetchCountryInfo(country);
    })
  );
  document.getElementById("list")!.insertAdjacentHTML(
    "afterend",
    `<li>${movie.movieAge}</li>
    <li>${movie.actorFirstNames}</li>
    <li> ${countriesInfo.map((country) => country.countryName)}</li>
    <li> ${countriesInfo.map((country) => country.currencies[0])}</li>
    <li><img src=${countriesInfo.map((country) => country.flag)}></li>`
  );
});

async function fetchMovie(name: string): Promise<Movie> {
  const movieName: string = name.trim();
  const response: Response = await fetch(
    `http://www.omdbapi.com/?t=${movieName}&apikey=a04f464f`
  );
  const movieInfo: Movie = await response.json().then((movie) => {
    const actors = movie.Actors.split(",");
    return {
      countries: movie.Country.split(","),
      actorFirstNames: actors.map(
        (actor: string) => actor.trim().split(" ")[0]
      ),
      movieAge: new Date().getFullYear() - movie.Year,
      duration: parseInt(movie.Runtime.split(" ")[0]),
    };
  });
  return movieInfo;
}

async function fetchCountryInfo(country: string): Promise<Country> {
  const response: Response = await fetch(
    `https://restcountries.com/v3.1/name/${country}`
  );
  const countryInfo: Country = await response.json().then((country) => {
    return {
      population: country[0].population,
      countryCode: country[0].cca2,
      currencies: Object.keys(country[0].currencies),
      flag: `https://flagpedia.net/data/flags/icon/36x27/${country[0].cca2.toLowerCase()}.png`,
      countryName: country[0].name.common,
    };
  });
  return countryInfo;
}

searchbtn2.addEventListener("click", async (e) => {
  let movies: string[] = [];

  let searchBoxes = document.getElementsByClassName(
    "movieSearch"
  ) as HTMLCollectionOf<Element>;
  [...searchBoxes].forEach((movie) => {
    let movieName = (movie as HTMLInputElement).value;
    if (movieName.length > 0) {
      movies.push(movieName);
    }
  });
  const moviesInfo = await Promise.all(
    movies.map(async (movie) => {
      return await fetchMovie(movie);
    })
  );
  // გთხოვთ ამის HTML/CSS-ს ნუ მაწერინებთ (სანამ ვისწავლი :))
  let moviesDuration = moviesInfo.reduce((previousValue, currentValue) => {
    return previousValue + currentValue.duration;
  }, 0);
  console.log(`Movies duration ${moviesDuration}`);
});

// Interface declarations
interface Movie {
  countries: string[];
  actorFirstNames: string[];
  movieAge: number;
  duration: number;
}
interface Country {
  population: string;
  countryCode: string;
  currencies: string[];
  flag: string;
  countryName: string;
}
