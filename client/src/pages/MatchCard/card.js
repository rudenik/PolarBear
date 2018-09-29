import React, { Component } from 'react';
import { Carousel, CardPanel, Col } from 'react-materialize';
import "./card.css";


export default class SimpleSlider extends Component {
render (props) {
return (
<div className="row match__card ">
<div className="match__carousel">
    <Carousel options={{ fullWidth: true, indicators:true }}>
        <div>
            <p>{this.props.cardOne}</p>
        </div>
        <div>
            <p>{this.props.cardTwo}</p>
        </div>
        <div>
            <p>{this.props.cardThree}</p>
        </div>
    </Carousel>
    </div>
</div>
)
}
}
// export default Card;