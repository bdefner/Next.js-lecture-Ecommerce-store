import LottieAnimation from '../public/LottieAnimation';

export default function Confirmation(props) {
  return (
    <section className="main-section">
      <div className="animate__animated animate__zoomIn">
        <h1>
          Thanks
          <br />
          <span>for your order!</span>
        </h1>
      </div>
      <LottieAnimation />
    </section>
  );
}
