import React, { useEffect, useState, createRef } from 'react';
import { FaHome, FaBell } from "react-icons/fa";
import { FaInbox, FaGear } from "react-icons/fa6";
import { IoCameraReverseOutline, IoCloseCircle } from "react-icons/io5";
import { IoMdLogOut } from "react-icons/io";
import { Link, useLocation } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { getStorage, ref, uploadBytes, getDownloadURL, uploadString } from "firebase/storage";
import { getAuth, updateProfile, signOut } from 'firebase/auth';
import { getDatabase, ref as dref, update } from 'firebase/database';
import Cropper from "react-cropper";
import "cropperjs/dist/cropper.css";
import { loggedinUserInfo } from '../slices/userSlice';
import { ProgressBar } from 'react-loader-spinner'

const Sidebar = () => {
    const auth = getAuth();
    const db = getDatabase();

    let dispatch = useDispatch()

    //React Cropper
    const [image, setImage] = useState(null);
    const [cropData, setCropData] = useState("");
    const cropperRef = createRef();


    let data = useSelector((state) => state.userInfo.value)

    const storage = getStorage();

    const location = useLocation();
    const isDashboardActive = location.pathname === '/' || location.pathname === '/dashboard';

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

    let [uploadingPic, setUploadingPic] = useState(false)

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
                        update(dref(db, 'users/' + data.uid), {
                            profilePic: downloadURL
                        });

                        // Ui Stuff
                        setImageModal(false)
                        setUploadingPic(true)
                    }).then(() => {
                        setTimeout(() => {
                            setUploadingPic(false)
                            setImageModal(false)
                        }, 2000)
                    })
                });
            });
        }
    };

    let handleSignOut = () => {


        const auth = getAuth();
        signOut(auth).then(() => {
            // Sign-out successful.
        }).catch((error) => {
            // An error happened.
        });
    }

    return (
        <section id='sidebar' className='flex-shrink-0 w-[260px] h-screen pl-[32px] pr-[43px] py-[35px]'>
            <div className="w-full h-full bg-black rounded-[20px] pt-[38px] pb-[48px] flex flex-col justify-between">
                <div className="flex flex-col gap-4 mx-auto text-white items-center group cursor-pointer">
                    <div className="w-[100px] h-[100px] rounded-full bg-red-100 relative overflow-hidden">
                        <img src={data && data.photoURL} alt="profile pic" className='w-full h-full' />
                        <div onClick={() => setImageModal(true)} className="w-full h-full bg-black/40 absolute top-0 left-0 flex justify-center items-center text-2xl opacity-0 group-hover:opacity-100 duration-300">
                            <IoCameraReverseOutline />
                        </div>
                    </div>
                    <h4 className='w-[80%] text-center text-lg'>{data && data.displayName}</h4>
                </div>
                <ul className='flex flex-col items-center gap-[70px] text-[42px] text-gray-500 mt-[-65px] relative'>
                    <li className="relative group">
                        <Link to='/' className={`${isDashboardActive ? 'text-white' : ''}`}>
                            <FaHome />
                        </Link>
                        <span className="absolute left-1/2 translate-x-[-50%] top-[-36px] bg-gray-700 text-white text-sm rounded px-2 py-1 opacity-0 group-hover:opacity-100 transition-opacity">
                            Dashboard
                        </span>
                    </li>
                    <li className="relative group">
                        <Link to='/messages' className={`${location.pathname === '/messages' ? 'text-white' : ''}`}>
                            <FaInbox />
                        </Link>
                        <span className="absolute left-1/2 translate-x-[-50%] top-[-36px] bg-gray-700 text-white text-sm rounded px-2 py-1 opacity-0 group-hover:opacity-100 transition-opacity">
                            Inbox
                        </span>
                    </li>
                    <li className="relative group">
                        <Link to='/notifications' className={`${location.pathname === '/notifications' ? 'text-white' : ''}`}>
                            <FaBell />
                        </Link>
                        <span className="absolute left-1/2 translate-x-[-50%] top-[-36px] bg-gray-700 text-white text-sm rounded px-2 py-1 opacity-0 group-hover:opacity-100 transition-opacity">
                            Notifications
                        </span>
                    </li>
                    <li className="relative group">
                        <Link to='/settings' className={`${location.pathname === '/settings' ? 'text-white' : ''}`}>
                            <FaGear />
                        </Link>
                        <span className="absolute left-1/2 translate-x-[-50%] top-[-36px] bg-gray-700 text-white text-sm rounded px-2 py-1 opacity-0 group-hover:opacity-100 transition-opacity">
                            Settings
                        </span>
                    </li>
                </ul>
                <div className="relative group text-[46px] text-red-600 hover:text-red-800 duration-300 mx-auto">
                    <button onClick={handleSignOut}>
                        <IoMdLogOut />
                    </button>
                    <span className="absolute left-1/2 translate-x-[-50%] top-[-36px] bg-gray-700 text-white text-sm rounded px-2 py-1 opacity-0 group-hover:opacity-100 transition-opacity">
                        Logout
                    </span>
                </div>
            </div>
            {imageModal &&
                <div className="z-10 bg-black/30 absolute top-0 left-0 w-full h-full flex justify-center items-center">
                    <div className="w-[650px] h-[740px] bg-white rounded-lg flex flex-col justify-between overflow-hidden">
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
            {uploadingPic &&
                <div className="z-10 bg-white/60 absolute top-0 left-0 w-full h-full flex flex-col justify-center items-center gap-6">
                    <ProgressBar
                        visible={true}
                        height="120"
                        width="120"
                        color="#4fa94d"
                        ariaLabel="progress-bar-loading"
                        wrapperStyle={{}}
                        wrapperClass=""
                    />
                    <div><h2 className='text-textColor text-6xl'>Profile Picture Uploading...</h2></div>
                </div>
            }
        </section >
    )
}

export default Sidebar;
