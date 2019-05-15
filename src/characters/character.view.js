import styled from 'styled-components';

export default {
    Box: styled.div`
    width: auto;
    height: auto;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
    `,
    Wrapper: styled.div`
    width: auto;
    height: auto;
    display: flex;
    flex-direction: column;
    margin: 10px;
    align-items: center;
    `,
    Description: styled.div`
    font-family: Helvetica, sans-serif;
    font-size: 16px;
    font-weight: 300;
    `,
    Picture: styled.img`
    width: 150px;
    height: 100px;
    margin-bottom: 10px;
    `,
    Buttons: styled.div`
    margin-top: 20px;
    display: flex;
    justify-content: space-between;
    opacity: 0.8;
    &:hover{
        opacity: 1;
    }
    `,
    Button: styled.button`
    width:70px;
    height: 30px;
    font-family: Helvetica, sans-serif;
    font-size: 16px;
    border: none;
    outline: none;
    border-radius: 10%;
    cursor: pointer;
    `,
    Image: styled.img`
    display: block;
    margin: 0 auto;
    width: auto;
    `

}