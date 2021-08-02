import { Dispatch, SetStateAction } from "react";

import "./AboutMe.css";
import AboutMeContent from "./AboutMeContent";

interface props {
    about: boolean | null;
    setAbout: Dispatch<SetStateAction<boolean | null>>;
    setHome: Dispatch<SetStateAction<boolean | null>>;
    setResume: Dispatch<SetStateAction<boolean | null>>;
    resume: boolean | null;
    lastPage: string;
    setLastPage: Dispatch<SetStateAction<string>>;
}

const AboutMe = ({
    about,
    setAbout,
    setHome,
    setResume,
    resume,
    lastPage,
    setLastPage,
}: props) => {
    return (
        <>
            <div
                className={
                    about == null
                        ? "AboutMeParentCont"
                        : about
                        ? lastPage === "home"
                            ? "AboutMeParentCont active fromHome"
                            : "AboutMeParentCont active fromResume"
                        : resume
                        ? "AboutMeParentCont unactive resume"
                        : "AboutMeParentCont unactive home"
                }
            >
                <AboutMeContent />
            </div>
            {about && !resume && (
                <div className={"UpButtonCont"}>
                    <button
                        className="ChangeButton"
                        onClick={() => {
                            setAbout(false);
                            setHome(true);
                            setLastPage('about');
                        }}
                    >
                        <div className="ButtonText">{"<"}</div>
                    </button>
                </div>
            )}
            {about && !resume && (
                <div className={"DownButtonCont"}>
                    <button
                        className="ChangeButton"
                        onClick={() => {
                            setResume(true);
                            setAbout(false);
                            setLastPage('about');
                        }}
                    >
                        <div className="ButtonText">{">"}</div>
                    </button>
                </div>
            )}
        </>
    );
};

export default AboutMe;
