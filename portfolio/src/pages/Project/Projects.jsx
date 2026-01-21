import images from '../../assets/image_assets/images';
import './Project.css';


const Project = ()=>{
    return(
        <div className="container2">
            <div className="project-section" id="project">
                <h2 className="project-header">Project</h2>
                <div className="project-container">
                    <div className="project-cart" id="project1">
                        <img className='project-img' src={images.project1} alt="" />
                        <div className="project-number project-number-left">01</div>
                        <div className="project-content">
                            <div className="project-skills-container">
                                <img src={images.mongodb} className="project-skill" alt="" srcset="" />
                                <img src={images.expresss} className="project-skill" alt="" srcset="" />
                                <img src={images.reactt} className="project-skill" alt="" srcset="" />
                                <img src={images.nodee} className="project-skill" alt="" srcset="" />
                            </div>
                            <div className="project-heading">Food-delivery</div>
                            <div className="proejct-subHeading">Hello his is a button group</div>
                            <div className="btn-grp">
                                <button className="btn-pink btn-project">Read More</button>
                                <a href="#">
                                    <i title="GitHubLink" className="fa-brands fa-github icon"></i>
                                </a>
                                <a href="#">
                                    <i title="Live Link" className="fa-solid fa-link icon"></i>
                                </a>
                            </div>
                        </div>
                    </div>
                    <div className="project-cart" id="project2">
                        <div className="project-number">02</div>
                        <div className="project-content">
                            <div className="project-skills-container">
                                <img src="images/4star.png" alt="" srcset="" />
                            </div>
                            <div className="project-heading">Apple clone</div>
                            <div className="proejct-subHeading">Hello his is a button group</div>
                            <div className="btn-grp">
                                <button className="btn-pink btn-project">Read More</button>
                                <a href="#">
                                    <i title="GitHubLink" className="fa-brands fa-github icon"></i>
                                </a>
                                <a href="#">
                                    <i title="Live Link" className="fa-solid fa-link icon"></i>
                                </a>
                            </div>
                        </div>
                    </div>
                    <div className="project-cart" id="project3">
                        <div className="project-number">03</div>
                        <div className="project-content">
                            <div className="project-skills-container" >
                                <img src="images/4star.png" alt="" srcset="" />
                            </div>
                            <div className="project-heading">Apple clone</div>
                            <div className="proejct-subHeading">Hello his is a button group</div>
                            <div className="btn-grp">
                                <button className="btn-pink btn-project">Read More</button>
                                <a href="#">
                                    
                                </a>
                                <a href="#">
                                    
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Project;