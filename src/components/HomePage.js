import React, {Component} from 'react'
import AdminView from './AdminView'
class HomePage extends Component {
  state = {
    itemCurrentlyOnSale: 'A Hammer',
    editSaleItem: true,
    productList: [
      {
        productName: 'Hammer',
        description: 'Itsa hammer',
        price: 12.3,
      },
      {
        productName: 'Nail',
        description: 'Itsa nail',
        price: 0.12,
      }
    ]};

  toggleEditSaleItem = () => {
    this.setState({
      editSaleItem: !this.state.editSaleItem
    })
  }
  changeSaleItem = (e) => {
    this.setState({
      itemCurrentlyOnSale: e.target.value
    })
  }
  addNewProductToProductList = (newProduct) => {
    const productList = [...this.state.productList];
    productList.push(newProduct);
    this.setState({productList});
  };

  render() {
    return (
      <div>
        <h1>My Hardware Store</h1>
        <div>
          <span>Currently On Sale: { this.state.itemCurrentlyOnSale }!</span>
          <span><button onClick={this.toggleEditSaleItem}>{ this.state.editSaleItem ? 'Hide' : 'Edit Sale Item'}</button></span>
          <div>
            { this.state.editSaleItem ? <div><input type="text" value={this.state.itemCurrentlyOnSale} onChange={this.changeSaleItem}/></div> : null }
          </div>
          <AdminView productList={this.state.productList} addNewProductToProductList={this.addNewProductToProductList}/>
        </div>
      </div>
    );
  }
}

export default HomePage;