import { Router } from "express";
import { UserManager } from "../dao/index.js";

const router = Router();

const userManager = new UserManager();

router.get("/", async (req, res) => {
  let users = await userManager.getAll();

  if (!users)
    return res.status(500).send({
      status: "error",
      error: "Couldn't fetch users",
    });

  res.send({ status: "success", payload: users });
});

router.post("/", async (req, res) => {
  const { first_name, last_name, email, birth_date, gender } = req.body;

  if (!first_name || !last_name || !email || !birth_date) {
    return res
      .status(400)
      .send({ status: "error", error: "Incomplete values" });
  }

  //Muy importante! La inserción actual de la fecha de nacimiento está pensada para hacerse en el formato MM - DD - YYYY
  const result = await userManager.create({
    first_name,
    last_name,
    email,
    birth_date,
    gender,
  });

  if (!result) {
    return res.status(500).send({ status: "error", payload: result });
  }

  res.status(201).send({ status: "success", payload: result });
});

export default router;
