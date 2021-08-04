import { useState } from "react";
import { Dispatch, SetStateAction } from "react";
import ProjectPage from "./ProjectPage";
import "./Projects.css";
import ProjectsArray from "../../ProjectsArray";

interface props {
    projects: boolean | null;
    setProjects: Dispatch<SetStateAction<boolean | null>>;
    setResume: Dispatch<SetStateAction<boolean | null>>;
    setLastPage: Dispatch<SetStateAction<string>>;
}

const Projects = ({ projects, setProjects, setResume, setLastPage }: props) => {
    const [projectIndex, setProjectIndex] = useState<number | null>(null);
    const [lastProjectIndex, setLastProjectIndex] = useState<number | null>(0);
    const max = ProjectsArray.length - 1;

    return (
        <>
            <div
                className={
                    projects == null
                        ? "ProjectsParentCont"
                        : projects
                        ? "ProjectsParentCont active"
                        : "ProjectsParentCont unactive"
                }
            >
                {ProjectsArray.map((ProjectObject, i) => {
                    return (
                        <ProjectPage
                            name={ProjectObject.name}
                            link1={ProjectObject.link1}
                            link2={ProjectObject.link2}
                            about={ProjectObject.about}
                            about2={ProjectObject.about2}
                            tech={ProjectObject.tech}
                            index={i}
                            gif={ProjectObject.gif}
                            projectIndex={projectIndex}
                            lastProjectIndex={lastProjectIndex}
                            key={i}
                        />
                    );
                })}
            </div>
            {(projectIndex === null || projectIndex === 0) && projects && (
                <div className={"UpButtonCont"}>
                    <button
                        className="ChangeButton"
                        onClick={() => {
                            setProjects(false);
                            setResume(true);
                            setLastPage("projects");
                        }}
                    >
                        <div className="ButtonText">{"<"}</div>
                    </button>
                </div>
            )}
            {projects && projectIndex !== 0 && projectIndex !== null && (
                <div className={"UpButtonCont"}>
                    <button
                        className="ChangeButton"
                        onClick={() => {
                            if (projectIndex !== null) {
                                setLastProjectIndex(projectIndex);
                                setProjectIndex(projectIndex - 1);
                            }
                        }}
                    >
                        <div className="ButtonText">{"<"}</div>
                    </button>
                </div>
            )}
            {projects && projectIndex !== max && (
                <div className={"DownButtonCont"}>
                    <button
                        className="ChangeButton"
                        onClick={() => {
                            if (projectIndex === null) {
                                setLastProjectIndex(0);
                                setProjectIndex(1);
                            } else {
                                setLastProjectIndex(projectIndex);
                                setProjectIndex(projectIndex + 1);
                            }
                        }}
                    >
                        <div className="ButtonText">{">"}</div>
                    </button>
                </div>
            )}
        </>
    );
};

export default Projects;
