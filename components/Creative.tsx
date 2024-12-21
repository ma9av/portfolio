import React from 'react';
import Container from './Container';
import More from './More';

const Creative = () => {
  return (
    <Container>
      <div className='my-10'>
        <More
          title= 'Efficient Engineer'
          subTitle='I love building software'
          description="I have always been fascinated by the world of tech, at first the entire internet, softwares, games everything felt like magic to me. Thus, I decided to decode the magic and never looked back. I am in love with the process of engineering software which fulfills real world problems and always thinking about some new ideas to work on and some interesting people to work with, who are as passionate about the craft as myself."
        />
      </div>
    </Container>
  );
};

export default Creative;
