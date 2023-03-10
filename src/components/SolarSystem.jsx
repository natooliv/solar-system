import { Component } from 'react';
import planets from '../data/planets';
import PlanetCard from './PlanetCard';
import Title from './Title';
import './SolarSystem.css';

class SolarSystem extends Component {
  render() {
    return (
      <div data-testid="solar-system">
        <Title headline="Planetas" />
        <div className="planetsSolarSystem">
          {planets.map((planet, index) => (<PlanetCard
            key={ index }
            planetName={ planet.name }
            planetImage={ planet.image }
          />))}
        </div>
      </div>

    );
  }
}

export default SolarSystem;
