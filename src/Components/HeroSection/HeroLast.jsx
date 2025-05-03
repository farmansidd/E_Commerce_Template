import React from 'react'
import styled from 'styled-components'

const HeroLastSection = styled.div`
  padding: 80px 0;
  background-color: #fff9f9;
  background-image: linear-gradient(to bottom, #fff9f9, #fff);
`

const Container = styled.div`
  width: 90%;
  max-width: 1200px;
  margin: 0 auto;
`

const HeroLastHeader = styled.div`
  text-align: center;
  margin-bottom: 60px;

  h1 {
    font-size: 2.8rem;
    margin-bottom: 15px;
    color: #333;
    font-weight: 700;
    position: relative;
    display: inline-block;
    
    &:after {
      content: '';
      position: absolute;
      bottom: -10px;
      left: 50%;
      transform: translateX(-50%);
      width: 80px;
      height: 3px;
      background-color:rgb(255, 0, 0);
    }
  }

  p {
    font-size: 1.3rem;
    color: #666;
    max-width: 700px;
    margin: 0 auto;
    line-height: 1.6;
  }
`

const ProductGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  gap: 30px;
  justify-content: center;
`

const ProductCard = styled.div`
  background: #fff;
  border-radius: 12px;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.08);
  padding: 20px;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  overflow: hidden;
  position: relative;
  height: 450px; // Reduced from 500px
  display: flex;
  flex-direction: column;

  h2 {
    margin: 15px 0 10px;
    font-size: 1.25rem;  // Reduced from 1.5rem
    color: #333;
    font-weight: 600;
  }
`

const ImageContainer = styled.div`
  position: relative;
  overflow: hidden;
  border-radius: 8px;
  margin-bottom: 15px;
  height: 180px;  // Reduced from 200px
  width: 100%;
  background: #f5f5f5;  // Fallback background

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: linear-gradient(180deg, rgba(0,0,0,0) 60%, rgba(0,0,0,0.4) 100%);
    z-index: 1;
    opacity: 0;
    transition: opacity 0.3s ease;
  }

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    transition: transform 0.5s ease;
  }

  ${ProductCard}:hover &::before {
    opacity: 1;
  }

  ${ProductCard}:hover img {
    transform: scale(1.03);
  }
`;

const QuickViewButton = styled.button`
  position: absolute;
  top: -40px;
  left: 50%;
  transform: translateX(-50%);
  padding: 8px 20px;
  background: white;
  color:rgb(255, 0, 0);
  border: none;
  border-radius: 20px;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;
  box-shadow: 0 2px 8px rgba(0,0,0,0.1);
  z-index: 2;

  ${ProductCard}:hover & {
    top: 15px;
  }
`

const ColorSwatches = styled.div`
  display: none;
  gap: 8px;
  justify-content: center;
  margin: 15px 0;

  ${ProductCard}:hover & {
    display: flex;
  }
`

const ColorSwatch = styled.div`
  width: 20px;
  height: 20px;
  border-radius: 50%;
  cursor: pointer;
  border: 2px solid ${props => props.color === '#ffffff' ? '#ddd' : 'transparent'};
  transition: transform 0.2s ease;

  &:hover {
    transform: scale(1.2);
  }
`

const RatingStars = styled.div`
  display: flex;
  align-items: center;
  gap: 5px;
  margin: 10px 0;

  span {
    font-size: 0.9rem;
    color: #666;
  }
`

const Button = styled.button`
  background-color:rgb(255, 0, 0);
  border: none;
  color: white;
  padding: 12px 24px;
  border-radius: 50px;
  cursor: pointer;
  font-size: 1rem;
  font-weight: 600;
  transition: all 0.3s ease;
  box-shadow: 0 4px 8px rgba(0, 123, 255, 0.2);
  position: relative;
  overflow: hidden;
  z-index: 1;

  &:before {
    content: '';
    position: absolute;
    top: 0;
    left: -100%;
    width: 100%;
    height: 100%;
    background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.2), transparent);
    transition: 0.5s;
    z-index: -1;
  }

  &:hover {
    background-color:rgb(0, 0, 0);
    transform: translateY(-3px);
    box-shadow: 0 6px 12px rgba(0, 123, 255, 0.3);
  }
  
  &:hover:before {
    left: 100%;
  }
  
  &:active {
    transform: translateY(0);
  }
  margin-top: auto; // Push button to bottom
`

const PriceTag = styled.div`
  position: absolute;
  top: 20px;
  right: 20px;
  background-color: #ff6b6b;
  color: white;
  padding: 5px 10px;
  border-radius: 20px;
  font-weight: bold;
  font-size: 0.9rem;
  box-shadow: 0 2px 5px rgba(0,0,0,0.1);
  opacity: 0;
  transform: translateY(-10px);
  transition: all 0.3s ease;
  
  ${ProductCard}:hover & {
    opacity: 1;
    transform: translateY(0);
  }
`

// Update the HeroFeatureSection to use a background image
const HeroFeatureSection = styled.div`
  display: flex;
  align-items: center;
  padding: 80px 0;
  background: linear-gradient(to right, rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.3)), url('/BgImg.jpg');
  background-size: cover;
  background-position: center;
  overflow: hidden;
  position: relative;
  min-height: 500px;
`

// Update the HeroFeatureContent to take full width
const HeroFeatureContent = styled.div`
  width: 50%;
  padding: 0 40px;
  text-align: right;
  color: white;
  margin-left: auto;
  
  @media (max-width: 768px) {
    width: 90%;
    text-align: center;
    padding: 40px 20px;
    margin: 0 auto;
  }
