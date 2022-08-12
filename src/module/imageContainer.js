import WebpackImage from '../assets/Webpack.png';

const image = () => {
  const img = document.createElement('img');
  img.className='webpack-image';
  img.width = '400';
  img.height = '400';
  img.src = WebpackImage;
  return img;
}

export default image;