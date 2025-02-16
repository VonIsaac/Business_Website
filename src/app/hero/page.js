
import React from 'react'
import {TabNav, Box  } from '@radix-ui/themes'
import { Link as Navlink } from '@radix-ui/react-navigation-menu'
import { Projects } from '../projects/page'
import { About } from '../about/page'
export default function Hero() {
  return (
   <>
        <header className=" m-5">
            <div className="flex justify-between items-center">
                <h1 className='text-2xl tracking-wider font-black'>DEVLY</h1>
                <nav> {/* Ensuring it's a semantic wrapper */}
                <TabNav.Root color="gray" highContrast className="flex gap-4 tracking-wide">
                    <Navlink href="#" active>Home</Navlink>
                    <Navlink href="/projects">Projects</Navlink>
                    <Navlink href="/about">About</Navlink>
                    <Navlink href="/contact">Contact Us</Navlink>
                </TabNav.Root>
                </nav>
            </div>
        </header>

        <main >
            <div className=' flex justify-around items-center h-screen '>
                <div> 
                    <div className=' mb-8'>
                        <h1 className=' text-5xl tracking-wide font-bold'>
                            Innovating One App <br/>
                            at a Time.
                        </h1>
                    </div>
                    <div>
                        <p className=' text-lg tracking-wide '>
                            We build powerful and user-friendly mini apps that solve real world probles. <br/>
                            Explore our work and be part of the future.
                        </p>
                        
                    </div>
                </div>
                <div>
                    <div>
                        <Box maxWidth="500px" className='bg-white px-3 py-5 w-[250px] h-[200px]'>
                            <h1 className='text-center text-black'>ANIMATED</h1>
                        </Box>
                    </div>
                </div>
            </div>

           <Projects>
                    <ul className='flex gap-[250px]' >
                        <li>
                            <Box className='bg-white px-3 py-5 w-[200px] h-[180px] text-center text-black '>
                                Project
                            </Box>
                        </li>
                        <li>
                            <Box className='bg-white px-3 py-5 w-[200px] h-[180px] text-center text-black'>
                                Project
                            </Box>
                        </li>
                        <li>
                            <Box className='bg-white px-3 py-5 w-[200px] h-[180px] text-center text-black'>
                                Project
                            </Box>
                        </li>
                        <li>
                            <Box className='bg-white px-3 py-5 w-[200px] h-[180px] text-center text-black'>
                                Project
                            </Box>
                        </li>
                   </ul>
           </Projects>
           <About>
                    <ul className='flex gap-[250px]' >
                        <li>
                            <Box className='bg-white px-3 py-5 w-[200px] h-[180px] text-center text-black '>
                                Project
                            </Box>
                        </li>
                        <li>
                            <Box className='bg-white px-3 py-5 w-[200px] h-[180px] text-center text-black'>
                                Project
                            </Box>
                        </li>
                        <li>
                            <Box className='bg-white px-3 py-5 w-[200px] h-[180px] text-center text-black'>
                                Project
                            </Box>
                        </li>
                        <li>
                            <Box className='bg-white px-3 py-5 w-[200px] h-[180px] text-center text-black'>
                                Project
                            </Box>
                        </li>
                   </ul>

           </About>
        </main>
   
   </>
  )
}