

const image = () => {
  const img = document.createElement('img');
  img.className='webpack-image';
  img.width = '200';
  img.height = '200';
  img.src = '../../assets/Webpack.png';
  return img;
}

export default image;