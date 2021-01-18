import React, { Component } from 'react'

export default class Timeline extends Component {
  render() {
    return (
      <div>
        <section className="colorlib-experience" data-section="timeline">
          <div className="colorlib-narrow-content">
            <div className="row">
              <div className="col-md-6 col-md-offset-3 col-md-pull-3 animate-box" data-animate-effect="fadeInLeft">
                <span className="heading-meta">highlights</span>
                <h2 className="colorlib-heading animate-box">Timeline</h2>
              </div>
            </div>
            <div className="row">
              <div className="col-md-12">
                <div className="timeline-centered">
                  <article className="timeline-entry animate-box" data-animate-effect="fadeInLeft">
                    <div className="timeline-entry-inner">
                      <div className="timeline-icon color-3">
                        <i className="icon-pen2" />
                      </div>
                      <div className="timeline-label">
                        <h2>Internship at SAMSUNG Research Institute - Banaglore <span>May,2020-Jul,2020</span></h2>
                        <p>I recently have joined the SAMSUNG Research Institute as a Software Developer-Intern in the OnDevice-AI Department and Keyboard Intelligence Team. My major task was to explore various Neural Machine Tralation (NMT) architectures for Grammar Error Correction(GEC) task and come up with an architecture to improve upon the already deployed model and implement it end to end. Another half of my Internship work was to explore and implement the data preprocessing part of GeCTOR model. Overall it was a rich experiwnce filled with a lot of learnings and growth.</p>
                      </div>
                    </div>
                  </article>
                  <article className="timeline-entry animate-box" data-animate-effect="fadeInTop">
                    <div className="timeline-entry-inner">
                      <div className="timeline-icon color-4">
                        <i className="icon-pen2" />
                      </div>
                      <div className="timeline-label">
                        <h2>Undergraduation (B.E.) at NSIT, Delhi<span>2017-2021</span></h2>
                        <p>I am pursuing my under-graduation studies with major in COE (Computer Engineering). I have taken courses like DSA, OOPs, Operating Systems, Computer Networks, Artificial Intelligence, Computer Vision, Internet and Web Technologies over the years and have better understanding of these subjects. I have also been part of CollegeSpace society(Responsible for Supplying Past Year papers ad notes to NSIT students through its website) since my second year of college. Currently working as Tech Lead of this society.</p>
                      </div>
                    </div>
                  </article>
                  <article className="timeline-entry animate-box" data-animate-effect="fadeInLeft">
                    <div className="timeline-entry-inner">
                      <div className="timeline-icon color-5">
                        <i className="icon-pen2" />
                      </div>
                      <div className="timeline-label">
                        <h2>Primary and Higher Education <span>2014-2016</span></h2>
                        <p>I have completed my higher secondary education with major subjects as Physics,Chemistry and Maths with 92.4 percentage. During my time at school, I have developed interest in solving complex problems of the fundamental physics which helped me to improve my understanding of any problem and also my mathematical skills to actually solve the problems.</p> 
                      </div>
                    </div>
                  </article>
                  <article className="timeline-entry begin animate-box" data-animate-effect="fadeInBottom">
                    <div className="timeline-entry-inner">
                      <div className="timeline-icon color-none">
                      </div>
                    </div>
                  </article>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    )
  }
}
