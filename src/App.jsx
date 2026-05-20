import './App.css';
import myVideo from './combonets/assets/videos/244839_medium.mp4'
import FirstBar from './combonets/FirstBar';
function App() {
  return (
    <div className="relative h-screen">
            <video
        className="fixed top-0 left-0 w-full h-full object-cover -z-10"
        autoPlay
        loop
        muted
        src={myVideo}
      >
      </video>

      <div className="relative z-10 flex justify-center  pt-20">
        <FirstBar></FirstBar>
      </div>

    </div>
  );
}

export default App;
