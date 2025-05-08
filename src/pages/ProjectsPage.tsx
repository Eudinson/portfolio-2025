import { Divider } from '@mui/material';
import { OpenInNewOutlined } from '@mui/icons-material';
import projectsItem from '../data/projectsData';

// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';

// import required modules
import { EffectCoverflow, Pagination } from 'swiper/modules';

const ProjectsPage = () => {
    return (
        <div className="projects-page-main-container">
            <h1>Projects</h1>
            <div className="projects-container">
                {
                    projectsItem.map((project, index) => (
                        <div key={project.id} className='projects-sub-container'>
                            <div className='project-title-and-description-wrapper'>
                                {
                                    project.link ?
                                        <a href={project.link} target='_blank'>
                                            <p className='project-title'>
                                                {project.title}
                                                <OpenInNewOutlined sx={{ transform: "scale(.7)" }} />
                                            </p>
                                        </a>
                                        :
                                        <p className='project-title'>
                                            {project.title}
                                        </p>
                                }

                                <p className='project-description'>{project.description}</p>
                            </div>
                            <div className='projects-images-container'>
                                <Swiper
                                    effect={'coverflow'}
                                    grabCursor={true}
                                    centeredSlides={true}
                                    slidesPerView={'auto'}
                                    coverflowEffect={{
                                        rotate: 50,
                                        stretch: 0,
                                        depth: 100,
                                        modifier: 1,
                                        slideShadows: true,
                                    }}
                                    pagination={true}
                                    modules={[EffectCoverflow, Pagination]}
                                    className="mySwiper"
                                >
                                    {
                                        project.images.map((image) => (
                                            <SwiperSlide key={image.id}>
                                                <img src={image.source} style={{ width: '100%', height: 'auto' }} />
                                            </SwiperSlide>
                                        ))
                                    }
                                </Swiper>
                            </div>
                            <br />
                            <br />
                            {
                                projectsItem.length !== index + 1 && <Divider />
                            }
                        </div>
                    ))
                }
            </div>
        </div>
    );
}

export default ProjectsPage;