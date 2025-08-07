import app from './app.js';
import cloudinary from 'cloudinary'
 
// server.js m hmne cloudinary ka setup kia h jaise koi docAvatar upload hoga too cloudinary pr store hoga
cloudinary.v2.config({
    cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
    api_key : process.env.CLOUDINARY_API_KEY,
    api_secret: process.env.CLOUDINARY_API_SECRET,
})
// server listen
app.listen(process.env.PORT , ()=> {
    console.log(`Server listening on port ${process.env.PORT}`);
});