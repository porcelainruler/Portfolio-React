import React, { Component } from 'react'

export default class Skills extends Component {
  render() {
    return (
      <div>
        <section className="colorlib-about" data-section="about">
        <div className="colorlib-narrow-content">
            <div className="row">
            <div className="col-md-12">
                <div className="row row-bottom-padded-sm animate-box" data-animate-effect="fadeInLeft">
                <div className="col-md-12">
                    <div className="about-desc">
                        <span className="heading-meta">Skills</span>
                        <h2 className="colorlib-heading">What are my skills?</h2>
                        <div className="all-skills">
                            <div className="java skill-name">
                                JAVA
                            </div>
                            <div className="javascript skill-name">
                                JAVASCRIPT
                            </div>
                            <div className="python skill-name">
                                PYTHON
                            </div>
                            <div className="reactjs skill-name">
                                REACT.JS
                            </div>
                            <div className="pytorch skill-name">
                                PYTORCH
                            </div>
                            <div className="tensorflow skill-name">
                                TENSORFLOW
                            </div>
                            <div className="nodejs skill-name">
                                NODE.JS
                            </div>
                        </div>
                    </div>
                </div>
                </div>
            </div>
            </div>
        </div>
        </section>
      </div>
    )
  }
}
