import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchPost, deletePost } from '../actions';
import { Link } from 'react-router-dom';


class PostsShow extends Component {
    componentDidMount() {
        //this.props.match.params.id;
        const { id } = this.props.match.params;
        this.props.fetchPost(id);
    }

    onDeleteClick() {
        this.props.deletePost(this.props.match.params.id, ()=>{
            this.props.history.push('/');
        });
    }

    render() {
        //console.log(this.props.posts);
        const {post} = this.props;

        if (!post) {
            return <div>Loading ...</div>
        }

        return (
            <div>
                <Link  to="/">
                    Back to index
                </Link>
                <button className="btn btn-danger pull-xs-right"
                onClick={this.onDeleteClick.bind(this)}>
                    Delete Post
                </button>
                <h3>{post.title}</h3>
                <h6>Categories: {post.categories}</h6>
                <p>{post.content}</p>
            </div>
        );
    }
}

function mapStateToProps({ posts },ownProps) { //ownProps is posts_show props
    return { post: posts[ownProps.match.params.id] }; //evita usar this.props.posts[this.props.match.params.id] para pegar o post especifico
}

//instead of mapDispatchToProps to get action directly to component


export default connect(mapStateToProps, { fetchPost: fetchPost, deletePost: deletePost })(PostsShow); //action creator hookep up to component