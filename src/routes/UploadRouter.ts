// import { Router } from "express";
// import multer from "multer";

// import { getMessage } from "../util/AIUtil";
// import OpenaiController from "../controller/openai/ThreadsController";

// const UploadRouter = Router();
// const upload = multer({ dest: "uploads/" });

// const router = Router();

// // 공개된 라우트
// // router.get('/', OpenaiController);
// // router.get('/:id', UserController.getUserById);

// // 인증이 필요한 라우트
// // router.post(
// //   '/',
// //   authMiddleware, // 인증 미들웨어
// //   validateRequest(createUserSchema), // 요청 검증 미들웨어
// //   UserController.createUser
// // );
// // router.put(
// //   '/:id',
// //   authMiddleware,
// //   validateRequest(updateUserSchema),
// //   UserController.updateUser
// // );
// // router.delete('/:id', authMiddleware, UserController.deleteUser);

// UploadRouter.post(
//   "/",
//   upload.single("uploadFile"),
//   OpenaiController.uploadFile
// );

// export default router;

// // /* GET users listing. */
// // UploadRouter.get("/:id", function (req, res, next) {
// //   res.send("respond with a resource");
// // });

// // export default UploadRouter;
