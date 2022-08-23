import { Link } from 'react-router-dom';

function CountryLink(props) {
  console.log(props);

  return (
    props.country && (
      <Link
        className="list-group-item list-group-item-action"
        to={`/${props.country.alpha3Code}`}
      >
        <div>
          <img
            src={`https://flagpedia.net/data/flags/icon/72x54/${props.country.alpha2Code.toLowerCase()}.png`}
          />

          <p> {props.country.name.official} </p>
        </div>
      </Link>
    )
  );
}

export default CountryLink;
