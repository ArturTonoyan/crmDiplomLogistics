import Customer from '../models/customer.js';
import Driver from '../models/driver.js';
import Car from '../models/car.js';
import { AppErrorMissing } from '../utils/errors.js';
import OrderDto from '../dtos/order-dto.js';
import Order from '../models/order.js';

export default {
    async createOrder(req, res) {
        const data = req.body;
        const {
            customerId,
            driverId,
            carId,
            loading,
            unloading,
            dateBegin,
            dateEnd,
            typeCargo,
            places,
            weight,
            volume,
        } = data;

        const customer = await Customer.findOne({ where: { id: customerId } });
        if (!customer) {
            throw new AppErrorMissing('Customer not found');
        }
        const driver = await Driver.findOne({ where: { id: driverId } });
        if (!driver) {
            throw new AppErrorMissing('Driver not found');
        }
        const car = await Car.findOne({ where: { id: carId } });
        if (!car) {
            throw new AppErrorMissing('Car not found');
        }

        const order = await Order.create({
            customerId: customer.id,
            driverId: driver.id,
            carId: car.id,
            loading,
            unloading,
            dateBegin,
            dateEnd,
            typeCargo,
            places,
            weight,
            volume,
        });

        await order.reload({ include: [Customer, Driver, Car] });

        const orderDto = new OrderDto(order);

        res.json(orderDto);
    },
};
