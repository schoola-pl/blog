import styled from 'styled-components';

const Wrapper = styled.div`
  margin-top: 2rem;
  width: 80%;
`;

const CardWrapper = styled.div`
  height: 5rem;
  width: 100%;
  background-color: black;
  max-width: 24rem;
`;

const Card = () => {
  return (
    <Wrapper>
      <CardWrapper>
        <h1>Card</h1>
      </CardWrapper>
    </Wrapper>
  );
};

export default Card;
