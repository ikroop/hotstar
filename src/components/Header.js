import React from 'react'
import styled from 'styled-components'
import { auth, provider } from './Firebase';
import { useNavigate } from 'react-router-dom';
import {useDispatch, useSelector} from 'react-redux';
import { selectUserEmail,selectUserName,selectUserPhoto, setSignOutState, setUserLoginDetails } from '../app/features/user/userSlice';
import { useEffect } from 'react';
const Header = (props) => {

    const dispatch = useDispatch();
    const navigate = useNavigate();
    const userName = useSelector(selectUserName);
    const userPhoto = useSelector(selectUserPhoto);
    
    useEffect(() =>{
        auth.onAuthStateChanged(async(user)=>{
            if(user){
                setUser(user)
                // navigate(-1, {replace: true});
                navigate('/home')
            }
        })
    },[userName]);

    const handleAuth = () =>{
        if(!userName){
        auth.signInWithPopup(provider).then((result)=>{
            console.log(result)
            setUser(result.user);
        }).catch((error)=>{
            console.log(error.message);
        });
        }
        else if(userName){
            auth.signOut().then(()=>{
                dispatch(setSignOutState());
                navigate('/');
            }).catch(err =>{
                alert(err.message);
            })
        }

    };

    const setUser = (user) =>{
        dispatch(
            setUserLoginDetails({
                name: user.displayName,
                email: user.email,
                photo: user.photoURL
            })
        )
    }


    return (
        <Nav>
            <Logo src="images/logo.svg" alt="Disney+" />
            
           {
                userName ?(      
                    <>
            <NavMenu>
                <a href=''>
                    <img src='images/home-icon.svg' alt='Home' />
                    <span>HOME</span>
                  
                </a>
                <a href=''>
                    <img src='images/search-icon.svg' alt='Search' />
                    <span>SEARCH</span>
                </a>
                <a href=''>
                    <img src='images/watchlist-icon.svg' alt='Watchlist' />
                    <span>WATCHLIST</span>
                </a>
                
                <a href=''>
                    <img src='images/original-icon.svg' alt='Originals' />
                    <span>ORIGINALS</span>
                </a>
                
                <a href=''>
                    <img src='images/movie-icon.svg' alt='Movie' />
                    <span>MOVIES</span>
                </a>
                
                <a href=''>
                    <img src='images/series-icon.svg' alt='Series' />
                    <span>SERIES</span>
                </a>
            </NavMenu>
            <SignOut>
            <ProfilePic src={userPhoto} alt={userName}/>
            <DropDown>
                <span onClick={handleAuth}>SIGN OUT</span>
            </DropDown>
            </SignOut>
            </>
                ):(
            <>
              <Button onClick={handleAuth}>LOGIN</Button>   
             </>)
            }
        </Nav>
    )
};

const Nav = styled.nav`
    position: fixed;
    height: 70px;
    width: 100%;
    background-color: #090b13;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 36px;
    z-index: 4;
`
const Logo = styled.img`
    height:3.5rem;
    /* width: 100%; */
`;

const NavMenu = styled.div`
    /* background-color: green; */
    height: 3rem;
    width: 100%;
    /* height: 2px; */
    margin: 0 2rem;
    display: flex;
    justify-content: flex-start;
    align-items:center;

   a{ 
        display: flex;
        justify-content: flex-start;
        align-items: flex-end;
        /* background-color: blue; */
        margin: 0 4px;
        margin-top: 9px;

    img{
        height:15px;
        width:15px;
    }
   
    span{
        color: #f9f9f9;
        letter-spacing: 3px;    
        padding:0 5px;
        font-size: 12px;
        /* transition: border-bottom 1s; */
        /* &:hover{
            border-bottom: 2px solid #f9f9f9;
        } */
    }
    } 
    
    @media (max-width:768px) {
        display: none;
    }
`;


const Button = styled.a`
    /* height:3rem; */
    border: 1px solid gray;
    padding: 12px 16px;
    border-radius:6px;
    letter-spacing: 1.5px;
    &:hover{
        cursor: pointer;
        border: 1.5px solid gray;
    }
`;

const ProfilePic = styled.img`
    height:2.5rem;
    width:2.5rem;
    border-radius: 100%;
    &:hover{
        cursor: pointer;
    }
`;
const DropDown = styled.div`
display: block;
position: absolute;
top:38px;
background: rgb(19,19,19);
width: 6rem;
padding: 2px;
text-align: center;
/* background-color: green; */
right:1px;
font-size: 14px;
border: 1px solid rgba(151,151,151,0.34);
letter-spacing: 1.5px;
border-radius: 4px;
opacity: 0;
&:hover{
    cursor: pointer;
}
`
const SignOut = styled.div`
position: relative;
/* background-color: pink; */
&:hover{
    ${DropDown}{
        opacity: 1;
        transition-duration: 1s;
    }
}
`
export default Header
