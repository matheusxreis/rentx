import { Router } from "express";

import { SpecificationsRepository } from "../modules/cars/repositories/specificationsrepository";
import { CreateSpecificationService } from "../services/CreateSpecificationService";

const specificationsRoutes = Router();

const specificationRepository = new SpecificationsRepository();

specificationsRoutes.post("/", (request, response) => {
  const { name, description } = request.body;
  const createSpecificationService = new CreateSpecificationService(
    specificationRepository
  );

  createSpecificationService.execute({ name, description });

  return response.status(201).send();
});

specificationsRoutes.get("/", (request, response) => {
  const all = specificationRepository.list();

  return response.status(200).json(all);
});

export { specificationsRoutes };
