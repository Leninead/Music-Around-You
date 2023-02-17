import banner from "../assets/banner.jpg";

const Welcome = ({greeting}) => {
    return (
      <div className='greeting-welcome'>{greeting}
  
  
      <img className='banner-picture' src={banner}/>
  
      </div>
  );
   
};

export default Welcome