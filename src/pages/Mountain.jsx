import React from 'react';
import styled from 'styled-components';

// Styled Components for layout
const VideoContainer = styled.div`
  width: 100%;
  height: 60vh;
  overflow: hidden;
`;

const BackgroundVideo = styled.video`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

const ContentContainer = styled.div`
  padding: 40px 20px;
  background-color: #f9f9f9;
`;

const Section = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 40px;
  padding: 20px;
  background: #fff;
  border-radius: 10px;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.1);
  
  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

const SectionContent = styled.div`
  flex: 1;
  margin-right: 20px;

  @media (max-width: 768px) {
    margin-right: 0;
    margin-bottom: 20px;
  }
`;

const SectionImage = styled.img`
  width: 300px;
  border-radius: 10px;

  @media (max-width: 768px) {
    width: 100%;
  }
`;

const Footer = styled.footer`
  background-color: #333;
  color: white;
  padding: 20px;
  text-align: center;
`;

const SocialLinks = styled.div`
  margin-top: 10px;

  a {
    color: white;
    margin: 0 15px;
    text-decoration: none;
    font-size: 24px;
  }

  a:hover {
    color: #ddd;
  }
`;

const Mountain = () => {
  return (
    <div>
      {/* Background Video Section */}
      <VideoContainer>
        <BackgroundVideo autoPlay loop muted>
          <source src="/trk.mp4" type="video/mp4" />
        </BackgroundVideo>
      </VideoContainer>

      {/* Content Section */}
      <ContentContainer>
        {/* Section 1: Distance */}
        <Section>
          <SectionContent>
            <h2>Distance</h2>
            <p>
            Here are 5 key points regarding the **distance** of the Triund Trek:

<ul>1. **Total Trek Distance**: The **total distance** from McLeod Ganj to the Triund summit is approximately **9 km**</ul>

<ul>2. **Starting Points**: You can start the trek from either **Dharamkot (8 km)** or **Bhagsu Nag (9 km)**. Both routes eventually merge on the way to Triund.</ul>

<ul>3. **Hike Duration**: It typically takes **4-6 hours** to cover the distance, depending on your pace and the number of breaks you take.</ul>

<ul>4. **Elevation Gain**: The trek involves an **elevation gain** of about 1,100 meters, starting from an altitude of approximately 2,000 meters (McLeod Ganj) to 2,850 meters (Triund).</ul>

<ul>5. **Distances to Nearby Landmarks**: After reaching Triund, trekkers often continue to **Snowline**, which is around 4-5 km further from the Triund summit for those seeking a more challenging hike.
</ul>
<ul>
These points give a clear idea of the trek's distance and how it varies based on the starting point and further exploration.</ul>
            </p>
          </SectionContent>
          <SectionImage src="mountain3.jpg" alt="Triund Distance" />
        </Section>
        <Section>
          <SectionContent>
            <h2>How to Travel</h2>
            <p>
            Here are 10 key points for traveling to the **Triund Trek**:

            <ul>1. **Location**: Triund is located in Himachal Pradesh, India, near McLeod Ganj in the Kangra district, approximately 9 km from McLeod Ganj.</ul>

            <ul>2. **Best Time to Visit**: The ideal time for the trek is from **March to June** and **September to December**. Avoid the monsoon season (July-August) due to heavy rainfall and possible landslides.</ul>

            <ul>3. **How to Reach McLeod Ganj**:
   - **By Air**: Fly to **Kangra Airport (Dharamshala)**, which is around 20 km from McLeod Ganj.
   - **By Train**: Nearest railway station is **Pathankot**, about 90 km away.
   - **By Road**: Buses or taxis from Delhi, Chandigarh, or other nearby cities.</ul>
   <ul>
4. **Trekking Route**: The trek starts from **Dharamkot** or **Bhagsu Nag**, with the path clearly marked. It’s a 7-9 km trek from the base to the top, depending on where you start.</ul>
<ul>
5. **Difficulty Level**: It's a **moderate trek**, suitable for beginners but still challenging due to the steep sections towards the end. It takes about 4-6 hours to complete.
</ul>
<ul>
6. **Packing Essentials**: 
   - **Clothing**: Light layers in summer, warm clothes for colder months, waterproof jacket.
   - **Footwear**: Comfortable trekking shoes.
   - **Others**: Water bottle, snacks, sunscreen, sunglasses, a first-aid kit, and a flashlight.
   </ul>
   <ul>
7. **Accommodation**: You can camp at Triund or stay in guesthouses in **McLeod Ganj** or **Dharamkot**. If camping, book tents in advance or carry your own gear.</ul>
<ul>
8. **Food Availability**: There are small tea stalls along the way where you can get snacks and drinks, but it’s recommended to carry some **energy bars or light snacks** for the trek.
</ul>
<ul>
9. **Permit**: Currently, no special permits are required for Triund, but it’s always a good idea to check for any local rules or fees.</ul>
<ul>
10. **Altitude and Views**: The summit is at an altitude of around **2,850 meters (9,350 feet)**, offering stunning views of the **Dhauladhar range** and the **Kangra Valley**. The night sky is also a highlight if you plan to camp.
</ul>

Enjoy the breathtaking views and the serenity of nature!
            </p>
          </SectionContent>
          <SectionImage src="travel.jpeg" alt="How to Travel to Triund" />
        </Section>
        <Section>
          <SectionContent>
            <h2>Necessary Items</h2>
            <p>Here are 5 essential items for the **Triund Trek**:
            <ul>
1. **Trekking Shoes**: Comfortable, sturdy shoes with good grip for the rocky and uneven terrain.
</ul>
<ul>
2. **Clothing and Layers**: Light, breathable clothing for the day, and warm layers for the cooler temperatures at night.</ul>
<ul>
3. **Water and Snacks**: Carry at least 2 liters of water and energy-rich snacks like dry fruits or energy bars for the trek.</ul>
<ul>
4. **Rain Gear**: A waterproof jacket or poncho in case of unexpected rain, especially during the shoulder season.</ul>
<ul>
5. **Flashlight/Headlamp**: Useful if you plan to trek early morning, late evening, or camp overnight, as there is no electricity at the top.</ul>

These items will ensure a comfortable and safe trek!
            </p>
          </SectionContent>
          <SectionImage src="items.jpeg" alt="Necessary Items for Triund Trek" />
        </Section>

        {/* Section 2: Food */}
        <Section>
          <SectionContent>
            <h2>Food</h2>
            <p>
            Here are 5 points about **food** for the Triund Trek:
            <ul>
1. **Tea Stalls Along the Route**: You'll find small tea stalls along the trekking path where you can buy snacks like Maggi, tea, and biscuits.</ul>
<ul>
2. **Packed Snacks**: Carry light and energy-dense snacks like nuts, energy bars, and chocolates to keep you fueled during the trek.</ul>
<ul>
3. **Water and Hydration**: Bring at least 2 liters of water, as staying hydrated is crucial. There are limited water sources on the way.</ul>
<ul>
4. **Meals at Triund**: At the Triund summit, there are a few dhabas (food stalls) offering simple meals like rice, dal, and Maggi.</ul>
<ul>
5. **Self-Cooking Option**: If you're camping and have cooking gear, you can bring your own ingredients for a more personalized meal experience at the top.
</ul>
These will ensure you stay energized and nourished throughout the trek!
            </p>
          </SectionContent>
          <SectionImage src="food.jpeg" alt="Triund Food" />
        </Section>

        {/* Section 3: Experience */}
       
        <Section>
          <SectionContent>
            <h2>Hotels & Stay</h2>
            <p>
            Here are 10 points regarding **hotels and stay options** for the Triund Trek:
            <ul>
1. **Stay in McLeod Ganj or Dharamkot**: Before or after the trek, you can stay in hotels or guesthouses in **McLeod Ganj** or **Dharamkot**, which offer a variety of budget to mid-range accommodations.</ul>
<ul>
2. **Guesthouses in Bhagsu Nag**: Bhagsu Nag, close to the trek’s starting point, also has budget guesthouses, providing an alternative if you want to start early.
</ul>
<ul>
3. **Camping at Triund**: The most popular option is **camping** at Triund. You can either bring your own tent or rent from local operators who provide tents, sleeping bags, and mats.
</ul>
<ul>
4. **Forest Department Guesthouse**: There is a **Forest Department guesthouse** at Triund, but it's limited and needs advance booking, especially in peak seasons.</ul>
<ul>
5. **No Hotels at Triund**: There are **no formal hotels** at the top of Triund, only camping and the forest rest house, so plan accordingly.</ul>
<ul>
6. **Pre-Booking Tents**: During peak trekking seasons (March-June, Sept-Dec), it’s advisable to **pre-book your tent** with a local tour operator to ensure availability.</ul>
<ul>
7. **Shared Tents**: If you're traveling alone or in a small group, some operators offer **shared tents** to help reduce costs and provide company.</ul>
<ul>
8. **Toilet Facilities**: Toilet facilities are basic at the campsites, often in the form of **makeshift toilets**, so be prepared for minimal amenities.</ul>
<ul>

9. **Safety and Security**: Staying in tents provided by licensed local operators ensures **safety and security** at night, as they are familiar with the area and weather conditions.</ul>
<ul>
10. **Alternatives to Camping**: If you're not comfortable with camping, you can do a **day trek** and return to McLeod Ganj or Dharamkot for accommodation the same evening.</ul>

These options cover a range of stays from budget-friendly to adventurous camping!
            </p>
          </SectionContent>
          <SectionImage src="mountain1.jpg" alt="Triund Hotels" />
        </Section>

        {/* Section 4: Hotels */}
       

        {/* Section 5: How to Travel */}
        

        {/* Section 6: Necessary Items */}
        <Section>
          <SectionContent>
            <h2>Experience</h2>
            <p>
            Here are 10 points about the **experience** of the Triund Trek:
            <ul>
1. **Scenic Beauty**: The trek offers breathtaking views of the **Dhauladhar mountain range** and the **Kangra Valley**, with lush green forests and panoramic vistas throughout the trail.
</ul>
<ul>
2. **Beginner-Friendly**: Triund is considered a **moderate trek**, making it ideal for beginners as well as seasoned trekkers, offering a rewarding experience without being too physically demanding.</ul>
<ul>
3. **Forest Walk**: The trek takes you through dense **pine, oak, and rhododendron forests**, with a serene atmosphere and the sound of birds, adding to the natural beauty of the journey.
</ul>
<ul>
4. **Diverse Terrain**: The trek has a mix of flat trails, gradual climbs, and steep ascents, especially in the final 1-2 km, providing a **variety of terrain** to experience.</ul>
<ul>
5. **Sunset and Sunrise**: If you stay overnight, the **sunset and sunrise** from the Triund summit are magical, with the changing colors of the sky reflecting on the snow-capped peaks.</ul>
<ul>

6. **Camping Under the Stars**: Camping at Triund is a unique experience with **clear skies full of stars**, making it perfect for stargazing and enjoying a peaceful night in nature.</ul>
<ul>
7. **Local Culture**: On the way, you can interact with the friendly local people of **McLeod Ganj, Dharamkot, and Bhagsu Nag**, learning about the Tibetan culture that thrives in the region.</ul>
<ul>
8. **Wildlife**: You may encounter **wild animals** like mountain goats, birds, and, occasionally, even leopards or black bears, adding an element of excitement to the trek.</ul>
<ul>
9. **Physical Challenge**: The steep ascent during the last part of the trek can be physically demanding, offering a **sense of accomplishment** once you reach the top.</ul>
<ul>
10. **Sense of Peace and Solitude**: The tranquility and isolation of Triund, away from the hustle of city life, provide a **peaceful and meditative experience**, perfect for reconnecting with nature.</ul>

The Triund trek is a blend of adventure, natural beauty, and serenity, making it a memorable experience for all kinds of travelers.
            </p>
          </SectionContent>
          <SectionImage src="exprience.jpg" alt="Triund Experience" />
        </Section>
      </ContentContainer>

      {/* Footer with Social Media Links */}
    
    </div>
  );
};

export default Mountain;
