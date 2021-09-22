import React, { Component } from 'react'
import Newsitem from './newsitem'
import Spinner from './spinner';
import propTypes from 'prop-types'

export class News extends Component {
    static defaultProps = {
        country: "in",
        pageSize: 15,
        category: "general" 
    }

    static propTypes = {
        country: propTypes.string,
        pageSize: propTypes.number,
        category: propTypes.string,
    }
    capitalizeFirstLetter(string) {
        return string.charAt(0).toUpperCase() + string.slice(1);
      }

    constructor(props) {
        super(props);
        this.state = {
            articles: [],
            loading: false,
            page: 1,
            //totalResults:2
        }
        document.title =`${this.capitalizeFirstLetter(this.props.category)}- Newsapp`;
    }

    async updateNews(){
        const url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=${this.apiKey}&page=1&pageSize=${this.props.pageSize}`
        this.setState({ loading: true })
        let data = await fetch(url)
        let parseData = await data.json()
        console.log(parseData);
        this.setState({ articles: parseData.articles, totalResults: parseData.totalResults, loading: false })
    }
    async componentDidMount() {
        this.updateNews();
    }

    handleNextClick = async () => {
        this.setState({
            page: this.state.page +1
        })
        this.updateNews();
        

    }
    handlePrevClick = async () => {
        this.setState({
            page: this.state.page -1
        })
        this.updateNews();
    }

    render() {
        return (
            <div className="container my-3">
                <h2 className="text-center my-4">Newsapp {this.capitalizeFirstLetter(this.props.category)} top headlines</h2>
                {this.state.loading && <Spinner />}
                <div className="row" style={{margine: '40px 0px'}}>
                    {!this.state.loading && this.state.articles.map((element) => {
                        return <div className="col-md-4" key={element.url}>
                            <Newsitem title={element.title ? element.title.slice(0, 45) : ""} description={element.description ? element.description.slice(0, 88) : ""} imageurl={element.urlToImage} newsurl={element.url} author={element.author} date={element.publishedAt} source={element.source.name} />
                        </div>
                    })}
                </div>
                <div className="container d-flex justify-content-between">
                    <button disabled={this.state.page<=1} type="button" className="btn btn-dark" onClick={this.handlePrevClick}> &larr; Previous</button>
                    <button disabled={this.state.page + 1 > Math.ceil(this.state.totalResults / this.props.pageSize)} type="button" className="btn btn-dark" onClick={this.handleNextClick}>Next &rarr;</button>
                </div>
            </div>
        )
    }
}

export default News
