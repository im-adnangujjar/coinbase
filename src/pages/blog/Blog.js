import React from 'react'
import MainComponent from '../../component/mainComponent/MainComponent'
import image from '../../assets/image-2.webp'
import { data } from '../../constant/Constant'
import BlogCard from '../../component/blogCard/BlogCard'

function Blog() {
    console.log('data', data);
    return (
        <div className=''>
            <MainComponent img={image}>
                <div className="text-center mx-6 m-8 lg:text-start lg:ml-[8rem] xl:ml-[11.4rem] lg:max-w-[412px] max-w-none  ">
                    <h2 className=' font-poppins font-normal text-xs text-white mb-4'>HOME/BLOG</h2>

                    <p className="xl:text-[2.5rem] text-3xl leading-[3.7rem] font-bold  text-white">
                        Stay updated,
                        Never miss a post.
                    </p>
                    <p className="text-lg font-normal font-Poppins  text-white mt-[21px] mb-[1.9rem]">
                        Get to know the latest stuff about our services
                        via our blog post.
                    </p>
                </div>
            </MainComponent>
            <div className='px-5 mt-20'>
                <div className='w-full max-w-[73rem] mx-auto'>
                    {
                        data.map((items) => {
                            return <BlogCard data={items} />
                        })
                    }
                </div>
                <div className='flex flex-row justify-center items-center gap-3 mt-[7.2rem] mb-[9.1rem]  h-full'>
                    <button className='rounded-full text-lg  w-14 h-14' style={{ background: 'linear-gradient(178.18deg, #FD749B -13.56%, #281AC8 158.3%)' }}>01</button>
                    <button className='rounded-full w-[3.80rem] h-[3.80rem] text-lg bg-white  border border-gray-300'>02</button>
                    <button className='rounded-full w-[3.80rem] h-[3.80rem] text-lg bg-white  border border-gray-300'>03</button>
                    <button className='rounded-full w-[3.80rem] h-[3.80rem] text-lg bg-white  border border-gray-300'>…</button>
                    <button className='rounded-full w-[6.3rem] h-[3.80rem] text-lg bg-white  border border-gray-300'>Next</button>
                </div>
            </div>
        </div>
    )
}

export default Blog