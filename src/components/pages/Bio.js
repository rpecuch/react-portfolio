import React from 'react';
//import necessary component
import Project from '../Project';
//import stylesheet
import '../../styles/work.css'
// import images
import metaPic from '../../images/metagenomics_pipeline.png';
import explorePic from '../../images/lms-exploratory.png';
import corrPic from '../../images/wgcna.png';
import crisprPic from '../../images/crispr.jpg';
import cancerPic from '../../images/breast_cancer.png';

//import carousel components
import {
    MDBCarousel,
    MDBCarouselItem,
  } from 'mdb-react-ui-kit';

function Bio () {
    //store project info in objects to allow passing data to project component (then display project component multiple times with different inputs --> displays different projects)
    const metagenomics = {
        id: 1,
        image: metaPic,
        alt: 'metagenomics project',
        link: "https://usegalaxy.org/published/workflow?id=0e3aab2ca69b4a2a",
        title: "Metagenomics Analysis for Sepsis Detection",
        description: "A metagenomics analysis for sepsis detection using R and command-line tools.",
        github: "https://github.com/rpecuch/sepsis-detection-metagenomics",
        tech: "Created using R and command-line tools on Galaxy server.",
        bClass: "light-caption active"
    }

    const lms_exploratory = {
        id: 2,
        image: explorePic,
        alt: "lms exploratory project",
        link: "https://github.com/rpecuch/lms-transcriptomic-biomarker-exploration",
        title: "LMS Transcriptomic Biomarker Exploration",
        description: "An exploratory analysis of transcriptomic biomarkers in LMS using R and Bioconductor packages.",
        github: "https://github.com/rpecuch/lms-transcriptomic-biomarker-exploration",
        tech: "Created using R and Bioconductor packages.",
        bClass: "light-caption"
    }

    const wgcna = {
        id: 3,
        image: corrPic,
        alt: "wgcna project",
        link: "https://github.com/rpecuch/lms_wgcna",
        title: "Weighted Gene Correlation Network Analysis of Leiomyosarcoma Transcriptomic Data",
        description: "A weighted gene correlation network analysis of LMS transcriptomic data.",
        github: "https://github.com/rpecuch/lms_wgcna",
        tech: "Created using R and Bioconductor packages.",
        bClass: "light-caption"
    }

    const crispr = {
        id: 4,
        image: crisprPic,
        alt: "crispr project",
        link: "https://github.com/rpecuch/crispr-gene-candidates",
        title: "CRISPR Gene Candidates Identification Pipeline",
        description: "A simple pipeline to to identify samples with suitable CRISPR gene candidates",
        github: "https://github.com/rpecuch/crispr-gene-candidates",
        tech: "Created using Python and Bash scripting.",
        bClass: "dark-caption"
    }

    const breast_cancer = {
        id: 5,
        image: cancerPic,
        alt: "breast cancer classification project",
        link: "https://github.com/rpecuch/breast-cancer-classification-model-eval",
        title: "Evaluation of breast cancer classification models for RNA sequencing data",
        description: "Training and evaluation of various classification models for breast cancer using RNA sequencing data.",
        github: "https://github.com/rpecuch/breast-cancer-classification-model-eval",
        tech: "Created using R and Bioconductor packages.",
        bClass: "dark-caption"
    }

    //displays Work Samples page using a carousel of project components
    return(
    <MDBCarousel showIndicators dark fade>
      <MDBCarouselItem
        className='w-100 d-block'
        itemId={1}
        src={lms_exploratory.image}
        alt={lms_exploratory.alt}
      >
        <Project bClass={lms_exploratory.bClass} link={lms_exploratory.link} title={lms_exploratory.title} github={lms_exploratory.github} description={lms_exploratory.description} tech={lms_exploratory.tech}/>
      </MDBCarouselItem>

      <MDBCarouselItem
        className='w-100 d-block'
        itemId={2}
        src={wgcna.image}
        alt={wgcna.alt}
      >
        <Project bClass={wgcna.bClass} link={wgcna.link} title={wgcna.title} github={wgcna.github} description={wgcna.description} tech={wgcna.tech}/>
      </MDBCarouselItem>

      <MDBCarouselItem
        className='w-100 d-block'
        itemId={3}
        src={metagenomics.image}
        alt={metagenomics.alt}
      >
        <Project bClass={metagenomics.bClass} link={metagenomics.link} title={metagenomics.title} github={metagenomics.github} description={metagenomics.description} tech={metagenomics.tech}/>
      </MDBCarouselItem>

      <MDBCarouselItem
        className='w-100 d-block'
        itemId={4}
        src={breast_cancer.image}
        alt={breast_cancer.alt}
      >
        <Project bClass={breast_cancer.bClass} link={breast_cancer.link} title={breast_cancer.title} github={breast_cancer.github} description={breast_cancer.description} tech={breast_cancer.tech}/>
      </MDBCarouselItem>

      <MDBCarouselItem
        className='w-100 d-block'
        itemId={5}
        src={crispr.image}
        alt={crispr.alt}
      >
        <Project bClass={crispr.bClass} link={crispr.link} title={crispr.title} github={crispr.github} description={crispr.description} tech={crispr.tech}/>
      </MDBCarouselItem>

    </MDBCarousel>
    )
}

export default Bio;