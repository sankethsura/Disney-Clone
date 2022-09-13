const images = [
  "https://firebasestorage.googleapis.com/v0/b/disney-clone-1-16344.appspot.com/o/images%2Fviewers-disney.png?alt=media&token=d5b70821-b4ba-4202-b1b7-c69e4964b298",
  "https://firebasestorage.googleapis.com/v0/b/disney-clone-1-16344.appspot.com/o/images%2Fviewers-marvel.png?alt=media&token=968c093e-bb90-4ece-9582-45c4b730e5c7",
  "https://firebasestorage.googleapis.com/v0/b/disney-clone-1-16344.appspot.com/o/images%2Fviewers-national.png?alt=media&token=5dae6890-47e4-4f29-9d73-e8727a50a958",
  "https://firebasestorage.googleapis.com/v0/b/disney-clone-1-16344.appspot.com/o/images%2Fviewers-pixar.png?alt=media&token=a42c1544-1870-4a56-9e6e-c93fb623eef6",
  "https://firebasestorage.googleapis.com/v0/b/disney-clone-1-16344.appspot.com/o/images%2Fviewers-starwars.png?alt=media&token=c73d2c32-d642-4e7f-9035-44508027febe"
];

const videos1 = [
    "https://firebasestorage.googleapis.com/v0/b/disney-clone-1-16344.appspot.com/o/videos%2F1564674844-disney.mp4?alt=media&token=0649d668-880c-4b5e-8da8-8d4bb96f4e7f",
    "https://firebasestorage.googleapis.com/v0/b/disney-clone-1-16344.appspot.com/o/videos%2F1564676115-marvel.mp4?alt=media&token=1b63fd8a-2637-4e36-85f9-8e8ebea7f875",
    "https://firebasestorage.googleapis.com/v0/b/disney-clone-1-16344.appspot.com/o/videos%2F1564676296-national-geographic.mp4?alt=media&token=ca20dea1-d5a8-4e60-9941-776ad9cba452",
    "https://firebasestorage.googleapis.com/v0/b/disney-clone-1-16344.appspot.com/o/videos%2F1564676714-pixar.mp4?alt=media&token=c430e2e0-357d-4c54-a8c3-014e3b9c3365",
    "https://firebasestorage.googleapis.com/v0/b/disney-clone-1-16344.appspot.com/o/videos%2F1608229455-star-wars.mp4?alt=media&token=758ec231-da9e-4d2a-98b0-deea30d8e2c9"
]

const videos2 = ["disney.mp4","marvel.mp4","national-geographic.mp4","pixar.mp4","star-wars.mp4"]

const SmallCards = () => {
  const imgs = images.map((ele, index) => {
    return (
      
        <div key={index} className="relative md:w-[250px] md:h-[140px] border-2 border-gray-500 rounded-lg flex items-center md:m-2 m-1 hover:scale-110 duration-300 w-[120px] h-[70px]">
          <img key={index} className="absolute " src={images[index]} alt="" />
          <video key={index+10} className="rounded-lg  opacity-0 hover:opacity-100 object-cover" autoPlay={true} loop={true} playsInline ={true}>
            <source key={index+20} src={videos1[index]} type='video/mp4' />
          </video>
        </div>
      );
  });

  return <div className="w-[90vw] m-auto flex justify-around flex-wrap pb-10">{imgs}</div>;
};

export default SmallCards;
