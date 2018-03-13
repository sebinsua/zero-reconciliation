import React, { Component } from 'react';

class FastText extends Component {

  valueUpdaterId = undefined;
  nextFrameId = undefined;
  previousValue = this.props.value;

  componentDidMount() {
    const createRand = () => (Math.random() * 100).toFixed(2);
    const HOW_OFTEN = 200;

    this.valueUpdaterId = window.setInterval(
      () => this.causeRender(createRand()),
      HOW_OFTEN
    );
  }

  componentWillUnmount() {
    if (this.valueUpdaterId) {
      window.clearInterval(this.valueUpdaterId);
    }
  }

  causeRender = (value) => {
    if (value === this.previousValue) {
      return false;
    }

    if (this.el) {
      if (this.nextFrameId) {
        window.cancelAnimationFrame(this.nextFrameId);
      }
      this.nextFrameId = window.requestAnimationFrame(
        () => {
          this.el.firstChild.nodeValue = value;
          this.previousValue = value;
          this.nextFrameId = null;
        }
      );
    }
  }

  shouldComponentUpdate(nextProps) {
    return false;
  }

  render() {
    const { value } = this.props;
    return (
      <span className="FastText" ref={ref => (this.el = ref)}>
        {value || 0}
      </span>
    );
  }
}

export { FastText }
export default FastText;
