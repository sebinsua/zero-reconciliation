import { Component } from 'react';

export class Tick extends Component {

  state = {
    value: 0
  }

  componentDidMount() {
    window.setTimeout(
      () => {
        this.tickId = window.setInterval(() =>
          this.setState({
            value: (Math.random() * 100).toFixed(2)
          }),
          200
        );
      },
      Math.random()
    )
  }

  componentWillUnmount() {
    if (this.tickId) {
      window.clearInterval(this.tickId);
    }
  }

  render() {
    const { children } = this.props;
    return (
      children(this.state.value)
    )
  }
}

export default Tick;
