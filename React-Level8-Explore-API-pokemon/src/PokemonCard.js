import React, { Component } from 'react';

export class PokemonCard extends Component {
  constructor() {
    super();
    this.state = {
      name: '',
      sprites: {},
      base_experience: 0,
      height: 0,
      weight: 0
    };
  }

  async componentDidMount() {
    const res = await fetch(this.props.url);
    const data = await res.json();
    console.log(data);
    this.setState({
      name: data.name,
      sprites: data.sprites,
      height: data.height,
      weight: data.weight,
      base_experience: data.base_experience
    });
  }
  render() {
    const { name, sprites, height, weight, base_experience } = this.state;
    //console.log('=====>',name, sprites)
    let upperName = '';
    if (name) upperName = name[0].toUpperCase() + name.slice(1);
    return (
      <div className="oneCard">
        <div>{upperName}</div>
        <img src={sprites.front_default} alt={name} className="sprite" />
        <div>Height:{height}</div>
        <div>Weight:{weight}</div>
        <div>Base experience:{base_experience}</div>
      </div>
    );
  }
}

export default PokemonCard;
