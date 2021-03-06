import React from 'react';
import JwPagination from 'jw-react-pagination';

class Pagination extends React.Component {
    constructor() {
        super();

        // an example array of items to be paged
        var exampleItems = Array.from(Array(150).keys()).map(i => ({ id: (i+1), name: 'Item ' + (i+1) }));

        this.state = {
            exampleItems: exampleItems,
            pageOfItems: []
        };

        // bind function in constructor instead of render (https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/jsx-no-bind.md)
        this.onChangePage = this.onChangePage.bind(this);
    }

    onChangePage(pageOfItems) {
        // update state with new page of items
        this.setState({ pageOfItems: pageOfItems });
    }

    render() {
        return (
            <div>
                <div className="container">
                    <div className="text-center">
                        <h1>React Pagination Component Demo</h1>
                        {this.state.pageOfItems.map(item =>
                            <div key={item.id}>{item.name}</div>
                        )}
                        <JwPagination items={this.state.exampleItems} onChangePage={this.onChangePage} />
                    </div>
                </div>
                <hr />
                
            </div>
        );
    }
}

export default Pagination;
