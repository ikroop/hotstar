import React from 'react'
import styled from 'styled-components'

const Login = (props) => {
    return (
        <Container>
            <Content>
                <CTA>
                    <CTALogoOne />
                    <SignUp>GET ALL THERE</SignUp>
                    <Description> Get Premier Access to Raya and the Last Dragon for an additional fee
                        with a Disney+ subscription. As of 03/26/21, the price of Disney+
                        and The Disney Bundle will increase by $1.
                    </Description>
                    <CTALogoTwo src="images/cta-logo-two.png" />
                </CTA>
                <BgImage />
            </Content>
        </Container>
    )
};

const Container = styled.section`
    overflow: hidden;
    display: flex;
    flex-direction: column;
    text-align: center;
    height: 100vh;
`;

const Content = styled.div`
    margin-bottom:10vw;
    width: 100%;
    position: relative;
    min-height: 100vh;
    box-sizing: border-box;
    display: flex;
    justify-content: center;
    align-items: center;    
    flex-direction: column;
    padding: 80px 40px;
    height: 100%;
`;

const BgImage = styled.div`
  height: 100%;
  background-position: top;
  background-size: cover;
  background-repeat: no-repeat;
  background-image: url("/images/login-background.jpg");
  position: absolute;
  top: 0;
  right: 0;
  left: 0;
  z-index: -1;
`;

const CTA = styled.div`
    height:18rem;
    width: 34rem;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    @media (max-width: 768px) {
        height:15rem;
        width: 20rem;
    }
    `;

const CTALogoOne = styled.div`
    height:6rem;
    width: 100%;
    background-size: contain;
  background-repeat: no-repeat;
  background-image: url("/images/cta-logo-one.svg");
  background-position: center;
  @media (max-width: 768px) {
        height:6rem;
        width: 100%;
    }
`;
const CTALogoTwo = styled.img`
    width: 100%;
    margin-bottom: 20px;
`;

const SignUp = styled.a`
    width: 100%;
    background-color: #0063e5;
    font-weight: bold;
    color: #f9f9f9;
    margin-bottom: 18px;
    letter-spacing: 1.5px;
    font-size:18px;
    padding: 16.5px 0;
    border:1px solid transparent;
    border-radius: 4px;

    &:hover {
        background-color: #0483ee;
        cursor: pointer;
    }
`;


const Description = styled.p`
    color:#f9f9f9;
    font-size: 13px;
    margin: 0 0 24px;
    letter-spacing: 1.5px;
    

`;
export default Login
