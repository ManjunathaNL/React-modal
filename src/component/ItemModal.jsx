import React from "react";
import { Modal, ModalHeader, ModalBody, ModalFooter } from "reactstrap";

const ItemModal = ({ item, show, onHide }) => {
  return (
    <>
      <Modal className="item" isOpen={show}>
        <ModalHeader></ModalHeader>
        <div className="close" title="Close" onClick={onHide}>
          X
        </div>
        <ModalBody>
          <div className="col-md-12" key={item.id}>
            <div className="card">
              <div className="card-body">
                <div className="images">
                  <img
                    src={item.thumbnail.large}
                    className="card-img-top"
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
                      className="card-img-top"
                      alt="img"
                      width={30}
                      height={30}
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
