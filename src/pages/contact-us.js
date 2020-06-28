import React from "react"
import "./mystyle.scss"
import Layout from "../components/layout"
import {Link, graphql } from "gatsby"
import Img from "gatsby-image/withIEPolyfill"


function contactForm(){
    return(
    <Layout>
    <div className="field">
    <div className="field">
  <label className="label">Name</label>
  <div className="control">
    <input className="input" type="text" placeholder="Text input"/>
  </div>
</div>
<div className="field">
  <label className="label">Email</label>
  <div className="control has-icons-left has-icons-right">
    <input className="input is-success" type="email" placeholder="Email input" />
    <span className="icon is-small is-left">
      <i className="fas fa-envelope"></i>
    </span>
  </div>
</div>
<div className="field">
  <label className="label">Message</label>
  <div className="control">
    <textarea className="textarea" placeholder="Textarea"></textarea>
  </div>
</div>
<div className="field is-grouped">
  <div className="control">
    <button className="button is-link">Submit</button>
  </div>
  <div className="control">
    <button classNAme="button is-link is-light">Cancel</button>
  </div>
  </div>

    </div>
    </Layout>
    )
}

export default contactForm