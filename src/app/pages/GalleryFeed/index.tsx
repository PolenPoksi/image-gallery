import { useEffect, useState, useRef } from "react";
import style from "./style.module.scss";
import { galleryImages } from "./mockdata";
import ImageCard from "../../components/ImageCard";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { shallowEqual, useDispatch, useSelector } from "react-redux";
import { fetchImages } from "../../../store/images/imageSlice";
import { AppDispatch } from "../../../store/store";

const sortOptions = [
  {
    id: 0,
    name: "Viral",
    value: "viral",
  },
  {
    id: 1,
    name: "Top",
    value: "top",
  },
  {
    id: 2,
    name: "Time",
    value: "time",
  },
  {
    id: 3,
    name: "Rising",
    value: "rising",
  },
];
const categoryOptions = [
  {
    id: 0,
    name: "Hot",
    value: "hot",
  },
  {
    id: 1,
    name: "Top",
    value: "top",
  },
  {
    id: 2,
    name: "User",
    value: "user",
  },
];
const windowOptions = [
  {
    id: 0,
    name: "Day",
    value: "day",
  },
  {
    id: 1,
    name: "Week",
    value: "week",
  },
  {
    id: 2,
    name: "Month",
    value: "month",
  },
  {
    id: 3,
    name: "Year",
    value: "year",
  },
  {
    id: 4,
    name: "All",
    value: "all",
  },
];

const ImageContent = () => {
  // Params State
  const [section, setSection] = useState("hot");
  const [sort, setSort] = useState("viral");
  const [windowSpec, setWindowSpec] = useState("day");

  //Dropdowns
  const [isDropdownCategoryOpen, setIsDropdownCategoryOpen] = useState(false);
  const [isDropdownSortOpen, setIsDropdownSortOpen] = useState(false);
  const [isDropdownWOpen, setIsDropdownWOpen] = useState(false);
  const [buttonSortName, setButtonSortName] = useState("Sort");
  const [buttonWindowName, setButtonWindowName] = useState("Window");
  const [buttonSectionName, setButtonSectionName] = useState("Section");

  const dispatch = useDispatch<AppDispatch>();

  // Close Dropdowns when click outside
  window.onclick = function (event) {
    if (
      event.target.id !== "CategoryButton" &&
      event.target.id !== "SortButton" &&
      event.target.id !== "WindowButton"
    ) {
      setIsDropdownCategoryOpen(false);
      setIsDropdownSortOpen(false);
      setIsDropdownWOpen(false);
    }
  };

  // get Image gallery with the default params on first render
  useEffect(() => {
    const params = { sort, section, windowSpec };
    dispatch(fetchImages(params));
  }, []);

  // update Image gallery
  useEffect(() => {
    const params = { sort, section, windowSpec };
    dispatch(fetchImages(params));
    console.log(dispatch(fetchImages(params)))
  }, [sort, section, windowSpec]);

  // Get image Gallery from global state
  const imageGallery = useSelector((state: any) => state.images.imageGallery);

  return (
    <div className={style.galleryContainer}>
      <Row className={style.orderWrapper}>
        <Col lg="4" md="4" xs="4" className={style.dropdownAlign}>
          <div className={style.dropdownWrapper}>
            <button
              className={style.dropdownButton}
              onClick={() => setIsDropdownWOpen(!isDropdownWOpen)}
              id="WindowButton"
            >
              {buttonWindowName}
            </button>
            {isDropdownWOpen && (
              <div className={style.dropdownContent}>
                {windowOptions.map((option) => (
                  <button
                    className={style.dropdownOption}
                    key={option?.id}
                    onClick={() => {
                      setWindowSpec(option.value);
                      setButtonWindowName(option.name);
                    }}
                  >
                    {option?.name}
                  </button>
                ))}
              </div>
            )}
          </div>
        </Col>
        <Col lg="4" md="4" xs="4" className={style.dropdownAlign}>
          <div className={style.dropdownWrapper}>
            <button
              className={style.dropdownButton}
              onClick={() => setIsDropdownCategoryOpen(!isDropdownCategoryOpen)}
              id="CategoryButton"
            >
              {buttonSectionName}
            </button>
            {isDropdownCategoryOpen && (
              <div className={style.dropdownContent}>
                {categoryOptions.map((option) => (
                  <button
                    className={style.dropdownOption}
                    key={option?.id}
                    onClick={() => {
                      setSection(option.value);
                      setButtonSectionName(option.name);
                    }}
                  >
                    {option?.name}
                  </button>
                ))}
              </div>
            )}
          </div>
        </Col>
        <Col lg="4" md="4" xs="4" className={style.dropdownAlign}>
          <div className={style.dropdownWrapper}>
            <button
              className={style.dropdownButton}
              onClick={() => setIsDropdownSortOpen(!isDropdownSortOpen)}
              id="SortButton"
            >
              {buttonSortName}
            </button>
            {isDropdownSortOpen && (
              <div className={style.dropdownContentLast}>
                {sortOptions.map((option) => (
                  <button
                    className={style.dropdownOption}
                    key={option?.id}
                    onClick={() => {
                      setSort(option.value);
                      setButtonSortName(option.name);
                    }}
                  >
                    {option?.name}
                  </button>
                ))}
              </div>
            )}
          </div>
        </Col>
      </Row>
      <Container>
        <Row className={style.cardsWrapper}>
          {imageGallery.map((image) => (
            <Col lg="4" className={style.card} key={image.id}>
              <ImageCard image={image} />
            </Col>
          ))}
        </Row>
      </Container>
    </div>
  );
};
export default ImageContent;
