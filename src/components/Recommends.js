import React from 'react'
import styled from 'styled-components'
import { useSelector } from 'react-redux'
import { selectRecommend } from '../app/features/movies/movieSlice'
import { Link } from 'react-router-dom'


const Recommends = () => {

    const movies  = useSelector(selectRecommend);
    // console.log(movies);
  return (
    <Container>
      <h4>Recommended for You</h4>
      <Content>
          {
            movies && movies.map((movie,key) =>(
              <Link key={key} to={'/detail/' + movie.id}>
              <Wrap key={key}><img src={movie.cardImg}/></Wrap>
              </Link>
            ))
          }
        {/* <Wrap><img src='https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/49B92C046117E89BC9243A68EE277A3B30D551D4599F23C10BF0B8C1E90AEFB6/scale?width=1440&aspectRatio=1.78&format=jpeg'/></Wrap>
        <Wrap><img src='https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/49B92C046117E89BC9243A68EE277A3B30D551D4599F23C10BF0B8C1E90AEFB6/scale?width=1440&aspectRatio=1.78&format=jpeg'/></Wrap>
        <Wrap><img src='https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/49B92C046117E89BC9243A68EE277A3B30D551D4599F23C10BF0B8C1E90AEFB6/scale?width=1440&aspectRatio=1.78&format=jpeg'/></Wrap>
        <Wrap><img src='https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/49B92C046117E89BC9243A68EE277A3B30D551D4599F23C10BF0B8C1E90AEFB6/scale?width=1440&aspectRatio=1.78&format=jpeg'/></Wrap> */}
      </Content>
    </Container>
  )
}
const Container = styled.div`
`
const Content = styled.div`
display: grid;
gap:1rem;
grid-template-columns: repeat(4,1fr);
margin: 1rem;


@media (max-width:768px) {
    grid-template-columns: repeat(2,1fr);
    gap:1rem;
  }
`
const Wrap = styled.div`
    height:11rem;
    width: 100%;
    /* background-color: aliceblue; */
    
@media (max-width:768px) {
    height:7rem;
    }
    border: 3px solid rgba(249,249,249,0.1);
    border-radius:10px ;
    &:hover{
        box-shadow: rgb(0 0 0 / 80%) 0px 26px 30px -10px,
                rgb(0 0 0 / 72%) 0px 16px 10px -10px; 
    transform:scale(1.05);
    border: 3px solid rgba(249,249,249,0.8);
    }
    img{
        width: 100%;
        height: 100%;
        border-radius:6px;
        }

`
export default Recommends
