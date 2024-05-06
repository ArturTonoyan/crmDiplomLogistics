import { models } from './index.js';
const { User, TokenSchema, Driver, Car, Customer, Order } = models;

export default function () {
    User.hasOne(TokenSchema, { foreignKey: 'userId' });
    TokenSchema.belongsTo(User, { foreignKey: 'userId' });

    User.hasOne(Driver, { foreignKey: 'userId' });
    Driver.belongsTo(User, { foreignKey: 'userId' });

    Driver.hasMany(Car);
    Car.belongsTo(Driver);

    Customer.hasOne(Order);
    Order.belongsTo(Customer);

    Car.hasOne(Order);
    Order.belongsTo(Car);

    Driver.hasOne(Order);
    Order.belongsTo(Driver);
    // Order.hasOne(Customer);
    // Customer.belongsTo(Order);

    // Order.hasOne(Car);
    // Car.belongsTo(Order);

    // Order.hasOne(Driver);
    // Driver.belongsTo(Order);
}
