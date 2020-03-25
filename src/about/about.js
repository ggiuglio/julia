import React from 'react';
import styled, {keyframes} from 'styled-components';
import julia from '../assets/images/julia.png';

const slideIn = keyframes`
  from {
    opacity: 0;
    // margin-left: -300px;
  }
  to {
    opacity: 1;
    //margin-left: 0;
  }
`;
const Container = styled.div`
  height: 100vh;
  width: 100vw;
  animation: ${slideIn} .2s linear;
  @media (min-width: 600px) {
    max-height: calc(100vh - 140px);
    overflow-y: auto;
    width: 100%;
    margin-top: 20px;
    box-sizing: border-box;
    ::-webkit-scrollbar {
      background: #efefef;
      width: 3px;
      height: 3px;
    }
    ::-webkit-scrollbar-thumb {
      backgorund-color: black
    }
  }
`;
const MainContent = styled.div`
  padding: 0 5vw;
  @media (min-width: 600px) {
    padding: 0 20vw;
  }
`;
const JuliaPicture = styled.img`
  width: 100%;
  @media (min-width: 600px) {
    width: 25vw;
    margin: 10px 60px 40px 0;
    float: left;
  }
`;
const JuliaDescription = styled.div`
  margin-top: 20px;
  font-size: 14px;
  text-align: justify;
`;

const About = () => {
  return <Container>
    <MainContent>
      <JuliaPicture src={julia} />
      <JuliaDescription>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. In in risus quam.
        Morbi ullamcorper pretium pretium. Aenean sit amet metus mattis, sagittis dolor sed,
        placerat sem. Donec scelerisque, metus sed semper viverra, felis ligula faucibus dolor,
        ut placerat est arcu quis neque. Pellentesque ut semper nibh. Donec euismod nulla lorem,
        a ultricies augue dictum vel. In pellentesque tellus in arcu convallis, et pharetra turpis
        bibendum. Fusce pharetra justo vitae elit rhoncus, placerat consequat lorem elementum.
        Cras faucibus iaculis velit.

        Sed at bibendum justo. Pellentesque ac rutrum magna. Vestibulum purus lectus, elementum
        in felis non, pellentesque egestas felis. Quisque lacinia volutpat massa. Donec luctus
        massa non lacus accumsan rutrum. Aenean commodo, justo at tempus finibus, nibh nunc laoreet
        enim, et ultricies mi eros congue lorem. Fusce sit amet accumsan purus. Vestibulum eleifend
        ante et sollicitudin cursus. Maecenas a lectus ac nulla suscipit dignissim at non risus.
        Donec aliquet eget risus tincidunt varius. Curabitur quis nunc tellus. Fusce maximus turpis
        non justo convallis, in porta mi molestie. Nulla a sem eu quam hendrerit sodales ultrices
        non lorem.

        Vivamus eu lectus pretium, dictum neque quis, porttitor ante. Duis volutpat arcu feugiat ante
        varius, et iaculis est tincidunt. Sed egestas tellus tristique libero rutrum sollicitudin.
        Fusce sed dui ultricies, scelerisque mi venenatis, tincidunt neque. Phasellus et feugiat libero.
        Proin auctor justo non nulla facilisis cursus. Nullam pellentesque nulla magna, sed blandit
        tortor imperdiet vel.
      </JuliaDescription>
    </MainContent>
  </Container>
}

export default About;