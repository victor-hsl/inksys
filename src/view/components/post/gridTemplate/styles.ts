import styled from 'styled-components';

export const Grid = styled.div`
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: space-around;
`;

export const Container = styled.div`
    width: 100%;
`;

export const Loader = styled.div`
  width: 120px;
  height: 75px;
  display: flex;
  flex-wrap: wrap;
  align-items: flex-end;
  justify-content: space-between;

  span{
    font-size: 32px;
    margin: auto;
    color: #343a40;
  }
`
export const Ball = styled.div`
  width: 20px;
  height: 20px;
  border-radius: 50%;
  background-color: #343a40;
  animation: bounce .5s alternate infinite;

  :nth-child(2){
    animation-delay: .16s;
  }
  :nth-child(3){
    animation-delay: .32s;
  }

 @keyframes bounce {
   from{
     transform: scaleX(1.25);
   }
   to {
     transform: translateY(-50px) scaleX(1);
   }
 } 
`