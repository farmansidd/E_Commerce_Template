import React from 'react';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';
import Mancard from '../../assets/banners/grid-three-1.png';
import Womencard from '../../assets/banners/grid-three-2.png';
import Kidcard from '../../assets/banners/grid-three-3.png';

function MidSec() {
    const navigate = useNavigate();

    return (
        <MidSecWrapper>
            <SectionCard bg={`url(${Mancard})`} onClick={() => navigate('/products/men')}>
                <div className="content">
                    <h3>TRENDING</h3>
                    <h1>Men  <br />Collections</h1>
                    <p>SHOP NOW</p>
                </div>
            </SectionCard>
            <SectionCard bg={`url(${Womencard})`} onClick={() => navigate('/products/women')}>
                <div className="content">
                    <h3>LATEST</h3>
                    <h1>Women<br />Collections</h1>
                    <p>SHOP NOW</p>
                </div>
            </SectionCard>
            <SectionCard bg={`url(${Kidcard})`} onClick={() => navigate('/products/kids')}>
                <div className="content">
                    <h3>COMFORT</h3>
                    <h1>Kid<br />Collections</h1>
                    <p>SHOP NOW</p>
                </div>
            </SectionCard>
        </MidSecWrapper>
    );
}

export default MidSec;
const MidSecWrapper = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 2rem;
    padding: 2rem;
    background-color: #ffffff;
    flex-wrap: wrap;
    cursor: pointer;
`;

const SectionCard = styled.div`
    height: 324px;
    width: 430px;
    background-image: ${(props) => props.bg};
    background-size: cover;
    background-position: center;
    border-radius: 12px;
    position: relative;
    overflow: hidden;
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);

    .content {
    position: absolute;
    inset: 0;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    padding: 20px;
    color: #000;

        h3 {
            font-size: 0.9rem;
            text-transform: uppercase;
            letter-spacing: 1px;
            margin: 0 0 5px 0;
            top: 110px;

        }

        h1 {
            font-size: 2.9rem;
            margin: 5px 0;
            font-weight: bold;
        }

        p {
            text-decoration: underline;
            color: #c0392b;
            font-weight: 500;
            cursor: pointer;
            margin-top: 5px;
        }
    }
`;
