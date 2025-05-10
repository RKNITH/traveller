import express from "express"
import { verifyToken } from "../utils/verifyUser.js"
import {
  addTravelStory,
  deleteImage,
  deleteTravelStory,
  editTravelStory,
  filterTravelStories,
  getAllTravelStory,
  imageUpload,
  searchTravelStory,
  updateIsFavourite,
} from "../controllers/travelStory.controller.js"
import upload from "../multer.js"

const router = express.Router()

router.post("/image-upload", upload.single("image"), imageUpload)

router.delete("/delete-image", deleteImage)

router.post("/add", verifyToken, addTravelStory)

router.get("/get-all", verifyToken, getAllTravelStory)

router.post("/edit-story/:id", verifyToken, editTravelStory)

router.delete("/delete-story/:id", verifyToken, deleteTravelStory)

router.put("/update-is-favourite/:id", verifyToken, updateIsFavourite)

router.get("/search", verifyToken, searchTravelStory)

router.get("/filter", verifyToken, filterTravelStories)

export default router
