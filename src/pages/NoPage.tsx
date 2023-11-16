export default function NoPage() {
  return (
    <>
      <div className="left-sidebar">
        <img src="src\img\left-sidebar.png" alt="cartoon-collage" />
      </div>        
      <div className="right-sidebar">
        <img src="src\img\right-sidebar1.png" alt="anime-collage" />
      </div>
      <div className="container-body flex-container">
        <div className="body-content">
          <h2 className="glitch error">Error: 404</h2>
        </div>
      </div>
    </>
  );
}
