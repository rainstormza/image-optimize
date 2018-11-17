// https://medium.freecodecamp.org/image-optimization-558d9f449e3

const imagemin = require('imagemin')
const output = 'build/images'
const PNGImages = 'assets/images/promo-banner.png'
const JPEGImages = 'assets/images/mac-bg-min.jpg'

// JPG
// const imageminMozjpeg = require('imagemin-mozjpeg')
// const optimiseJPEGImages = () =>
//   imagemin([JPEGImages], output, {
//     plugins: [
//       imageminMozjpeg({
//         quality: 70
//       })
//     ]
//   })
// optimiseJPEGImages().catch(error => console.log(error))

// PNG
const imageminPngquant = require('imagemin-pngquant')
const optimisePNGImages = () =>
  imagemin([PNGImages], output, {
    plugins: [imageminPngquant({ quality: '65-80' })]
  })
optimisePNGImages().catch(error => console.log(error))

// WEBP
// const imageminWebp = require('imagemin-webp')
// const convertPNGToWebp = () =>
//   imagemin([PNGImages], output, {
//     use: [
//       imageminWebp({
//         quality: 85
//       })
//     ]
//   })
// const convertJPGToWebp = () =>
//   imagemin([JPGImages], output, {
//     use: [
//       imageminWebp({
//         quality: 75
//       })
//     ]
//   })
// optimiseJPEGImages()
//   .then(() => optimisePNGImages())
//   .then(() => convertPNGToWebp())
//   .then(() => convertJPGToWebp())
//   .catch(error => console.log(error))
