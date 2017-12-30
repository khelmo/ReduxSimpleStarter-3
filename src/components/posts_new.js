import React, { Component } from 'react';
import {Field,reduxForm} from 'redux-form';


class PostsNew extends Component {
    renderField(field){
        return (
            <div className="form-group">
                <label>{field.mylabel}</label>
                <input className="form-control"
                    type="text"
//                    onChange={field.input.onChange}
 //                   onFocus={field.input.onFocus}
                    {...field.input}
                />
            </div>
        );
    }

    render() {
        return (
            <form>
                <Field mylabel="Title" name="title" component={this.renderField} />
                <Field mylabel="Categories" name="categories" component={this.renderField} />
                <Field mylabel="Post Content" name="content" component={this.renderField} />
            </form>
        );
    }
}


function validate (values) {
    //console.log(values)=> { title: 'dffd', categories: 'sdsg', content: 'sgdsg' }
    const errors = {};

    //validate the inputs from values
    if (!values.title || values.title.length < 3) {
        errors.title = "Enter a title that is at least 3 char";
    }
    if (!values.categories) {
        errors.categories = "Enter a categorie!";
    }
    if (!values.content) {
        errors.content = "Enter a content!";
    }


    //if errors is empty, the form is fine to submit
    // if errors has any properties, redux assumes form is invalid
    return errors;
}

//export default connect(mapStateToProps, { fetchPosts: fetchPosts })(PostsNew); //action creator hookep up to component

export default reduxForm({ validate,form: 'PostsNewForm' })(PostsNew);