import React, { Component } from 'react';
import {Field,reduxForm} from 'redux-form';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { createPost } from '../actions';

class PostsNew extends Component {
    renderField(field){
        const { meta: {touched, error} } = field;
        const className = `form-group ${touched && error ? 'has-danger': ''}`;
        return (
            <div className={className}>
                <label>{field.mylabel}</label>
                <input className="form-control"
                    type="text"
//                    onChange={field.input.onChange}
 //                   onFocus={field.input.onFocus}
                    {...field.input}
                />
                {//ternary expression
                }
                <div className="text-help">
                {touched ? error : ''}
                </div>

            </div>
        );
    }

    onSubmit(values) {
        console.log(values);
        this.props.createPost(values, () => {
            this.props.history.push('/'); //redireciona para a pagina
        });
    }

    render() {
        const { handleSubmit } = this.props;

        return (
            <form onSubmit={handleSubmit(this.onSubmit.bind(this))}>
                <Field mylabel="Title" name="title" component={this.renderField} />
                <Field mylabel="Categories" name="categories" component={this.renderField} />
                <Field mylabel="Post Content" name="content" component={this.renderField} />
                <button type="submit" className="btn btn-primary">Submit</button>
                <Link className="btn btn-danger" to="/">
                    Cancel
                </Link>
            </form>
        );
    }
}


function validate (values) {
    //console.log(values)=> { title: 'dffd', categories: 'sdsg', content: 'sgdsg' }
    const errors = {};

    //validate the inputs from values, the name property is used as attribute
    if (!values.title || values.title.length < 3) {
        errors.title = "Enter a title that is at least 3 char";
    }
    if (!values.categories) {
        errors.categories = "Enter a category!";
    }
    if (!values.content) {
        errors.content = "Enter a content!";
    }


    //if errors is empty, the form is fine to submit
    // if errors has any properties, redux assumes form is invalid
    return errors;
}

//export default connect(mapStateToProps, { fetchPosts: fetchPosts })(PostsNew); //action creator hookep up to component

//export default reduxForm({ validate,form: 'PostsNewForm' })(PostsNew);

export default reduxForm({ validate,form: 'PostsNewForm' })(
    connect(null, { createPost })(PostsNew)
);