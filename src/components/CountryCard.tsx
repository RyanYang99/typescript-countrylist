import { Country } from "../types/country";

interface CountryCardProps {
  country: Country;
  handleSelectCountry: (country: Country) => void;
}

const CountryCard: React.FC<CountryCardProps> = ({
  country,
  handleSelectCountry,
}) => {
  return (
    <div className="card bg-base-50 w-50 shadow-xl">
      <img src={country.flags.svg} style={{ width: "40px", height: "40px" }} />
      <h3
        onClick={() => handleSelectCountry(country)}
        style={{ cursor: "pointer" }}
      >
        {country.name.common}
      </h3>
    </div>
  );
};

export default CountryCard;

{
  /* <div className="card card-compact bg-base-100 w-96 shadow-xl">
  <figure>
    <img
      src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg"
      alt="Shoes" />
  </figure>
  <div className="card-body">
    <h2 className="card-title">Shoes!</h2>
    <p>If a dog chews shoes whose shoes does he choose?</p>
    <div className="card-actions justify-end">
      <button className="btn btn-primary">Buy Now</button>
    </div>
  </div>
</div> */
}
