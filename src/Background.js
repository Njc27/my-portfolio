import React,{ useCallback } from 'react'
import Particles from "react-particles";
//import { loadFull } from "tsparticles"; // if you are going to use `loadFull`, install the "tsparticles" package too.
import { loadSlim } from "tsparticles-slim";

const Background = () => {
    const particlesInit = useCallback(async engine => {
        console.log(engine);
        // you can initiate the tsParticles instance (engine) here, adding custom shapes or presets
        // this loads the tsparticles package bundle, it's the easiest method for getting everything ready
        // starting from v2 you can add only the features you need reducing the bundle size
        //await loadFull(engine);
        await loadSlim(engine);
    }, []);

    const particlesLoaded = useCallback(async container => {
        await console.log(container);
    }, []);

  return (
    <Particles
            id="tsparticles"
            init={particlesInit}
            loaded={particlesLoaded}
            options={{
                // background: {
                //     color: {
                //         value: "#293148",
                //     },
                // },
                // fpsLimit: 140,
                // interactivity: {
                //     events: {
                //         onClick: {
                //             enable: true,
                //             mode: "push",
                //         },
                //         onHover: {
                //             enable: true,
                //             mode: "repulse",
                //         },
                //         resize: true,
                //     },
                //     modes: {
                //         push: {
                //             quantity: 4,
                //         },
                //         repulse: {
                //             distance: 200,
                //             duration: 1.4,
                //         },
                //     },
                // },
                particles: {
                    color: {
                        value: "#803D3B",
                    },
	        number: {
	            value: 80,
	            density: {
	                enable: true,
	                value_area: 1500
	            }
	        },
	        line_linked: {
	            enable: true,
	            opacity: 0.3,
                color:"#ADC4CE"
	        },
	        move: {
	            direction: "down",
	            speed: 2.05
	        },
	        size: {
	            value: 1.15
	        },
	        opacity: {
	            anim: {
	                enable: true,
	                speed: 1,
	                opacity_min: 0.2
	            }
	        }
	    },
	    interactivity: {
	        events:{
	            onclick: {
	                enable: true,
	                mode: "push"
	            }
	        },
	        modes: {
	            push: {
	                particles_nb: 1
	            }
	        }
	    },
	    retina_detect: true
            }}
        />
  )
}

export default Background