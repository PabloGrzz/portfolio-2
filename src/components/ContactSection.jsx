import{useRef, useEffect} from "react"
import { gsap } from "gsap"
import{ ScrollTrigger } from "gsap/ScrollTrigger"  

const ContactSection = () => {

    const circleRef = useRef(null)
    const sectionRef = useRef(null)
    const initialTextRef = useRef(null)
    const finalTextRef = useRef(null)

    useEffect(() =>{

        gsap.registerPlugin(ScrollTrigger)

        //Aseguro matar las instancias de ScrollTrigger
        const cleanup = () => {
            ScrollTrigger.getAll().forEach((st) => {
                if(st.vars.trigger === sectionRef.current){
                    st.kill()
                }
            })
        }

        cleanup()

        // Estados iniciales
        gsap.set(circleRef.current, { scale: 1, backgroundColor: "white" })
        gsap.set(initialTextRef.current, { opacity: 1 })
        gsap.set(finalTextRef.current, { opacity: 0 })

        //TimeLine
        const tl = gsap.timeline({
            scrollTrigger: {

                trigger: sectionRef.current,
                start: "top top",
                end: "+=200%",
                pin: true,
                scrub: 0.5,
                anticipatePin: 1,
                fastScrollEnd: true,
                preventOverlaps: true,
                invalidateOnRefresh: true,

            },
            
        })

        //Estado Inicial mid-Zoom
        tl.to(
            circleRef.current,
            {
                scale: 5,
                backgroundColor: "#9333EA",
                ease: "power1.inOut",
                duration: 0.5,
            },
            0,
        )

        //Borramos texto inicial
        tl.to(
            initialTextRef.current,
            {
                opacity: 0,
                ease: "power1.out",
                duration: 0.2,
            },
            0.1,
        )

        //mid-Zoom a estado final
        tl.to(
            circleRef.current,
            {
                scale: 17,
                backgroundColor: "#E9D5FF",
                boxShadow: "0 0 50px 20px rgba(233, 213, 255, 0.3)",
                ease: "power2.inOut",
                duration: 0.5,
            },
            0.5,
        )

        //Aparece texto final
        tl.to(
            finalTextRef.current,
            {
                opacity: 1,
                ease: "power2.in",
                duration: 0.2,
            },
            0.7,
        )

        return cleanup

    },[])

  return (
    <section
    ref={sectionRef}
    className="flex items-center justify-center bg-black relative"
    style={{overscrollBehavior: "none"}}
    >

        <div ref={circleRef}
        className="w-24 sm:w-28 md:w-32 h-24 sm:h-28 md:h-32 rounded-full
        flex items-center justify-center relative transition-shadow duration-1000
        shadow-violet-300/50 shadow-lg bg-gradient-to-r from-violet-400 to-pink-100"
        >

            <p
                ref={initialTextRef}
                className="text-black font-bold text-base sm:text-lg md:text-xl absolute inset-0
                flex items-center text-center"
            >
                DESPLAZA HACIA ABAJO
            </p>

            {/*Texto final*/ }
            <div
                ref={finalTextRef}
                className="text-center relative flex flex-col items-center justify-center opacity-0"
            >
                <h1
                    className="text-black md:w-[15rem] w-full max-w-[35rem] lg:scale-[0.4] sm:scale-[0.25] scale-[0.07] 
                    md:font-bold text-sm sm:text-base leading-none mb-5"
                >
                    ¡HOLA! ESTOY BUSCANDO NUEVOS PROYECTOS
                    
                </h1>

                <p className="text-black lg:w-[40rem] w-[20rem] absolute sm:mt-3 mt-1 md:scale-[0.1] scale-[0.068]">
                    Desarrollador Full Stack especializado en crear aplicaciones modernas, web y móviles. Centrado en clean code y experiencias únicas de usuario. Si tienes un proyecto en mente, estaré encantado de hablar contigo.
                </p>

                <button className="px-10 py-2 rounded-xl bg-black hover:bg-white hover:text-black transition-all duration-500 scale-[0.1] absolute sm:mt-9 mt-7 text-nowrap">
                    Contactame
                </button>

            </div>
        
        </div>

    </section>
  )
}

export default ContactSection