`

// Update the text colors for better visibility on dark background
const FeatureTagline = styled.div`
  font-size: 0.9rem;
  font-weight: 600;
  letter-spacing: 2px;
  color: #f8f8f8;
  margin-bottom: 15px;
  text-transform: uppercase;
`

const FeatureHeading = styled.h2`
  font-size: 3rem;
  font-weight: 700;
  line-height: 1.2;
  margin-bottom: 20px;
  color: white;
`

const FeatureDescription = styled.p`
  font-size: 1.1rem;
  line-height: 1.6;
  color: #f0f0f0;
  margin-bottom: 30px;
`

const ShopNowButton = styled.button`
  background-color: rgb(255, 0, 0);
  color: white;
  border: none;
  padding: 12px 30px;
  font-size: 1rem;
  font-weight: 600;
  border-radius: 4px;
  cursor: pointer;
  transition: all 0.3s ease;
  display: inline-flex;
  align-items: center;
  
  &:hover {
    background-color: #000;
    transform: translateY(-3px);
  }
  
  &:active {
    transform: translateY(0);
  }
  
  svg {
    margin-left: 8px;
  }
`

function HeroLast() {
  return (
    <>
      <HeroFeatureSection>
        <HeroFeatureContent>
          <FeatureTagline>COMFORT MEETS FASHION</FeatureTagline>
          <FeatureHeading>Discover shoes that look great and feel even better</FeatureHeading>
          <FeatureDescription>
            Our collection features comfortable and stylish footwear designed to keep your feet happy all day long.
          </FeatureDescription>
          <ShopNowButton>
            SHOP NOW
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M8 0L6.59 1.41L12.17 7H0V9H12.17L6.59 14.59L8 16L16 8L8 0Z" fill="white"/>
            </svg>
          </ShopNowButton>
        </HeroFeatureContent>
      </HeroFeatureSection>
      
      <HeroLastSection>
        <Container>
          <HeroLastHeader>
            <h1>Shop Our Latest Products</h1>
            <p>Discover the latest trends and styles in footwear. Shop now and step up your shoe game!</p>
          </HeroLastHeader>
          
          <ProductGrid>
            <ProductCard>
              <PriceTag>SALE!</PriceTag>
              <ImageContainer>
                <QuickViewButton>Quick View</QuickViewButton>
                <img src="/Shose1.jpg" alt="Hiking Shoes" />
              </ImageContainer>
              
              <ColorSwatches>
                <ColorSwatch style={{ background: "#2c3e50" }} />
                <ColorSwatch style={{ background: "#7f8c8d" }} />
                <ColorSwatch style={{ background: "#e74c3c" }} />
              </ColorSwatches>
              
              <h2>Trail Hiking Shoes</h2>
              
              <RatingStars>
                ★★★★☆
                <span>(128 reviews)</span>
              </RatingStars>
              
              <p>$99.99</p>
              <Button>
                🛒 Add to Cart
              </Button>
            </ProductCard>
            
            <ProductCard>
              <PriceTag>SALE!</PriceTag>
              <ImageContainer>
                <QuickViewButton>Quick View</QuickViewButton>
                <img src="/Shose2.jpg" alt="Running Shoes" />
              </ImageContainer>
              
              <ColorSwatches>
                <ColorSwatch style={{ background: "#000000" }} />
                <ColorSwatch style={{ background: "#3498db" }} />
                <ColorSwatch style={{ background: "#2ecc71" }} />
              </ColorSwatches>
              
              <h2>Black Performance Runners</h2>
              
              <RatingStars>
                ★★★★★
                <span>(94 reviews)</span>
              </RatingStars>
              
              <p>$89.99</p>
              <Button>
                🛒 Add to Cart
              </Button>
            </ProductCard>
            
            <ProductCard>
              <PriceTag>SALE!</PriceTag>
              <ImageContainer>
                <QuickViewButton>Quick View</QuickViewButton>
                <img src="/Shose3.jpg" alt="Athletic Shoes" />
              </ImageContainer>
              
              <ColorSwatches>
                <ColorSwatch style={{ background: "#34495e" }} />
                <ColorSwatch style={{ background: "#e67e22" }} />
                <ColorSwatch style={{ background: "#9b59b6" }} />
              </ColorSwatches>
              
              <h2>Comfort Athletic Shoes</h2>
              
              <RatingStars>
                ★★★★☆
                <span>(76 reviews)</span>
              </RatingStars>
              
              <p>$79.99</p>
              <Button>
                🛒 Add to Cart
              </Button>
            </ProductCard>
            
            <ProductCard>
              <PriceTag>SALE!</PriceTag>
              <ImageContainer>
                <QuickViewButton>Quick View</QuickViewButton>
                <img src="/Shose4.jpg" alt="Casual Shoes" />
              </ImageContainer>
              
              <ColorSwatches>
                <ColorSwatch style={{ background: "#2c3e50" }} />
                <ColorSwatch style={{ background: "#c0392b" }} />
                <ColorSwatch style={{ background: "#16a085" }} />
              </ColorSwatches>
              
              <h2>Urban Casual Sneakers</h2>
              
              <RatingStars>
                ★★★★★
                <span>(112 reviews)</span>
              </RatingStars>
              
              <p>$69.99</p>
              <Button>
                🛒 Add to Cart
              </Button>
            </ProductCard>
          </ProductGrid>
        </Container>
      </HeroLastSection>
    </>
  )
}

export default HeroLast
