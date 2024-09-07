const Loader = () => {
  return (
    <div>
      <div className="bg-black z-[99999] h-screen w-full fixed top-0 left-0 flex justify-around items-center slide-out-top">
        <div className="loader">
          <div className="loader-square"></div>
          <div className="loader-square"></div>
          <div className="loader-square"></div>
          <div className="loader-square"></div>
          <div className="loader-square"></div>
          <div className="loader-square"></div>
          <div className="loader-square"></div>
        </div>
      </div>
    </div>
  );
};

export default Loader;
