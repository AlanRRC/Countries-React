import "./styles.css";
function Region({ region }) {
  return <sup>{region === "" ? "None" : region}</sup>;
}

function Country({ country }) {
  const density = country.population / country.area;
  const globalAverageDensity = 50; // People per km2.
  const isDense = density > globalAverageDensity;

  return (
    <details>
      <summary>
        <img src={country.flags.png} alt="" /> {country.name.common}
      </summary>
      <p>
        <Region region={country.region} />
        <sup>Population: {country.population}</sup>
        <sup>Area: {country.area} km²</sup>
        {isDense && <sup>Densely Populated</sup>}
      </p>
    </details>
  );
}

// App renders one Country component per country.
export default function App({ countries }) {
  return (
    <div>
      {countries.map((c, i) => (
        <Country key={i} country={c} />
      ))}
    </div>
  );
}
