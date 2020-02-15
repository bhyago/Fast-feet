import * as Yup from 'yup';

import Deliveryman from '../models/Deliveryman';
import Avatar from '../models/Avatar';

class DeliverymanController {
  /**
   *
   * @param {*} req
   * @param {*} res
   */

  async store(req, res) {
    const schema = Yup.object().shape({
      name: Yup.string().required(),
      email: Yup.string()
        .email()
        .required(),
      avatar_id: Yup.number()
        .positive()
        .nullable(),
    });

    if (!(await schema.isValid(req.body))) {
      return res.status(400).json({ error: 'Validation fails' });
    }

    const deliverymanExists = await Deliveryman.findOne({
      where: { email: req.body.email },
    });

    if (deliverymanExists) {
      return res.status(400).json({ error: 'Deliveryman already registered' });
    }

    const { id, name, email, avatar_id } = await Deliveryman.create(req.body);
    return res.json({ id, name, avatar_id, email });
  }

  /**
   *
   * @param {*} req
   * @param {*} res
   */

  async index(req, res) {
    const LIST_DELIVERYMAM = await Deliveryman.findAll({
      attributes: ['id', 'name', 'email'],
      include: [
        {
          model: Avatar,
          as: 'avatar',
          attributes: ['name', 'path'],
        },
      ],
    });
    return res.json(LIST_DELIVERYMAM);
  }

  /**
   *
   * @param {*} req
   * @param {*} res
   */

  async update(req, res) {
    const schema = Yup.object().shape({
      name: Yup.string(),
      email: Yup.string().email(),
      avatar_id: Yup.string()
        .positive()
        .nullable(),
    });

    if (!(await schema.isValid(req.body))) {
      return res.status(400).json({ error: 'Invalid data' });
    }

    const { name, email, avatar_id } = req.body;
    const deliveryman = await Deliveryman.findByPk(req.params.id);

    if (!deliveryman) {
      return res.status(401).json({ error: 'Deliveryman not found' });
    }

    if (email && email !== deliveryman.email) {
      const deliverymanExists = await Deliveryman.findOne({ where: { email } });

      if (deliverymanExists) {
        return res.status(401).json({ error: 'User already exists' });
      }
    }

    await deliveryman.update({ name, avatar_id, email });
    return res.json({ name, avatar_id, email });
  }

  /**
   *
   * @param {*} req
   * @param {*} res
   */

  async delete(req, res) {
    const deliverymanDelete = await Deliveryman.findByPk(req.params.id);

    if (!deliverymanDelete) {
      return res.status(401).json({ error: 'Deliveryman not found' });
    }

    await deliverymanDelete.destroy();
    await deliverymanDelete.save();

    return res.json({ message: 'Delivery deleted' });
  }
}

export default new DeliverymanController();
