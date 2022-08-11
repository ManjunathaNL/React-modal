import "./App.css";
import { data } from "./users";
import "./styles.css";
import { useState } from "react";
import ItemModal from "./ItemModal";
import { Image } from "react-bootstrap";

function App() {
  const [showModel, setShowModel] = useState(false);
  const [modalData, setModalData] = useState();
  const [isHovered, setHovered] = useState(false);
  const [selectItem, setselectItem] = useState();

  // const handleToggle = (item) => {
  //   console.log(item);
  //   console.log(item.id);
  //   alert(`hi ${item.id}`);
  //   showModel(!model);
  // };

  const showButton = () => {};
  const hideButton = () => {};
  return (
    <div className="container">
      <div className="row">
        {data.map((item) => (
          <div className="col-md-6" key={item.id}>
            <div className="card">
              <div className="card-body">
                <div className="images image-container ">
                  <img
                    src={item.thumbnail.large}
                    className="card-img-top"
                    alt={item.title}
                    width={700}
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
                    <button
                      className="button-default btn-hover"
                      onMouseOver={() => {
                        setShowModel(true);
                        setModalData(item);
                      }}
                    >
                      learn more
                    </button>
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
