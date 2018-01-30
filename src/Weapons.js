import React from 'react'
import {
  Col,
  Row,
  Progress
} from 'reactstrap'
import './Weapons.css'
export default class Weapons extends React.Component {

  componentDidMount() {
    fetch(`https://cors.now.sh/https://pubg-handbook.herokuapp.com/weapons`)
      .then(response => response.json())
      .then(data => this.setState({
        data: data
      }));

    fetch(`https://cors.now.sh/https://pubg-handbook.herokuapp.com/weapons/topValues`)
      .then(response => response.json())
      .then(data => this.setState({
        topValues: data
      }));
  }

  constructor(props) {
    super(props);

    this.state = {
      data: null,
      topValues: {
        damage: null,
        range: null,
        stability: null,
        firerate: null
      }
    }
  }

  render() {
    console.log(this.state.topValues)
    return (
      <Row>
        {
          this.state.data !== null ? this.state.data.weapons.map((e) =>
            <Col className="Weapon-position"  xs="12" sm="12" md="6" lg="4">
              <a>{e.name}</a>
              <div className="Weapon-wrapper">
              <p>Ammunition: {e.ammo}</p>
              <p>Magazine capacity: {e.magCap}</p>
              <p>Damage: {e.damage}</p>
              <Progress className="Weapon-bar" value={(e.damage / this.state.topValues.damage) * 100}/>
              <p>Range: {e.range}</p>
              <Progress className="Weapon-bar" value={(e.range / this.state.topValues.range) * 100}/>
              <p>Stability: {e.stability}</p>
              <Progress className="Weapon-bar" value={(e.stability / this.state.topValues.stability) * 100}/>
              <p>Firerate: {e.firerate}</p>
              <Progress className="Weapon-bar" value={(e.firerate / this.state.topValues.firerate) * 100}/>
              <p>Attachments: {e.attachments}</p>
                <div className="Weapon-type">
                  <a>{e.type}</a>
                </div>
              </div>
            </Col>
          ) : null
        }
      </Row>
    )
  }
}