interface Image {
  id: String;
  title: String;
  description: String;
  datetime: Number;
  type: String;
  animated: Boolean;
  width: Number;
  height: Number;
  size: Number;
  views: Number;
  bandwidth: Number;
  vote: Number;
  favorite: Boolean;
  nsfw: Boolean;
  section: String;
  account_url: String;
  account_id: String;
  is_ad: Boolean;
  tags: Array;
  in_most_viral: Boolean;
  in_gallery: Boolean;
  link: String;
  comment_count: Number;
  ups: Number;
  downs: Number;
  points: Number;
  score: Number;
  is_album: Boolean;
}

type ImageState = {
  image: Image;
};

type ImageAction = {
  type: string;
  image: Image;
};

type DispatchType = (args: ImageAction) => ImageAction;

interface AllImages extends Array<Image> {}

type AllImagesState = {
  AllImages: AllImages;
};

type AllImagesAction = {
  type: string;
  AllImages: AllImages;
};

type DispatchType = (args: AllImagesAction) => AllImagesAction;

interface UseViralImages {
  viralImages: boolean;
}
type ViralImagesAction = {
  type: boolean;
  viralImages: UseViralImages;
};
type DispatchType = (args: ViralImagesAction) => ViralImagesAction;
