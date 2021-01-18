import React, { Component } from 'react'

export default class Projects extends Component {
  render() {
    return (
      	<div>
			<section className="colorlib-work" data-section="projects">
				<div className="colorlib-narrow-content">
					<div className="row">
						<div className="col-md-6 col-md-offset-3 col-md-pull-3 animate-box" data-animate-effect="fadeInLeft">
							<span className="heading-meta">My Work</span>
							<h2 className="colorlib-heading animate-box">Recent Projects</h2>
						</div>
					</div>
					<div className="row">
						<div className="col-md-4 animate-box" data-animate-effect="fadeInLeft">
							<div className="project" style={{backgroundImage: 'url(images/language-translation.jpg)'}}>
								<div className="desc">
									<div className="con">
										<h3><a href="work.html">Language Translation</a></h3>
										<span>Deep Learning (Machine Translation)</span>
										<p className="icon">
											<span><a href="https://github.com/porcelainruler/Language-Translation"><i className="icon-share3" /></a></span>
											<span><a href="#"><i className="icon-eye" /> 100</a></span>
											<span><a href="#"><i className="icon-heart" /> 49</a></span>
										</p>
									</div>
								</div>
							</div>
						</div>
						<div className="col-md-4 animate-box" data-animate-effect="fadeInRight">
							<div className="project" style={{backgroundImage: 'url(images/resume-shortlisting-1.jpg)'}}>
								<div className="desc">
									<div className="con">
										<h3><a href="work.html">Resume Shortlister</a></h3>
										<span>Artificial Intelligence(NLP)</span>
										<p className="icon">
											<span><a href="https://github.com/porcelainruler/Resume_Shortlister_AI-NLP"><i className="icon-share3" /></a></span>
											<span><a href="#"><i className="icon-eye" /> 100</a></span>
											<span><a href="#"><i className="icon-heart" /> 49</a></span>
										</p>
									</div>
								</div>
							</div>
						</div>
						<div className="col-md-4 animate-box" data-animate-effect="fadeInTop">
							<div className="project" style={{backgroundImage: 'url(images/search-engine.jpeg)'}}>
								<div className="desc">
									<div className="con">
										<h3><a href="work.html">Image Search Engine</a></h3>
										<span>Computer Vision</span>
										<p className="icon">
											<span><a href="https://github.com/porcelainruler/Image-Search-Engine"><i className="icon-share3" /></a></span>
											<span><a href="#"><i className="icon-eye" /> 100</a></span>
											<span><a href="#"><i className="icon-heart" /> 49</a></span>
										</p>
									</div>
								</div>
							</div>
						</div>
						<div className="col-md-4 animate-box" data-animate-effect="fadeInBottom">
							<div className="project" style={{backgroundImage: 'url(images/arrhythmia-detection-1.jpg)'}}>
								<div className="desc">
									<div className="con">
										<h3><a href="work.html">Arrhythmia Classification</a></h3>
										<span>Machine Learning and Deep Learning</span>
										<p className="icon">
											<span><a href="https://github.com/porcelainruler/Arrhythmia-Detection-BTP"><i className="icon-share3" /></a></span>
											<span><a href="#"><i className="icon-eye" /> 100</a></span>
											<span><a href="#"><i className="icon-heart" /> 49</a></span>
										</p>
									</div>
								</div>
							</div>
						</div>
						<div className="col-md-4 animate-box" data-animate-effect="fadeInLeft">
							<div className="project" style={{backgroundImage: 'url(images/restaurant-management-system-1.jpg)'}}>
								<div className="desc">
									<div className="con">
										<h3><a href="work.html">Restaurant Management System</a></h3>
										<span>Web Development(MERN) and Database</span>
										<p className="icon">
											<span><a href="https://github.com/porcelainruler/Restaurant-Management-System"><i className="icon-share3" /></a></span>
											<span><a href="#"><i className="icon-eye" /> 100</a></span>
											<span><a href="#"><i className="icon-heart" /> 49</a></span>
										</p>
									</div>
								</div>
							</div>
						</div>
						<div className="col-md-4 animate-box" data-animate-effect="fadeInRight">
							<div className="project" style={{backgroundImage: 'url(images/driver-drowsiness-detection-1.jpg)'}}>
								<div className="desc">
									<div className="con">
										<h3><a href="work.html">Driver Drowsiness Detection</a></h3>
										<span>Computer Vision and AI</span>
										<p className="icon">
											<span><a href="https://github.com/porcelainruler/Driver-Drowsiness-Detection"><i className="icon-share3" /></a></span>
											<span><a href="#"><i className="icon-eye" /> 100</a></span>
											<span><a href="#"><i className="icon-heart" /> 49</a></span>
										</p>
									</div>
								</div>
							</div>
						</div>
					</div>
					<div className="col-md-4 animate-box" data-animate-effect="fadeInLeft">
							<div className="project" style={{backgroundImage: 'url(images/portfolio-react.jpeg)'}}>
								<div className="desc">
									<div className="con">
										<h3><a href="work.html">Portfolio</a></h3>
										<span>Web Development(MERN) and Database</span>
										<p className="icon">
											<span><a href="#"><i className="icon-share3" /></a></span>
											<span><a href="#"><i className="icon-eye" /> 100</a></span>
											<span><a href="#"><i className="icon-heart" /> 49</a></span>
										</p>
									</div>
								</div>
							</div>
						</div>
					<div className="row">
						<div className="col-md-12 animate-box">
							<p><a href="#" className="btn btn-primary btn-lg btn-load-more">Load more <i className="icon-reload" /></a></p>
						</div>
					</div>
				</div>
			</section>
      	</div>
    )
  }
}
