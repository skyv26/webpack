import WebpackImage from '../assets/Webpack.png';

const image = () => {
  const img = document.createElement('img');
  img.className='webpack-image';
  img.width = '200';
  img.height = '200';
  img.src = WebpackImage;
  return img;
}

export default image;