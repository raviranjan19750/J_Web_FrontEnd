import React from 'react'
import Sidebar from './Sidebar'
import { Carousel, Card } from 'react-bootstrap'

function HomePageCarouselComponent() {
  return (
    <Carousel>
      <Carousel.Item>
        <img
          width={150}
          height={350}
          className="d-block w-100"
          src="dev-img.jpg"
          alt="First slide"
        />
        <Carousel.Caption>
          <h3>First slide label</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>

      <Carousel.Item>
        <img
          width={150}
          height={350}
          className="d-block w-100"
          src="dev-img.jpg"
          alt="First slide"
        />
        <Carousel.Caption>
          <h3>Second slide label</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>

      <Carousel.Item>
        <img
          width={150}
          height={350}
          className="d-block w-100"
          src="dev-img.jpg"
          alt="First slide"
        />
        <Carousel.Caption>
          <h3>Third slide label</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>

    </Carousel>

  )
}

function VideoHomePageComponent() {
  return (
    <div className="col-5">
      <Card bg="dark" text="light">
        <Card.Link href="https://www.youtube.com">
          <Card.Img variant="top" src="temp.png" />
        </Card.Link>

        <Card.Body>
          <Card.Title>Jain Temple</Card.Title>
          <Card.Text>
            Welcome to Jain Templ
          </Card.Text>

        </Card.Body>
      </Card>
    </div>
  )
}

function HomePage() {
  return (
    <React.Fragment >
      <div className="row">
        <div className="col-2">
          <Sidebar />
        </div>
        <div className="col-8" style={{ marginTop: "35px" }}>
          <HomePageCarouselComponent />
          <br />
          <h3>Videos</h3>
          <VideoHomePageComponent />
          <h3>Talent Showcase</h3>
        </div>
      </div>
    </React.Fragment>
  )
}

export default HomePage