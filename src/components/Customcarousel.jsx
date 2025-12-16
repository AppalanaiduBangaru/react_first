import Carousel from 'react-bootstrap/Carousel';
// import ExampleCarouselImage from 'components/ExampleCarouselImage';

function Customcarousel() {
    return (
        <Carousel data-bs-theme="dark">
          <Carousel.Item>
            <img
              className="d-block w-100 height=50"
              src="https://cricketmatchtimelines.com/wp-content/uploads/2025/09/Abhishek-Sharma.jpg" height={500}
              alt="First slide"
            />
            <Carousel.Caption>
              <h5>First slide label</h5>
              <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src="https://cricketmatchtimelines.com/wp-content/uploads/2025/09/Abhishek-Sharma.jpg" height={500}
              alt="Second slide"
            />
            <Carousel.Caption>
              <h5>Second slide label</h5>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src="https://cricketmatchtimelines.com/wp-content/uploads/2025/09/Abhishek-Sharma.jpg" height={500}
              alt="Third slide"
            />
            <Carousel.Caption>
              <h5>Third slide label</h5>
              <p>
                Praesent commodo cursus magna, vel scelerisque nisl consectetur.
              </p>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>
      );
}

export default Customcarousel;