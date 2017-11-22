import React, { Component } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { allCategoriesRequest } from '../../reducers/Categories/CategoriesActions'
import CategoriesList from '../../common/components/Categories/CategoriesList'

class StartPage extends Component {

  constructor(props) {
    super(props);
    this.state = {}
  }

  componentDidMount() {
    const { loadAllCategories } = this.props

    loadAllCategories()

  }

  render() {
    const {
      categories
    } = this.props
    console.log("categoriess: " + categories.length)

    return (
      <section>
        <CategoriesList categories={categories} />
      </section>
    )
  }

}

const mapStateToProps = state => ({ categories: state.CategoriesReducers.categories })

const mapDispatchToProps = (dispatch) => {
  return {
    loadAllCategories: () => dispatch(allCategoriesRequest())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(StartPage);
