import React, { Component } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { allCategoriesRequest } from '../../reducers/Categories/CategoriesActions'

class StartPage extends Component {

  componentWillMount() {
    this.props.allCategoriesRequest()
    console.log("categories: " + this.props.categories)

  }

  render() {



    return (
      <section>

      </section>
    )
  }

}

const mapStateToProps = state => ({ categories: state.categories })
const mapDispatchToProps = dispatch => bindActionCreators({ allCategoriesRequest }, dispatch)
export default connect(mapStateToProps, mapDispatchToProps)(StartPage);
