import React, { Component } from 'react'

export default class Achievements extends Component {
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
                        <span className="heading-meta">Achievements</span>
                        <h2 className="colorlib-heading">Some of my achievements</h2>
                    </div>
                    <div className="all-achievement">
                        <div className="achievement jee-adv">
                            <span className="achievement-title"></span>
                            <span className="achievement-val"></span>
                        </div>
                        <div className="achievement jee-adv">
                            <span className="achievement-title">JEE ADVANCED</span>
                            <span className="achievement-val">240/366, Rank - 2282 among 2.4 lac+ candidates</span>
                        </div>
                        <div className="achievement jee-main">
                            <span className="achievement-title">JEE MAINS</span>
                            <span className="achievement-val">274/360, Rank - 1027 among 12 lac+ candidates</span>
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
