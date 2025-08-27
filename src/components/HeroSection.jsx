import {motion} from 'framer-motion';
import Spline from '@splinetool/react-spline';


const HeroSection = () => {
  return (
    
    <section className="h-screen bg-gradient-to-b from-violet-900 to-black flex 
    xl:flex-row flex-col-reverse items-center justify-between lg:px-24 px-10 relative 
    overflow-hidden">

        {/* Parte Izquierda */}

        <div className='z-40 xl:mb-0 mb-[20%]'>
            <motion.h1 
            initial={{ opacity: 0, y: 80 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
                type: "spring",
                stiffness: 40,
                damping: 25,
                delay: 1.3,
                duration: 1.5
            }}
            className="text-5xl md:text-7xl lg:text-8xl font-bold z-10 mb-6">
                Construyendo Rápido <br/>  Resultados Confiables
            </motion.h1>

            <motion.p 
            initial={{ opacity: 0, y: 80 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
                type: "spring",
                stiffness: 40,
                damping: 25,
                delay: 1.8,
                duration: 1.5
            }}
            className='text-xl md:text-1xl lg:text-2xl text-purple-200 max-w-2xl'>
                Me especializo en frontend con Angular y React, priorizando la experiencia de usuario y la calidad del código. También cuento con experiencia en backend con Java y Spring Boot, además de conocimientos en desarrollo móvil con Kotlin y Jetpack Compose para Android.
            </motion.p>

        </div>

        {/* Parte Derecha */}

        {/*<div className="flex-1 w-full h-full">
            <Spline
            scene="https://prod.spline.design/BKSrSCV0uathCOiQ/scene.splinecode"
            className="w-full h-full xl:rigth-[-28%] rigth-0 top-[-20%] lg:top-0"
            />
        </div>*/}
        

        <Spline className='absolute xl:right-[-28%] right-0 top-[-20%] lg:top-0' 
        scene="https://prod.spline.design/BKSrSCV0uathCOiQ/scene.splinecode" />


    </section>
    
  )
}

export default HeroSection