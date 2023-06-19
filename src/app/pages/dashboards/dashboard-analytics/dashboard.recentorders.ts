export class RecentOrders {
    id: number;
    date_orders: string;
    status_orders: string;
    channel_orders: string;
    sku: string;
    name_orders: number;
    price_orders: string;
  
    constructor(recentorders) {
      this.id = recentorders.id;
      this.date_orders = recentorders.date_orders;
      this.status_orders = recentorders.status_orders;
      this.channel_orders = recentorders.channel_orders;
      this.sku = recentorders.sku;
      this.name_orders = recentorders.name_orders;
      this.price_orders = recentorders.price_orders;
    }
  
    get name() {
      let name = '';
  
      if (this.name_orders) {
        name = this.name_orders + ' ';
      }
  
      return name;
    }
  
    set name(value) {
    }
  
    get address() {
      return `${this.date_orders}, ${this.status_orders} ${this.name_orders}`;
    }
  
    set address(value) {
    }
  }
  