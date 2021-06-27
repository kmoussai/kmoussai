import { RiMenuFill, RiCloseFill, RiGithubFill, RiLinkedinFill, RiTwitterFill, RiHeartFill } from 'react-icons/ri'
import Card from './Card'



export default function Technologies({ title }) {


    const data = {
        back: [

            {
                title: 'Express Js',
                desc: 'Express.js is a back end web application framework for Node.js',
                icon: '/Expressjs.png'

            }
        ],
        front: [
            {
                title: 'Tailwind CSS',
                desc: 'Tailwind CSS is self-described as a utility first CSS framework',
                icon: '/tailwind.png'

            },
            {
                title: 'Next Js',
                desc: 'Next.js is an open-source React front-end development web framework',
                icon: '/nextjs.png'

            },
            {
                title: 'React Js',
                desc: 'React.js is an open-source front-end JavaScript library for building user interfaces or UI components',
                icon: '/reactjs.png'

            },

        ]
    }
    return (
        <Card title={title}>
            <div className="w-full">
                <div className="my-1 w-full p-2 ">
                    <span className="font-mono uppercase p-3">Backend</span>
                    <div className="border-b border-gray-400 my-2" />
                    <div className="grid grid-cols-4 gap-2">
                        {data.back.map((item) => {
                            return (
                                <div key={item.title} className="dark:bg-gray-600 rounded-xl h-full shadow-xl transition-transform transform hover:scale-105 cursor-pointer duration-300 ease-in-out">
                                    <div className="flex justify-start items-center ">
                                        <img className="h-auto w-14 p-1" src={item.icon} />
                                        <div className="w-full text-left p-2 font-bold">
                                            <span>{item.title}</span>
                                        </div>
                                    </div>
                                    <p className="p-2 font-mono">{item.desc}</p>
                                </div>
                            )
                        })}
                    </div>

                </div>
                <div className="my-1 w-full p-2 ">
                    <span className="font-mono uppercase">Frontend</span>
                    <div className="border-b border-gray-400 my-2" />
                    <div className="grid grid-cols-4 gap-2">
                        {data.front.map((item) => {
                            return (
                                <div key={item.title} className="dark:bg-gray-600 rounded-xl h-full shadow-xl transition-transform transform hover:scale-105 cursor-pointer duration-300 ease-in-out">
                                    <div className="flex justify-start items-center ">
                                        <img className="h-auto w-14 p-1" src={item.icon} />
                                        <div className="w-full text-left p-2 font-bold">
                                            <span>{item.title}</span>
                                        </div>
                                    </div>
                                    <p className="p-2 font-mono">{item.desc}</p>
                                </div>
                            )
                        })}
                    </div>

                </div>
            </div>
        </Card>
    )

}