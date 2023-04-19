import React from 'react'
import styled from 'styled-components'

const Viewers = () => {
    return (
        <Container>
            <Wrap>
                <img src='/images/viewers-marvel.png' alt='' />
                <video autoPlay={true} loop={true} playsInline={true} muted>
                <source src='/videos/1564676115-marvel.mp4' type='video/mp4'/>
            </video>
            </Wrap>
            <Wrap>
                <img src='/images/viewers-pixar.png' alt='' />
                <video  autoPlay={true} loop={true} playsInline={true} muted>
                <source src='/videos/1564676714-pixar.mp4' type='video/mp4'/>
            </video>
            </Wrap>
            <Wrap>
                <img src='/images/viewers-disney.png' alt='' />
                <video autoPlay={true} loop={true} playsInline={true} muted>
                <source src='/videos/1564674844-disney.mp4' type='video/mp4'/>
            </video>
            </Wrap>
            <Wrap>
                <img src='/images/viewers-national.png' alt='' />
                <video autoPlay={true} loop={true} playsInline={true} muted>
                <source src='/videos/1564676296-national-geographic.mp4' type='video/mp4'/>
            </video>
            </Wrap>
            <Wrap>
                <img src='/images/viewers-starwars.png' alt='' />
                <video autoPlay={true} loop={true} playsInline={true} muted>
                <source src='/videos/1608229455-star-wars.mp4' type='video/mp4'/>
            </video>
            </Wrap>
            
        </Container>
    )
}
const Container = styled.div`
    margin-top: 30px;
    padding: 30px 0 30px;
    display: flex;
    justify-content: space-around;
    align-items: center;
    /* grid-gap:2rem; */
    /* grid-template-columns: auto auto auto auto auto; */
    
    @media (max-width: 768px){
        /* grid-template-columns:auto;                   */
        flex-direction: column;
     }
`
const Wrap = styled.div`

border-radius: 10px;
        border: 3px solid rgba(249,249,249,0.1);
        box-shadow: rgb(0 0 0 / 69%) 0px 26px 30px -10px,
                rgb(0 0 0 / 73%) 0px 16px 10px -10px; 
                margin: 1rem;
                position: relative;
     img{
        height:100%;
        width: 100%;
        position: absolute;
        /* border:2px solid white; */
       @media (max-width:768px){
        width: 100%;
        height:9rem;   
       }      
     }
     video{
            height: 100%;
            width: 100%;
            z-index: 200;
        }
     &:hover{
            border: 5px solid rgba(249,249,249, 0.8);
            transition-duration: 300ms;
            transform: scale(1.15);
        }
`
export default Viewers
