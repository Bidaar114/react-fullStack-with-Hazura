
import styled from 'styled-components';

export const PostInfoCard = styled.div`
    display : flex;
    flex-direction : column;
`;

export const InfoThumbnail = styled.img`
    width: 100%;
    height: 500px;
    border-radius : 5px;
    background-size: contain;
`;
export const InfoTitle = styled.h3`
    font-size : 2.2rem;
    font-weight: 700;
    padding : 25px 0;
`;
export const InfoContent = styled.p`
    font-size : 20px;
    padding : 20px 0;
    line-height : 1.9;
`;
export const PostInfoMisc = styled.div`
   display: flex;
   justify-content : space-between;
   align-items : center;
   color :#fff;
`;

export const Info = styled.div`
    display: flex;
    color : #000;
    font-size : 20px;
    font-weight: 500;
    font-style: italic;
`;


export const PostForm = styled.form`
    width :80%;
    margin : 0 auto;
`;

export const Input = styled.input`
    width: 100%;
    padding: 12px 20px;
    margin: 8px 0;
    display: inline-block;
    border: 1px solid #ccc;
    border-radius: 4px;
    box-sizing: border-box;
    font-size : 20px;
  `;


export const Button = styled.button`
    width: 100%;
    background-color: #3F45D1;
    color: white;
    padding: 14px 20px;
    margin: 8px 0;
    border: none;
    border-radius: 4px;
    cursor: pointer;

    &:disabled{
        background-color: #736fdb;
        cursor: not-allowed;
    }


`;

export const Label = styled.label`
    font-size : 20px;
    font-weight: 600;
`;
export const Preview = styled.div`

    width: 100%;
    height: 300px;
    background: linear-gradient(0deg,rgba(0,0,0,0.7),rgba(0,0,0,0) 60%,rgba(0,0,0,0)),url(${props => props.src});
	background-size: cover;
	background-repeat: no-repeat;


`;