import React, {useState} from 'react';
import {Avatar, Button} from "@mui/material";
import {useFormik} from "formik";
import * as Yup from "yup";
import logo from "../../Images/egg.jpg";
import ImageIcon from '@mui/icons-material/Image';
import FmdGoodIcon from '@mui/icons-material/FmdGood';
import TagFacesIcon from '@mui/icons-material/TagFaces';
import HootCard from "./HootCard";


const HomeSection = () =>  {

    const validationSchema = Yup.object().shape({
        content: Yup.string().required("Hoot text is required"),
    })

    const handleSubmit = (value) => {console.log("values", value)}

    const formik=useFormik({
        initialValues: {
            content:"",
            image:""
        },
        onSubmit: handleSubmit,
        validationSchema,
    })

    const [uploadingImage, setUploadingImage] = useState(false);
    const [selectedImage, setSelectedImage] = useState("")

    const handleSelectImage = (event)=>{
        setUploadingImage(true);
        const url=event.target.files[0];
        formik.setFieldValue("image",url);
        setSelectedImage(url);
        setUploadingImage(false);
    }
        return (
            <div className="space-y-5 ">
                <section>
                    <h1 className="py-5 text-x1 font-bold opacity-90">Home</h1>
                </section>
                <section className='pb-10'>
                    <div className="flex space-x-5">
                        <Avatar alt='username' src={logo}/>
                        <div className="w-full">
                            <form onSubmit={formik.handleSubmit}>
                                <div>
                                    <input type='text' name='content' placeholder='What is happening!?'
                                        className='border-none outline-none text-x1 bg-transparent'
                                        {...formik.getFieldProps("content")}/>
                                        {formik.errors.content && formik.touched.content && (
                                            <span className='text-red-500'>{formik.errors.content}</span>
                                        )}
                                </div>

                                <div className='flex justify-between items-center mt-5'>
                                    <div className='flex space-x-5 items-center'>
                                        <label className='flex items-center space-x-2 rounded-md cursor-pointer'>
                                        <ImageIcon className='text-[#C19A6B]'/>
                                        <input type='file'
                                               name='imageFile'
                                               className='hidden'
                                               onChange={handleSelectImage}/>
                                        </label>
                                        <FmdGoodIcon className='text-[#C19A6B]'/>
                                        <TagFacesIcon className='text-[#C19A6B]'/>
                                    </div>

                                    <div>
                                        <Button sx={{
                                            width: "100%",
                                            borderRadius: "29px",
                                            paddingY: "8px",
                                            paddingX: "20px",
                                            bgcolor: "#C19A6B",
                                            color: "white"
                                        }}
                                        variant = "contained"
                                        type='submit'
                                        onClick={handleSubmit}>
                                            Hoot
                                        </Button>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </section>
                <section>
                    {[1,1,1,1].map((item) => <HootCard/>)}
                </section>
            </div>
        );
    }


export default HomeSection;