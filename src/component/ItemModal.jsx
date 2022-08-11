import React from "react";
import { Modal, ModalHeader, ModalBody } from "reactstrap";
const ItemModal = ({ item, show, onHide }) => {
  return (
    <>
      <Modal className="item" isOpen={show}>
        <ModalHeader>
          <div  className="close" title="Close" onClick={onHide}>
            X
          </div>
        </ModalHeader>
        <ModalBody>
          <div className="col-md-12" key={item.id}>
            <div className="card">
              <div className="card-body" style={{padding:0}} >
                <div className="images">
                  <img
                    src={item.thumbnail.large}
                    className="card-img-top "
                    alt="img"
                    width={700}
                    height={300}
                  />
                </div>
                <div className="card-dec">
                  <h3 className="card-title">{item.title}</h3>
                  <p className="card-text">
                    {item.content}
                    <br />
                  </p>
                </div>
                <div className="author-div">
                  <span>
                    <img
                      src={item?.author?.avatar}
                      className="card-img-top profile"
                      alt={item.title}
                      width={40}
                      height={40}
                    />
                  </span>
                  <span className="author">
                    {item?.author?.name} - {item?.author?.role}
                  </span>
                </div>
              </div>
            </div>
          </div>
        </ModalBody>
      </Modal>
    </>
  );
};

export default ItemModal;