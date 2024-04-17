import React, { Component } from 'react'
import { Link } from 'react-router-dom'
export default class Navbar extends Component {
    constructor() {
        super()
        this.state = {
            search: ""
        }
    }
    postSearch(e) {
        e.preventDefault()
        this.props.changeSearch(this.state.search)
        this.state.search = ""
    }
    render() {
        return (
            <nav className="navbar navbar-expand-lg bg-primary sticky-top">
                <div className="container-fluid">
                    <Link className="navbar-brand text-light" onClick={()=>this.props.changeSearch("")} to="#">NewsApp</Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <Link className="nav-link text-light active" aria-current="page" onClick={()=>this.props.changeSearch("")} to="/ALL">ALL</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link text-light" onClick={()=>this.props.changeSearch("")} to="/politics">politics</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link text-light" onClick={()=>this.props.changeSearch("")} to="/Science">Science</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link text-light" onClick={()=>this.props.changeSearch("")} to="/Technology">Technology</Link>
                            </li>
                            <li className="nav-item dropdown">
                                <a className="nav-link text-light dropdown-toggle" onClick={()=>this.props.changeSearch("")} to="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                    Other
                                </a>
                                <ul className="dropdown-menu">
                                    <li><Link className="dropdown-item" onClick={()=>this.props.changeSearch("")} to="/Education">Education</Link></li>
                                    <li><Link className="dropdown-item" onClick={()=>this.props.changeSearch("")} to="/Entertainment">Entertainment</Link></li>
                                    <li><Link className="dropdown-item" onClick={()=>this.props.changeSearch("")} to="/Crime">Crime</Link></li>
                                    <li><Link className="dropdown-item" onClick={()=>this.props.changeSearch("")} to="/Sports">Sports </Link></li>
                                    <li><Link className="dropdown-item" onClick={()=>this.props.changeSearch("")} to="/Cricket">Cricket </Link></li>
                                    <li><Link className="dropdown-item" onClick={()=>this.props.changeSearch("")} to="/Covid-19">Covid-19 </Link></li>
                                    <li><Link className="dropdown-item" onClick={()=>this.props.changeSearch("")} to="/world">world </Link></li>
                                    <li><Link className="dropdown-item" onClick={()=>this.props.changeSearch("")} to="/Jokes">Jokes </Link></li>
                                </ul>
                            </li>
                            <li className="nav-item dropdown">
                                <a className="nav-link text-light dropdown-toggle" to="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                    Language
                                </a>
                                <ul className="dropdown-menu">
                                    <li><Link className="dropdown-item" onClick={() => this.props.changeLanguage('hi')}>Hindi</Link></li>
                                    <li><Link className="dropdown-item" onClick={() => this.props.changeLanguage('en')}>English </Link></li>
                                </ul>
                            </li>
                        </ul>
                        <form className="d-flex" role="search" onSubmit={(e) => this.postSearch(e)}>
                            <input className="form-control me-2" type="search" value={this.state.search} name='search' onChange={(e) => this.setState({ search: e.target.value })} placeholder="Search" aria-label="Search" />
                            <button className="btn btn-outline-light" type="submit">Search</button>
                        </form>
                    </div>
                </div>
            </nav>
        )
    }
}
