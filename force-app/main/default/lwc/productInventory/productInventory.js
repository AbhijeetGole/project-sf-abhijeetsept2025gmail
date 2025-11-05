import { LightningElement } from 'lwc';

export default class ProductInventory extends LightningElement {
    searchKey = '';
    sortedBy = 'name';
    sortedDirection = 'asc';

    products = [
        { id: '1', name: 'Laptop', category: 'Electronics', price: '1200', stock: 'In Stock' },
        { id: '2', name: 'Desk Chair', category: 'Furniture', price: '250', stock: 'Out of Stock' },
        { id: '3', name: 'Monitor', category: 'Electronics', price: '300', stock: 'In Stock' },
        { id: '4', name: 'Bookshelf', category: 'Furniture', price: '150', stock: 'In Stock' }
    ];

    columns = [
        { label: 'Product Name', fieldName: 'name', sortable: true },
        { label: 'Category', fieldName: 'category', sortable: true },
        { label: 'Price', fieldName: 'price', type: 'currency', sortable: true },
        { label: 'Stock Status', fieldName: 'stock', sortable: true }
    ];

    get filteredProducts() {
        return this.products.filter(prod =>
            prod.name.toLowerCase().includes(this.searchKey.toLowerCase())
        );
    }

    handleSearch(event) {
        this.searchKey = event.target.value;
    }

    handleSort(event) {
        this.sortedBy = event.detail.fieldName;
        this.sortedDirection = event.detail.sortDirection;
        this.products = [...this.products].sort((a, b) => {
            const valA = a[this.sortedBy];
            const valB = b[this.sortedBy];
            return this.sortedDirection === 'asc' ? valA.localeCompare(valB) : valB.localeCompare(valA);
        });
    }
}