import React from 'react';
import {Link} from 'react-router-dom';

const AdminProjectShow = (props) => {

    return (
      <div className="user-fav">
        <form action="">
          <h2>Title: {props.projects.title}</h2>
          <p>Overview: {props.projects.description}</p>
        <button><Link to={`/edit/${props.projects.id}`} projects={props.projects}>Edit</Link> </button>
        </form>
      </div>
    )
  }


export default AdminProjectShow
