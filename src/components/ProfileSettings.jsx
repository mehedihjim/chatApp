import { IoCameraReverseOutline, IoCloseCircle } from 'react-icons/io5';
import { useDispatch, useSelector } from 'react-redux';
import { AiOutlineEdit } from "react-icons/ai";
import { BiMessageSquareEdit } from "react-icons/bi";
import { MdOutlineAddPhotoAlternate } from "react-icons/md";
import { IoMdHelpCircleOutline } from "react-icons/io";
import { createRef, useState } from 'react';
import Cropper from "react-cropper";
import "cropperjs/dist/cropper.css";
import { getStorage, ref, uploadBytes, getDownloadURL, uploadString } from "firebase/storage";
import { getAuth, updateProfile } from 'firebase/auth';
import { loggedinUserInfo } from '../slices/userSlice';

const ProfileSettings = () => {

    const auth = getAuth();
    let dispatch = useDispatch()
    const storage = getStorage();
    let data = useSelector((state) => state.userInfo.value)

    const [image, setImage] = useState(null);
    const [cropData, setCropData] = useState("");
    const cropperRef = createRef();

    let [imageModal, setImageModal] = useState(false)

    let handleImageFile = (e) => {
        let files;
        if (e.dataTransfer) {
            files = e.dataTransfer.files;
        } else if (e.target) {
            files = e.target.files;
        }
        const reader = new FileReader();
        reader.onload = () => {
            setImage(reader.result);
        };
        reader.readAsDataURL(files[0]);

    };

    let handleUpload = () => {
        const storageRef = ref(storage, `UserData/${auth.currentUser.uid}/profilePic`);

        if (typeof cropperRef.current?.cropper !== "undefined") {
            setCropData(cropperRef.current?.cropper.getCroppedCanvas().toDataURL());
            const message4 = cropperRef.current?.cropper.getCroppedCanvas().toDataURL();
            uploadString(storageRef, message4, 'data_url').then((snapshot) => {
                getDownloadURL(storageRef).then((downloadURL) => {
                    updateProfile(auth.currentUser, {
                        photoURL: downloadURL
                    }).then(() => {
                        dispatch(loggedinUserInfo(auth.currentUser))
                        setImageModal(false)
                    })
                });
            });
        }
    };

    return (
        <div className='bg-white shadow-md w-full h-[800px] py-[26px] px-[40px] rounded-2xl border border-textColor/20'>
            <h4 className='text-textColor text-xl font-semibold mb-12'>Profile Settings</h4>
            <div className="flex gap-[31px] items-center pb-[30px] border-b border-slate-300">
                <div className="w-[100px] h-[100px] rounded-full bg-red-100 relative overflow-hidden">
                    <img src={data.photoURL} alt="profile pic" className='w-full h-full' />
                    <div className="w-full h-full bg-black/40 absolute top-0 left-0 flex justify-center items-center text-2xl opacity-0 group-hover:opacity-100 duration-300">
                        <IoCameraReverseOutline />
                    </div>
                </div>
                <div className="flex flex-col gap-1">
                    <h4 className='text-textColor text-[25px] font-semibold'>{data.displayName}</h4>
                    <p className='text-xl'>Joy Bangla...</p>
                </div>
            </div>
            <div className="pt-[43px] pl-9">
                <ul className='flex flex-col gap-9'>
                    <li onClick={() => setImageModal(true)} className='cursor-pointer flex gap-9 items-center text-xl'><AiOutlineEdit className='text-[28px] font-bold text-textColor' />Edit Profile Photo</li>
                    <li className='cursor-pointer flex gap-9 items-center text-xl'><BiMessageSquareEdit className='text-[28px] font-bold text-textColor' />Edit Profile Status Info</li>
                    <li className='cursor-pointer flex gap-9 items-center text-xl'><MdOutlineAddPhotoAlternate className='text-[28px] font-bold text-textColor' />Edit Profile Name</li>
                    <li className='cursor-pointer flex gap-9 items-center text-xl'><IoMdHelpCircleOutline className='text-[28px] font-bold text-textColor' />Help</li>
                </ul>
            </div>
            {imageModal &&
                <div className="z-10 bg-black/30 absolute top-0 left-0 w-full h-full flex justify-center items-center">
                    <div className="w-[650px] h-[520px] bg-white rounded-lg flex flex-col justify-between overflow-hidden">
                        <div className="w-full h-[60px] bg-black flex items-center px-[30px] justify-between">
                            <h4 className='text-white font-bold'>Upload Photo!</h4>
                            <IoCloseCircle className='text-white font-normal text-xl cursor-pointer' onClick={() => setImageModal(false)} />
                        </div>
                        <div className="w-[75%] p-12 mx-auto flex justify-center items-center border-[4px] border-dotted">
                            <label className="cursor-pointer flex flex-col items-center">
                                <input type="file" className=" text-textColor text-sm px-4 py-2 rounded-md " onChange={handleImageFile} />
                                {/* <div className="bg-textColor text-white px-4 py-2 rounded-md shadow-md hover:bg-black transition-colors duration-300">
                                Upload File
                            </div> */}
                            </label>
                        </div>
                        {image &&
                            <Cropper
                                ref={cropperRef}
                                style={{ height: 400, width: "100%" }}
                                zoomTo={0.5}
                                initialAspectRatio={1}
                                preview=".img-preview"
                                src={image}
                                viewMode={1}
                                minCropBoxHeight={10}
                                minCropBoxWidth={10}
                                background={false}
                                responsive={true}
                                autoCropArea={1}
                                checkOrientation={false}
                                guides={true}
                            />
                        }
                        <div className="w-full h-[60px] border flex items-center justify-end gap-4 px-[30px]">
                            <button onClick={() => setImageModal(false)} className='bg-gray-200 py-1 px-3 border border-slate-300 rounded-full'>Cancel</button>
                            <button onClick={handleUpload} className='bg-black text-white py-1 px-3 border border-slate-300 rounded-full'>Upload</button>
                        </div>
                    </div>
                </div>
            }
        </div>
    )
}

export default ProfileSettings