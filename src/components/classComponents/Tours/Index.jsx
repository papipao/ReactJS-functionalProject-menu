import React, { Component } from 'react';
import { TourProvider } from './Context';
import './Index.css';
import Loading from './Loading';
import Tours from './Tours';

const url = 'https://course-api.com/react-tours-project';

class Index extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: true,
      tours: [],
    };
    this.removeTours = this.removeTours.bind(this);
  }

  removeTours(id) {
    this.setState((prevState) => ({
      tours: prevState.tours.filter((tour) => tour.id !== id),
    }));
  }

  async fetchTours() {
    this.setState({ loading: true });
    try {
      const res = await fetch(url);
      const tours = await res.json();
      console.log(tours);
      this.setState({
        loading: false,
        tours: tours,
      });
    } catch (e) {
      this.setState({
        loading: false,
      });
      console.log(e);
    }
  }

  componentDidMount() {
    this.fetchTours();
  }

  render() {
    if (this.state.loading) {
      return (
        <main>
          <Loading />
        </main>
      );
    }

    if (this.state.tours.length === 0) {
      return (
        <main>
          <div className='title'>
            <h3>no tours available</h3>
            <button onClick={() => this.fetchTours()} className='btn'>
              refresh
            </button>
          </div>
        </main>
      );
    }

    return (
      <main>
        <TourProvider value={this.removeTours}>
          <Tours tours={this.state.tours} />
        </TourProvider>
      </main>
    );
  }
}

export default Index;
