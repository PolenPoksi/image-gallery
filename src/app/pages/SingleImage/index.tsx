import style from "./style.module.scss";
import { imageInfo } from "./singleMockData";
import { useState, useEffect } from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { useParams } from "react-router-dom";
import { useSelector, shallowEqual } from "react-redux";

function SingleImage() {
  // Get image Gallery from global state
  const imageGallery = useSelector((state: any) => state.images.imageGallery);

  const { id } = useParams();

  // Get the Image Data to be displayed in the Single Image Page

  const currentImage = imageGallery.find((image) => image.id == id);

  return (
    <Container>
      <div className={style.singleContainer}>
        <Row>
          <Col lg="8" className={style.mediaWrapper}>
            {currentImage?.type == "video" ? (
              <video className={style.video} muted={false} loop={true}>
                <source src={currentImage.link} type="video/mp4" />
              </video>
            ) : (
              <img className={style.image} src={currentImage.link} />
            )}
          </Col>
          <Col lg="4" className={style.infoWrapper}>
            <div className={style.firstInfoRow}>
              {currentImage.section && (
                <div className={style.imageSection}>{currentImage.section}</div>
              )}
              {currentImage.datetime && (
                <div className={style.dateTime}>{currentImage.datetime}</div>
              )}
            </div>
            {currentImage.title && (
              <div className={style.imageTitle}>{currentImage.title}</div>
            )}
            {currentImage.description && (
              <div className={style.imageDesc}>{currentImage.description}</div>
            )}

            <div className={style.lastInfoRow}>
              {currentImage.ups && (
                <div className={style.alignScores}>
                  <span className={style.infoDesc}>Ups</span>
                  <span className={style.imageUps}> {currentImage.ups}</span>
                </div>
              )}
              {currentImage.score && (
                <div className={style.alignScores}>
                  <span className={style.infoDesc}>Score</span>
                  <span className={style.imageScore}>{currentImage.score}</span>
                </div>
              )}
              {currentImage.downs && (
                <div className={style.alignScores}>
                  <span className={style.infoDesc}>Downs</span>
                  <span className={style.imageDowns}>{currentImage.downs}</span>
                </div>
              )}
            </div>
          </Col>
        </Row>
      </div>
    </Container>
  );
}

export default SingleImage;
