interface ISubstrings {
  subText: string;
  subStyles: string;
}

interface HowToPlaySlideTypes {
  num: number;
  title: string;
  description: string;
  buttonText: string;
  imgPath: string;
  substrings?: ISubstrings[];
}

export { ISubstrings, HowToPlaySlideTypes };