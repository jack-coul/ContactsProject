const { Router } = require("express");
const { userController } = require("../controllers/user.controller");
const { contactController } = require("../controllers/contact.controller");

const router = Router();

router.post("/user/signup", userController.registerUser);
router.post("/api/v1/login", userController.loginUser);
router.post("/api/v1/contact", contactController.addContact);

router.get("/api/v1/contacts", contactController.getContacts);

router.patch("/api/v1/contact/:id", contactController.editContact);

router.delete("/api/v1/contact/:id", contactController.deleteContact);

module.exports = router;
