class ProductsPage {
  constructor(page) {
    this.page = page;
    this.productsLink = page.getByRole('link', { name: 'products' });
    this.searchInput = page.locator('#search_product');
    this.searchButton = page.locator('#submit_search');
    this.viewProduct = page.getByRole('link', { name: 'View Product' });
    this.addToCartButton = page.getByRole('button', { name: 'Add to cart' });
  }

  async openProductsPage() {
    await this.productsLink.click();
  }

  async searchProduct(productName) {
    await this.searchInput.click();
    await this.searchInput.fill(productName);
    await this.searchButton.click();
  }

  async addProductToCart() {
    await this.viewProduct.click();
    await this.addToCartButton.click();
  }
}
module.exports = ProductsPage;
