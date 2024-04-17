import React, { Component } from 'react'

export default class NewsItem extends Component {
    render() {
        return (
            <div className="col-xl-2 col-lg-3 col-md-4 col-sm-6 col-12 mb-3">
                <div className="card">
                    <img src={this.props.pic?this.props.pic:"/images/no image.jpg"} height={150} className="card-img-top" alt="..." />
                    <div className="card-body">
                        <h5 className="card-title">{this.props.title}</h5>
                        <div className='card-source'>
                            <p>{this.props.source}</p>
                            <p>{(new Date(this.props.date)).toDateString()}</p>
                        </div>
                        <hr />
                        <p className="card-text">{this.props.description}</p>
                        <a href={this.props.url} target='_blank' rel="noreferrer" className="btn btn-primary btn-sm w-100">Read Full Article</a>
                    </div>
                </div>
            </div>
        )
    }
}
