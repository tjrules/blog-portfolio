import React, {Component} from 'react';
import axios from 'axios';
import AdminPostShow from './AdminPostShow';
import AdminProjectShow from './AdminProjectShow';
import {Link} from 'react-router-dom';
import Nav from './Nav';

class UserAdmin extends Component {
  constructor() {
    super();
    this.state = {
      apiDataLoaded: false,
      apiData: null
    }
    this.renderPostShow = this.renderPostShow.bind(this);
  }


  componentDidMount() {
    axios.get('/posts', '/projects').then(res => {
      this.setState({apiDataLoaded: true, apiData: res.data.posts})
    }).catch(err => {
      console.log('there is an error at componentdidmount', err)
      res.status(500).json(err);
    })
  }

  renderPostShow() {
    if (this.state.apiDataLoaded) {
      return this.state.apiData.map(posts => {
        return (
          <div>
            <AdminPostShow key={posts.title} posts={posts}/>
            <AdminProjectShow key={projects.title} projects={projects}/>
          </div>
        );
      });
    } else return <p>Your list is empty</p>
  }
j
  render() {
    return (

      <div>
      <Nav />

      <div className="">
        <div className="">
        <button> <Link to='/add'>Add</Link></button>
        </div>
        <div id="">My Post List</div>
        <div id="">{this.renderPostShow()}</div>
      </div>

    </div>)
  }

}

export default UserAdmin;
