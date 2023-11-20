export const handleImageUpload = async(image)=>{
    const formData = new FormData();
    formData.append("file", image);
    formData.append("upload_preset", "veg-ecommerce");
    
    try {
        const response = await fetch(`https://api.cloudinary.com/v1_1/${process.env.REACT_APP_CLOUDINARY_ID}/image/upload`, {
            method: "POST",
            body: formData
        })
        const result = await response.json();
        return result.secure_url;
    } catch (error) {
        console.log(error);
    }
}