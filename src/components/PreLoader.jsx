import { useEffect, useState } from "react";

function PreLoader() {
    const [loaded, setLoaded] = useState(false);

    useEffect(() => {
        const handleLoad = () => {
            return setLoaded(true);
        }
        if(document.readyState === "complete"){
            handleLoad();
        } else{
            window.addEventListener('load', handleLoad);
            return () => window.removeEventListener('load', handleLoad);
        }   
    }, []);

    return (
        <>
            <div className={loaded ? "preloader preloader-deactivate" : "preloader"}>
                <div className="loader">
                    <div className="loader-outter"></div>
                    <div className="loader-inner"></div>

                    <div className="indicator"> 
                        <svg width="16px" height="12px">
                            <polyline id="back" points="1 6 4 6 6 11 10 1 12 6 15 6"></polyline>
                            <polyline id="front" points="1 6 4 6 6 11 10 1 12 6 15 6"></polyline>
                        </svg>
                    </div>
                </div>
            </div>
        </>
    )
}

export default PreLoader;