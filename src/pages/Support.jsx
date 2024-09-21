import mhjim from '../assets/mhjim.png'
import signature from '../assets/signature.png'
import { FaScrewdriverWrench } from "react-icons/fa6";
import { IoHelpCircleOutline } from "react-icons/io5";
import SupportAccordion from '../components/SupportAccordion';


const Support = () => {
    return (
        <div className="w-full overflow-hidden py-9 pr-[46px] flex flex-col">
            <div className="">
                <h2 className='text-3xl font-semibold text-textColor flex gap-3 justify-center mb-11'><FaScrewdriverWrench className='my-auto' /> Support & Help Center</h2>
                <p className='flex w-full border border-slate-600 shadow-lg bg-slate-200 rounded-lg px-6 py-10 gap-1 '><IoHelpCircleOutline className=' text-textColor text-2xl' />
                    This is an open-source messenger app designed for real-time, one-on-one and group conversations. It allows users to communicate easily with friends and contacts through a simple and intuitive interface. With a focus on simplicity and ease of use, the app allows users to effortlessly connect with friends, family, or colleagues.</p>
            </div>
            <div className="mt-10 flex gap-9 justify-between">
                <div className="w-full h-[520px] bg-white border border-slate-300 shadow-md py-8 px-5 rounded-lg">
                    <h4 className='text-xl font-semibold text-textColor flex gap-3 justify-center mb-8'>frequently asked question~</h4>
                    <div className="">
                        <SupportAccordion />
                    </div>
                </div>
                <div className="w-full h-[520px] bg-white border border-slate-300 shadow-md py-8 rounded-lg relative">
                    <h4 className='text-xl font-semibold text-textColor flex gap-3 justify-center mb-8'>My Github~</h4>
                    <div className="flex flex-col md:flex-row items-center justify-between max-h-[480px] p-4 rounded-lg">
                        <div className="flex flex-col md:w-1/2 space-y-2">
                            <p>
                                <img
                                    src="https://komarev.com/ghpvc/?username=mehedihjim&label=Profile%20views&color=0e75b6&style=flat"
                                    alt="mehedihjim"
                                />
                            </p>
                            <p>
                                <a href="https://twitter.com/mhjiminfo" target="blank">
                                    <img
                                        src="https://img.shields.io/twitter/follow/mhjiminfo?logo=twitter&style=for-the-badge"
                                        alt="mhjiminfo"
                                    />
                                </a>
                            </p>

                            <p>🔭 I’m currently working on <strong>kaloChat</strong></p>
                            <p>🌱 I’m currently learning <strong>MERN Stack Development</strong></p>
                            <p>📝 I regularly write articles on <a href="https://mhjim.hashnode.dev/" target="_blank">Hashnode</a></p>
                            <p>💬 Ask me about <strong>anything</strong></p>
                            <p>📫 Reach me at <a href="https://beacons.ai/mhjim" target="_blank">here</a></p>
                            <p>⚡ Fun fact: <strong>I'm a Newbie</strong></p>

                            <h3>Connect with me:</h3>
                            <div className="flex space-x-4">
                                <a href="https://twitter.com/mhjiminfo" target="blank">
                                    <img
                                        className="h-8 w-8"
                                        src="https://raw.githubusercontent.com/rahuldkjain/github-profile-readme-generator/master/src/images/icons/Social/twitter.svg"
                                        alt="mhjiminfo"
                                    />
                                </a>
                                <a href="https://linkedin.com/in/mehedi-h-jim" target="blank">
                                    <img
                                        className="h-8 w-8"
                                        src="https://raw.githubusercontent.com/rahuldkjain/github-profile-readme-generator/master/src/images/icons/Social/linked-in-alt.svg"
                                        alt="mehedi-h-jim"
                                    />
                                </a>
                                <a href="https://fb.com/me.mhjim" target="blank">
                                    <img
                                        className="h-8 w-8"
                                        src="https://raw.githubusercontent.com/rahuldkjain/github-profile-readme-generator/master/src/images/icons/Social/facebook.svg"
                                        alt="me.mhjim"
                                    />
                                </a>
                                <a href="https://dribbble.com/me_mhjim" target="blank">
                                    <img
                                        className="h-8 w-8"
                                        src="https://raw.githubusercontent.com/rahuldkjain/github-profile-readme-generator/master/src/images/icons/Social/dribbble.svg"
                                        alt="me_mhjim"
                                    />
                                </a>
                                <a href="https://hashnode.com/@mhjim" target="blank">
                                    <img
                                        className="h-8 w-8"
                                        src="https://raw.githubusercontent.com/rahuldkjain/github-profile-readme-generator/master/src/images/icons/Social/hashnode.svg"
                                        alt="@mhjim"
                                    />
                                </a>
                            </div>
                        </div>

                        <div className="mt-4 md:mt-0 md:ml-6">
                            <img
                                className="w-full max-h-[400px] rounded-lg object-cover"
                                alt="mhjim git"
                                src="https://cdn.myportfolio.com/2fcfcb103788251450a8304378dffded/65198b6e-e407-4c8f-8500-6768cb35a76c_car_1x1.gif?h=cf2ee241356101c627e3efd748d598c0"
                            />
                        </div>
                    </div>
                    <a href="https://github.com/mehedihjim"><img src={signature} alt="mhjim" className='w-[250px] absolute right-0 bottom-0' /></a>
                </div>
            </div>
        </div>
    )
}

export default Support
