import image from "../assets/me.png";


const Me = () => {
  return (
    <div className="flex">
      <div>
        <img src={image} alt="Picture of me" />
      </div>
    </div>
  );
};

export default Me;