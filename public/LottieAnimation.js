import React from 'react';
import Lottie from 'react-lottie';
import * as animationData from '../public/cat.json';

export default class LottieControl extends React.Component {
  constructor(props) {
    super(props);
    this.state = { isStopped: false, isPaused: false };
  }

  render() {
    const defaultOptions = {
      loop: false,
      autoplay: true,
      animationData: animationData,
      rendererSettings: {
        preserveAspectRatio: 'xMidYMid slice',
      },
    };

    return (
      <div>
        <Lottie
          height={'100%'}
          width="{'100%'}"
          isStopped={this.state.isStopped}
          isPaused={this.state.isPaused}
          onClick={() => this.setState({ isStopped: false })}
          options={defaultOptions}
        />
      </div>
    );
  }
}
