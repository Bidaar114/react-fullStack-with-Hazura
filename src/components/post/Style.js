import { Link } from 'react-router-dom';
import styled from 'styled-components';


export const Card = styled(Link)`
  	min-height: 100%;
    background: linear-gradient(0deg,rgba(0,0,0,0.7),rgba(0,0,0,0) 60%,rgba(0,0,0,0)),url(${props => props.thumbnail});
	background-size: cover;
	background-repeat: no-repeat;
    /* this means the first coloumn wil start from one and end with column 2
    and as rows starts from one and end with row 3
    */
    grid-column-start :  ${props => props.index === 0 && 1};
    grid-column-end :  ${props => props.index === 0 && 3};
    grid-row-start :  ${props => props.index === 0 && 1};
    grid-row-end :  ${props => props.index === 0 && 3};
    border-radius : 5px;
    position : relative;
    cursor : pointer;
`;

export const CardInfo = styled.div`
    position : absolute;
    bottom: 0;
	left: 0;
	width: 100%;
	display: flex;
	justify-content: space-between;
    flex-direction :column;
    padding : 1rem;
    color :#fff;
    *{
        margin : 5px 0;
    }
   
`;

export const Category = styled.div`
    display: inline-block;
    border-radius : 10px;
    span {
          background-color : #3F45D1;
          padding: 5px 15px;
          border-radius : 5px;
          font-size : 14px;
    }
`;

export const Title = styled.h3`
    font-size : ${props => props.index === 0 ? "24px" : "14px"};
    font-weight : ${props => props.index === 0 ? "700" : "500"};
`;