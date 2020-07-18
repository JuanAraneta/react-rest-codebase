import cloudinary from 'cloudinary';

export default (image) =>
  new Promise((res, rej) => {
    cloudinary.v2.uploader.upload(image, (error, result) => {
      if (error) rej(error);
      else res(result);
    });
  });
