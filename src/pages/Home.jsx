import React from "react";

import header1 from "../assets/header/home-header1.jpg";
import header2 from "../assets/header/header.jpg";
import Maps from "./Maps";
import { FaAt, FaLinkedinIn, FaGithub, FaTwitter } from "react-icons/fa";
import { Row, Col, Button, Container, Accordion } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

const Home = () => {
  return (
    <div className="main">
      <div className="header-container grid2x1">
        <div className="header-half">
          <img src={header1} alt="colorful gates" />
        </div>
        <div className="header-half header-half-2">
          <img src={header2} alt="headphones" />
        </div>
      </div>

      <Container fluid className="content-section">
        <span style={{ height: "40vh" }}>
          <div className="content-container gridTwo-2x1">
            <div className="content3">
              <h3>Vision</h3>
              <p>
                We set out to provide easily accessible sight tests for rural
                populations in India who have limited access to medical care.
                The idea was that by making a lightweight, front-end only
                application it could be taken by health groups into rural areas
                without needing expensive equipment or having people come to
                cities to be tested. This is not the first test of this kind,
                but it is the first to be translated into many languages so that
                it's easily accessible to the people living in the rural areas
                of India.
              </p>
            </div>
            <div className="content4">
              <h3>Testing Idea</h3>
              <p>
                The three things we made tests for are color blindness, vision
                loss, and colour sensitivity to different shades. These are a
                few of the most common problems people may have with vision ,
                and helping people diagnose issues can dramatically improve
                their quality of life. Each test we made was based on existing
                medical tests for the same issue.
              </p>
            </div>
          </div>
        </span>
      </Container>
      <div className="content5">
        <Accordion defaultActiveKey="0">
          <Accordion.Item eventKey="1">
            <Accordion.Header>
              Here's everything you think you know, but don't
            </Accordion.Header>
            <Accordion.Body>
              <h1 id="acheader">
                What even is colorblindness? How do you catch it?
              </h1>
              The most commons forms of colorblindness are genetic conditions,
              passed along the x-chromosome. People with an x-chromosome and a
              y-chromosome only need their one x to be defective to catch it.
              People with two x-chromosomes need both to be defective. Most
              women have two x-chromosomes, and most men have an x-chromosome
              and a y-chromosome. That's why colorblindness is much more common
              in men than in women.
              <h1 id="acheader">
                Okay, okay. Enough genetics stuff. What is it like to be
                colorblind?
              </h1>
              There are a whole lot of reddish, greenish, brownish things in the
              world that other people seem to see as distinct shades. Nearly
              everything other people describe as purple I see as blue.
              Sometimes white things turn out to be pink in other people's eyes.
              The real mystery arises with all the in-between shades. Some of
              them I can spot well enough - royal blue, baby blue, and sky blue
              for example. But there's a whole universe of hues that are
              mysterious to me. I can almost never recognize crimson, auburn, or
              salmon unless they're pointed out to me. The same holds for most
              purples. I'm told there are colors with names like indigo, teal,
              and yellow-green, but I'm not sure I believe it.
              <br />
              Here's why. Wavelengths of light, which our brains interpret as
              color, are objective features of the universe. And I can point
              toward certain wavelengths and say they're indistinguishable to
              me. But I can't describe for you or visually represent the
              reddish-greenish color my brain churns up when my cones send a
              signal saying "well, it's one of those."
              <div className="content5">
                <Accordion defaultActiveKey="0">
                  <Accordion.Item eventKey="1">
                    <Accordion.Header id="acc-header">Causes</Accordion.Header>
                    <Accordion.Body>
                      Color vision deficiencies can be classified as acquired or
                      inherited. Acquired: Diseases, drugs (e.g.,
                      hydroxychloroquine), and chemicals such as styrene or
                      organic solvents may cause color blindness. Inherited:
                      There are three types of inherited or congenital color
                      vision deficiencies: monochromacy, dichromacy, and
                      anomalous trichromacy.
                      <br />
                      <div className="content5">
                        <Accordion>
                          <Accordion.Item eventKey="1">
                            <Accordion.Header id="acc-header">
                              Monochromacy
                            </Accordion.Header>
                            <Accordion.Body>
                              also known as "total color blindness", is the lack
                              of ability to distinguish colors (and thus the
                              person views everything as if it were on a black
                              and white television); caused by cone defect or
                              absence. Monochromacy occurs when two or all three
                              of the cone pigments are missing and color and
                              lightness vision is reduced to one dimension. Rod
                              monochromacy (achromatopsia) is an exceedingly
                              rare, nonprogressive inability to distinguish any
                              colors as a result of absent or nonfunctioning
                              retinal cones. It is associated with light
                              sensitivity (photophobia), involuntary eye
                              oscillations (nystagmus), and poor vision. Since
                              cone monochromacy is the lack of / damage of more
                              than one cone in retinal environment, having two
                              types of dichromacy would be an equivalent.
                              <br />
                            </Accordion.Body>
                          </Accordion.Item>
                          <Accordion.Item eventKey="0">
                            <Accordion.Header id="acc-header">
                              Dichromacy
                            </Accordion.Header>
                            <Accordion.Body>
                              is hereditary. Protanopia and deuteranopia are
                              hereditary and sex-linked, affecting predominantly
                              males. Protanopia is caused by the complete
                              absence of red retinal photoreceptors. Protans
                              have difficulties distinguishing between blue and
                              green colors and also between red and green
                              colors. Pure reds cannot be seen, instead
                              appearing black; purple colors cannot be
                              distinguished from blues; more orange-tinted reds
                              may appear as dim yellows, and all
                              orange–yellow–green shades of too long a
                              wavelength to stimulate the blue receptors appear
                              as a similar yellow hue. Blues appear greenish,
                              yellows and oranges appear pinkish, and purple
                              colors appear deep red. It is related to
                              chromosome 7; thus unlike protanopia and
                              deuteranopia, tritanopia and tritanomaly are not
                              sex-linked traits and can be acquired rather than
                              inherited and can be reversed in some cases.
                              <br />
                            </Accordion.Body>
                          </Accordion.Item>
                        </Accordion>
                      </div>
                    </Accordion.Body>
                  </Accordion.Item>

                  <div className="content5">
                    <Accordion.Item eventKey="2">
                      <Accordion.Header id="acc-header">
                        Diagnosis
                      </Accordion.Header>
                      <Accordion.Body>
                        The Ishihara color test, which consists of a series of
                        pictures of colored spots, is the test most often used
                        to diagnose red–green color deficiencies. A figure
                        (usually one or more Arabic digits) is embedded in the
                        picture as a number of spots in a slightly different
                        color, and can be seen with normal color vision, but not
                        with a particular color defect. The full set of tests
                        has a variety of figure/background color combinations,
                        and enable diagnosis of which particular visual defect
                        is present. The anomaloscope, described above, is also
                        used in diagnosing anomalous trichromacy.
                        <br />
                        Position yourself about 75cm from your monitor so that
                        the colour test image you are looking at is at eye
                        level, read the description of the image and see what
                        you can see!! It is not necessary in all cases to use
                        the entire set of images. In a large scale examination
                        the test can be simplified to six tests; test, one of
                        tests 2 or 3, one of tests 4, 5, 6, or 7, one of tests 8
                        or 9, one of tests 10, 11, 12, or 13 and one of tests 14
                        or 15.
                        <br />
                        To find out{" "}
                        <Button
                          style={{ margin: "10px" }}
                          variant="secondary"
                          href="/tests"
                        >
                          Take the Test!
                        </Button>{" "}
                        NOW !
                      </Accordion.Body>
                    </Accordion.Item>
                  </div>
                </Accordion>
              </div>
            </Accordion.Body>
          </Accordion.Item>
        </Accordion>
      </div>
      <div className="content5">
        <Accordion defaultActiveKey="0">
          <Accordion.Item eventKey="1">
            <Accordion.Header id="acc-header">About the Test</Accordion.Header>
            <Accordion.Body>
              This Test is a proprietary color blind test designed to determine
              a person’s type and level of color blindness. The test is based on
              the Ishihara “hidden digit” test method and is combined with a
              computer-adaptive algorithm. It is available in a numbers mode for
              adults and children ages 10+ and in a shape mode for kids ages 5+.
              The three main types of color blindness are Deutan, Protan, and
              Tritan. Learn more about the different types of color blindness.
            </Accordion.Body>
          </Accordion.Item>
        </Accordion>
      </div>

      <div className="test-button">
        <Button variant="warning" href="/tests">
          Take the Test!
        </Button>
      </div>
      <div className="content5" style={{marginBottom: "100px"}}>
        <Accordion defaultActiveKey="0">
          <Accordion.Item eventKey="1">
            <Accordion.Header id="acc-header">
              Am I at risk for color blindness?
            </Accordion.Header>
            <Accordion.Body>
              <ul>
                Men have a much higher risk than women for color blindness.
                You’re also more likely to have color blindness if --
              </ul>
              <ul>You Have a family history of color blindness </ul>
              <ul>
                Have certain eye diseases, like glaucoma or age-related macular
                degeneration (AMD)
              </ul>
              <ul>
                Have certain health problems, like diabetes, Alzheimer’s
                disease, or multiple sclerosis (MS)
              </ul>
              To find out{" "}
              <Button
                style={{ margin: "10px" }}
                variant="secondary"
                href="/tests"
              >
                Take the Test!
              </Button>{" "}
              NOW !
            </Accordion.Body>
          </Accordion.Item>
        </Accordion>
      </div>
      <Container fluid className="content-map">
        <Row>
          <Col  >
            <Maps />
          </Col>
          <Col className="headline-text">
           <h1>Need to Visit a Doctor? Find Clinics nearby..</h1> 
          </Col>
        </Row>
      </Container>

      <Container fluid className="footer">
        <div className="content-wrapper">
          <div className="social-media-icons-container">
            <a href=" ">
              <div className="icon white-bg">
                <FaLinkedinIn />
              </div>
            </a>
            <a
              href="https://github.com/2022Azure/2022Azure"
              target="_blank"
              rel="noopener noreferrer"
            >
              <div className="icon white-bg">
                <FaGithub />
              </div>
            </a>
            <a href=" " target="_blank" rel="noopener noreferrer">
              <div className="icon white-bg">
                <FaAt />
              </div>
            </a>
            <a href=" " target="_blank" rel="noopener noreferrer">
              <div className="icon white-bg">
                <FaTwitter />
              </div>
            </a>
          </div>
          <div className="footer-description">
            Finely tuned by Rahul Pandey Harsh Gupta and Abhinav Pandey.
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Home;
