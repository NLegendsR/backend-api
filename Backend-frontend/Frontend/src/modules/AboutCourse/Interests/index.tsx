import React, { useState } from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import Logo from '../../../assets/icons/Union.svg';
import './styles/styles.css';

const coworkingLocations = {
  warszawa: [
    {
      name: 'WeWork Centrum',
      lat: 52.2297,
      lng: 21.0122,
      image: Logo,
    },
    {
      name: 'HubHub Warsaw',
      lat: 52.2301,
      lng: 21.011,
      image: Logo,
    },
  ],
  krakow: [
    {
      name: 'Brain Embassy Kraków',
      lat: 50.0614,
      lng: 19.9383,
      image: Logo,
    },
  ],
  wroclaw: [{ name: 'Wrocław Creative Desk', lat: 51.1079, lng: 17.0385, image: Logo }],
  gdansk: [{ name: 'Gdańsk Tech Loft', lat: 54.352, lng: 18.6466, image: Logo }],
  poznan: [{ name: 'Poznań Biznes Hub', lat: 52.4064, lng: 16.9252, image: Logo }],
};

const cityCoords = {
  warszawa: [52.2297, 21.0122],
  krakow: [50.0647, 19.945],
  wroclaw: [51.1079, 17.0385],
  gdansk: [54.352, 18.6466],
  poznan: [52.4064, 16.9252],
};

const CoworkingSearch = () => {
  const [formData, setFormData] = useState({ city: '', date: '', spaceType: '' });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleRadioChange = (e) => {
    setFormData({ ...formData, spaceType: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Wyszukiwanie:', formData);
  };

  return (
    <section id="coworking-search">
      <h2 className="coworking-title">Pracuj tam, gdzie chcesz</h2>
      <form onSubmit={handleSubmit} className="coworking-form">
        <div className="form-group">
          <label htmlFor="city">Wybierz miasto</label>
          <select id="city" name="city" value={formData.city} onChange={handleChange}>
            <option value="">-- Wybierz --</option>
            <option value="warszawa">Warszawa</option>
            <option value="krakow">Kraków</option>
            <option value="wroclaw">Wrocław</option>
            <option value="gdansk">Gdańsk</option>
            <option value="poznan">Poznań</option>
          </select>
        </div>

        <div className="form-group">
          <label htmlFor="date">Wybierz datę</label>
          <input type="date" id="date" name="date" value={formData.date} onChange={handleChange} />
        </div>

        <div className="form-group">
          <label>Rodzaj przestrzeni</label>
          <div className="radio-group">
            <label>
              <input
                type="radio"
                name="spaceType"
                value="hot-desk"
                checked={formData.spaceType === 'hot-desk'}
                onChange={handleRadioChange}
              />
              Hot desk
            </label>
            <label>
              <input
                type="radio"
                name="spaceType"
                value="dedykowane-biurko"
                checked={formData.spaceType === 'dedykowane-biurko'}
                onChange={handleRadioChange}
              />
              Dedykowane biurko
            </label>
            <label>
              <input
                type="radio"
                name="spaceType"
                value="prywatne-biuro"
                checked={formData.spaceType === 'prywatne-biuro'}
                onChange={handleRadioChange}
              />
              Prywatne biuro
            </label>
          </div>
        </div>
      </form>

      {formData.city && cityCoords[formData.city] && (
        <div className="map-container">
          <MapContainer
            key={formData.city}
            center={cityCoords[formData.city]}
            zoom={13}
            scrollWheelZoom={false}
            style={{ height: '100%', width: '100%' }}>
            <TileLayer
              attribution='&copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors'
              url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
            {coworkingLocations[formData.city].map((spot, index) => (
              <Marker key={index} position={[spot.lat, spot.lng]}>
                <Popup>
                  <div style={{ maxWidth: '200px' }}>
                    <img
                      src={spot.image}
                      alt={spot.name}
                      style={{ width: '100%', borderRadius: '8px', marginBottom: '8px' }}
                    />
                    <strong>{spot.name}</strong>
                  </div>
                </Popup>
              </Marker>
            ))}
          </MapContainer>
        </div>
      )}

      <div className="interests-section">
        <p>
          Odkryj przestrzenie coworkingowe, które nie tylko spełniają Twoje potrzeby zawodowe, ale również inspirują do
          rozwoju. Niezależnie czy cenisz ciszę, kreatywne wnętrza, czy możliwość nawiązywania kontaktów — znajdziesz tu
          coś dla siebie.
        </p>
      </div>
    </section>
  );
};

export default CoworkingSearch;
