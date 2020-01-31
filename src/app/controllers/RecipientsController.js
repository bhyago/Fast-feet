import * as Yup from 'yup';
import Recipients from '../models/Recipients';

class RecipientsController {
  async store(req, res) {
    const schema = Yup.object().shape({
      name: Yup.string().required(),
      rua: Yup.string().required(),
      numero: Yup.string().required(),
      complemento: Yup.string().required(),
      estado: Yup.string()
        .min(2)
        .max(2)
        .required(),
      cidade: Yup.string().required(),
      cep: Yup.string().required(),
    });
    // TODO: Melhorar a validação dos dados
    if (!(await schema.isValid(req.body))) {
      return res.status(400).json({ error: 'Validation fails' });
    }
    const {
      id,
      name,
      rua,
      numero,
      complemento,
      estado,
      cidade,
      cep,
    } = await Recipients.create(req.body);

    return res.json({
      id,
      name,
      rua,
      numero,
      complemento,
      estado,
      cidade,
      cep,
    });
  }

  async update(req, res) {
    const identificador = await Recipients.findByPk(req.params.id);

    if (!identificador) {
      return res.status(401).json({ error: 'invalid identifier' });
    }

    const {
      id,
      name,
      rua,
      numero,
      complemento,
      estado,
      cidade,
      cep,
    } = await identificador.update(req.body);

    return res.json({
      id,
      name,
      rua,
      numero,
      complemento,
      estado,
      cidade,
      cep,
    });
  }
}
export default new RecipientsController();
