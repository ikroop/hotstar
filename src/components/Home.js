import React from 'react'
import { useEffect } from 'react'
import styled from 'styled-components'
import ImgSlider from './ImgSlider'
import NewDisney from './NewDisney'
import Originals from './Originals'
import Recommends from './Recommends'
import Trending from './Trending'
import Viewers from './Viewers'
import { useDispatch, useSelector } from 'react-redux'
import db from './Firebase'
import { setMovies } from '../app/features/movies/movieSlice'
import { selectUserName } from '../app/features/user/userSlice'


const Home = (props) => {

  const dispatch = useDispatch();
  const userName = useSelector(selectUserName);
  let recommends = [];
  let newDisneys = [];
  let originals = [];
  let trendings = [];

  useEffect(() => {

    db.collection('movies').onSnapshot((snapshot) => {
      // console.log("snapshot=",snapshot);
      snapshot.docs.map((doc) => {
        // console.log(recommends);
        switch (doc.data().type) {
          case 'recommend':
            recommends = [...recommends, ({ id: doc.id, ...doc.data() })]
            // console.log(recommends);
            break;
          case 'new':
            newDisneys = [...newDisneys, ({ id: doc.id, ...doc.data() })]
            break;
          case 'original':
            originals = [...originals, ({ id: doc.id, ...doc.data() })]
            break;
          case 'trending':
            trendings = [...trendings, ({ id: doc.id, ...doc.data() })]
            break;
        }
      });


      dispatch(setMovies({
        recommend: recommends,
        newDisney: newDisneys,
        original: originals,
        trending: trendings
      }))
    });
  }, [userName]);
  return (
    <Container>
      <ImgSlider />
      <Viewers />
      <Recommends />
      <NewDisney />
      <Originals />
      <Trending />
    </Container>
  )
}

const Container = styled.main`
position: relative;
background-image: url('/images/home-background.png');
background-attachment: fixed;
min-height:calc(100vh-250px);
overflow-x:hidden;
display: block;
top:72px;
padding: 0 1rem;


`
export default Home
