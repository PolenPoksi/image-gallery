import style from "./style.module.scss";
import { Link } from "react-router-dom";

const ImageCard = (image) => {
  const description = image.image.description;
  const title = image.image.title;
  const link = image.image.link;
  const id = image.image.id;

  return (
    <Link to={`/image/${id}`}>
      <div className={style.cardWrapper}>
        <img src={`${link}`} className={style.imageWrapper} />
        <div className={style.overlay}>
          <div className={style.imageInfo}>
            <p className={style.imageDescription}>{title}</p>
          </div>
        </div>
      </div>
    </Link>
  );
};
export default ImageCard;
