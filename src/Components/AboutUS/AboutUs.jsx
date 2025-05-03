import React from 'react';

const AboutUs = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div className="relative h-96 bg-gray-800 flex items-center justify-center">
        <div className="absolute inset-0 bg-black opacity-50"></div>
        <div className="relative z-10 text-center px-4">
          <h1 className="text-5xl font-bold text-white mb-6">Our Story</h1>
          <p className="text-xl text-gray-200 max-w-2xl mx-auto">
            Crafting quality footwear since 2010, delivering comfort and style to millions worldwide
          </p>
        </div>
      </div>

      {/* Company History Section */}
      <div className="container mx-auto px-4 py-16">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-800 mb-6">Our Journey</h2>
          <p className="text-gray-600 max-w-3xl mx-auto">
            From a small workshop to a global footwear brand, our path has been defined by passion, innovation, and commitment to excellence.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <div>
            <div className="relative">
              <img 
                src="/images/about/store-opening.jpg" 
                alt="First Store Opening" 
                className="rounded-lg shadow-xl w-full h-80 object-cover"
              />
              <div className="absolute -bottom-4 -right-4 bg-red-600 text-white px-6 py-2 rounded-lg">
                Est. 2010
              </div>
            </div>
          </div>
          <div>
            <h3 className="text-2xl font-bold text-gray-800 mb-4">The Beginning</h3>
            <p className="text-gray-600 mb-4">
              Our company was founded in 2010 by John Carter, a footwear designer with a vision to create shoes that perfectly balance style, comfort, and durability. What began as a small workshop with just three employees has grown into a global brand with over 500 team members worldwide.
            </p>
            <p className="text-gray-600">
              The first collection, launched in 2011, sold out within weeks, establishing our reputation for quality craftsmanship and innovative design. This early success allowed us to expand our product line and open our first flagship store in downtown Chicago in 2012.
            </p>
          </div>
        </div>
        
        <div className="mt-16 grid md:grid-cols-3 gap-8">
          <div className="bg-white p-6 rounded-lg shadow-md">
            <div className="text-red-600 font-bold text-xl mb-2">2010-2015</div>
            <h4 className="text-gray-800 font-semibold text-lg mb-3">Foundation Years</h4>
            <p className="text-gray-600">
              Established brand identity, opened first three retail locations, and developed our signature comfort technology that would become the foundation of all our footwear designs.
            </p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md">
            <div className="text-red-600 font-bold text-xl mb-2">2016-2020</div>
            <h4 className="text-gray-800 font-semibold text-lg mb-3">Growth & Innovation</h4>
            <p className="text-gray-600">
              Expanded to international markets, launched our sustainable footwear line, and received multiple industry awards for design excellence and environmental initiatives.
            </p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md">
            <div className="text-red-600 font-bold text-xl mb-2">2021-Present</div>
            <h4 className="text-gray-800 font-semibold text-lg mb-3">Global Impact</h4>
            <p className="text-gray-600">
              Established as a leading global footwear brand with presence in over 50 countries, pioneering advanced manufacturing techniques and setting new standards for sustainable practices.
            </p>
          </div>
        </div>
      </div>

      {/* Mission Section */}
      <div className="container mx-auto px-4 py-16">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="order-2 md:order-1">
            <h2 className="text-4xl font-bold text-gray-800 mb-6">Our Mission</h2>
            <p className="text-gray-600 mb-6">
              To revolutionize the footwear industry by combining innovative design with 
              sustainable practices, creating shoes that feel as good as they look.
            </p>
            <div className="bg-red-100 p-6 rounded-lg">
              <h3 className="text-xl font-semibold text-red-600 mb-3">Core Values</h3>
              <ul className="list-disc pl-6 text-gray-700">
                <li className="mb-2">Sustainability in manufacturing</li>
                <li className="mb-2">Customer-first approach</li>
                <li className="mb-2">Innovative design philosophy</li>
                <li>Ethical labor practices</li>
              </ul>
            </div>
          </div>
          <div className="order-1 md:order-2">
            <img 
              src="/images/about/shoes-factory.jpg" 
              alt="Shoe Craftsmanship" 
              className="rounded-lg shadow-xl w-full h-96 object-cover"
            />
          </div>
        </div>
      </div>

      {/* Manufacturing Process Section */}
      <div className="bg-gray-800 text-white py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-12">Our Craftsmanship</h2>
          
          <div className="grid md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="bg-red-600 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold">1</span>
              </div>
              <h3 className="text-xl font-semibold mb-3">Design</h3>
              <p className="text-gray-300">
                Our designers sketch concepts, create digital models, and work with ergonomics experts to ensure both style and comfort.
              </p>
            </div>
            
            <div className="text-center">
              <div className="bg-red-600 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold">2</span>
              </div>
              <h3 className="text-xl font-semibold mb-3">Material Selection</h3>
              <p className="text-gray-300">
                We source premium, sustainable materials from trusted suppliers who meet our strict ethical and environmental standards.
              </p>
            </div>
            
            <div className="text-center">
              <div className="bg-red-600 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold">3</span>
              </div>
              <h3 className="text-xl font-semibold mb-3">Crafting</h3>
              <p className="text-gray-300">
                Skilled artisans combine traditional techniques with modern technology to create each pair with precision and care.
              </p>
            </div>
            
            <div className="text-center">
              <div className="bg-red-600 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold">4</span>
              </div>
              <h3 className="text-xl font-semibold mb-3">Quality Control</h3>
              <p className="text-gray-300">
                Every pair undergoes rigorous testing for durability, comfort, and adherence to our high quality standards.
              </p>
            </div>
          </div>
          
          <div className="mt-16 text-center">
            <a href="#" className="inline-block border-2 border-white text-white px-6 py-3 rounded-lg hover:bg-white hover:text-gray-800 transition-colors">
              Learn More About Our Process
            </a>
          </div>
        </div>
      </div>

      {/* Sustainability Section */}
      <div className="container mx-auto px-4 py-16">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-800 mb-6">Sustainability Commitment</h2>
          <p className="text-gray-600 max-w-3xl mx-auto">
            We believe that great footwear shouldn't come at the expense of our planet. Our commitment to sustainability guides every decision we make.
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8">
          <div className="bg-white p-6 rounded-lg shadow-md">
            <div className="text-green-600 text-4xl mb-4">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
              </svg>
            </div>
            <h3 className="text-xl font-bold text-gray-800 mb-3">Recycled Materials</h3>
            <p className="text-gray-600">
              Over 60% of our materials come from recycled sources, including plastic bottles, reclaimed rubber, and repurposed textiles.
            </p>
          </div>
          
          <div className="bg-white p-6 rounded-lg shadow-md">
            <div className="text-green-600 text-4xl mb-4">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
              </svg>
            </div>
            <h3 className="text-xl font-bold text-gray-800 mb-3">Carbon Neutral</h3>
            <p className="text-gray-600">
              We've achieved carbon neutrality in our operations through renewable energy investments and carbon offset programs.
            </p>
          </div>
          
          <div className="bg-white p-6 rounded-lg shadow-md">
            <div className="text-green-600 text-4xl mb-4">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
              </svg>
            </div>
            <h3 className="text-xl font-bold text-gray-800 mb-3">Water Conservation</h3>
            <p className="text-gray-600">
              Our manufacturing processes use 80% less water than traditional footwear production through innovative dyeing and treatment methods.
            </p>
          </div>
        </div>
      </div>

      {/* Team Section */}
      <div className="bg-gray-100 py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center text-gray-800 mb-12">Meet Our Team</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { 
                name: 'John Carter',
                role: 'CEO & Founder',
                image: '/images/about/team1.jpg',
                bio: 'Visionary leader with 15+ years in footwear industry. John founded the company with a mission to create shoes that combine style, comfort, and sustainability.'
              },
              {
                name: 'Sarah Johnson',
                role: 'Head Designer',
                image: '/images/about/team2.jpg',
                bio: 'Award-winning designer focused on ergonomic solutions. Sarah has led the design team since 2012 and has been instrumental in creating our most iconic styles.'
              },
              {
                name: 'Michael Chen',
                role: 'Sustainability Officer',
                image: '/images/about/team3.jpg',
                bio: 'Pioneer in eco-friendly manufacturing processes. Michael joined in 2015 to lead our sustainability initiatives and has transformed our production methods.'
              },
              { 
                name: 'Elena Rodriguez',
                role: 'Head of Operations',
                image: '/images/about/team4.jpg',
                bio: 'Supply chain expert who ensures our global operations run smoothly while maintaining our commitment to ethical manufacturing practices.'
              },
              {
                name: 'David Kim',
                role: 'Chief Technology Officer',
                image: '/images/about/team5.jpg',
                bio: 'Tech innovator who leads our digital transformation, implementing cutting-edge solutions for both our manufacturing processes and customer experience.'
              },
              {
                name: 'Aisha Patel',
                role: 'Customer Experience Director',
                image: '/images/about/team6.jpg',
                bio: 'Customer advocate who ensures every interaction with our brand exceeds expectations, from in-store experience to online support.'
              }
            ].map((member, index) => (
              <div key={index} className="bg-white rounded-lg shadow-md overflow-hidden transition-transform duration-300 hover:-translate-y-2">
                <img 
                  src={member.image} 
                  alt={member.name} 
                  className="w-full h-64 object-cover"
                />
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-800 mb-2">{member.name}</h3>
                  <p className="text-red-600 font-medium mb-3">{member.role}</p>
                  <p className="text-gray-600">{member.bio}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Community Involvement */}
      <div className="container mx-auto px-4 py-16">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-800 mb-6">Community Impact</h2>
          <p className="text-gray-600 max-w-3xl mx-auto">
            We believe in giving back to the communities that support us. Our initiatives focus on education, environmental conservation, and promoting active lifestyles.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-12">
          <div className="bg-white p-8 rounded-lg shadow-md">
            <h3 className="text-2xl font-bold text-gray-800 mb-4">Shoe Donation Program</h3>
            <p className="text-gray-600 mb-4">
              For every ten pairs sold, we donate one pair to communities in need. Since 2015, we've donated over 500,000 pairs of shoes to children and adults worldwide.
            </p>
            <div className="flex items-center">
              <div className="bg-red-100 text-red-600 p-3 rounded-full mr-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v13m0-13V6a2 2 0 112 2h-2zm0 0V5.5A2.5 2.5 0 109.5 8H12zm-7 4h14M5 12a2 2 0 110-4h14a2 2 0 110 4M5 12v7a2 2 0 002 2h10a2 2 0 002-2v-7" />
                </svg>
              </div>
              <span className="text-gray-700 font-medium">500,000+ pairs donated</span>
            </div>
          </div>
          
          <div className="bg-white p-8 rounded-lg shadow-md">
            <h3 className="text-2xl font-bold text-gray-800 mb-4">Environmental Restoration</h3>
            <p className="text-gray-600 mb-4">
              Our partnership with global conservation organizations has led to the planting of over 1 million trees and the cleanup of coastal areas in 12 countries.
            </p>
            <div className="flex items-center">
              <div className="bg-green-100 text-green-600 p-3 rounded-full mr-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
                </svg>
              </div>
              <span className="text-gray-700 font-medium">1,000,000+ trees planted</span>
            </div>
          </div>
        </div>
      </div>

      {/* Stats Section */}
      <div className="bg-red-600 text-white py-16">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8 text-center">
            <div className="p-4">
              <div className="text-4xl font-bold mb-2">12M+</div>
              <div className="text-sm">Pairs Sold</div>
            </div>
            <div className="p-4">
              <div className="text-4xl font-bold mb-2">50+</div>
              <div className="text-sm">Countries Served</div>
            </div>
            <div className="p-4">
              <div className="text-4xl font-bold mb-2">150+</div>
              <div className="text-sm">Design Awards</div>
            </div>
            <div className="p-4">
              <div className="text-4xl font-bold mb-2">100%</div>
              <div className="text-sm">Customer Satisfaction</div>
            </div>
          </div>
        </div>
      </div>

      {/* Testimonials */}
      <div className="container mx-auto px-4 py-16">
        <h2 className="text-4xl font-bold text-center text-gray-800 mb-12">What Our Customers Say</h2>
        
        <div className="grid md:grid-cols-3 gap-8">
          {[
            {
              name: "James Wilson",
              location: "New York, NY",
              quote: "These are the most comfortable shoes I've ever owned. I can wear them all day without any discomfort.",
              image: "/images/about/customer1.jpg"
            },
            {
              name: "Maria Garcia",
              location: "Los Angeles, CA",
              quote: "Not only are these shoes stylish, but I love knowing they're made sustainably. Worth every penny!",
              image: "/images/about/customer2.jpg"
            },
            {
              name: "Robert Johnson",
              location: "Chicago, IL",
              quote: "The quality is exceptional. I've had my pair for three years and they still look and feel great.",
              image: "/images/about/customer3.jpg"
            }
          ].map((testimonial, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow-md">
              <div className="flex items-center mb-4">
                <img 
                  src={testimonial.image} 
                  alt={testimonial.name} 
                  className="w-12 h-12 rounded-full object-cover mr-4"
                />
                <div>
                  <h4 className="font-bold text-gray-800">{testimonial.name}</h4>
                  <p className="text-gray-500 text-sm">{testimonial.location}</p>
                </div>
              </div>
              <p className="text-gray-600 italic">"{testimonial.quote}"</p>
              <div className="mt-4 flex text-yellow-400">
                {[...Array(5)].map((_, i) => (
                  <svg key={i} className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* CTA Section */}
      <div className="container mx-auto px-4 py-16 text-center">
        <h2 className="text-4xl font-bold text-gray-800 mb-6">Join Our Journey</h2>
        <p className="text-gray-600 max-w-2xl mx-auto mb-8">
          We're always looking for passionate individuals to join our team and help shape the future of footwear.
        </p>
        <button className="bg-red-600 text-white px-8 py-3 rounded-lg text-lg font-semibold hover:bg-red-700 transition-colors">
          View Career Opportunities
        </button>
      </div>
    </div>
  );
};

export default AboutUs;