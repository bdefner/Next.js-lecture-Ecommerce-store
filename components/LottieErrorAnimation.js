import React from 'react';
import Lottie from 'react-lottie';
import * as animationData from '../public/cat-404.json';

export default class LottieControl extends React.Component {
  constructor(props) {
    super(props);
    this.state = { isStopped: false, isPaused: false };
  }

  render() {
    const defaultOptions = {
      loop: true,
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
          width="700"
          isStopped={this.state.isStopped}
          isPaused={this.state.isPaused}
          options={defaultOptions}
        />
      </div>
    );
  }
}
