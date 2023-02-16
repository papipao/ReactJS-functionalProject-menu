import React, { Component } from 'react';
import { TourConsumer } from './Context';

class Tour extends Component {
  constructor(props) {
    super(props);
    this.state = {
      readMore: false,
    };
  }
  render() {
    const { id, info, price, name, image, removeTours } = this.props;
    return (
      <TourConsumer>
        {(removeTours) => {
          return (
            <article className='single-tour'>
              <img src={image} alt={name} />
              <footer>
                <div className='tour-info'>
                  <h4>{name}</h4>
                  <h4 className='tour-price'>${price}</h4>
                </div>
                <p>
                  {this.state.readMore ? info : `${info.substring(0, 200)}...`}
                  <button onClick={() => this.setState({ readMore: !this.state.readMore })}>
                    {this.state.readMore ? 'show less' : 'read more'}
                  </button>
                </p>
                <button onClick={() => removeTours(id)} className='delete-btn'>
                  not interested
                </button>
              </footer>
            </article>
          );
        }}
      </TourConsumer>
    );
  }
}

export default Tour;
