import "./App.css";
import { data } from "./users";
import "./styles.css";
import { useState } from "react";
import ItemModal from "./ItemModal";

function App() {
  const [showModel, setShowModel] = useState(false);
  const [modalData, setModalData] = useState();
  const [isHovered, setHovered] = useState(false);
  return (
    <div className="container">
      <div className="row">
        {data.map((item) => (
          <div className="col-md-6" key={item.id}>
            <div className="card">
              <div className="card-body" style={{padding:0}}>
                <div className="images image-container ">
                  <img
                    src={item.thumbnail.large}
                    className="card-img-top"
                    alt={item.title}
                    width={1000}
                    height={300}
                    onMouseOver={() => {
                      setHovered(true);
                      setModalData(item);
                    }}
                    onMouseOut={() => {
                      setHovered(false);
                      setModalData();
                    }}
                  />
                  {item?.id === modalData?.id && (
                    <span
                      className="button-default btn-hover"
                      onMouseOver={() => {
                        setShowModel(true);
                        setModalData(item);
                      }}
                    >
                      learn more
                    </span>
                  )}
                </div>
                <div className="card-dec">
                  <h3 className="card-title">{item.title}</h3>
                  <p className="card-text">
                    {item.content}
                    <br />
                  </p>
                </div>
                <div className="author-div">
                  <span className="author">
                    {item.author.name} - {item.author.role}
                  </span>
                  <span className="date">{item.date}</span>
                </div>
              </div>
            </div>
          </div>
        ))}
        {showModel && (
          <ItemModal
            show={showModel}
            onHide={() => setShowModel(false)}
            item={modalData}
          />
        )}
      </div>
    </div>
  );
}

export default App;